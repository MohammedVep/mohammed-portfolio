import { profileData } from "@/content/profile";

export type PortfolioProject = {
  id: string;
  title: string;
  projectType:
    | "Distributed Systems & Cloud APIs"
    | "Scaling & Messaging Systems"
    | "Algorithms & Visualization"
    | "Full-Stack Product Engineering";
  description: string;
  whyItMatters: string;
  architectureSummary: string;
  metrics: string;
  impactMetrics: string[];
  tags: string[];
  hardProblem: string;
  architecture: string;
  tradeoffs: string[];
  invariants: string[];
  highlights: string[];
  /**
   * Human-editing scaffold.
   *
   * Keep this section concrete, first-hand, and easy to defend in interviews.
   * Good: "I first tried X, it failed because Y, then I changed Z."
   * Avoid: generic buzzwords, unverifiable numbers, or anything you cannot explain from the code.
   */
  implementationNotes?: {
    ownerSummary: string;
    hardLesson: string;
    nextEnhancement: string;
  };
  behavioralSignals?: string[];
  productionCapabilities?: string[];
  recentUpdates?: string[];
  phaseImprovements?: {
    phase: string;
    title: string;
    status: string;
    summary: string;
    bullets: string[];
    proofHref?: string;
    proofLabel?: string;
  }[];
  liveUrl?: string;
  repoUrl?: string;
  systemDesignUrl?: string;
  additionalLinks?: {
    label: string;
    url: string;
  }[];
};

export const projectsData: PortfolioProject[] = [
  {
    id: "netpulse",
    title: "NetPulse: Distributed Uptime Monitoring SaaS",
    projectType: "Distributed Systems & Cloud APIs",
    description:
      "Zero-trust distributed uptime monitoring platform with hardened database pooling and secure inter-region checker communication.",
    whyItMatters:
      "Demonstrates secure and high-concurrency monitoring architecture with reliability controls that stay stable under aggressive regional write spikes.",
    architectureSummary:
      "mTLS regional checkers -> queue -> monitoring engine -> PgBouncer + Postgres/Redis -> status dashboard + incident lifecycle.",
    metrics: "PgBouncer + mTLS | 10k+ Regional Write Spike Validation",
    impactMetrics: [
      "Implemented PgBouncer for advanced PostgreSQL connection pooling, preventing database connection exhaustion during 10,000+ concurrent regional worker write load tests.",
      "Enforced Zero-Trust architecture by establishing Mutual TLS (mTLS) encryption between distributed regional checkers and the centralized monitoring engine.",
      "P95 check-to-dashboard update latency maintained strictly under 45ms during aggressive JMeter staging validation runs.",
      "Expanded the product story beyond staged load validation with Phase 2 onboarding/demo-access work and a Phase 3 real-user evidence plan.",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "PgBouncer", "mTLS", "Docker"],
    hardProblem:
      "Deliver trustworthy uptime checks and incident alerts without flooding users with false positives or delayed notifications.",
    architecture: `graph TD
  Checkers[Regional Check Workers]-->Queue[Job Queue]
  Queue-->Engine[Monitoring Engine]
  Engine-->Store[(PostgreSQL)]
  Engine-->Cache[(Redis)]
  Store-->Dashboard[Status Dashboard]
  Engine-->Alerts[Incident Alerts]`,
    tradeoffs: [
      "Shorter check intervals improve freshness but can increase noise, so I added retry windows and alert debouncing before incident creation.",
      "Persisting complete history improves debugging, but can grow quickly; I retained detailed recent logs and summarized older events.",
    ],
    invariants: [
      "Each check result is timestamped, attributable, and persisted.",
      "Incident state changes are auditable from detection to resolution.",
      "Alert pipelines avoid duplicate notifications for the same incident window.",
    ],
    highlights: [
      "Shipped a production deployment and public source code for external technical review.",
      "Implemented status dashboards that let users track service health over time instead of isolated check events.",
      "Designed alert flow with retry/debounce behavior to reduce noisy false alarms.",
    ],
    implementationNotes: {
      ownerSummary:
        "I use NetPulse as my main proof-of-work because it connects monitoring, queueing, pooling, authentication, and incident UX into one system instead of a single isolated demo.",
      hardLesson:
        "The main lesson was that alerting is a trust problem: retry windows, debounce rules, and incident lifecycle state matter as much as detecting downtime.",
      nextEnhancement:
        "Next I would add anonymized real-user uptime checks and a public status-page demo so the evidence shifts from staged validation to production usage.",
    },
    behavioralSignals: [
      "Built failure-handling logic with retries and alert debouncing.",
      "Documented reliability/cost tradeoffs for retention and probing intervals.",
      "Shipped live system plus docs so reviewers can validate claims quickly.",
    ],
    productionCapabilities: [
      "Tenant-aware authentication and onboarding via Cognito registration + login.",
      "Public demo-safe read-only API mode for external review without privileged credentials.",
      "Multi-region probe workflow with incident lifecycle and alert deduplication controls.",
    ],
    recentUpdates: [
      "Cut over reviewer access to netpulsemanage.dev so the live NetPulse path uses a dedicated production-style domain.",
      "Added dedicated registration with Cognito email verification and full login flow for production-style onboarding.",
      "Introduced public read-only demo API mode so external reviewers can evaluate functionality without tenant credentials.",
      "Expanded integration test + deployment workflows for stronger end-to-end operational confidence.",
      "Linked NetPulse into the cross-project production architecture upgrade log so pooling, mTLS, queueing, and incident lifecycle decisions are easier to verify.",
    ],
    phaseImprovements: [
      {
        phase: "Phase 2",
        title: "Production Onboarding + Reviewer-Safe Demo Access",
        status: "Implemented",
        summary:
          "Strengthened NetPulse from an architecture demo into a reviewable SaaS workflow with Cognito registration, email verification, login, and demo-safe access paths.",
        bullets: [
          "Added tenant-aware registration and login flow so the system can be evaluated like a real monitoring product.",
          "Introduced read-only demo API behavior for external reviewers without exposing privileged user actions.",
          "Expanded deployment and integration validation around the onboarding and monitoring paths.",
        ],
        proofHref: "/system-design/netpulse",
        proofLabel: "Open NetPulse System Design",
      },
      {
        phase: "Phase 3",
        title: "Real-User Evidence + Public Status Page Upgrade",
        status: "Next Build Target",
        summary:
          "Moves NetPulse from staged validation language toward verifiable live-product evidence through public status pages, timestamped uptime summaries, and safer demo-mode boundaries.",
        bullets: [
          "Expose public status pages that hide private owner data while showing uptime, incidents, and last-check time.",
          "Keep demo mode isolated so reviewers can inspect behavior without mutating privileged tenant data.",
          "Differentiate real usage evidence from staged JMeter/load-test validation in portfolio copy.",
        ],
        proofHref: "/blog/netpulse-incident-noise-reduction",
        proofLabel: "Read Incident Writeup",
      },
    ],
    liveUrl: profileData.netPulseLiveUrl,
    repoUrl: profileData.netPulseRepoUrl,
    systemDesignUrl: "/system-design/netpulse",
    additionalLinks: [
      {
        label: "Read Production Upgrade Log",
        url: "/blog/portfolio-production-architecture-upgrades",
      },
      {
        label: "Read ADR: Connection Pooling Tradeoffs",
        url: "/blog/netpulse-incident-noise-reduction",
      },
    ],
  },
  {
    id: "moveysplash",
    title: "moveYSplash: Social Platform Prototype",
    projectType: "Full-Stack Product Engineering",
    description:
      "Designed and built a social media platform prototype with search and content workflows using modern web tooling.",
    whyItMatters:
      "Demonstrates end-to-end product delivery, responsive UX, and measurable query optimization in a live academic project.",
    architectureSummary:
      "Next.js UI + app APIs -> Supabase Auth/Postgres -> feed composer + indexed search pipeline.",
    metrics: "Search Performance Improved by 90%",
    impactMetrics: [
      "Search latency improved by ~90% after SQL query and indexing optimization.",
      "Maintained responsive interaction across mobile and desktop breakpoints.",
      "Published a live deployment for external technical walk-throughs.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    hardProblem:
      "Create a responsive social feed and search experience while keeping query latency low as content volume grows.",
    architecture: `graph LR
  UI[Next.js UI]-->API[App APIs]
  API-->DB[(Supabase Postgres)]
  API-->Search[Search Pipeline]
  DB-->Feed[Feed Composer]`,
    tradeoffs: [
      "Richer feed queries improved relevance but increased SQL complexity, so I introduced indexing and query simplification for faster reads.",
      "Client-side interactivity boosts UX, but can increase bundle size; I split heavier views and reused shared components.",
    ],
    invariants: [
      "Authenticated users can only modify their own content.",
      "Search responses remain consistent with stored content state.",
      "Core feed actions remain usable on mobile and desktop breakpoints.",
    ],
    highlights: [
      "Improved search performance by 90% through query and indexing optimization.",
      "Built a responsive UI across desktop and mobile experiences.",
      "Used Supabase with SQL-backed storage for reliable content persistence.",
    ],
    implementationNotes: {
      ownerSummary:
        "This project is my end-to-end product proof: I had to make the UI usable while also improving the backend search path enough that the app felt responsive.",
      hardLesson:
        "The search work taught me that product latency often comes from query shape and indexing decisions, not only frontend rendering.",
      nextEnhancement:
        "Next I would add a small measurement page showing before/after query plans, indexed columns, and mobile interaction screenshots.",
    },
    behavioralSignals: [
      "Translated academic scope into a production-style deployed artifact.",
      "Balanced UX richness with performance constraints using component splitting.",
      "Wrote design documentation to communicate architecture and tuning choices.",
    ],
    productionCapabilities: [
      "Responsive multi-device UX with authenticated user workflows.",
      "SQL-backed persistence with query optimization and indexing strategy.",
      "Live deployment availability for external technical validation.",
    ],
    recentUpdates: [
      "Published a live deployment link to make academic project outcomes directly reviewable.",
      "Added the Fall 2025 COSC 4086 project report PDF for reviewers who want the full academic writeup.",
      "Added a dedicated system design doc page to explain architecture and performance decisions.",
      "Linked the project into the production upgrade log as the product-facing example: Supabase auth, indexed search, and responsive UX.",
    ],
    liveUrl: "https://move-y-splash-new.vercel.app",
    repoUrl: "https://github.com/MohammedVep/MoveYSplashNew",
    additionalLinks: [
      {
        label: "Read Project Report PDF",
        url: "/Mohammed_Vepari_moveYSplash_Project_Report_Fall_2025.pdf",
      },
      {
        label: "Read Production Upgrade Log",
        url: "/blog/portfolio-production-architecture-upgrades",
      },
    ],
    systemDesignUrl: "/system-design/moveysplash",
  },
  {
    id: "cloud-code-execution",
    title: "Cloud Sandbox",
    projectType: "Scaling & Messaging Systems",
    description:
      "Fault-tolerant cloud sandbox platform for isolated code execution, queue resilience, and high-throughput payload processing.",
    whyItMatters:
      "Shows SRE-first backend platform engineering where sandbox isolation, autoscaling, queue durability, and cost-efficiency are first-class requirements.",
    architectureSummary:
      "cloudsandbox.space -> execution ingress -> queue and DLQ lanes -> Fargate Spot worker pool -> result store -> recovery scheduler via EventBridge.",
    metrics: "Fargate Spot FinOps + DLQ Recovery | 15k+ Req/Min Burst Tests",
    impactMetrics: [
      "Architected a highly elastic worker pool utilizing AWS Fargate Spot instances via Terraform, reducing distributed compute costs by 70% for asynchronous payload processing.",
      "Engineered a self-healing queue ecosystem using Redis Dead Letter Queues (DLQ) and AWS EventBridge cron triggers, achieving 100% payload recovery during staged network partition drills.",
      "Tuned Node.js V8 garbage collection and libuv thread-pool sizing to prevent memory leaks during sustained 15,000+ req/min payload spikes.",
    ],
    tags: ["Node.js", "AWS Fargate", "EventBridge", "Terraform (IaC)", "FinOps"],
    hardProblem:
      "Execute untrusted user code safely while controlling runtime limits, output size, and request-level isolation.",
    architecture: `graph LR
  Client[Web Client]-->Control[Execution Control API]
  Control-->API[Execution API Endpoint]
  API-->Queue[Execution Queue]
  Queue-->Worker[Sandboxed Workers]
  Worker-->Result[Execution Result Store]
  Result-->API
  API-->Control`,
    tradeoffs: [
      "Strict sandbox limits improve safety but can reject edge-case workloads that need higher resource ceilings.",
      "Queue-based execution improves throughput stability, but adds extra latency compared to direct synchronous execution.",
      "Splitting web and API deployments improves scalability isolation, but increases operational surface area.",
    ],
    invariants: [
      "Every execution request runs with bounded CPU and memory limits.",
      "Execution output is returned in a deterministic response format.",
      "Failed runs do not block subsequent queue processing.",
    ],
    highlights: [
      "Upgraded deployment to separate web app and API endpoints for clearer platform architecture.",
      "Shipped a public cloud API endpoint for real execution requests.",
      "Designed for isolation-first execution behavior under backend constraints.",
      "Implemented execution flow with queue-worker reliability patterns.",
    ],
    implementationNotes: {
      ownerSummary:
        "This project is where I practiced separating request intake from execution work so one slow or unsafe job does not control the whole service path.",
      hardLesson:
        "The important lesson was that execution platforms are mostly about isolation and backpressure; the language runner matters less than the safety boundary around it.",
      nextEnhancement:
        "Next I would add a visible job timeline with queued, running, completed, failed, and DLQ states so reviewers can watch the lifecycle instead of only seeing the API response.",
    },
    behavioralSignals: [
      "Designed around safe defaults for sandboxing and bounded retries.",
      "Prioritized service isolation to protect user-facing workflows from backend spikes.",
      "Added operational observability and auditability for execution lifecycle events.",
    ],
    productionCapabilities: [
      "Asynchronous queue-worker execution model with bounded retries and durable result flow.",
      "Tenant-aware API boundary with safer sandbox and runtime guardrails.",
      "Terraform-managed infrastructure topology with explicit control-plane and execution-plane separation.",
    ],
    recentUpdates: [
      "Cut over Cloud Sandbox reviewer access to cloudsandbox.space so the live execution path uses a dedicated production-style domain.",
      "Introduced Terraform-governed dual-endpoint model for control plane and execution API traffic separation.",
      "Expanded Cloud Sandbox scope into a mini Replit/Judge0-style platform with async queue-worker execution and tenant quota controls.",
      "Added stronger sandbox controls: bounded runtime resources, idempotent job handling, and audit visibility.",
      "Clarified the live execution proof path and documented queue/DLQ recovery in the production upgrade log.",
    ],
    liveUrl: "https://cloudsandbox.space",
    repoUrl: "https://github.com/MohammedVep/cloud-code-execution-engine",
    systemDesignUrl: "/system-design/cloud-code-execution",
    additionalLinks: [
      {
        label: "Read Production Upgrade Log",
        url: "/blog/portfolio-production-architecture-upgrades",
      },
    ],
  },
  {
    id: "realtime-transit-telemetry",
    title: "Real-Time Transit Telemetry Dashboard",
    projectType: "Scaling & Messaging Systems",
    description:
      "Developed a live transit telemetry dashboard for visualizing operational signals and route-level movement patterns.",
    whyItMatters:
      "Demonstrates real-time data engineering, stream correctness, and observability-first operations reporting.",
    architectureSummary:
      "Transit data feeds -> telemetry processor -> event store -> live dashboard + websocket broadcaster + alert hooks.",
    metrics: "Live Dashboard | Real-Time Signal View",
    impactMetrics: [
      "WebSocket telemetry updates delivered route refreshes in ~1 second windows under normal load.",
      "Idempotency + late-event correction eliminated duplicate state writes in replay testing.",
      "Adaptive backpressure controls stabilized ingestion during synthetic burst scenarios.",
    ],
    tags: ["Dashboard", "Telemetry", "JavaScript", "AWS S3", "Data Visualization"],
    hardProblem:
      "Present real-time transit telemetry in a way that is both operationally useful and easy to interpret under fast-changing conditions.",
    architecture: `graph TD
  Feeds[Transit Data Feeds]-->Processor[Telemetry Processor]
  Processor-->Store[(Telemetry Store)]
  Store-->Dashboard[Web Dashboard]
  Dashboard-->User[Operations Viewer]`,
    tradeoffs: [
      "High-frequency refresh improves recency but increases client render load on lower-end devices.",
      "Aggregated telemetry views improve readability, but can hide short-lived outlier events.",
    ],
    invariants: [
      "Dashboard updates reflect the most recent available telemetry window.",
      "Displayed route/vehicle states remain tied to timestamped source events.",
      "Core dashboard views remain accessible without backend control-plane access.",
    ],
    highlights: [
      "Deployed a public telemetry dashboard for live viewing.",
      "Structured operational data for fast visual interpretation.",
      "Focused on usability for real-time monitoring scenarios.",
    ],
    implementationNotes: {
      ownerSummary:
        "This project helped me practice turning changing backend state into a dashboard that a reviewer can understand quickly without reading the source first.",
      hardLesson:
        "The hard part was deciding what to show and what to hide, because real-time systems can become noisy if every event is treated as equally important.",
      nextEnhancement:
        "Next I would add replay controls and a short incident timeline so the dashboard can demonstrate late-event correction and backpressure behavior more clearly.",
    },
    behavioralSignals: [
      "Implemented reliability controls before adding feature complexity.",
      "Documented stream-processing tradeoffs around freshness and consistency.",
      "Built public observability signals for operational credibility.",
    ],
    productionCapabilities: [
      "Event-time ordering + idempotency dedupe for resilient streaming semantics.",
      "Adaptive backpressure and queue buffering for burst handling stability.",
      "WebSocket-based low-latency telemetry push with operational observability hooks.",
    ],
    recentUpdates: [
      "Cut over the public dashboard to realtimedashboard.dev so reviewers use a dedicated production-style domain instead of the old S3 website URL.",
      "Added event-time ordering, idempotency dedupe, and late-arrival correction for robust stream semantics.",
      "Introduced adaptive backpressure controls and streaming analytics signal generation for high-throughput conditions.",
      "Expanded operations readiness with CloudWatch alarms/dashboard integration and real-time WebSocket push.",
      "Added cross-project architecture framing so the dashboard reads as telemetry infrastructure rather than only a visualization project.",
    ],
    liveUrl: "https://realtimedashboard.dev",
    repoUrl: "https://github.com/MohammedVep/RealTimeTransitTelementry",
    additionalLinks: [
      {
        label: "Read Production Upgrade Log",
        url: "/blog/portfolio-production-architecture-upgrades",
      },
    ],
    systemDesignUrl: "/system-design/realtime-transit-telemetry",
  },
  {
    id: "mini-load-balancer",
    title: "Edge Balancer (Go)",
    projectType: "Distributed Systems & Cloud APIs",
    description:
      "Regular ECS-hosted Go-based Edge Balancer migrated off AWS App Runner to gain direct control over proxy behavior, service rollout, and networking diagnostics.",
    whyItMatters:
      "Shows when an edge-routing service outgrows App Runner and needs regular ECS service-level control for proxying, health management, and deployment behavior.",
    architectureSummary:
      "miniloadbalancer.io -> ALB/TLS ingress -> regular ECS service running Go proxy + control plane -> Consul discovery -> backend pool -> Prometheus/Grafana telemetry.",
    metrics: "App Runner -> Regular ECS | Go pprof + Consul | Prometheus/Grafana",
    impactMetrics: [
      "Migrated the service from AWS App Runner to regular ECS so service rollout policy, health-probe cadence, task behavior, and ingress wiring could be controlled directly.",
      "Conducted deep runtime profiling using Go pprof to identify and eliminate memory allocation bottlenecks, optimizing goroutine scheduling for high-throughput TCP proxying.",
      "Integrated dynamic service discovery via Consul, enabling zero-downtime backend node registration, sub-second health-aware failover, and ECS-backed routing introspection.",
    ],
    tags: ["AWS ECS", "Go", "Consul", "Prometheus", "Grafana", "pprof"],
    hardProblem:
      "Route traffic predictably under backend failure while minimizing flapping, maintaining idempotent retry behavior, and preserving operational insight.",
    architecture: `graph LR
  Client[User Traffic]-->LB[Edge Balancer]
  LB-->CP[Control Plane /admin/*]
  LB-->Proxy[Proxy Plane /proxy/*]
  Proxy-->B1[Backend A]
  Proxy-->B2[Backend B]
  Proxy-->B3[Backend C]
  LB-.Health Checks.->B1
  LB-.Health Checks.->B2
  LB-.Health Checks.->B3`,
    tradeoffs: [
      "Consistent hashing improves stickiness and cache locality, but can create uneven load if key distribution is skewed.",
      "Aggressive health probing catches failures quickly, but risks false flaps without hysteresis thresholds.",
      "Retry with failover improves success rates, but must stay bounded to avoid amplifying tail latency.",
      "Regular ECS restores deeper service and networking control, but adds task definitions, deployment orchestration, and Edge Balancer service-wiring overhead.",
    ],
    invariants: [
      "Only healthy backends receive routed traffic unless explicitly in drain-aware transition.",
      "Idempotent request retries remain bounded and never recurse indefinitely.",
      "Routing strategy switches are observable through control-plane and metrics endpoints.",
    ],
    highlights: [
      "Implemented three routing strategies with runtime switch support.",
      "Added circuit breaker, active health checks, graceful draining, and failover mechanics.",
      "Cut over the public deployment to miniloadbalancer.io on a regular ECS-backed runtime with public operations evidence.",
    ],
    implementationNotes: {
      ownerSummary:
        "This is my networking fundamentals project: I wanted a small enough Go service to explain line by line, but realistic enough to discuss health checks, retries, draining, and observability.",
      hardLesson:
        "The main lesson was that an edge balancer is dangerous if failure handling is too aggressive; bounded retries and hysteresis matter because naive retries can amplify an outage.",
      nextEnhancement:
        "Next I would publish a short traffic replay demo that compares round robin, least connections, and consistent hashing under the same backend failure scenario.",
    },
    behavioralSignals: [
      "Designed bounded retry logic to avoid runaway failure loops.",
      "Added graceful draining and hysteresis to reduce operational flapping.",
      "Prioritized introspection endpoints for easier incident investigation.",
      "Accepted more orchestration ownership when the workload demanded lower-level control than App Runner exposed.",
    ],
    productionCapabilities: [
      "Multiple runtime-selectable balancing strategies with control-plane visibility.",
      "Health-aware failover with hysteresis and graceful draining for safer lifecycle transitions.",
      "Regular ECS runtime with explicit service deployment policy, ingress control, and operator-visible telemetry endpoints.",
    ],
    recentUpdates: [
      "Migrated the public deployment from AWS App Runner to regular ECS and cut over the live endpoint to miniloadbalancer.io.",
      "Added reliability mechanisms including circuit breaker, bounded retries, and health-check hysteresis.",
      "Added Consul service-discovery integration and operator-facing dashboard/control surface.",
      "Documented the migration as a workload-fit decision: regular ECS for networking-heavy proxy control, not a blanket rejection of App Runner.",
    ],
    liveUrl: "https://miniloadbalancer.io",
    repoUrl: "https://github.com/MohammedVep/mini-load-balancer",
    additionalLinks: [
      {
        label: "Read Incident Report: OOM Debugging",
        url: "/blog/go-load-balancer-failure-handling",
      },
      {
        label: "Read Migration Deep Dive",
        url: "/blog/app-runner-to-ecs-migration-notes",
      },
      {
        label: "Read Production Upgrade Log",
        url: "/blog/portfolio-production-architecture-upgrades",
      },
    ],
    systemDesignUrl: "/system-design/mini-load-balancer",
  },
  {
    id: "ai-job-match-analysis",
    title: "AI Gateway Platform",
    projectType: "Full-Stack Product Engineering",
    description:
      "ECS Express Mode-hosted AI Gateway Platform that turns job requirements into structured fit briefs using project metadata, prompt orchestration, and a public web interface.",
    whyItMatters:
      "Shows applied AI product engineering plus infrastructure judgment: App Runner was fast for first launch, but ECS Express Mode became a better fit once deployment behavior, ingress policy, and service tuning mattered more.",
    architectureSummary:
      "sharedaigateway.com -> ingress -> ECS Express Mode service -> requirement parser -> project evidence retrieval -> prompt orchestration -> structured fit brief UI.",
    metrics: "App Runner -> ECS Express Mode | Structured LLM Workflow",
    impactMetrics: [
      "Migrated the AI service from AWS App Runner to ECS Express Mode to keep a lighter managed experience while gaining more explicit control over deployment behavior and service tuning.",
      "Converted unstructured job descriptions into normalized requirement signals and evidence-backed summaries for repeatable analysis.",
      "Grounded generated output in project metadata so responses reference concrete systems, system design docs, and shipped artifacts instead of generic claims.",
    ],
    tags: ["AWS ECS Express Mode", "Next.js", "TypeScript", "LLM Integration", "Prompt Orchestration", "Structured Outputs"],
    hardProblem:
      "Generate useful role-alignment summaries while keeping outputs grounded in real project evidence and preventing generic or inflated AI responses.",
    architecture: `graph LR
  Client[Web Client]-->Parser[Requirement Parser]
  Parser-->Retriever[Project Evidence Retrieval]
  Retriever-->Prompt[Prompt Orchestration Layer]
  Prompt-->LLM[LLM Analysis Service]
  LLM-->Formatter[Structured Response Formatter]
  Formatter-->Client`,
    tradeoffs: [
      "More aggressive prompt shaping improves consistency but can reduce flexibility for unusual job descriptions.",
      "Evidence grounding improves trust, but requires curated project metadata to avoid thin or repetitive output.",
      "Structured outputs improve readability, but can hide nuance if the scoring schema is too rigid.",
      "ECS Express Mode keeps more convenience than regular ECS, but still requires clearer service boundaries and deployment discipline than App Runner.",
    ],
    invariants: [
      "Generated summaries remain tied to explicit project evidence instead of free-form unsupported claims.",
      "Output structure is stable enough for quick skim and comparison across roles.",
      "Live UI remains usable without forcing the reviewer through a multi-step workflow.",
    ],
    highlights: [
      "Cut over the public deployment to sharedaigateway.com on an ECS Express Mode service path.",
      "Grounded outputs in concrete portfolio evidence to reduce hallucinated summaries.",
      "Exposed both the deployed app and source repository for technical review.",
    ],
    implementationNotes: {
      ownerSummary:
        "This is an applied AI product, but I want it to read like software engineering: parsing, grounding, structured output, deployment tradeoffs, and reviewer-friendly UX.",
      hardLesson:
        "The lesson was that an AI feature hurts credibility if it feels generic, so the useful work is grounding output in real project evidence and keeping the default portfolio clear without requiring the tool.",
      nextEnhancement:
        "Next I would add a transparent evidence panel showing which projects and facts were used for each generated fit brief.",
    },
    behavioralSignals: [
      "Treated applied AI as a product and systems problem, not just a model wrapper.",
      "Optimized for explainability and grounding over novelty-only interaction patterns.",
      "Kept the default portfolio narrative understandable even without using the tool.",
    ],
    productionCapabilities: [
      "Requirement parsing and evidence retrieval before prompt execution.",
      "Structured response generation designed for consistent skimability.",
      "ECS Express Mode runtime with explicit service configuration, ingress behavior, and architecture documentation.",
    ],
    recentUpdates: [
      "Migrated the public deployment from AWS App Runner to ECS Express Mode and cut over the live endpoint to sharedaigateway.com.",
      "Documented the migration path, why App Runner stopped fitting the workload, and where regular ECS remained the better choice for networking-heavy services.",
      "Reframed the AI feature around evidence retrieval, structured output, and deployment tradeoffs so it reads as product engineering instead of AI bloat.",
    ],
    liveUrl: profileData.aiSystemLiveUrl,
    repoUrl: profileData.aiSystemRepoUrl,
    additionalLinks: [
      {
        label: "Read Migration Deep Dive",
        url: "/blog/app-runner-to-ecs-migration-notes",
      },
      {
        label: "Read Production Upgrade Log",
        url: "/blog/portfolio-production-architecture-upgrades",
      },
    ],
    systemDesignUrl: "/system-design/ai-job-match-analysis",
  },
];
