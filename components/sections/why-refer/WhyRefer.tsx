import Link from "next/link";
import { profileData } from "@/content/profile";

const referralSignals = [
  {
    title: "Verified CS Foundation",
    detail:
      "Honours BCS (2026), Operating Systems, Distributed Systems (85%), Theory of Computing, algorithms, and databases.",
  },
  {
    title: "Reviewable Proof of Work",
    detail:
      "Four core backend/platform systems pair public deployments with architecture docs, failure notes, and explicit tradeoffs.",
  },
  {
    title: "Platform Judgment",
    detail:
      "Scale-to-zero is presented as a reliability decision: durable queue state, workload eligibility, 0-to-N wake-up, readiness, and cold-start cost.",
  },
  {
    title: "Ownership + Communication",
    detail:
      "System-design briefs and incident-style posts make technical decisions easy to inspect and create concrete interview discussion points.",
  },
  {
    title: "Operational Consistency",
    detail:
      "Long-term Amazon operations experience supports a credible record of reliability, safety, deadline discipline, and adapting under peak load.",
  },
  {
    title: "Low Logistics Friction",
    detail: `${profileData.workAuthorization} Based in Brampton and available for on-site, hybrid, or remote EST/EDT roles.`,
  },
] as const;

export default function WhyRefer() {
  return (
    <section id="why-refer" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-mono text-xs uppercase tracking-[0.5em] text-amber-300">
            Referral_Decision_Brief
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold text-white md:text-4xl">
            Why Refer Mohammed Vepari?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-neutral-300">
            For SWA and new-grad software engineering programs: a backend/platform candidate with
            verified fundamentals, public systems, and enough documentation for a referrer to
            evaluate the work before attaching their name to it.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {referralSignals.map((signal) => (
              <article key={signal.title} className="border border-neutral-800 bg-neutral-950 p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{signal.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-amber-300 bg-amber-300/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-300">
              What a Referral Endorses
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200">
              A work-authorized early-career engineer who can discuss Java, backend services,
              distributed systems, cloud infrastructure, and the tradeoffs behind his own work.
              The portfolio reduces referral uncertainty; it does not claim to guarantee an
              interview or replace the coding and interview process.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded bg-amber-300 px-4 py-3 text-xs font-mono font-bold uppercase tracking-widest text-black transition hover:bg-amber-200"
            >
              Open Referral Packet
            </Link>
            <Link
              href="/blog/scale-to-zero-without-losing-work"
              className="rounded border border-amber-400/40 px-4 py-3 text-xs font-mono uppercase tracking-widest text-amber-300 transition hover:border-amber-300"
            >
              Review Platform Decision
            </Link>
            <a
              href={`mailto:${profileData.email}`}
              className="rounded border border-emerald-500/40 px-4 py-3 text-xs font-mono uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300"
            >
              Email Mohammed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
