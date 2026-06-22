export type Improvement = {
  id: string;
  title: string;
  scope: string;
  detail: string;
  proofHref: string;
  proofLabel: string;
};

export const improvementsUpdatedAt = "June 2026";

export const latestImprovements: Improvement[] = [
  {
    id: "netpulse-access-domain",
    title: "NetPulse Dedicated Access Domain Added",
    scope: "Live Access",
    detail:
      "NetPulse reviewer access now points to netpulsemanage.dev, giving the flagship project a cleaner production-style domain instead of an Amplify-generated URL.",
    proofHref: "https://netpulsemanage.dev",
    proofLabel: "Open NetPulse",
  },
  {
    id: "portfolio-production-upgrade-log",
    title: "Production Architecture Upgrade Log Published",
    scope: "Architecture Evidence",
    detail:
      "New blog post explains the latest app upgrades across NetPulse, Cloud Sandbox, Transit Telemetry, Edge Balancer, AI Gateway Platform, and moveYSplash with proof links and workload-fit tradeoffs.",
    proofHref: "/blog/portfolio-production-architecture-upgrades",
    proofLabel: "Read Upgrade Log",
  },
  {
    id: "system-design-library",
    title: "Project System Design Library Added",
    scope: "Architecture Evidence",
    detail:
      "Homepage now surfaces dedicated system design docs for NetPulse, Cloud Sandbox, Transit Telemetry, Edge Balancer, AI Gateway Platform, and moveYSplash.",
    proofHref: "/#system-designs",
    proofLabel: "View Design Docs",
  },
  {
    id: "netpulse-phase-2-3-track",
    title: "NetPulse Phase 2-3 Track Published",
    scope: "Flagship Roadmap",
    detail:
      "NetPulse now calls out Phase 2 onboarding/demo-access improvements and the Phase 3 real-user evidence plan for public status pages, timestamped uptime summaries, and demo-mode boundaries.",
    proofHref: "/system-design/netpulse",
    proofLabel: "Open NetPulse Design",
  },
  {
    id: "ecs-migration-cutover",
    title: "ECS Migration Reflected for AI Gateway Platform and Edge Balancer",
    scope: "Deployment Architecture",
    detail:
      "AI Gateway Platform and Edge Balancer now document the App Runner to ECS migration path, public domain cutovers, and why workload fit drove ECS Express Mode for AI Gateway Platform versus regular ECS for Edge Balancer.",
    proofHref: "/blog/app-runner-to-ecs-migration-notes",
    proofLabel: "Open Migration Deep Dive",
  },
  {
    id: "core-infra-order",
    title: "Core Infrastructure Positioned First",
    scope: "Homepage Structure",
    detail:
      "Core infrastructure systems now appear ahead of non-engineering history so reviewers see production work first.",
    proofHref: "/#projects",
    proofLabel: "View Core Infrastructure",
  },
  {
    id: "skills-map-refresh",
    title: "Infrastructure Skills Map Refreshed",
    scope: "Technical Positioning",
    detail:
      "Technical skills now foreground Go, AWS, Terraform, Docker, Prometheus, Grafana, and Redis/BullMQ reliability workflows.",
    proofHref: "/#skills",
    proofLabel: "View Technical Skills",
  },
  {
    id: "live-app-cta",
    title: "Live Portfolio Apps Centralized",
    scope: "Access Paths",
    detail:
      "Contact section now includes direct live links for NetPulse, Cloud Sandbox, Transit Telemetry, Edge Balancer, and AI Gateway Platform.",
    proofHref: "/#contact",
    proofLabel: "Open Contact Section",
  },
  {
    id: "project-metrics-upgrade",
    title: "Project Metrics Upgraded",
    scope: "Project Evidence",
    detail:
      "Project cards now emphasize workload-fit deployment choices, queue/DLQ recovery, PgBouncer/mTLS, event-time telemetry, and pprof-driven optimization outcomes.",
    proofHref: "/#featured-systems",
    proofLabel: "View Flagship Systems",
  },
  {
    id: "runbooks-elevated",
    title: "Runbooks Elevated in Homepage Flow",
    scope: "Narrative Structure",
    detail:
      "Architecture runbooks and incident-style writing now sit near the top of the homepage to keep the portfolio centered on engineering proof.",
    proofHref: "/#runbooks",
    proofLabel: "Open Runbooks",
  },
];
