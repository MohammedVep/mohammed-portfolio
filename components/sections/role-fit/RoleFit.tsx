'use client';

import { useMemo, useState } from "react";
import { profileData } from "@/content/profile";

type SkillSignal = {
  label: string;
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
    keywords: ["react", "next.js", "nextjs", "typescript", "javascript", "frontend", "ui"],
    evidence:
      "Built portfolio, moveYSplash, and tutoring interfaces with reusable components and responsive UX.",
  },
  {
    label: "Backend API Development",
    keywords: ["node", "backend", "api", "rest", "server", "services"],
    evidence:
      "Implemented backend workflows for NetPulse and tutoring management system with production-oriented API design.",
  },
  {
    label: "Database Engineering",
    keywords: ["sql", "postgres", "postgresql", "mysql", "supabase", "database", "schema"],
    evidence:
      "Shipped SQL-backed systems and optimized query patterns for performance and data reliability.",
  },
  {
    label: "Reliability & Monitoring",
    keywords: ["monitoring", "uptime", "incident", "reliability", "observability", "production"],
    evidence:
      "Built NetPulse as a distributed uptime monitoring SaaS with incident lifecycle and alerting logic.",
  },
  {
    label: "Performance & Problem Solving",
    keywords: ["performance", "optimiz", "latency", "algorithms", "scalable", "scale"],
    evidence:
      "Improved moveYSplash search performance by 90% and applied algorithm-focused optimization in coursework and projects.",
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
      "Cloud API project for isolated code execution workflows with queue/worker reliability and runtime controls.",
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
    liveUrl: "http://ccee-api-alb-371008494.us-east-1.elb.amazonaws.com",
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
        return { ...signal, hits };
      })
      .filter((signal) => signal.hits > 0)
      .sort((a, b) => b.hits - a.hits);

    const matchedProjects = projectSignals
      .map((project) => {
        const hits = computeKeywordHits(text, project.keywords);
        return { ...project, hits };
      })
      .filter((project) => project.hits > 0)
      .sort((a, b) => b.hits - a.hits);

    const skillCoverage = Math.min(60, Math.round((matchedSkills.length / skillSignals.length) * 60));
    const projectCoverage = Math.min(30, Math.round((matchedProjects.length / projectSignals.length) * 30));
    const newGradBoost =
      text.includes("new grad") || text.includes("entry level") || text.includes("junior") ? 10 : 5;
    const fitScore = Math.min(100, skillCoverage + projectCoverage + newGradBoost);

    const strongestSignals = matchedSkills.slice(0, 3).map((signal) => signal.label);

    const recruiterPitch = [
      `${profileData.name} is a strong match for this role based on proven full-stack delivery across React/Next.js, Node.js APIs, and SQL-backed systems.`,
      matchedProjects[0]
        ? `Most relevant project: ${matchedProjects[0].title} (${matchedProjects[0].summary})`
        : "Relevant project evidence is available across NetPulse, moveYSplash, and capstone work.",
      "Profile focus: full-time New Grad Software Engineer (2026) with public demos, source code, and system design documentation.",
    ].join(" ");

    const briefText = [
      `Role Fit Score: ${fitScore}/100`,
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
                <p className="mt-2 text-sm text-neutral-400">
                  Calculated from role keyword coverage + project relevance signals.
                </p>
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
