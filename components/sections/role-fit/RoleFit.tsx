'use client';

import { useMemo, useState } from "react";
import { profileData } from "@/content/profile";
import { projectsData } from "@/content/projects";

type SkillSignal = {
  label: string;
  weight: number;
  keywords: string[];
  evidence: string;
};

type ProjectSignal = {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  liveUrl?: string;
  repoUrl?: string;
  designUrl?: string;
  additionalLinks?: {
    label: string;
    url: string;
  }[];
  recentUpdates?: string[];
};

type RoleTemplate = {
  title: string;
  alignment: string[];
  evidence: string[];
};

const skillSignals: SkillSignal[] = [
  {
    label: "Frontend Delivery (React / Next.js)",
    weight: 10,
    keywords: ["react", "next.js", "nextjs", "typescript", "javascript", "frontend", "ui"],
    evidence:
      "Built portfolio, moveYSplash, and tutoring interfaces with reusable components and responsive UX.",
  },
  {
    label: "Backend API Development",
    weight: 8,
    keywords: ["node", "backend", "api", "rest", "server", "services"],
    evidence:
      "Implemented backend workflows for NetPulse, cloud code execution, and tutoring management system.",
  },
  {
    label: "Core Languages (Java / Python / Rust / Go)",
    weight: 14,
    keywords: ["java", "python", "rust", "go", "typescript", "javascript"],
    evidence:
      "Strong language alignment with New Grad roles requiring Java or Python plus systems-oriented implementation work.",
  },
  {
    label: "Database Engineering",
    weight: 7,
    keywords: ["sql", "postgres", "postgresql", "mysql", "supabase", "database", "schema"],
    evidence:
      "Shipped SQL-backed systems and optimized query patterns for performance and data reliability.",
  },
  {
    label: "CS Fundamentals (Compilers / OS / Algorithms)",
    weight: 10,
    keywords: [
      "compilers",
      "compiler",
      "operating systems",
      "operating system",
      "algorithms",
      "data structures",
      "fundamentals",
      "systems",
    ],
    evidence:
      "Foundational CS focus from coursework and algorithmic problem solving applied across projects.",
  },
  {
    label: "Reliability & Monitoring",
    weight: 8,
    keywords: ["monitoring", "uptime", "incident", "reliability", "observability", "production"],
    evidence:
      "Built reliability-focused systems including NetPulse and real-time telemetry operations workflows.",
  },
  {
    label: "Performance & Problem Solving",
    weight: 7,
    keywords: ["performance", "optimiz", "latency", "algorithms", "scalable", "scale"],
    evidence:
      "Improved moveYSplash search performance by 90% and implemented distributed system tradeoff decisions.",
  },
  {
    label: "Communication & Professional Standards",
    weight: 6,
    keywords: ["communication", "written", "verbal", "english", "integrity", "honesty", "work ethic"],
    evidence:
      "Portfolio emphasizes clear technical communication, design tradeoffs, and operational responsibility.",
  },
  {
    label: "New Grad Program Alignment",
    weight: 10,
    keywords: [
      "new grad",
      "recent university graduates",
      "recent graduate",
      "entry level",
      "junior",
      "0-2 years",
      "engineering development program",
    ],
    evidence:
      "Profile is explicitly positioned for full-time New Grad Software Engineer roles (2026).",
  },
];

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "into",
  "that",
  "this",
  "your",
  "their",
  "while",
  "about",
  "under",
  "over",
  "across",
  "without",
  "where",
  "when",
  "which",
  "project",
  "projects",
  "built",
  "using",
  "style",
  "based",
  "core",
  "work",
  "works",
]);

const normalize = (value: string) => value.toLowerCase();

const tokenize = (value: string) =>
  normalize(value)
    .split(/[^a-z0-9+*#.-]+/)
    .filter((token) => token.length > 2 && !stopWords.has(token));

const keywordOverrides: Record<string, string[]> = {
  netpulse: [
    "monitoring",
    "uptime",
    "incident",
    "alert",
    "multi-region",
    "websocket",
    "api",
    "aws",
    "saas",
    "reliability",
  ],
  moveysplash: [
    "social",
    "frontend",
    "react",
    "next.js",
    "search",
    "sql",
    "supabase",
    "performance",
    "full stack",
  ],
  "cloud-code-execution": [
    "code execution",
    "sandbox",
    "runtime",
    "worker",
    "queue",
    "api",
    "app runner",
    "alb",
    "security",
    "cloud",
  ],
  "realtime-transit-telemetry": [
    "real-time",
    "telemetry",
    "streaming",
    "analytics",
    "backpressure",
    "idempotency",
    "event-time",
    "dashboard",
    "websocket",
    "transit",
  ],
  "mini-load-balancer": [
    "load balancer",
    "go",
    "routing",
    "least connections",
    "round robin",
    "consistent hashing",
    "circuit breaker",
    "health checks",
    "failover",
    "metrics",
    "cloudfront",
    "app runner",
  ],
  "telecom-network-visualizer": [
    "telecom",
    "network",
    "routing",
    "visualizer",
    "dijkstra",
    "a*",
    "graph",
    "latency",
    "pathfinding",
    "congestion",
  ],
};

const projectSignals: ProjectSignal[] = projectsData.map((project) => {
  const seedKeywords = [
    ...(keywordOverrides[project.id] ?? []),
    ...project.tags.map((tag) => normalize(tag)),
    ...tokenize(project.title),
    ...tokenize(project.description),
    ...tokenize(project.hardProblem),
    ...(project.recentUpdates?.flatMap((item) => tokenize(item)) ?? []),
  ];

  const keywords = Array.from(new Set(seedKeywords)).slice(0, 80);

  return {
    id: project.id,
    title: project.title,
    summary: project.description,
    keywords,
    liveUrl: project.liveUrl,
    repoUrl: project.repoUrl,
    designUrl: project.systemDesignUrl,
    additionalLinks: project.additionalLinks,
    recentUpdates: project.recentUpdates,
  };
});

const sampleJobDescription = `New Grad Software Engineer - Full Time
We are looking for an engineer who can build full-stack web applications, work across React/TypeScript and Node.js APIs, and write efficient SQL queries. You should care about reliability, testing, and performance optimization.`;

const roleTemplates: RoleTemplate[] = [
  {
    title: "Amazon SDE Fit",
    alignment: [
      "Distributed systems ownership with failure handling and operational controls.",
      "Scalable backend APIs with queue-worker and streaming patterns.",
      "Production-readiness focus: observability, retries, and reliability tradeoffs.",
    ],
    evidence: [
      "NetPulse + Mini Load Balancer for distributed reliability and routing.",
      "Cloud Code Execution + Transit Telemetry for async and real-time pipelines.",
      "System design docs + live demos for fast technical validation.",
    ],
  },
  {
    title: "Veeva EDP Fit",
    alignment: [
      "Strong CS fundamentals through algorithmic and systems-focused projects.",
      "Backend architecture depth with clear tradeoff communication.",
      "New grad profile positioning with documented engineering rigor.",
    ],
    evidence: [
      "Telecom Network Visualizer + Mini Load Balancer for fundamentals and systems thinking.",
      "NetPulse + Cloud Code Execution for backend architecture and reliability.",
      "Role Fit brief + system design documentation for communication quality.",
    ],
  },
  {
    title: "Backend / Platform New Grad Fit",
    alignment: [
      "API and data workflow implementation across full-stack products.",
      "Operational safety controls for retries, limits, and idempotency.",
      "Evidence of measurable improvements and deployment ownership.",
    ],
    evidence: [
      "Cloud Code Execution + NetPulse for platform and backend service design.",
      "Transit Telemetry for streaming semantics and observability.",
      "moveYSplash + Tutoring for full-stack delivery and SQL-backed workflows.",
    ],
  },
];

const computeKeywordHits = (text: string, keywords: string[]) =>
  keywords.reduce((count, keyword) => (text.includes(keyword) ? count + 1 : count), 0);

export default function RoleFit() {
  const [jobDescription, setJobDescription] = useState("");
  const [copied, setCopied] = useState(false);

  const analysis = useMemo(() => {
    const text = normalize(jobDescription.trim());
    if (text.length < 40) {
      return null;
    }

    const matchedSkills = skillSignals
      .map((signal) => {
        const hits = computeKeywordHits(text, signal.keywords);
        const signalScore =
          hits > 0 ? Math.min(signal.weight, Math.round((hits / 2) * signal.weight)) : 0;
        return { ...signal, hits, signalScore };
      })
      .filter((signal) => signal.hits > 0)
      .sort((a, b) => b.signalScore - a.signalScore || b.hits - a.hits);

    const matchedProjects = projectSignals
      .map((project) => {
        const keywordHits = computeKeywordHits(text, project.keywords);
        const upgradeTokens = tokenize(project.recentUpdates?.join(" ") ?? "");
        const upgradeHits = computeKeywordHits(text, upgradeTokens);
        const projectScore = Math.min(12, keywordHits * 2 + Math.min(4, upgradeHits));
        return { ...project, keywordHits, upgradeHits, projectScore };
      })
      .filter((project) => project.keywordHits > 0)
      .sort((a, b) => b.projectScore - a.projectScore || b.keywordHits - a.keywordHits);

    const skillCoverage = Math.min(
      62,
      matchedSkills.reduce((sum, signal) => sum + signal.signalScore, 0)
    );
    const projectCoverage = Math.min(
      30,
      matchedProjects.slice(0, 3).reduce((sum, project) => sum + project.projectScore, 0)
    );

    const stageKeywords = [
      "new grad",
      "recent university graduates",
      "entry level",
      "0-2 years",
      "junior",
      "engineering development program",
    ];
    const stageHits = computeKeywordHits(text, stageKeywords);
    const stageAlignment = Math.min(10, stageHits * 2);

    const logisticsKeywords = [
      "canada",
      "toronto",
      "in office",
      "4 days/week",
      "work anywhere",
      "work authorization",
    ];
    const logisticsHits = computeKeywordHits(text, logisticsKeywords);
    const logisticsAlignment = Math.min(8, logisticsHits * 2);

    const fitScore = Math.min(
      100,
      Math.round(skillCoverage + projectCoverage + stageAlignment + logisticsAlignment)
    );

    const strongestSignals = matchedSkills.slice(0, 4).map((signal) => signal.label);
    const referencedUpdates = matchedProjects
      .slice(0, 2)
      .flatMap((project) => project.recentUpdates ?? [])
      .slice(0, 3);

    const recruiterPitch = [
      `${profileData.name} shows strong role alignment through stack fit, practical full-stack delivery, and recent production-style project upgrades.`,
      matchedProjects[0]
        ? `Most relevant project: ${matchedProjects[0].title} (${matchedProjects[0].summary})`
        : "Relevant project evidence is available across multiple live and documented portfolio projects.",
      "Profile focus: full-time New Grad Software Engineer (2026) with public demos, source code, system design docs, and recent change history.",
    ].join(" ");

    const scoreBreakdown = [
      { label: "Role + Stack Alignment", score: Math.round(skillCoverage), max: 62 },
      { label: "Project Evidence Match", score: Math.round(projectCoverage), max: 30 },
      { label: "New Grad Program Fit", score: Math.round(stageAlignment), max: 10 },
      { label: "Location / Logistics Match", score: Math.round(logisticsAlignment), max: 8 },
    ];

    const briefText = [
      `Role Fit Score: ${fitScore}/100`,
      "",
      "Score Breakdown:",
      ...scoreBreakdown.map((part) => `- ${part.label}: ${part.score}/${part.max}`),
      "",
      "Top Signals:",
      ...strongestSignals.map((item) => `- ${item}`),
      ...(referencedUpdates.length
        ? ["", "Recent Upgrades Referenced:", ...referencedUpdates.map((item) => `- ${item}`)]
        : []),
      "",
      "Recruiter-Ready Summary:",
      recruiterPitch,
    ].join("\n");

    return {
      fitScore,
      matchedSkills,
      matchedProjects,
      recruiterPitch,
      scoreBreakdown,
      referencedUpdates,
      briefText,
    };
  }, [jobDescription]);

  const copyBrief = async () => {
    if (!analysis) return;
    try {
      await navigator.clipboard.writeText(analysis.briefText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="role-fit" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-white">Role Fit Brief</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-neutral-400">
            Evidence-first AI-style analysis for hiring teams. Paste a job description and get a
            concise fit brief mapped to real project outcomes, not generic buzzwords.
          </p>

          <div className="mb-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-xs uppercase tracking-widest text-neutral-500">Target Role Templates</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {roleTemplates.map((template) => (
                <div key={template.title} className="rounded-xl border border-neutral-800 bg-black p-4">
                  <p className="text-sm font-semibold text-neutral-100">{template.title}</p>
                  <div className="mt-2 space-y-1 text-xs text-neutral-300">
                    {template.alignment.map((item) => (
                      <p key={`${template.title}-${item}`}>- {item}</p>
                    ))}
                  </div>
                  <div className="mt-3 space-y-1 text-[11px] text-emerald-300/90">
                    {template.evidence.map((item) => (
                      <p key={`${template.title}-evidence-${item}`}>- {item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-xs uppercase tracking-widest text-neutral-500">How This AI System Works</p>
            <div className="mt-3 space-y-2 text-sm text-neutral-300">
              <p>- Pulls evidence directly from your current `Project_Vault` data (projects, links, and recent upgrades).</p>
              <p>- Uses deterministic keyword + weighted scoring (no black-box generation).</p>
              <p>- Produces transparent score breakdown and recruiter summary grounded in verifiable links.</p>
              <p>- Automatically updates as portfolio projects evolve, so scoring reflects your latest work.</p>
            </div>
            <div className="mt-4">
              <a
                href="/system-design/ai-role-fit"
                className="inline-flex rounded border border-cyan-400/40 px-3 py-2 text-xs uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                AI System Design Doc
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <label htmlFor="jd" className="mb-2 block text-xs uppercase tracking-widest text-neutral-500">
              Job Description Input
            </label>
            <textarea
              id="jd"
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the software engineer job description here..."
              className="h-40 w-full rounded border border-neutral-700 bg-black px-4 py-3 text-sm text-neutral-200 outline-none transition focus:border-emerald-500/60"
            />
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setJobDescription(sampleJobDescription)}
                className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
              >
                Load Sample JD
              </button>
              {analysis ? (
                <button
                  type="button"
                  onClick={copyBrief}
                  className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  {copied ? "Copied" : "Copy Brief"}
                </button>
              ) : null}
            </div>
          </div>

          {analysis ? (
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Fit Score</p>
                <p className="mt-3 text-4xl font-bold text-emerald-300">{analysis.fitScore}/100</p>
                <div className="mt-3 space-y-1 text-xs text-neutral-400">
                  {analysis.scoreBreakdown.map((part) => (
                    <p key={part.label}>
                      {part.label}: {part.score}/{part.max}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 lg:col-span-2">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Recruiter Summary</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-200">
                  {analysis.recruiterPitch}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 lg:col-span-2">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Matched Skills</p>
                <div className="mt-3 space-y-3">
                  {analysis.matchedSkills.slice(0, 4).map((signal) => (
                    <div key={signal.label} className="rounded border border-neutral-800 bg-black p-3">
                      <p className="text-sm font-semibold text-neutral-100">{signal.label}</p>
                      <p className="mt-1 text-xs text-neutral-400">{signal.evidence}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Best Project Matches</p>
                <div className="mt-3 space-y-3">
                  {analysis.matchedProjects.slice(0, 3).map((project) => (
                    <div key={project.title} className="rounded border border-neutral-800 bg-black p-3">
                      <p className="text-sm font-semibold text-neutral-100">{project.title}</p>
                      <p className="mt-1 text-xs text-neutral-400">{project.summary}</p>
                      {project.recentUpdates?.length ? (
                        <div className="mt-2 space-y-1 text-[11px] text-amber-300/90">
                          {project.recentUpdates.slice(0, 2).map((item, index) => (
                            <p key={`${project.id}-update-${index}`}>- {item}</p>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-emerald-500/30 px-2 py-1 text-[10px] uppercase tracking-widest text-emerald-300"
                          >
                            Live
                          </a>
                        ) : null}
                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-neutral-700 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-300"
                          >
                            Repo
                          </a>
                        ) : null}
                        {project.designUrl ? (
                          <a
                            href={project.designUrl}
                            className="rounded border border-cyan-400/40 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-300"
                          >
                            Design
                          </a>
                        ) : null}
                        {project.additionalLinks?.map((link) => (
                          <a
                            key={`${project.id}-extra-${link.label}`}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-amber-400/40 px-2 py-1 text-[10px] uppercase tracking-widest text-amber-300"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {analysis.referencedUpdates.length ? (
                <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-5 lg:col-span-3">
                  <p className="text-xs uppercase tracking-widest text-amber-300">Recent Upgrades Considered</p>
                  <div className="mt-2 space-y-1 text-sm text-neutral-200">
                    {analysis.referencedUpdates.map((item) => (
                      <p key={item}>- {item}</p>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <p className="mt-6 text-center text-sm text-neutral-500">
              Paste at least a few lines from a job description to generate the brief.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
