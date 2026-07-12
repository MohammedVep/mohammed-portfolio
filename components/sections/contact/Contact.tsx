'use client';

import Link from "next/link";
import { MotionDiv } from "@/components/ui/motion";
import { profileData } from "@/content/profile";
import { projectsData } from "@/content/projects";

const liveAppOrder = [
  "netpulse",
  "sentinel-mesh",
  "cloud-code-execution",
  "autoscale-os",
  "realtime-transit-telemetry",
  "mini-load-balancer",
  "ai-job-match-analysis",
] as const;

const liveAppLabels: Record<(typeof liveAppOrder)[number], string> = {
  netpulse: "NetPulse",
  "sentinel-mesh": "SentinelMesh",
  "cloud-code-execution": "Cloud Sandbox",
  "autoscale-os": "AutoScale OS",
  "realtime-transit-telemetry": "Transit Telemetry",
  "mini-load-balancer": "Edge Balancer",
  "ai-job-match-analysis": "AI Gateway Platform",
};

export default function Contact() {
  const referralEmailHref = `mailto:${profileData.email}?subject=${encodeURIComponent(
    "SWA / New Grad Software Engineering Referral - Mohammed Vepari"
  )}&body=${encodeURIComponent(
    "Hi Mohammed, I reviewed your portfolio and would like to discuss an SWA or new-grad software engineering referral.\n\nRole or program link:\nCompany:\nNext step:"
  )}`;
  const liveApps = liveAppOrder
    .map((id) => projectsData.find((project) => project.id === id))
    .filter(
      (project): project is (typeof projectsData)[number] => Boolean(project?.liveUrl)
    )
    .map((project) => ({
      id: project.id as (typeof liveAppOrder)[number],
      url: project.liveUrl as string,
    }));

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact" className="border-t border-neutral-900 bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-3 text-center text-3xl font-bold text-white">Contact</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-400">
            I am actively seeking full-time New Grad Software Engineer roles (2026).
            I have shipped public, production-style projects with live demos and source code.
            I am legally authorized to work in Canada without employer sponsorship. I am based in
            Brampton and available for on-site, hybrid, or remote roles
            aligned with EST/EDT working hours.
            The fastest way to reach me is by email.
          </p>

          <div className="mx-auto mb-8 max-w-4xl rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-300">
              SWA / New Grad Referral Packet
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              Everything needed for a quick, evidence-based referral review
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-300">
              Honours BCS degree, resume, four core backend/platform systems, and a concise
              scale-to-zero design showing durable queueing, 0-to-N recovery, readiness, and
              cold-start tradeoffs. I can discuss every claim from code and architecture.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300"
              >
                Resume
              </a>
              <a
                href={profileData.degreeProofUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-cyan-500/40 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300"
              >
                Degree Proof
              </a>
              <Link
                href="/#featured-systems"
                className="rounded border border-neutral-700 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-neutral-200 transition hover:border-neutral-500"
              >
                Four Core Systems
              </Link>
              <Link
                href="/blog/scale-to-zero-without-losing-work"
                className="rounded border border-amber-400/40 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-amber-300 transition hover:border-amber-300"
              >
                Scale-to-Zero Design
              </Link>
              <a
                href={referralEmailHref}
                className="rounded bg-amber-300 px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black transition hover:bg-amber-200"
              >
                Discuss a Referral
              </a>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profileData.email}`}
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">Email</p>
              <p className="mt-2 text-emerald-300">{profileData.email}</p>
            </a>
            <a
              href={`tel:${profileData.phone.replace(/[^\d+]/g, "")}`}
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">Phone</p>
              <p className="mt-2 text-emerald-300">{profileData.phone}</p>
            </a>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">LinkedIn</p>
              <p className="mt-2 text-emerald-300">linkedin.com/in/mohammed-v-2094b222a</p>
            </a>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">GitHub</p>
              <p className="mt-2 text-emerald-300">github.com/MohammedVep</p>
            </a>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-center text-[10px] uppercase tracking-[0.35em] text-emerald-500">
              Live Portfolio Apps
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {liveApps.map((app) => (
                <a
                  key={app.id}
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-400/60 hover:text-emerald-200"
                >
                  {liveAppLabels[app.id]} Live
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              Download Resume
            </a>
            <a
              href={profileData.degreeProofUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View Degree Proof
            </a>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
