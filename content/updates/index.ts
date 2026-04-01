export type Improvement = {
  id: string;
  title: string;
  scope: string;
  detail: string;
  proofHref: string;
  proofLabel: string;
};

export const improvementsUpdatedAt = "April 2026";

export const latestImprovements: Improvement[] = [
  {
    id: "ecs-migration-cutover",
    title: "ECS Migration Reflected for AI and Load Balancer",
    scope: "Deployment Architecture",
    detail:
      "Shared AI Gateway and Mini Load Balancer now document the App Runner to ECS migration path, public domain cutovers, and why workload fit drove ECS Express Mode for AI versus regular ECS for the load balancer.",
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
      "Contact section now includes direct live links for NetPulse, Cloud Code Execution, Transit Telemetry, and Mini Load Balancer.",
    proofHref: "/#contact",
    proofLabel: "Open Contact Section",
  },
  {
    id: "project-metrics-upgrade",
    title: "Project Metrics Upgraded",
    scope: "Project Evidence",
    detail:
      "Project cards now emphasize FinOps, DLQ recovery, PgBouncer/mTLS, and pprof-driven optimization outcomes.",
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
