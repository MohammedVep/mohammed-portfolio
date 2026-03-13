import Link from "next/link";
import { projectsData } from "@/content/projects";

const cloudExecution = projectsData.find((project) => project.id === "cloud-code-execution");

const timeline = [
  {
    time: "14:07 UTC",
    event: "Target Breached",
    detail: "Queue depth crossed execution threshold; auto-scaling policy triggered worker expansion.",
  },
  {
    time: "14:09 UTC",
    event: "Desired Count Increased",
    detail: "Fargate Spot desired worker capacity raised to absorb burst payload demand.",
  },
  {
    time: "14:12 UTC",
    event: "DLQ Replay Sweep",
    detail: "EventBridge recovery cycle replayed DLQ backlog with no payload drop.",
  },
  {
    time: "14:16 UTC",
    event: "Steady State Restored",
    detail: "Queue depth normalized and running count converged to baseline.",
  },
];

export default function SREDashboardPage() {
  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-white">Operational Scaling Dashboard</h1>
          <Link
            href="/"
            className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
          >
            Back to Portfolio
          </Link>
        </div>

        <section className="mb-6 rounded-xl border border-red-500/30 bg-red-500/5 p-5 font-mono">
          <p className="text-xs uppercase tracking-[0.3em] text-red-300">Internal Preview Workspace</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            This workspace is used for scaling and recovery instrumentation review while public-facing
            recruiter links stay focused on completed production systems.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cloudExecution?.liveUrl ? (
              <a
                href={cloudExecution.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Cloud Execution API
              </a>
            ) : null}
            {cloudExecution?.systemDesignUrl ? (
              <a
                href={cloudExecution.systemDesignUrl}
                className="rounded border border-cyan-500/40 px-3 py-2 text-xs uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                System Design Doc
              </a>
            ) : null}
            {cloudExecution?.additionalLinks
              ?.filter((link) => !link.label.toLowerCase().includes("sre"))
              .map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  target={link.url.startsWith("/") ? undefined : "_blank"}
                  rel={link.url.startsWith("/") ? undefined : "noreferrer"}
                  className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-red-400 hover:text-red-200"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </section>

        <section className="mb-6 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400">CloudWatch Preview Snapshot</h2>
          <p className="mt-3 text-sm text-neutral-300">
            Desired vs. running worker trend preview used for internal validation of scaling behavior.
          </p>
          <div className="mt-4 overflow-hidden rounded border border-neutral-800 bg-black p-3">
            <img
              src="/media/projects/cloudwatch-dashboard-preview.svg"
              alt="CloudWatch preview showing desired and running worker counts during a burst window"
              className="w-full"
            />
          </div>
        </section>

        <section className="mb-6 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400">Desired vs Running (Preview)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Desired Worker Count</p>
              <p className="mt-2 text-3xl font-bold text-emerald-300">12</p>
              <p className="mt-1 text-xs text-neutral-400">Autoscaling policy output during breach window</p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Running Worker Count</p>
              <p className="mt-2 text-3xl font-bold text-cyan-300">12</p>
              <p className="mt-1 text-xs text-neutral-400">Converged state after Fargate Spot launch cycle</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-300">Target Breached Timeline</h2>
          <div className="mt-4 space-y-3">
            {timeline.map((row) => (
              <div key={`${row.time}-${row.event}`} className="rounded-lg border border-neutral-800 bg-black p-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">{row.time}</p>
                <p className="mt-1 text-sm font-semibold text-neutral-100">{row.event}</p>
                <p className="mt-1 text-sm text-neutral-300">{row.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
