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
