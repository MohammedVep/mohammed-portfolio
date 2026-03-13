import Link from "next/link";
import { profileData } from "@/content/profile";

export default function AIRoleFitSystemDesignPage() {
  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">AI Role Fit System Design</h1>
          <div className="flex flex-wrap gap-2">
            <a
              href={profileData.aiRoleFitLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              AI Live Demo
            </a>
            <Link
              href="/#role-fit"
              className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-300"
            >
              Back to Role Fit
            </Link>
          </div>
        </div>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-sm text-neutral-300">
            A deterministic, evidence-first scoring pipeline that maps job descriptions to
            verifiable portfolio signals. The design avoids black-box claims and keeps each output
            tied to observable project links and documented upgrades.
          </p>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">Design Goals</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Generate recruiter-ready fit briefs grounded in concrete project evidence.</li>
            <li>Keep scoring transparent through explicit weighted categories.</li>
            <li>Auto-refresh alignment when project metadata changes in Core Infrastructure Engineering.</li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            High-Level Pipeline
          </h2>
          <pre className="overflow-x-auto rounded border border-neutral-800 bg-black p-4 text-[11px] text-neutral-400">
            {`Job Description Input
      |
      v
Tokenizer + Keyword Normalizer
      |
      v
Signal Matcher
  - Skill Signals
  - Project Signals (tags + hard problems + recent upgrades)
      |
      v
Weighted Scoring Engine
  - Role + Stack Alignment
  - Project Evidence Match
  - New Grad Program Fit
  - Location / Logistics Match
      |
      v
Fit Brief Generator
  - Score Breakdown
  - Recruiter Summary
  - Matched Projects + Proof Links`}
          </pre>
        </section>

        <section className="mb-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Production-Grade Capabilities
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-200">
            <li>Deterministic scoring implementation with fixed weighting and reproducible output.</li>
            <li>Evidence links sourced directly from live portfolio project records.</li>
            <li>Automatic coverage of new upgrades through `recentUpdates` signal ingestion.</li>
            <li>Clipboard-ready structured brief for application workflow speed.</li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Reliability and Integrity Controls
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Stop-word filtering and keyword normalization reduce noisy text matching.</li>
            <li>Category caps prevent single-signal overfitting.</li>
            <li>Project relevance is accompanied by direct live/repo/system-design links for validation.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Extension Plan
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Add role-specific profile templates (backend-heavy, systems-heavy, platform-heavy).</li>
            <li>Introduce optional confidence intervals for sparse job descriptions.</li>
            <li>Add export mode for one-click application packet generation.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
