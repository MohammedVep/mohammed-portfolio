'use client';

import Link from "next/link";
import { useState } from "react";
import { Bento } from "@/components/ui/bento";
import { blogPostsSorted } from "@/content/blog";
import { profileData } from "@/content/profile";
import { projectsData } from "@/content/projects";

export default function Hero() {
  const liveProjectCount = projectsData.filter((project) => Boolean(project.liveUrl)).length;
  const systemDesignCount = projectsData.filter((project) => Boolean(project.systemDesignUrl)).length;
  const blogPostCount = blogPostsSorted.length;
  const deploymentLinks = [
    { id: "netpulse", label: "NetPulse", signal: "netpulsemanage.dev" },
    { id: "sentinel-mesh", label: "SentinelMesh", signal: "sentinel-mesh.cloud" },
    { id: "cloud-code-execution", label: "Cloud Sandbox", signal: "cloudsandbox.space" },
    { id: "autoscale-os", label: "AutoScale OS", signal: "autoscale-os.dev" },
    { id: "realtime-transit-telemetry", label: "Transit Telemetry", signal: "realtimedashboard.dev" },
    { id: "mini-load-balancer", label: "Edge Balancer", signal: "miniloadbalancer.io" },
    { id: "ai-job-match-analysis", label: "AI Gateway Platform", signal: "sharedaigateway.com" },
  ]
    .map((item) => {
      const project = projectsData.find((candidate) => candidate.id === item.id);

      if (!project?.liveUrl) {
        return null;
      }

      return {
        ...item,
        url: project.liveUrl,
      };
    })
    .filter((item): item is { id: string; label: string; signal: string; url: string } =>
      Boolean(item)
    );
  const roleSummaryCards = [
    {
      title: "Enterprise SaaS New Grad",
      detail:
        "BCS 2026, 83.95% GPA, Java/Python/TypeScript foundation, and Toronto-area availability for office-based teams.",
    },
    {
      title: "Backend Engineer",
      detail: "Java/Python-ready fundamentals, Node.js APIs, queue-worker execution paths, Postgres/Redis persistence, and clear service boundaries.",
    },
    {
      title: "Platform Engineer",
      detail: "AWS ECS/Fargate, Terraform-managed topology, ALB deployment paths, and infrastructure-first design decisions.",
    },
    {
      title: "CS Fundamentals",
      detail:
        "Operating Systems, Distributed Systems (85%), Theory of Computing, data structures, algorithms, and databases.",
    },
  ];

  const baseTelemetry = [
    "[0.0002] CANDIDATE_PROFILE: backend_infrastructure_engineer",
    "[0.0005] ACTIVE_SIGNAL: flagship_systems_live",
    "[0.0008] ACTIVE_DEPLOYMENT: netpulsemanage.dev",
    "[0.0011] ACTIVE_DEPLOYMENT: cloudsandbox.space",
    "[0.0014] ACTIVE_DEPLOYMENT: sentinel-mesh.cloud",
    "[0.0017] ACTIVE_DEPLOYMENT: autoscale-os.dev",
    "[0.0020] CORE_STACK: java_go_node_kubernetes_terraform",
    "[0.0023] STATUS: available_onsite_hybrid_remote_est_edt",
    "_",
  ];

  const hoverTelemetry = [
    "[0.0002] CANDIDATE_PROFILE: backend_infrastructure_engineer",
    "[0.0005] FEATURED_SYSTEM: cloud_sandbox_execution",
    "[0.0008] FEATURED_SYSTEM: netpulse_zero_trust",
    "[0.0010] FEATURED_SYSTEM: edge_balancer_pprof",
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
            <Link
              href="/#featured-systems"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-400 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              View Flagship Systems
            </Link>
            <Link
              href="/#runbooks"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/50 hover:text-emerald-200"
            >
              View Runbooks
            </Link>
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
        <div className="mb-8 border-l-2 border-emerald-500 bg-neutral-950 px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-emerald-400">
            5-Second Summary
          </p>
          <p className="mt-3 max-w-4xl text-lg font-semibold leading-relaxed text-white md:text-xl">
            Backend / Systems Engineer building reliable distributed systems focused on concurrency,
            failure handling, observability, and scalable backend design.
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-neutral-300">
            Flagship project: NetPulse. Academic foundation includes Operating Systems,
            Distributed Systems (85%), Theory of Computing, Java, Python, database systems, and
            honours BCS degree proof.
          </p>
        </div>
        <div className="mb-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.03] p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                Current Public Deployments
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-300">
                Direct links to the active custom-domain systems reviewers can open without digging
                through repository notes.
              </p>
            </div>
            <Link
              href="/#projects"
              className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              View Project Details
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {deploymentLinks.map((deployment) => (
              <a
                key={deployment.id}
                href={deployment.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-neutral-800 bg-black p-4 transition hover:border-cyan-400/60"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  {deployment.signal}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{deployment.label}</p>
              </a>
            ))}
          </div>
        </div>
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
        <div className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-300">
            Enterprise SaaS Alignment Snapshot
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
            Fast scan for new-grad backend and enterprise SaaS teams: fundamentals, office readiness,
            communication through documentation, and shipped systems.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {roleSummaryCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-neutral-800 bg-black p-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{card.detail}</p>
              </div>
            ))}
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
            href={profileData.degreeProofUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            View Degree Proof
          </a>
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/50 hover:text-emerald-200"
          >
            View GitHub
          </a>
          <Link
            href="/#runbooks"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            View Runbooks
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
          >
            Read Post-Mortems
          </Link>
        </div>
        <Bento items={heroItems} />
      </div>
    </section>
  );
}
