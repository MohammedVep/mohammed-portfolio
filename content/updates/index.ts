export type Improvement = {
  id: string;
  title: string;
  scope: string;
  detail: string;
  proofHref: string;
  proofLabel: string;
};

export const improvementsUpdatedAt = "March 2026";

export const latestImprovements: Improvement[] = [
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
    title: "Live Portfolio Apps in Contact",
    scope: "Recruiter Experience",
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
    id: "role-fit-upgrade",
    title: "Role Fit Alignment Hardened",
    scope: "Application Readiness",
    detail:
      "Role Fit and recruiter templates now map directly to infra-focused signals and leadership-principle style outcomes.",
    proofHref: "/#role-fit",
    proofLabel: "Open Role Fit",
  },
];
