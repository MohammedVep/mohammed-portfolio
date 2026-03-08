'use client';

import { useMemo, useState } from "react";
import { blogPostsSorted } from "@/content/blog";
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
  projectType: string;
  summary: string;
  whyItMatters: string;
  architectureSummary: string;
  impactMetrics: string[];
  productionCapabilities?: string[];
  behavioralSignals?: string[];
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

type BlogSignal = {
  slug: string;
  title: string;
  summary: string;
  targetCompanies: string[];
  keywords: string[];
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
    keywords: ["monitoring", "uptime", "incident", "reliability", "observability", "production", "sre"],
    evidence:
      "Built reliability-focused systems including NetPulse and real-time telemetry operations workflows.",
  },
  {
    label: "FinOps & Cost-Aware Scaling",
    weight: 8,
    keywords: ["finops", "cost", "fargate spot", "spot instances", "autoscaling", "queue depth"],
    evidence:
      "Implemented cost-aware autoscaling and spot-based worker strategy with DLQ recovery mechanisms.",
  },
  {
    label: "Infrastructure as Code (Terraform)",
    weight: 7,
    keywords: ["terraform", "iac", "infrastructure as code", "aws", "alb", "vpc", "eventbridge"],
    evidence:
      "Project narratives and runbooks reflect IaC-driven provisioning and repeatable cloud operations.",
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
    "pgbouncer",
    "mtls",
    "zero-trust",
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
    "fargate",
    "fargate spot",
    "finops",
    "eventbridge",
    "terraform",
    "dlq",
    "dead letter queue",
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
    "consul",
    "pprof",
    "prometheus",
    "grafana",
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

const flagshipProjectIds = new Set([
  "netpulse",
  "cloud-code-execution",
  "realtime-transit-telemetry",
]);

const projectSignals: ProjectSignal[] = projectsData.map((project) => {
  const seedKeywords = [
    ...(keywordOverrides[project.id] ?? []),
    ...tokenize(project.projectType),
    ...project.tags.map((tag) => normalize(tag)),
    ...tokenize(project.title),
    ...tokenize(project.description),
    ...tokenize(project.whyItMatters),
    ...tokenize(project.architectureSummary),
    ...project.impactMetrics.flatMap((item) => tokenize(item)),
    ...(project.productionCapabilities?.flatMap((item) => tokenize(item)) ?? []),
    ...(project.behavioralSignals?.flatMap((item) => tokenize(item)) ?? []),
    ...tokenize(project.hardProblem),
    ...(project.recentUpdates?.flatMap((item) => tokenize(item)) ?? []),
  ];

  const keywords = Array.from(new Set(seedKeywords)).slice(0, 80);

  return {
    id: project.id,
    title: project.title,
    projectType: project.projectType,
    summary: project.description,
    whyItMatters: project.whyItMatters,
    architectureSummary: project.architectureSummary,
    impactMetrics: project.impactMetrics,
    productionCapabilities: project.productionCapabilities,
    behavioralSignals: project.behavioralSignals,
    keywords,
    liveUrl: project.liveUrl,
    repoUrl: project.repoUrl,
    designUrl: project.systemDesignUrl,
    additionalLinks: project.additionalLinks,
    recentUpdates: project.recentUpdates,
  };
});

const blogSignals: BlogSignal[] = blogPostsSorted.map((post) => {
  const keywords = Array.from(
    new Set([
      ...tokenize(post.title),
      ...tokenize(post.summary),
      ...post.tags.flatMap((tag) => tokenize(tag)),
      ...post.targetCompanies.map((company) => normalize(company)),
      ...tokenize(post.hook.problem),
      ...tokenize(post.hook.stakes),
      ...tokenize(post.architecture.summary),
      ...post.stressTest.evidence.flatMap((item) => tokenize(item)),
      ...tokenize(post.bottleneckResolution.rootCause),
      ...tokenize(post.bottleneckResolution.solution),
      ...post.businessImpact.flatMap((item) => tokenize(item)),
    ])
  ).slice(0, 100);

  return {
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    targetCompanies: post.targetCompanies,
    keywords,
  };
});

const sampleJobDescription = `New Grad Software Engineer - Full Time
We are looking for an engineer who can build distributed backend systems, design reliable cloud APIs, and reason about scalability, observability, and performance tradeoffs. Experience with Terraform IaC, queue-based systems, DLQ recovery workflows, and cost-aware autoscaling (FinOps) is highly preferred.`;

const roleTemplates: RoleTemplate[] = [
  {
    title: "Hyper-Scale & Cloud-Native Environments (Amazon, Stripe, DoorDash)",
    alignment: [
      "Hyperscale Infrastructure & FinOps Alignment",
      "Operating at scale requires more than functional code; it requires surviving failure and ruthlessly optimizing cloud spend.",
      "Demonstrated strict adherence to Amazon's 'Frugality' and 'Operational Excellence' principles by architecting Fargate Spot FinOps and automated DLQ recovery mechanisms.",
      "AWS autoscaling + queue-depth telemetry aligns worker capacity to demand while targeting zero payload loss during simulated network partitions.",
    ],
    evidence: [
      "Core signals: FinOps, Fargate Spot, DLQ, zero data loss, autoscaling target-breach handling.",
    ],
  },
  {
    title: "Enterprise SaaS & Mission-Critical Infrastructure (Canonical, Veeva, Intuit)",
    alignment: [
      "Systems Reliability & Secure Cloud Primitives",
      "Enterprise infrastructure demands strict security and zero-downtime operations, especially in Day 2 reliability scenarios.",
      "I provision via Terraform (IaC), prioritize deep observability instrumentation, and design for fast breach detection before user-facing impact.",
      "I leverage AWS Fargate with Firecracker microVM isolation patterns plus secure service-to-service controls such as mTLS and hardened connection pooling.",
    ],
    evidence: [
      "Core signals: Firecracker microVMs, Terraform IaC, secure primitives, operational instrumentation.",
    ],
  },
  {
    title: "End-to-End Product Engineering & Delivery (GM, Konrad, Zip)",
    alignment: [
      "End-to-End Delivery & Operational Autonomy",
      "High-velocity teams need engineers who own features from local development through AWS production rollout.",
      "I do not stop at Node.js/Go implementation; I provision VPC and ALB pathways, wire CI/CD automation, and maintain observable runtime behavior post-deployment.",
      "Available immediately for hybrid integration in the GTA or remote EST collaboration.",
    ],
    evidence: [
      "Core signals: ownership, deployment autonomy, infra + app integration, fast team ramp-up.",
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
        const impactTokens = tokenize(project.impactMetrics.join(" "));
        const architectureTokens = tokenize(project.architectureSummary);
        const capabilityTokens = tokenize(project.productionCapabilities?.join(" ") ?? "");
        const behaviorTokens = tokenize(project.behavioralSignals?.join(" ") ?? "");
        const upgradeHits = computeKeywordHits(text, upgradeTokens);
        const impactHits = computeKeywordHits(text, impactTokens);
        const architectureHits = computeKeywordHits(text, architectureTokens);
        const capabilityHits = computeKeywordHits(text, capabilityTokens);
        const behaviorHits = computeKeywordHits(text, behaviorTokens);
        const flagshipBoost = flagshipProjectIds.has(project.id) && keywordHits > 0 ? 2 : 0;

        const projectScore = Math.min(
          12,
          keywordHits * 2 +
            Math.min(3, upgradeHits) +
            Math.min(3, impactHits + capabilityHits + architectureHits + behaviorHits) +
            flagshipBoost
        );

        const proofScore =
          (project.liveUrl ? 2 : 0) +
          (project.repoUrl ? 1 : 0) +
          (project.designUrl ? 1 : 0) +
          (project.impactMetrics.length > 0 ? 1 : 0);

        return {
          ...project,
          keywordHits,
          upgradeHits,
          impactHits,
          capabilityHits,
          architectureHits,
          behaviorHits,
          projectScore,
          proofScore,
        };
      })
      .filter((project) => project.keywordHits > 0 || project.impactHits > 0 || project.capabilityHits > 0)
      .sort((a, b) => b.projectScore - a.projectScore || b.proofScore - a.proofScore);

    const matchedBlogPosts = blogSignals
      .map((post) => {
        const keywordHits = computeKeywordHits(text, post.keywords);
        const companyHits = computeKeywordHits(
          text,
          post.targetCompanies.map((company) => normalize(company))
        );
        const blogScore = Math.min(4, keywordHits + companyHits * 2);
        return { ...post, keywordHits, companyHits, blogScore };
      })
      .filter((post) => post.keywordHits > 0 || post.companyHits > 0)
      .sort((a, b) => b.blogScore - a.blogScore || b.keywordHits - a.keywordHits);

    const skillCoverage = Math.min(
      50,
      matchedSkills.reduce((sum, signal) => sum + signal.signalScore, 0)
    );
    const projectCoverage = Math.min(
      24,
      matchedProjects.slice(0, 3).reduce((sum, project) => sum + project.projectScore, 0)
    );
    const proofDepth = Math.min(
      10,
      matchedProjects.slice(0, 3).reduce((sum, project) => sum + project.proofScore, 0)
    );
    const blogCoverage = Math.min(
      8,
      matchedBlogPosts.slice(0, 2).reduce((sum, post) => sum + post.blogScore, 0)
    );

    const stageKeywords = [
      "new grad",
      "recent university graduates",
      "new graduate",
      "entry level",
      "0-2 years",
      "junior",
      "engineering development program",
    ];
    const stageHits = computeKeywordHits(text, stageKeywords);
    const stageAlignment = Math.min(5, stageHits * 2);

    const logisticsKeywords = [
      "canada",
      "toronto",
      "in office",
      "4 days/week",
      "in-office",
      "work anywhere",
      "work authorization",
    ];
    const logisticsHits = computeKeywordHits(text, logisticsKeywords);
    const logisticsAlignment = Math.min(3, logisticsHits);

    const fitScore = Math.min(
      100,
      Math.round(
        skillCoverage +
          projectCoverage +
          proofDepth +
          blogCoverage +
          stageAlignment +
          logisticsAlignment
      )
    );

    const strongestSignals = matchedSkills.slice(0, 4).map((signal) => signal.label);
    const referencedUpdates = matchedProjects
      .slice(0, 2)
      .flatMap((project) => project.recentUpdates ?? [])
      .slice(0, 3);
    const referencedMetrics = matchedProjects
      .slice(0, 2)
      .flatMap((project) => project.impactMetrics)
      .slice(0, 3);
    const matchedProjectTypes = Array.from(
      new Set(matchedProjects.slice(0, 3).map((project) => project.projectType))
    );
    const flagshipMatches = matchedProjects.filter((project) => flagshipProjectIds.has(project.id)).length;
    const referencedBlogs = matchedBlogPosts.slice(0, 2).map((post) => post.title);

    const recruiterPitch = [
      `${profileData.name} now presents as a production-ready backend and infrastructure engineer with quantified project outcomes, architecture-first documentation, and reliability-first delivery.`,
      matchedProjects[0]
        ? `Top project match: ${matchedProjects[0].title} (${matchedProjects[0].whyItMatters})`
        : "Relevant project evidence is available across multiple live and documented portfolio projects.",
      matchedBlogPosts[0]
        ? `Top blog evidence: ${matchedBlogPosts[0].title} (${matchedBlogPosts[0].summary})`
        : "Engineering blog evidence is available for platform reliability and systems design discussions.",
      flagshipMatches > 0
        ? `Flagship systems aligned in this role fit: ${flagshipMatches}/3 (NetPulse, Cloud Code Execution, Real-Time Transit Telemetry).`
        : "Flagship systems are available and can be emphasized with role-specific keyword alignment.",
      "Profile focus: full-time software engineering roles (new grad 2026) with public demos, source code, system design docs, and measurable impact metrics.",
    ].join(" ");

    const scoreBreakdown = [
      { label: "Role + Stack Alignment", score: Math.round(skillCoverage), max: 50 },
      { label: "Systems + Project Relevance", score: Math.round(projectCoverage), max: 24 },
      { label: "Proof Depth (Live/Repo/Design/Metrics)", score: Math.round(proofDepth), max: 10 },
      { label: "Engineering Blog Relevance", score: Math.round(blogCoverage), max: 8 },
      { label: "New Grad Program Fit", score: Math.round(stageAlignment), max: 5 },
      { label: "Location / Logistics Match", score: Math.round(logisticsAlignment), max: 3 },
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
      ...(referencedMetrics.length
        ? ["", "Impact Metrics Referenced:", ...referencedMetrics.map((item) => `- ${item}`)]
        : []),
      ...(matchedProjectTypes.length
        ? ["", "Matched Project Types:", ...matchedProjectTypes.map((item) => `- ${item}`)]
        : []),
      ...(referencedBlogs.length
        ? ["", "Blog Evidence Referenced:", ...referencedBlogs.map((item) => `- ${item}`)]
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
      referencedMetrics,
      referencedBlogs,
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
            <div className="mt-4 grid gap-4 md:grid-cols-2">
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
              <p>- Pulls evidence from Core Infrastructure Engineering projects and Engineering Blog fields: architecture, upgrades, stress tests, and impact metrics.</p>
              <p>- Uses deterministic keyword + weighted scoring (no black-box generation).</p>
              <p>- Produces transparent score breakdown plus proof depth from live/repo/design/metrics signals.</p>
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
                      <p className="text-[10px] uppercase tracking-widest text-cyan-300/90">
                        {project.projectType}
                      </p>
                      <p className="text-sm font-semibold text-neutral-100">{project.title}</p>
                      <p className="mt-1 text-xs text-neutral-300">{project.whyItMatters}</p>
                      <p className="mt-1 text-[11px] text-neutral-400">
                        Architecture: {project.architectureSummary}
                      </p>
                      {project.impactMetrics.length ? (
                        <div className="mt-2 space-y-1 text-[11px] text-emerald-300/90">
                          <p>- {project.impactMetrics[0]}</p>
                        </div>
                      ) : null}
                      {project.productionCapabilities?.length ? (
                        <p className="mt-2 text-[11px] text-cyan-300/90">
                          Capability: {project.productionCapabilities[0]}
                        </p>
                      ) : null}
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
                            className={`rounded border px-2 py-1 text-[10px] uppercase tracking-widest ${
                              link.label.toLowerCase().includes("sre")
                                ? "border-red-500/40 text-red-300"
                                : "border-amber-400/40 text-amber-300"
                            }`}
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

              {analysis.referencedMetrics.length ? (
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-5 lg:col-span-3">
                  <p className="text-xs uppercase tracking-widest text-emerald-300">
                    Impact Metrics Considered
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-neutral-200">
                    {analysis.referencedMetrics.map((item) => (
                      <p key={item}>- {item}</p>
                    ))}
                  </div>
                </div>
              ) : null}

              {analysis.referencedBlogs.length ? (
                <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-5 lg:col-span-3">
                  <p className="text-xs uppercase tracking-widest text-cyan-300">
                    Blog Evidence Considered
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-neutral-200">
                    {analysis.referencedBlogs.map((item) => (
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
