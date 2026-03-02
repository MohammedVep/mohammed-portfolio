import { profileData } from "@/content/profile";

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  hardProblem: string;
  architecture: string;
  tradeoffs: string[];
  invariants: string[];
  highlights: string[];
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
    description:
      "Built and continuously upgraded a distributed uptime monitoring platform with secure auth, public demo access, and multi-region reliability workflows.",
    metrics: "Live Demo + GitHub | Multi-Region Monitoring",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
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
    recentUpdates: [
      "Added dedicated registration with Cognito email verification and full login flow for production-style onboarding.",
      "Introduced public read-only demo API mode so recruiters can evaluate functionality without tenant credentials.",
      "Expanded integration test + deployment workflows for stronger end-to-end operational confidence.",
    ],
    liveUrl: profileData.netPulseLiveUrl,
    repoUrl: profileData.netPulseRepoUrl,
    systemDesignUrl: "/system-design/netpulse",
  },
  {
    id: "moveysplash",
    title: "moveYSplash: Social Platform Prototype",
    description:
      "Designed and built a social media platform prototype with search and content workflows using modern web tooling.",
    metrics: "Search Performance Improved by 90%",
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
    recentUpdates: [
      "Published a live deployment link to make academic project outcomes directly reviewable.",
      "Added a dedicated system design doc page to explain architecture and performance decisions.",
    ],
    liveUrl: "https://move-y-splash-new.vercel.app",
    systemDesignUrl: "/system-design/moveysplash",
  },
  {
    id: "cloud-code-execution",
    title: "Cloud Code Execution Environment",
    description:
      "Built and upgraded a cloud-hosted code execution platform with separate web application and execution API deployments.",
    metrics: "App Runner Web + ALB API | Cloud Execution",
    tags: ["Node.js", "API", "AWS", "Containers", "Backend"],
    hardProblem:
      "Execute untrusted user code safely while controlling runtime limits, output size, and request-level isolation.",
    architecture: `graph LR
  Client[Web Client]-->App[App Runner Service]
  App-->API[Execution API Endpoint]
  API-->Queue[Execution Queue]
  Queue-->Worker[Sandboxed Workers]
  Worker-->Result[Execution Result Store]
  Result-->API
  API-->App`,
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
    recentUpdates: [
      "Introduced dual-endpoint deployment model: App Runner for web delivery plus ALB endpoint for execution API.",
      "Expanded engine scope into a mini Replit/Judge0-style platform with async queue-worker execution and tenant quota controls.",
      "Added stronger sandbox controls: bounded runtime resources, idempotent job handling, and audit visibility.",
    ],
    liveUrl: "https://42mtnmhqya.us-east-1.awsapprunner.com/",
    repoUrl: "https://github.com/MohammedVep/cloud-code-execution-engine",
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
    description:
      "Developed a live transit telemetry dashboard for visualizing operational signals and route-level movement patterns.",
    metrics: "Live Dashboard | Real-Time Signal View",
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
    recentUpdates: [
      "Added event-time ordering, idempotency dedupe, and late-arrival correction for robust stream semantics.",
      "Introduced adaptive backpressure controls and streaming analytics signal generation for high-throughput conditions.",
      "Expanded operations readiness with CloudWatch alarms/dashboard integration and real-time WebSocket push.",
    ],
    liveUrl:
      "http://realtimetransittelemetryst-dashboardbucket5758873d-fjkmwbutvpc8.s3-website-us-east-1.amazonaws.com",
  },
  {
    id: "mini-load-balancer",
    title: "Mini Load Balancer (Go)",
    description:
      "Production-style load balancer built in Go with multi-strategy routing, health-aware failover, and recruiter-facing observability controls.",
    metrics: "Round Robin + Least Conn + Consistent Hash",
    tags: ["Go", "Load Balancing", "Distributed Systems", "App Runner", "Observability"],
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
    recentUpdates: [
      "Built core engine with round robin, least connections, and consistent hashing selection modes.",
      "Added reliability mechanisms including circuit breaker, bounded retries, and health-check hysteresis.",
      "Added App Runner deployment scripts and recruiter-facing dashboard/control surface.",
    ],
    liveUrl: "https://wvighhwvmf.us-east-1.awsapprunner.com",
    repoUrl: "https://github.com/MohammedVep/mini-load-balancer",
    additionalLinks: [
      {
        label: "CloudFront Edge",
        url: "https://d1zwy02em6289x.cloudfront.net",
      },
    ],
  },
  {
    id: "telecom-network-visualizer",
    title: "Telecom Network Routing Visualizer",
    description:
      "Interactive telecom routing simulator for visualizing shortest-path behavior, congestion effects, and network quality metrics.",
    metrics: "Dijkstra + A* | Interactive Graph Simulation",
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
    recentUpdates: [
      "Initial release of telecom network routing visualizer with core graph/routing primitives.",
      "Added dynamic congestion weighting and real-time route heat-style feedback.",
      "Expanded metrics surface for recruiter-readable network decision tradeoffs.",
    ],
    repoUrl: "https://github.com/MohammedVep/telecom-network-routing-visualizer",
  },
  {
    id: "tutoring",
    title: "Online Tutoring Management System (Capstone)",
    description:
      "Developed a full-stack tutoring management platform that supports session scheduling, user workflows, and secure access.",
    metrics: "Capstone Delivery | Final Grade: A-",
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
  },
];
