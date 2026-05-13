import type { PortfolioProject } from "@/content/projects";

/**
 * Copy this object into `projectsData` in `content/projects/index.ts` when adding a new project.
 *
 * Keep the public copy specific and defensible:
 * - Use real tools and links.
 * - Use metrics only if you can explain how they were measured.
 * - Use `implementationNotes` for first-hand ownership, lessons, and next enhancements.
 * - Prefer one concrete failure/fix story over generic "scalable/reliable" language.
 */
export const projectTemplate = {
  id: "new-project-id",
  title: "Project Name",
  projectType: "Distributed Systems & Cloud APIs",
  description:
    "One sentence describing what the system does and who it helps. Keep this concrete.",
  whyItMatters:
    "One sentence explaining the engineering value: reliability, correctness, performance, UX, or operational visibility.",
  architectureSummary:
    "Client -> API -> queue/service -> database/cache -> dashboard/worker/result",
  metrics: "Short metric label reviewers can skim",
  impactMetrics: [
    "Measured or defensible outcome #1. Include environment if needed.",
    "Measured or defensible outcome #2. Avoid numbers you cannot explain.",
    "Measured or defensible outcome #3. Replace with qualitative proof if unmeasured.",
  ],
  tags: ["TypeScript", "Node.js", "PostgreSQL"],
  hardProblem:
    "What was difficult? Mention failure modes, correctness, scale, UX complexity, or deployment constraints.",
  architecture: `graph LR
  Client[Client]-->API[API]
  API-->Worker[Worker]
  Worker-->Store[(Data Store)]
  Store-->Dashboard[Dashboard]`,
  tradeoffs: [
    "Decision tradeoff #1: what improved and what became more complex.",
    "Decision tradeoff #2: why the chosen path fit this project.",
  ],
  invariants: [
    "Correctness rule #1 the system should always preserve.",
    "Correctness rule #2 the system should always preserve.",
  ],
  highlights: [
    "Shipped thing #1.",
    "Shipped thing #2.",
    "Proof artifact #3.",
  ],
  implementationNotes: {
    ownerSummary:
      "Write this in your own voice: what you personally built and why you chose this project.",
    hardLesson:
      "Write what broke, confused you, or forced a redesign. This is usually the most human part.",
    nextEnhancement:
      "Write the next real improvement you would build if you had another week.",
  },
  behavioralSignals: [
    "One sentence showing work ethic, debugging, communication, or ownership.",
  ],
  productionCapabilities: [
    "Capability #1 visible in the app, repo, design doc, or logs.",
    "Capability #2 visible in the app, repo, design doc, or logs.",
  ],
  recentUpdates: [
    "Recent concrete upgrade #1.",
    "Recent concrete upgrade #2.",
  ],
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/username/repo",
  systemDesignUrl: "/system-design/new-project-id",
  additionalLinks: [
    {
      label: "Read Build Notes",
      url: "/blog/example-post",
    },
  ],
} satisfies PortfolioProject;

