'use client';

import { useState } from "react";
import { Bento } from "@/components/ui/bento";
import { profileData } from "@/content/profile";

export default function Hero() {
  const baseTelemetry = [
    "[0.0002] CANDIDATE_PROFILE: new_grad_software_engineer_2026",
    "[0.0005] ACTIVE_DEPLOYMENT: netpulse_live",
    "[0.0008] CORE_STACK: go_typescript_python_sql_aws",
    "[0.0011] FOCUS: distributed_systems_and_infrastructure",
    "[0.0014] STATUS: open_to_interview",
    "_",
  ];

  const hoverTelemetry = [
    "[0.0002] CANDIDATE_PROFILE: new_grad_software_engineer_2026",
    "[0.0005] ACTIVE_DEPLOYMENT: netpulse_live",
    "[0.0008] PROJECT_LINK: moveysplash_live",
    "[0.0010] RESUME_ASSET: downloadable_doc_ready",
    "[0.0012] CONTACT_CHANNELS: email_phone_linkedin",
    "_",
  ];

  const [telemetry, setTelemetry] = useState(baseTelemetry);
  const systemDesignBriefMailto = `mailto:${profileData.email}?subject=System%20Design%20Brief%20Request&body=Hi%20Mohammed%2C%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20a%20system%20design%20brief%20for%20a%20specific%20project.%0A%0AProject%3A%20%0ARole%3A%20%0ACompany%3A%20`;

  const heroItems = [
    {
      id: "archetype",
      className: "col-span-12 lg:col-span-5",
      content: (
        <div
          className="flex h-full flex-col justify-between"
          onMouseEnter={() => setTelemetry(hoverTelemetry)}
          onMouseLeave={() => setTelemetry(baseTelemetry)}
        >
          <div>
            <h3 className="text-lg font-bold font-mono text-emerald-500 underline decoration-2 underline-offset-4">
              [Engineering Identity]
            </h3>
            <p className="mt-4 leading-relaxed text-neutral-300">
              {profileData.summary}
            </p>
            <p className="mt-4 text-sm text-neutral-400">
              Built and shipped distributed systems and cloud-backed platforms including
              NetPulse, Cloud Code Execution, and a real-time telemetry pipeline.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profileData.netPulseLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-400 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              View NetPulse
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/50 hover:text-emerald-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "telemetry",
      className: "col-span-12 lg:col-span-7",
      content: (
        <div className="overflow-hidden font-mono text-[10px] text-neutral-500 opacity-80">
          <div className="mb-2 text-emerald-500">{'// LIVE_CANDIDATE_SIGNAL: PORTFOLIO_NODE_01'}</div>
          {telemetry.map((line, index) => {
            const isActiveSignal =
              line.includes("ACTIVE_DEPLOYMENT") || line.includes("PROJECT_LINK");
            const isCursor = line === "_";
            return (
              <div
                key={`${line}-${index}`}
                className={
                  isCursor ? "animate-pulse" : isActiveSignal ? "text-emerald-400" : undefined
                }
              >
                {line}
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <h1 className="mb-2 text-5xl font-bold tracking-tighter text-white md:text-6xl">
          {profileData.name}
        </h1>
        <p className="mb-2 font-mono text-emerald-300">{profileData.title}</p>
        <p className="mb-2 max-w-3xl text-sm leading-relaxed text-neutral-300">{profileData.summary}</p>
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          Reliability | Observability | Performance
        </p>
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          {profileData.location}
        </p>
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200"
          >
            Download Resume
          </a>
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/50 hover:text-emerald-200"
          >
            View GitHub
          </a>
          <a
            href={systemDesignBriefMailto}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Request System Design Brief
          </a>
        </div>
        <Bento items={heroItems} />
      </div>
    </section>
  );
}
