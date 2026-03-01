import Link from "next/link";
import { profileData } from "@/content/profile";

export default function NetPulseSystemDesignPage() {
  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">NetPulse System Design</h1>
          <Link
            href="/#projects"
            className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-300"
          >
            Back to Portfolio
          </Link>
        </div>

        <div className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-sm text-neutral-300">
            A distributed uptime monitoring SaaS with multi-region probes, incident lifecycle
            automation, and reliability-first alerting.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={profileData.netPulseLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Live Demo
            </a>
            <a
              href={profileData.netPulseRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
            >
              Source Repository
            </a>
          </div>
        </div>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">Design Goals</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Capture endpoint health across regions with predictable probe cadence.</li>
            <li>Reduce false-positive incidents by requiring consecutive failures before open.</li>
            <li>Keep tenant data isolated while supporting organization-level dashboards.</li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            High-Level Architecture
          </h2>
          <pre className="overflow-x-auto rounded border border-neutral-800 bg-black p-4 text-[11px] text-neutral-400">
            {`Client Dashboard
      |
      v
API Gateway -> Lambda API -> DynamoDB (checks/incidents)
      |              |
      |              +-> WebSocket broadcaster -> Real-time dashboard updates
      |
EventBridge Scheduler -> SQS Queue -> Probe Workers (multi-region)
                                  |
                                  +-> Incident Evaluator + Alert Notifier`}
          </pre>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Data Model (Core)
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>
              <span className="font-semibold text-neutral-100">Endpoint:</span> org-scoped target
              URL, probe settings, status metadata.
            </li>
            <li>
              <span className="font-semibold text-neutral-100">Check Result:</span> timestamped
              probe outcome with latency and region.
            </li>
            <li>
              <span className="font-semibold text-neutral-100">Incident:</span> open/resolve
              lifecycle with deduplicated notifications.
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Reliability Decisions
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Two consecutive failures are required before opening an incident.</li>
            <li>Alert dedupe window limits repeated notifications during the same outage window.</li>
            <li>Check data has retention boundaries to keep storage growth predictable.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">Tradeoffs</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Short probe intervals improve freshness but increase cost and noise risk.</li>
            <li>Multi-region checks improve confidence but add orchestration complexity.</li>
            <li>Detailed incident history helps diagnosis but requires retention management.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
