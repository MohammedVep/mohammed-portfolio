'use client';

import { useMemo, useState } from "react";
import { profileData } from "@/content/profile";

type SkillSignal = {
  label: string;
  weight: number;
  keywords: string[];
  evidence: string;
};

type ProjectSignal = {
  title: string;
  summary: string;
  keywords: string[];
  liveUrl?: string;
  repoUrl?: string;
  designUrl?: string;
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
      "Implemented backend workflows for NetPulse and tutoring management system with production-oriented API design.",
  },
  {
    label: "Core Languages (Java / Python / Rust)",
    weight: 14,
    keywords: ["java", "python", "rust", "typescript", "javascript"],
    evidence:
      "Strong language alignment with New Grad roles requiring Java or Python and modern TypeScript/JavaScript delivery.",
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
      "Foundational CS focus from coursework and algorithmic problem solving used in portfolio projects.",
  },
  {
    label: "Reliability & Monitoring",
    weight: 8,
    keywords: ["monitoring", "uptime", "incident", "reliability", "observability", "production"],
    evidence:
      "Built NetPulse as a distributed uptime monitoring SaaS with incident lifecycle and alerting logic.",
  },
  {
    label: "Performance & Problem Solving",
    weight: 7,
    keywords: ["performance", "optimiz", "latency", "algorithms", "scalable", "scale"],
    evidence:
      "Improved moveYSplash search performance by 90% and applied algorithm-focused optimization in coursework and projects.",
  },
  {
    label: "Communication & Professional Standards",
    weight: 6,
    keywords: ["communication", "written", "verbal", "english", "integrity", "honesty", "work ethic"],
    evidence:
      "Portfolio and resume emphasize delivery clarity, reliability, and professional communication standards.",
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

const projectSignals: ProjectSignal[] = [
  {
    title: "NetPulse",
    summary:
      "Distributed uptime monitoring SaaS with scheduled checks, incident workflows, and operational visibility.",
    keywords: [
      "monitoring",
      "uptime",
      "incident",
      "alert",
      "reliability",
      "backend",
      "node",
      "api",
      "distributed",
      "aws",
      "saas",
    ],
    liveUrl: profileData.netPulseLiveUrl,
    repoUrl: profileData.netPulseRepoUrl,
    designUrl: "/system-design/netpulse",
  },
  {
    title: "moveYSplash",
    summary:
      "Social platform project focused on search speed, responsive UX, and SQL-backed content workflows.",
    keywords: [
      "social",
      "frontend",
      "react",
      "next.js",
      "search",
      "performance",
      "sql",
      "supabase",
      "full stack",
      "web",
    ],
    liveUrl: "https://move-y-splash-new.vercel.app",
    repoUrl: "https://github.com/MohammedVep/MoveYSplashNew",
    designUrl: "/system-design/moveysplash",
  },
  {
    title: "Online Tutoring Management System",
    summary:
      "Capstone full-stack application with scheduling, authentication, and student/tutor workflow support.",
    keywords: [
      "full stack",
      "scheduling",
      "auth",
      "authentication",
      "angular",
      "react",
      "node",
      "sql",
      "capstone",
      "web app",
    ],
  },
  {
    title: "Cloud Code Execution Environment",
    summary:
      "Cloud code execution platform upgraded with App Runner web delivery and ALB-backed execution API.",
    keywords: [
      "code execution",
      "compiler",
      "sandbox",
      "backend",
      "api",
      "queue",
      "worker",
      "cloud",
      "aws",
      "distributed",
      "runtime",
      "security",
    ],
    liveUrl: "https://42mtnmhqya.us-east-1.awsapprunner.com/",
  },
  {
    title: "Real-Time Transit Telemetry Dashboard",
    summary:
      "Real-time telemetry dashboard for transit operations visibility, signal tracking, and fast data interpretation.",
    keywords: [
      "real-time",
      "telemetry",
      "dashboard",
      "streaming",
      "data visualization",
      "frontend",
      "monitoring",
      "analytics",
      "operations",
      "transportation",
      "transit",
    ],
    liveUrl:
      "http://realtimetransittelemetryst-dashboardbucket5758873d-fjkmwbutvpc8.s3-website-us-east-1.amazonaws.com",
  },
];

const sampleJobDescription = `New Grad Software Engineer - Full Time
We are looking for an engineer who can build full-stack web applications, work across React/TypeScript and Node.js APIs, and write efficient SQL queries. You should care about reliability, testing, and performance optimization.`;

const normalize = (value: string) => value.toLowerCase();

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
        const hits = computeKeywordHits(text, project.keywords);
        const projectScore = Math.min(10, hits * 3);
        return { ...project, hits, projectScore };
      })
      .filter((project) => project.hits > 0)
      .sort((a, b) => b.projectScore - a.projectScore || b.hits - a.hits);

    const skillCoverage = Math.min(
      65,
      matchedSkills.reduce((sum, signal) => sum + signal.signalScore, 0)
    );
    const projectCoverage = Math.min(
      25,
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

    const recruiterPitch = [
      `${profileData.name} shows strong alignment for this role through stack fit (Java/Python/TypeScript/React), practical full-stack delivery, and production-style project evidence.`,
      matchedProjects[0]
        ? `Most relevant project: ${matchedProjects[0].title} (${matchedProjects[0].summary})`
        : "Relevant project evidence is available across NetPulse, moveYSplash, and capstone work.",
      "Profile focus: full-time New Grad Software Engineer (2026) with public demos, source code, and system design documentation.",
    ].join(" ");

    const scoreBreakdown = [
      { label: "Role + Stack Alignment", score: Math.round(skillCoverage), max: 65 },
      { label: "Project Evidence Match", score: Math.round(projectCoverage), max: 25 },
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
