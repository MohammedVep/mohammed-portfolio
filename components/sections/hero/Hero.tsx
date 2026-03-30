'use client';

import { useState } from "react";
import { Bento } from "@/components/ui/bento";
import { blogPostsSorted } from "@/content/blog";
import { profileData } from "@/content/profile";
import { projectsData } from "@/content/projects";

export default function Hero() {
  const liveProjectCount = projectsData.filter((project) => Boolean(project.liveUrl)).length;
  const systemDesignCount = projectsData.filter((project) => Boolean(project.systemDesignUrl)).length;
  const blogPostCount = blogPostsSorted.length;

  const baseTelemetry = [
    "[0.0002] CANDIDATE_PROFILE: backend_infrastructure_engineer",
    "[0.0005] ACTIVE_SIGNAL: flagship_systems_live",
    "[0.0008] CORE_STACK: go_node_terraform_fargate",
    "[0.0011] PRINCIPLES: frugality_operational_excellence",
    "[0.0014] STATUS: available_onsite_hybrid_remote_est_edt",
    "_",
  ];

  const hoverTelemetry = [
    "[0.0002] CANDIDATE_PROFILE: backend_infrastructure_engineer",
    "[0.0005] FEATURED_SYSTEM: cloud_code_execution_sre",
    "[0.0008] FEATURED_SYSTEM: netpulse_zero_trust",
    "[0.0010] FEATURED_SYSTEM: mini_load_balancer_pprof",
    "[0.0012] CONTACT_CHANNELS: email_linkedin_github",
    "_",
  ];

  const [telemetry, setTelemetry] = useState(baseTelemetry);

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
              Focused on SRE-grade platform delivery with infrastructure provisioning, cost-aware
              scaling, and production failure-recovery automation.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/#featured-systems"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-400 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              View Flagship Systems
            </a>
            <a
              href="/#runbooks"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/50 hover:text-emerald-200"
            >
              View Runbooks
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
          Reliability | Observability | FinOps | Operational Excellence
        </p>
        <p className="mb-1 inline-flex rounded border border-neutral-800 bg-neutral-950 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
          {profileData.availability}
        </p>
        <p className="mb-12 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          {profileData.location}
        </p>
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Live Systems</p>
            <p className="mt-2 text-2xl font-bold text-emerald-300">{liveProjectCount}</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Design Docs</p>
            <p className="mt-2 text-2xl font-bold text-cyan-300">{systemDesignCount}</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Engineering Posts</p>
            <p className="mt-2 text-2xl font-bold text-amber-300">{blogPostCount}</p>
          </div>
        </div>
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
            href="/#runbooks"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            View Runbooks
          </a>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
          >
            Read Post-Mortems
          </a>
        </div>
        <Bento items={heroItems} />
      </div>
    </section>
  );
}
