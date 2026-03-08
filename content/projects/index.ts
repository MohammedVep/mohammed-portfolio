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
  behavioralSignals?: string[];
  productionCapabilities?: string[];
  recentUpdates?: string[];
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
      "Implemented PgBouncer for advanced PostgreSQL connection pooling, preventing database connection exhaustion during simulated spikes of 10,000+ concurrent regional worker writes.",
      "Enforced Zero-Trust architecture by establishing Mutual TLS (mTLS) encryption between distributed regional checkers and the centralized monitoring engine.",
      "P95 check-to-dashboard update latency maintained strictly under 45ms during aggressive JMeter staging validation runs.",
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
      "Shipped a production deployment and public source code for recruiter and interviewer review.",
      "Implemented status dashboards that let users track service health over time instead of isolated check events.",
      "Designed alert flow with retry/debounce behavior to reduce noisy false alarms.",
    ],
    behavioralSignals: [
      "Built failure-handling logic with retries and alert debouncing.",
      "Documented reliability/cost tradeoffs for retention and probing intervals.",
      "Shipped live system plus docs so reviewers can validate claims quickly.",
    ],
    productionCapabilities: [
      "Tenant-aware authentication and onboarding via Cognito registration + login.",
      "Public demo-safe read-only API mode for recruiter review without privileged credentials.",
      "Multi-region probe workflow with incident lifecycle and alert deduplication controls.",
    ],
    recentUpdates: [
      "Added dedicated registration with Cognito email verification and full login flow for production-style onboarding.",
      "Introduced public read-only demo API mode so recruiters can evaluate functionality without tenant credentials.",
      "Expanded integration test + deployment workflows for stronger end-to-end operational confidence.",
    ],
    liveUrl: profileData.netPulseLiveUrl,
    repoUrl: profileData.netPulseRepoUrl,
    systemDesignUrl: "/system-design/netpulse",
    additionalLinks: [
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
      "Published a live deployment for recruiter/interviewer walk-throughs.",
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
    behavioralSignals: [
      "Translated academic scope into a production-style deployed artifact.",
      "Balanced UX richness with performance constraints using component splitting.",
      "Wrote design documentation to communicate architecture and tuning choices.",
    ],
    productionCapabilities: [
      "Responsive multi-device UX with authenticated user workflows.",
      "SQL-backed persistence with query optimization and indexing strategy.",
      "Live deployment availability for external recruiter/interviewer validation.",
    ],
    recentUpdates: [
      "Published a live deployment link to make academic project outcomes directly reviewable.",
      "Added a dedicated system design doc page to explain architecture and performance decisions.",
    ],
    liveUrl: "https://move-y-splash-new.vercel.app",
    repoUrl: "https://github.com/MohammedVep/MoveYSplashNew",
    systemDesignUrl: "/system-design/moveysplash",
  },
  {
    id: "cloud-code-execution",
    title: "Cloud Code Execution Environment",
    projectType: "Scaling & Messaging Systems",
    description:
      "Fault-tolerant asynchronous code execution platform designed for FinOps efficiency, queue resilience, and high-throughput payload processing.",
    whyItMatters:
      "Shows SRE-first backend platform engineering where autoscaling, queue durability, and cost-efficiency are designed as first-class requirements.",
    architectureSummary:
      "ALB execution ingress -> queue and DLQ lanes -> Fargate Spot worker pool -> result store -> recovery scheduler via EventBridge.",
    metrics: "Fargate Spot FinOps + DLQ Recovery | 15k+ Req/Min Burst Tests",
    impactMetrics: [
      "Architected a highly elastic worker pool utilizing AWS Fargate Spot instances via Terraform, reducing distributed compute costs by 70% for asynchronous payload processing.",
      "Engineered a self-healing queue ecosystem using Redis Dead Letter Queues (DLQ) and AWS EventBridge cron triggers, achieving 100% payload recovery during simulated network partitions.",
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
      "Introduced Terraform-governed dual-endpoint model for control plane and execution API traffic separation.",
      "Expanded engine scope into a mini Replit/Judge0-style platform with async queue-worker execution and tenant quota controls.",
      "Added stronger sandbox controls: bounded runtime resources, idempotent job handling, and audit visibility.",
    ],
    liveUrl: "https://42mtnmhqya.us-east-1.awsapprunner.com/",
    repoUrl: "https://github.com/MohammedVep/cloud-code-execution-engine",
    systemDesignUrl: "/system-design/cloud-code-execution",
    additionalLinks: [
      {
        label: "Execution API",
        url: "http://ccee-api-alb-371008494.us-east-1.elb.amazonaws.com",
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
    behavioralSignals: [
      "Implemented reliability controls before adding feature complexity.",
      "Documented stream-processing tradeoffs around freshness and consistency.",
      "Built recruiter-visible observability signals for operational credibility.",
    ],
    productionCapabilities: [
      "Event-time ordering + idempotency dedupe for resilient streaming semantics.",
      "Adaptive backpressure and queue buffering for burst handling stability.",
      "WebSocket-based low-latency telemetry push with operational observability hooks.",
    ],
    recentUpdates: [
      "Added event-time ordering, idempotency dedupe, and late-arrival correction for robust stream semantics.",
      "Introduced adaptive backpressure controls and streaming analytics signal generation for high-throughput conditions.",
      "Expanded operations readiness with CloudWatch alarms/dashboard integration and real-time WebSocket push.",
    ],
    liveUrl:
      "http://realtimetransittelemetryst-dashboardbucket5758873d-fjkmwbutvpc8.s3-website-us-east-1.amazonaws.com",
    systemDesignUrl: "/system-design/realtime-transit-telemetry",
  },
  {
    id: "mini-load-balancer",
    title: "Mini Load Balancer (Go)",
    projectType: "Distributed Systems & Cloud APIs",
    description:
      "Deep-profiled Go load balancer with dynamic discovery, observability pipeline integration, and high-throughput failover control.",
    whyItMatters:
      "Demonstrates infrastructure-level performance tuning where routing logic is backed by runtime profiling, service discovery, and production observability.",
    architectureSummary:
      "Client traffic -> Go proxy + concurrency scheduler -> Consul discovery and health model -> backend pool -> Prometheus/Grafana telemetry.",
    metrics: "Go pprof + Consul Discovery | Prometheus/Grafana Observability",
    impactMetrics: [
      "Conducted deep runtime profiling using Go pprof to identify and eliminate memory allocation bottlenecks, optimizing goroutine scheduling for high-throughput TCP proxying.",
      "Integrated dynamic service discovery via Consul, enabling zero-downtime backend node registration and sub-second health-aware failover.",
      "Exported real-time routing metrics (active connections, 5xx error rates) to a Prometheus and Grafana observability pipeline.",
    ],
    tags: ["Go", "Consul", "Prometheus", "Grafana", "pprof"],
    hardProblem:
      "Route traffic predictably under backend failure while minimizing flapping, maintaining idempotent retry behavior, and preserving operational insight.",
    architecture: `graph LR
  Client[User Traffic]-->LB[Go Load Balancer]
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
    ],
    invariants: [
      "Only healthy backends receive routed traffic unless explicitly in drain-aware transition.",
      "Idempotent request retries remain bounded and never recurse indefinitely.",
      "Routing strategy switches are observable through control-plane and metrics endpoints.",
    ],
    highlights: [
      "Implemented three routing strategies with runtime switch support.",
      "Added circuit breaker, active health checks, graceful draining, and failover mechanics.",
      "Exposed control plane + Prometheus-style metrics for recruiter-visible operations evidence.",
    ],
    behavioralSignals: [
      "Designed bounded retry logic to avoid runaway failure loops.",
      "Added graceful draining and hysteresis to reduce operational flapping.",
      "Prioritized introspection endpoints for easier incident investigation.",
    ],
    productionCapabilities: [
      "Multiple runtime-selectable balancing strategies with control-plane visibility.",
      "Health-aware failover with hysteresis and graceful draining for safer lifecycle transitions.",
      "Operational telemetry endpoints with deployment-ready containerization and infrastructure automation scripts.",
    ],
    recentUpdates: [
      "Built core engine with round robin, least connections, and consistent hashing selection modes.",
      "Added reliability mechanisms including circuit breaker, bounded retries, and health-check hysteresis.",
      "Added Consul service-discovery integration and recruiter-facing dashboard/control surface.",
    ],
    liveUrl: "https://wvighhwvmf.us-east-1.awsapprunner.com",
    repoUrl: "https://github.com/MohammedVep/mini-load-balancer",
    additionalLinks: [
      {
        label: "Read Incident Report: OOM Debugging",
        url: "/blog/go-load-balancer-failure-handling",
      },
      {
        label: "CloudFront Edge",
        url: "https://d1zwy02em6289x.cloudfront.net",
      },
    ],
    systemDesignUrl: "/system-design/mini-load-balancer",
  },
  {
    id: "telecom-network-visualizer",
    title: "Telecom Network Routing Visualizer",
    projectType: "Algorithms & Visualization",
    description:
      "Interactive telecom routing simulator for visualizing shortest-path behavior, congestion effects, and network quality metrics.",
    whyItMatters:
      "Makes core CS routing algorithms legible to reviewers while demonstrating algorithmic correctness under dynamic network conditions.",
    architectureSummary:
      "React visualization layer -> weighted graph model -> Dijkstra/A* engine -> congestion simulator -> route quality metrics.",
    metrics: "Dijkstra + A* | Interactive Graph Simulation",
    impactMetrics: [
      "Supports deterministic Dijkstra and heuristic A* route comparisons on identical graph states.",
      "Recomputes route quality metrics live as congestion weights change.",
      "Surfaces latency, hops, cost, and drop-rate metrics for quick decision analysis.",
    ],
    tags: ["React", "TypeScript", "Vite", "Algorithms", "Visualization"],
    hardProblem:
      "Represent dynamic network congestion and route optimization decisions in a way that is both mathematically correct and visually understandable.",
    architecture: `graph TD
  UI[React UI]-->Graph[Network Graph Model]
  Graph-->Algo[Dijkstra / A* Engine]
  Algo-->Sim[Congestion Weight Simulation]
  Sim-->Metrics[Latency / Cost / Hops / Drop Rate]
  Metrics-->UI`,
    tradeoffs: [
      "Frequent congestion recomputation improves realism but increases render and computation overhead.",
      "A* pathfinding can reduce computation for target-focused routing, but requires heuristic tuning.",
      "Dense topologies improve fidelity, but can reduce visual clarity without progressive filtering.",
    ],
    invariants: [
      "Route results are always derived from current weighted graph state.",
      "Visualization reflects algorithm output and congestion state consistently.",
      "Metrics panel stays synchronized with selected path and simulation step.",
    ],
    highlights: [
      "Implemented graph-based routing visualization with Dijkstra and A*.",
      "Added dynamic edge-weight simulation to model congestion-driven route changes.",
      "Exposed route quality metrics for latency, hops, cost, and drop-rate interpretation.",
    ],
    behavioralSignals: [
      "Translated algorithm-heavy concepts into recruiter-friendly visuals.",
      "Documented tradeoffs between runtime efficiency and simulation fidelity.",
      "Maintained deterministic outputs for repeatable demonstrations.",
    ],
    productionCapabilities: [
      "Deterministic route computation using Dijkstra and A* engines.",
      "Real-time congestion-influenced simulation for network stress behavior modeling.",
      "Interactive metrics surface for route quality diagnostics and decision support.",
    ],
    recentUpdates: [
      "Initial release of telecom network routing visualizer with core graph/routing primitives.",
      "Added dynamic congestion weighting and real-time route heat-style feedback.",
      "Expanded metrics surface for recruiter-readable network decision tradeoffs.",
    ],
    repoUrl: "https://github.com/MohammedVep/telecom-network-routing-visualizer",
    systemDesignUrl: "/system-design/telecom-network-visualizer",
  },
  {
    id: "tutoring",
    title: "Online Tutoring Management System (Capstone)",
    projectType: "Full-Stack Product Engineering",
    description:
      "Developed a full-stack tutoring management platform that supports session scheduling, user workflows, and secure access.",
    whyItMatters:
      "Shows product ownership from user workflow design to backend persistence and secure scheduling controls.",
    architectureSummary:
      "Angular/React client -> Node.js API gateway -> auth + scheduling services -> SQL persistence layer.",
    metrics: "Capstone Delivery | Final Grade: A-",
    impactMetrics: [
      "Delivered capstone scope on schedule with final grade A-.",
      "Implemented authentication-gated scheduling with consistent SQL-backed session records.",
      "Reduced scheduling conflicts via centralized validation logic.",
    ],
    tags: ["Angular", "React", "Node.js", "SQL", "REST API"],
    hardProblem:
      "Coordinate scheduling and communication flows for students and tutors while keeping authentication and session state reliable.",
    architecture: `graph TD
  Client[Angular + React Frontend]-->Gateway[Node.js API]
  Gateway-->Auth[Authentication Layer]
  Gateway-->Scheduler[Session Scheduler]
  Scheduler-->SQL[(SQL Database)]`,
    tradeoffs: [
      "More validation rules improved scheduling accuracy, but increased API complexity; I centralized validation logic to keep behavior consistent.",
      "Detailed session metadata helps operations and reporting, but raises schema maintenance cost as features expand.",
    ],
    invariants: [
      "Users must be authenticated before scheduling or session updates.",
      "Session records maintain consistent tutor-student-time mappings.",
      "Core scheduling operations persist safely across refresh and retry paths.",
    ],
    highlights: [
      "Delivered the project as the final capstone requirement.",
      "Built secure backend flows for authentication and scheduling operations.",
      "Implemented responsive frontend workflows for students and tutors.",
    ],
    behavioralSignals: [
      "Balanced delivery velocity with backend correctness and data integrity.",
      "Structured the system around API boundaries for maintainability.",
      "Captured core tradeoffs and validation constraints in documentation.",
    ],
    productionCapabilities: [
      "Authentication-gated scheduling workflows with consistent state management.",
      "Separation of frontend and backend responsibilities via API-driven design.",
      "Capstone delivery with maintainable full-stack structure and SQL persistence.",
    ],
    systemDesignUrl: "/system-design/tutoring",
  },
];
