import { improvementsUpdatedAt, latestImprovements } from "@/content/updates";

export default function LatestImprovements() {
  return (
    <section id="improvements" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-white">Latest Improvements</h2>
        <p className="mb-4 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Updated {improvementsUpdatedAt}
        </p>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-neutral-300">
          Snapshot of recent website and portfolio application upgrades, each with direct proof
          links for fast recruiter validation.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestImprovements.map((item) => (
            <article key={item.id} className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">{item.scope}</p>
              <h3 className="mt-2 text-base font-semibold text-neutral-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item.detail}</p>
              <a
                href={item.proofHref}
                className="mt-4 inline-flex rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                {item.proofLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

