import Link from "next/link";

export default function MoveYSplashSystemDesignPage() {
  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">moveYSplash System Design</h1>
          <Link
            href="/#projects"
            className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-300"
          >
            Back to Portfolio
          </Link>
        </div>

        <div className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-sm text-neutral-300">
            Academic social platform project focused on responsive experience, search performance,
            and reliable SQL-backed content flows.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://move-y-splash-new.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/MohammedVep/MoveYSplashNew"
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
            <li>Deliver a smooth social content experience on desktop and mobile.</li>
            <li>Support fast search across growing post/user datasets.</li>
            <li>Maintain clear, secure user-authenticated data operations.</li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            High-Level Architecture
          </h2>
          <pre className="overflow-x-auto rounded border border-neutral-800 bg-black p-4 text-[11px] text-neutral-400">
            {`Next.js Client
     |
     v
App Routes + API Logic
     |
     v
Supabase (Auth + Postgres)
     |
     v
Search/Feed Queries -> Ranked Results -> UI Rendering`}
          </pre>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Key Data Flows
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>User authentication gates profile updates and content mutations.</li>
            <li>Feed retrieval joins author and content data for one-pass rendering.</li>
            <li>Search pipeline applies indexed filtering before response shaping.</li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Performance Strategy
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Optimized query patterns and indexing to reduce search latency.</li>
            <li>Split heavy UI paths and reused shared components for leaner bundles.</li>
            <li>Kept response payloads concise for faster interactive transitions.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">Tradeoffs</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Feature-rich feed experiences increase query complexity over time.</li>
            <li>Heavier interactivity can impact bundle size without careful splitting.</li>
            <li>Rapid academic delivery prioritizes velocity over deep infra hardening.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
