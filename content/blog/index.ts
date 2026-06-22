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
  alternatives?: string[];
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
const moveYSplash = getProject("moveysplash");
const cloudSandbox = getProject("cloud-code-execution");
const edgeBalancer = getProject("mini-load-balancer");
const transitTelemetry = getProject("realtime-transit-telemetry");
const aiGatewayPlatform = getProject("ai-job-match-analysis");

export const blogPosts: BlogPost[] = [
  {
    slug: "portfolio-production-architecture-upgrades",
    title: "Portfolio App Upgrade Log: Queues, ECS, Pooling, and Evidence-Grounded AI",
    summary:
      "How I upgraded the portfolio apps from isolated demos into reviewable production-style systems with clearer runtime boundaries, system design docs, and live evidence paths.",
    publishedAt: "2026-06-08",
    readTimeMinutes: 12,
    targetCompanies: ["Veeva", "Amazon", "Stripe", "Canonical"],
    tags: ["System Design", "AWS", "Reliability", "Observability", "Platform Engineering"],
    hook: {
      problem:
        "A portfolio can fail even when the projects are strong if reviewers have to reverse-engineer what changed, which deployment is live, and which claims are staged versus production evidence.",
      stakes:
        "The upgrade goal was to make every major app easier to verify: live endpoint, source code, system design, architecture tradeoffs, and an honest distinction between deployed behavior, staged load validation, and next-build targets.",
    },
    architecture: {
      summary:
        "The portfolio now treats each app as part of one backend and infrastructure story: NetPulse is the flagship monitoring system, while Cloud Sandbox, the transit telemetry dashboard, Edge Balancer, and AI Gateway Platform each prove a different operational capability.",
      diagram: `graph LR
  Reviewer[Reviewer / Recruiter]-->Portfolio[Portfolio Homepage]
  Portfolio-->NetPulse[NetPulse Flagship]
  Portfolio-->CCEE[Cloud Sandbox API]
  Portfolio-->Transit[Transit Telemetry Dashboard]
  Portfolio-->LoadBalancer[Edge Balancer]
  Portfolio-->AI[AI Gateway Platform]
  Portfolio-->Product[moveYSplash Product Prototype]
  NetPulse-->NetPulseOps[PgBouncer / mTLS / Incident Lifecycle]
  CCEE-->ExecutionOps[ALB API / Queue / DLQ / Worker Isolation]
  Transit-->TransitOps[Event-Time Ordering / Backpressure / WebSocket Push]
  LoadBalancer-->LBOps[Regular ECS / Consul / pprof / Prometheus]
  AI-->AIOps[ECS Express Mode / Evidence Retrieval / Structured Output]
  Product-->ProductOps[Supabase Auth / Indexed Search / Responsive UX]`,
      components: [
        "NetPulse stays above the fold as the primary proof system instead of forcing every project to compete equally.",
        "Each app now exposes a verification path: live demo or API, GitHub repository when available, and a system design page.",
        "Architecture summaries call out runtime boundaries such as ALB ingress, queue/DLQ lanes, ECS deployment mode, connection pooling, and evidence retrieval.",
        "Metrics are framed as live behavior, staged validation, or planned evidence so the site avoids implying real-user scale where the proof is still load-test based.",
        "Removed undeployed projects from the public portfolio to avoid dead-link credibility loss.",
      ],
    },
    stressTest: {
      setup:
        "I reviewed the site as a recruiter and technical reviewer would: 5-second hero scan, flagship project scan, live-link verification, system design page check, and blog/runbook evidence check.",
      breakingPoint:
        "The old portfolio risk was not a code failure; it was an evidence failure. Strong apps were present, but the reviewer still had to connect deployment changes, architecture decisions, and upgrade history manually.",
      evidence: [
        "NetPulse now leads the homepage with queue-based monitoring, PgBouncer pooling, mTLS checker traffic, and incident lifecycle controls.",
        "Cloud Sandbox is positioned as a live custom-domain execution platform with asynchronous queue/DLQ recovery and worker isolation.",
        "Edge Balancer is separated from App Runner-era language and now explains why regular ECS fits a networking-heavy Go service.",
        "AI Gateway Platform is framed as an evidence-grounded AI product on ECS Express Mode instead of a generic recruiter gimmick.",
        "Undeployed or lower-signal projects were removed so reviewers do not encounter stale or irrelevant links.",
      ],
    },
    bottleneckResolution: {
      rootCause:
        "The projects had stronger architecture than the narrative showed. Without a single upgrade log and clearer cross-links, the portfolio made reviewers inspect too many cards before understanding the production story.",
      solution:
        "I tightened the project copy around workload-fit decisions, added this upgrade log as a central explanation, linked affected project cards back to it, and surfaced the post in the homepage runbooks section.",
      tradeoffs: [
        "A stronger narrative improves scan speed, but it must stay defensible; metrics now avoid presenting staged validation as live customer traffic.",
        "Removing weaker or undeployed projects reduces project count, but increases trust because every remaining card has a cleaner proof path.",
        "Centralizing the upgrade story helps reviewers, but individual system design pages still need enough detail for technical interview follow-up.",
      ],
    },
    alternatives: [
      "Keep simple frontend-heavy apps on Vercel, Amplify, S3, or CloudFront when the workload does not require container orchestration.",
      "Use App Runner for fast first deployment of straightforward HTTP services where managed simplicity is more valuable than lower-level control.",
      "Use ECS Express Mode for services like the AI Gateway Platform that need more service control than App Runner while avoiding the full regular ECS operational surface.",
      "Use regular ECS for networking-heavy services like Edge Balancer where ingress, rollout, health checks, and runtime diagnostics matter.",
      "Use Lambda + API Gateway for bursty stateless APIs, but avoid it for long-running proxy behavior or workloads that need stable warm runtime state.",
    ],
    businessImpact: [
      "Reduced reviewer cognitive load by turning several separate app upgrades into one coherent production architecture story.",
      "Improved credibility by removing undeployed projects and keeping proof links close to project claims.",
      "Made the portfolio easier to discuss in interviews because each app now maps to a clear engineering decision: pooling, queueing, deployment mode, observability, or evidence grounding.",
      "Kept the positioning broad enough for backend, infrastructure, platform, and new-grad software engineering roles without over-indexing on a single company or recruiter workflow.",
    ],
    links: [
      ...(netPulse.liveUrl ? [{ label: "NetPulse Live", url: netPulse.liveUrl }] : []),
      ...(netPulse.repoUrl ? [{ label: "NetPulse Repo", url: netPulse.repoUrl }] : []),
      ...(netPulse.systemDesignUrl
        ? [{ label: "NetPulse System Design", url: netPulse.systemDesignUrl }]
        : []),
      ...(cloudSandbox.liveUrl
        ? [{ label: "Cloud Sandbox API", url: cloudSandbox.liveUrl }]
        : []),
      ...(cloudSandbox.systemDesignUrl
        ? [{ label: "Cloud Sandbox Design", url: cloudSandbox.systemDesignUrl }]
        : []),
      ...(transitTelemetry.liveUrl
        ? [{ label: "Transit Telemetry Live", url: transitTelemetry.liveUrl }]
        : []),
      ...(transitTelemetry.systemDesignUrl
        ? [{ label: "Transit Telemetry Design", url: transitTelemetry.systemDesignUrl }]
        : []),
      ...(edgeBalancer.liveUrl
        ? [{ label: "Edge Balancer Live", url: edgeBalancer.liveUrl }]
        : []),
      ...(edgeBalancer.systemDesignUrl
        ? [{ label: "Edge Balancer Design", url: edgeBalancer.systemDesignUrl }]
        : []),
      ...(aiGatewayPlatform.liveUrl ? [{ label: "AI Gateway Platform Live", url: aiGatewayPlatform.liveUrl }] : []),
      ...(aiGatewayPlatform.systemDesignUrl
        ? [{ label: "AI Gateway Platform Design", url: aiGatewayPlatform.systemDesignUrl }]
        : []),
      ...(moveYSplash.liveUrl ? [{ label: "moveYSplash Live", url: moveYSplash.liveUrl }] : []),
      ...(moveYSplash.systemDesignUrl
        ? [{ label: "moveYSplash Design", url: moveYSplash.systemDesignUrl }]
        : []),
    ],
  },
  {
    slug: "app-runner-to-ecs-migration-notes",
    title: "Migrating from AWS App Runner to ECS: Why I Split AI Gateway Platform and Edge Balancer by Workload Fit",
    summary:
      "Why App Runner was useful for first delivery, where it stopped fitting these workloads, how I moved AI Gateway Platform to ECS Express Mode and Edge Balancer to regular ECS, and which AWS alternatives remained viable.",
    publishedAt: "2026-04-01",
    readTimeMinutes: 11,
    targetCompanies: ["Amazon", "Canonical", "Veeva", "Stripe"],
    tags: ["AWS", "ECS", "App Runner", "Migration", "Go", "LLM Systems", "Platform Engineering"],
    hook: {
      problem:
        "AWS App Runner got both services live quickly, but Edge Balancer and AI Gateway Platform eventually needed different kinds of control over deployment behavior, ingress, warm-state handling, and runtime inspection than the managed platform exposed.",
      stakes:
        "Once the deployment platform fights the workload shape, delivery speed turns into operational drag: debugging slows down, routing behavior is harder to reason about, and one generic hosting model stops fitting very different services.",
    },
    architecture: {
      summary:
        "Both services moved off App Runner, but not to the same target. AI Gateway Platform moved to ECS Express Mode for a lighter managed path, while Edge Balancer moved to regular ECS for deeper service and networking control.",
      diagram: `graph LR
  Users[Users / Reviewers]-->DNS[Custom Domains]
  DNS-->Mini[miniloadbalancer.io]
  DNS-->AI[sharedaigateway.com]
  Mini-->MiniIngress[ALB + Regular ECS]
  AI-->AIIngress[ECS Express Mode Service]
  MiniIngress-->GoLB[Edge Balancer]
  GoLB-->Consul[Consul + Backend Pool]
  GoLB-->Metrics[Prometheus / Grafana]
  AIIngress-->AIGateway[AI Gateway Service]
  AIGateway-->Retriever[Evidence Retrieval]
  AIGateway-->LLM[Prompt Orchestration / LLM]`,
      components: [
        "Custom domains for public cutover and stable reviewer-facing access",
        "AI Gateway Platform on ECS Express Mode for lighter managed service behavior",
        "Edge Balancer on regular ECS for deeper networking and rollout control",
        "Ingress and service behavior made more explicit than App Runner defaults",
        "Independent deployment models chosen based on workload shape rather than one platform for everything",
      ],
    },
    stressTest: {
      setup:
        "I compared the original App Runner deployments against requirements that needed different levels of ingress, rollout, routing, and warm-path control.",
      breakingPoint:
        "App Runner accelerated first launch, but it became an awkward fit once the proxy-heavy workload needed regular ECS-level service control and the AI workload needed a middle ground between App Runner simplicity and fully hand-tuned orchestration.",
      evidence: [
        "Edge Balancer now serves traffic through miniloadbalancer.io on a regular ECS service path with retained control-plane and metrics visibility.",
        "AI Gateway Platform now serves traffic through sharedaigateway.com on an ECS Express Mode service path with a lighter managed footprint than regular ECS.",
        "Splitting the target platform by workload removed the one-size-fits-all friction of keeping both services on App Runner.",
        "The migration increased deployment/orchestration ownership, but made service behavior more explicit and workload-appropriate.",
      ],
    },
    bottleneckResolution: {
      rootCause:
        "App Runner was a strong speed-to-first-deploy choice, but these workloads no longer matched one managed runtime profile: Edge Balancer wanted regular ECS-level control, while AI Gateway Platform wanted more flexibility than App Runner without taking on the full operational surface of the Edge Balancer stack.",
      solution:
        "I moved both services to ECS, but chose different deployment modes by workload. AI Gateway Platform moved to ECS Express Mode for a lighter managed path, while Edge Balancer moved to regular ECS so routing, ingress, and rollout behavior could be tuned more directly.",
      tradeoffs: [
        "Regular ECS adds task definitions, service orchestration, and deeper deployment surface area compared with App Runner.",
        "ECS Express Mode keeps more convenience than regular ECS, but does not replace the need for regular ECS when a service needs heavier networking control.",
        "This is a workload-fit decision, not a blanket rule that every service should leave App Runner.",
      ],
    },
    alternatives: [
      "Stay on App Runner for straightforward HTTP services where fast deploys matter more than deep process or networking control.",
      "Move to ECS Express Mode for services that need more flexibility than App Runner without the full operational surface of regular ECS.",
      "Use regular ECS when the workload needs more explicit service, ingress, and rollout behavior, especially for networking-heavy services.",
      "Use Elastic Beanstalk for classic web app deployment when a higher-level managed path is still acceptable.",
      "Use Lambda + API Gateway for bursty request-response workloads that do not need long-lived proxy behavior or warm-path tuning.",
    ],
    businessImpact: [
      "Matched the deployment model to the workload shape instead of forcing both services through the same managed runtime.",
      "Improved operational control for the networking-heavy Edge Balancer while keeping a lighter managed posture for AI Gateway Platform.",
      "Created clearer future scaling options because App Runner, ECS Express Mode, and regular ECS are now treated as deliberate workload-fit choices rather than interchangeable defaults.",
    ],
    links: [
      ...(edgeBalancer.liveUrl
        ? [{ label: "Edge Balancer Live", url: edgeBalancer.liveUrl }]
        : []),
      ...(edgeBalancer.repoUrl
        ? [{ label: "Edge Balancer Repo", url: edgeBalancer.repoUrl }]
        : []),
      ...(edgeBalancer.systemDesignUrl
        ? [{ label: "Edge Balancer System Design", url: edgeBalancer.systemDesignUrl }]
        : []),
      ...(aiGatewayPlatform.liveUrl ? [{ label: "AI Gateway Platform Live", url: aiGatewayPlatform.liveUrl }] : []),
      ...(aiGatewayPlatform.repoUrl ? [{ label: "AI Gateway Platform Repo", url: aiGatewayPlatform.repoUrl }] : []),
      ...(aiGatewayPlatform.systemDesignUrl
        ? [{ label: "AI Gateway Platform System Design", url: aiGatewayPlatform.systemDesignUrl }]
        : []),
    ],
  },
  {
    slug: "queue-first-cloud-code-execution",
    title: "Queue-First Cloud Sandbox: Preventing Worker Starvation Under Burst Load",
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
  Client[UI / API Client]-->Control[Control API (ALB)]
  Control-->ExecAPI[Execution API Boundary]
  ExecAPI-->Queue[Execution Queue]
  Queue-->DLQ[Dead Letter Queue]
  Queue-->Worker[Fargate Spot Workers]
  DLQ-->Recovery[EventBridge Replay]
  Recovery-->Queue
  Worker-->Store[(Result Store)]
  Store-->ExecAPI`,
      components: [
        "ALB-backed control and execution API boundaries",
        "Queue + DLQ buffering for async execution and recovery replay",
        "Fargate Spot workers with bounded runtime resources",
        "EventBridge-triggered DLQ recovery automation",
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
        "Fargate Spot worker pools reduced asynchronous compute cost by 70% in burst validation runs.",
        "DLQ replay automation achieved 100% payload recovery during staged partition drills.",
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
      "Created an architecture that can be validated directly through live endpoints and system design docs.",
    ],
    links: [
      ...(cloudSandbox.liveUrl
        ? [{ label: "Live Execution API", url: cloudSandbox.liveUrl }]
        : []),
      ...(cloudSandbox.repoUrl
        ? [{ label: "Source Repository", url: cloudSandbox.repoUrl }]
        : []),
      ...(cloudSandbox.systemDesignUrl
        ? [{ label: "System Design", url: cloudSandbox.systemDesignUrl }]
        : []),
      ...(cloudSandbox.additionalLinks ?? []).map((link) => ({
        label: link.label,
        url: link.url,
      })),
    ],
  },
  {
    slug: "go-load-balancer-failure-handling",
    title: "Edge Balancer Failure Handling: Circuit Breakers, Hysteresis, and Bounded Retries",
    summary:
      "A breakdown of how I hardened a Go-based Edge Balancer against backend flapping with health-aware routing and controlled retry behavior.",
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
  Client[Incoming Traffic]-->LB[Edge Balancer]
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
      ...(edgeBalancer.liveUrl
        ? [{ label: "Live Deployment", url: edgeBalancer.liveUrl }]
        : []),
      ...(edgeBalancer.repoUrl
        ? [{ label: "Source Repository", url: edgeBalancer.repoUrl }]
        : []),
      ...(edgeBalancer.systemDesignUrl
        ? [{ label: "System Design", url: edgeBalancer.systemDesignUrl }]
        : []),
      ...(edgeBalancer.additionalLinks ?? []).map((link) => ({
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
        "PgBouncer connection pooling prevented Postgres exhaustion during 10,000+ concurrent regional write load tests.",
        "mTLS enforcement secured regional checker communication with zero-trust service identity.",
        "P95 check-to-dashboard update latency held under 45ms in staged validation runs.",
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
