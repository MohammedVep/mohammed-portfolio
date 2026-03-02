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
      "Built and deployed an uptime monitoring platform with scheduled checks, status tracking, and incident visibility for service reliability.",
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
    liveUrl: "https://42mtnmhqya.us-east-1.awsapprunner.com/",
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
    liveUrl:
      "http://realtimetransittelemetryst-dashboardbucket5758873d-fjkmwbutvpc8.s3-website-us-east-1.amazonaws.com",
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
