import { projectsData } from "@/content/projects";

type PostLink = {
  label: string;
  url: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTimeMinutes: number;
  targetCompanies: string[];
  tags: string[];
  hook: {
    problem: string;
    stakes: string;
  };
  architecture: {
    summary: string;
    diagram: string;
    components: string[];
  };
  stressTest: {
    setup: string;
    breakingPoint: string;
    evidence: string[];
    screenshotUrl?: string;
    screenshotAlt?: string;
    screenshotCaption?: string;
  };
  bottleneckResolution: {
    rootCause: string;
    solution: string;
    tradeoffs: string[];
  };
  businessImpact: string[];
  links: PostLink[];
};

const getProject = (id: string) => {
  const project = projectsData.find((item) => item.id === id);
  if (!project) {
    throw new Error(`Project not found for blog mapping: ${id}`);
  }
  return project;
};

const netPulse = getProject("netpulse");
const cloudCodeExecution = getProject("cloud-code-execution");
const miniLoadBalancer = getProject("mini-load-balancer");
const transitTelemetry = getProject("realtime-transit-telemetry");

export const blogPosts: BlogPost[] = [
  {
    slug: "queue-first-cloud-code-execution",
    title: "Queue-First Cloud Code Execution: Preventing Worker Starvation Under Burst Load",
    summary:
      "How I shifted from request-coupled execution to queue-worker isolation to keep execution throughput stable under burst traffic.",
    publishedAt: "2026-03-07",
    readTimeMinutes: 9,
    targetCompanies: ["Amazon", "Stripe", "DoorDash"],
    tags: ["AWS", "Queues", "Platform Engineering", "Reliability", "TypeScript"],
    hook: {
      problem:
        "Running untrusted code directly inside synchronous API requests caused latency spikes and resource contention when traffic burst.",
      stakes:
        "If execution jobs block API threads, the platform fails both reliability and safety expectations expected in production backend systems.",
    },
    architecture: {
      summary:
        "Split control-plane web traffic from execution-plane worker traffic, with queue buffering between API ingestion and sandbox runtimes.",
      diagram: `graph LR
  Client[UI / API Client]-->Web[App Runner Web Service]
  Web-->ExecAPI[Execution API (ALB)]
  ExecAPI-->Queue[Execution Queue]
  Queue-->Worker[Sandboxed Workers]
  Worker-->Store[(Result Store)]
  Store-->ExecAPI`,
      components: [
        "App Runner web service for user-facing workflows",
        "ALB-backed execution API boundary",
        "Queue buffering for async execution",
        "Sandboxed workers with bounded runtime resources",
        "Deterministic result formatting and retrieval",
      ],
    },
    stressTest: {
      setup:
        "I replayed burst execution submissions while increasing concurrent requests and mixed payload sizes.",
      breakingPoint:
        "The request-coupled version showed queueing at the API layer and rising tail latency when multiple jobs fought for runtime resources.",
      evidence: [
        "Execution pipeline stabilized after queue-worker decoupling and bounded retry controls.",
        "Simulated burst workloads sustained ~500 jobs/min without dropped execution jobs.",
        "Worker-level isolation prevented one heavy job class from starving unrelated requests.",
      ],
    },
    bottleneckResolution: {
      rootCause:
        "Synchronous execution tied API responsiveness to runtime availability, exhausting constrained processing windows during bursts.",
      solution:
        "I moved execution requests into an asynchronous queue, enforced worker runtime ceilings, and returned deterministic job-state responses from the API boundary.",
      tradeoffs: [
        "Asynchronous execution improves reliability but introduces queue latency overhead.",
        "Strict runtime limits improve safety but can reject edge-case workloads.",
      ],
    },
    businessImpact: [
      "Improved platform reliability under burst load by isolating user-facing and execution-facing concerns.",
      "Reduced operational risk from untrusted workloads through bounded runtime controls.",
      "Created an architecture recruiters and interviewers can validate through live endpoints + system design docs.",
    ],
    links: [
      ...(cloudCodeExecution.liveUrl
        ? [{ label: "Live App", url: cloudCodeExecution.liveUrl }]
        : []),
      ...(cloudCodeExecution.repoUrl
        ? [{ label: "Source Repository", url: cloudCodeExecution.repoUrl }]
        : []),
      ...(cloudCodeExecution.systemDesignUrl
        ? [{ label: "System Design", url: cloudCodeExecution.systemDesignUrl }]
        : []),
      ...(cloudCodeExecution.additionalLinks ?? []).map((link) => ({
        label: link.label,
        url: link.url,
      })),
    ],
  },
  {
    slug: "go-load-balancer-failure-handling",
    title: "Go Load Balancer Failure Handling: Circuit Breakers, Hysteresis, and Bounded Retries",
    summary:
      "A breakdown of how I hardened a Go load balancer against backend flapping with health-aware routing and controlled retry behavior.",
    publishedAt: "2026-03-06",
    readTimeMinutes: 8,
    targetCompanies: ["Canonical", "DoorDash", "Amazon"],
    tags: ["Go", "Distributed Systems", "Concurrency", "Load Balancing", "Observability"],
    hook: {
      problem:
        "Basic round-robin routing looked correct under healthy nodes, but degraded quickly when backend health oscillated.",
      stakes:
        "Without stable failure-handling, transient outages amplify retry storms and destroy tail latency in production traffic paths.",
    },
    architecture: {
      summary:
        "A dual-plane design routes user traffic through proxy logic while exposing an admin control plane for strategy and health inspection.",
      diagram: `graph LR
  Client[Incoming Traffic]-->LB[Go Load Balancer]
  LB-->Proxy[Proxy Plane]
  LB-->Admin[Control Plane /admin/*]
  Proxy-->B1[Backend A]
  Proxy-->B2[Backend B]
  Proxy-->B3[Backend C]
  LB-.Health Checks.->B1
  LB-.Health Checks.->B2
  LB-.Health Checks.->B3`,
      components: [
        "Runtime-selectable routing (round robin, least connections, consistent hashing)",
        "Active health checks with hysteresis thresholds",
        "Circuit breaker with bounded retries",
        "Metrics endpoints for routing + backend health state visibility",
      ],
    },
    stressTest: {
      setup:
        "I injected backend instability while replaying concurrent requests across all routing strategies.",
      breakingPoint:
        "Without hysteresis and bounded retry controls, backends repeatedly flipped state and created noisy failover loops.",
      evidence: [
        "Circuit-breaker + hysteresis rules reduced backend flapping during instability windows.",
        "Bounded retries prevented recursive retry amplification under partial outage.",
        "Routing strategy visibility through metrics endpoints made failure behavior debuggable during load tests.",
      ],
    },
    bottleneckResolution: {
      rootCause:
        "Health checks were too eager and retries were too permissive, causing transient backend failures to propagate as system-wide instability.",
      solution:
        "I added health-check hysteresis, explicit circuit-breaker state transitions, and retry bounds so failover remains controlled and observable.",
      tradeoffs: [
        "Conservative circuit-breaker thresholds reduce flapping but can delay re-entry for recovered nodes.",
        "Retry limits protect latency tails but can reduce best-effort success rate for borderline requests.",
      ],
    },
    businessImpact: [
      "Improved service continuity under backend degradation scenarios.",
      "Reduced incident triage time through explicit control-plane and metrics evidence.",
      "Demonstrated production-style systems thinking relevant to infra and platform teams.",
    ],
    links: [
      ...(miniLoadBalancer.liveUrl
        ? [{ label: "Live App Runner Deployment", url: miniLoadBalancer.liveUrl }]
        : []),
      ...(miniLoadBalancer.repoUrl
        ? [{ label: "Source Repository", url: miniLoadBalancer.repoUrl }]
        : []),
      ...(miniLoadBalancer.systemDesignUrl
        ? [{ label: "System Design", url: miniLoadBalancer.systemDesignUrl }]
        : []),
      ...(miniLoadBalancer.additionalLinks ?? []).map((link) => ({
        label: link.label,
        url: link.url,
      })),
    ],
  },
  {
    slug: "netpulse-incident-noise-reduction",
    title: "NetPulse Incident Noise Reduction: Multi-Region Checks Without Alert Flooding",
    summary:
      "How I designed incident lifecycle rules and alert deduplication in NetPulse to keep uptime signals trustworthy.",
    publishedAt: "2026-03-05",
    readTimeMinutes: 7,
    targetCompanies: ["Veeva", "Intuit", "GM", "Amazon"],
    tags: ["Monitoring", "Incident Management", "SaaS", "Reliability", "Observability"],
    hook: {
      problem:
        "Frequent endpoint probes improve freshness but can produce noisy false-positive incidents if every blip becomes an alert.",
      stakes:
        "Noisy monitoring systems erode trust fast; teams stop responding to alerts that are not reliably actionable.",
    },
    architecture: {
      summary:
        "Regional probe workers feed a monitoring engine with incident lifecycle logic, backed by persistent check history and alert dedupe controls.",
      diagram: `graph TD
  Workers[Regional Probe Workers]-->Queue[Check Queue]
  Queue-->Engine[Monitoring Engine]
  Engine-->Store[(Postgres)]
  Engine-->Cache[(Redis)]
  Engine-->Incidents[Incident Lifecycle]
  Incidents-->Alerts[Alert Pipeline]
  Store-->Dashboard[Status Dashboard]`,
      components: [
        "Regional check workers and central monitoring engine",
        "Persistent check and incident history for auditability",
        "Alert dedupe windows and retry/debounce logic",
        "Dashboard state tied to incident lifecycle transitions",
      ],
    },
    stressTest: {
      setup:
        "I replayed unstable endpoint behavior with intermittent failures and recoveries across regions.",
      breakingPoint:
        "Naive incident triggering generated duplicate notifications and noisy state churn for short-lived failures.",
      evidence: [
        "Alert dedupe + debounce flow reduced duplicate notifications by ~70% in failure simulations.",
        "P95 check-to-dashboard update latency stayed under 2.5 seconds in validation runs.",
        "Incident lifecycle became auditable from detection through resolution.",
      ],
    },
    bottleneckResolution: {
      rootCause:
        "Incident creation rules reacted to single-sample failures and did not model outage windows as coherent events.",
      solution:
        "I required consecutive-failure thresholds before opening incidents and added dedupe windows so repeated symptoms map to one incident context.",
      tradeoffs: [
        "Higher failure thresholds reduce false positives but may delay detection by one probe interval.",
        "Longer retention improves diagnosis but increases storage management cost.",
      ],
    },
    businessImpact: [
      "Increased trust in uptime alerts by reducing alert fatigue.",
      "Improved incident response quality through clearer lifecycle transitions and historical context.",
      "Strengthened SaaS reliability credibility with live deployment + source + system documentation.",
    ],
    links: [
      ...(netPulse.liveUrl ? [{ label: "Live NetPulse", url: netPulse.liveUrl }] : []),
      ...(netPulse.repoUrl ? [{ label: "Source Repository", url: netPulse.repoUrl }] : []),
      ...(netPulse.systemDesignUrl
        ? [{ label: "System Design", url: netPulse.systemDesignUrl }]
        : []),
      ...(transitTelemetry.liveUrl
        ? [{ label: "Related Telemetry Dashboard", url: transitTelemetry.liveUrl }]
        : []),
    ],
  },
];

export const blogPostsSorted = [...blogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
