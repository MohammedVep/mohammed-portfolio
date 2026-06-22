import { projectsData, type PortfolioProject } from "@/content/projects";

type ProjectWithSystemDesign = PortfolioProject & {
  systemDesignUrl: string;
};

const systemDesignProjects = projectsData.filter(
  (project): project is ProjectWithSystemDesign => Boolean(project.systemDesignUrl),
);

const netPulse = systemDesignProjects.find((project) => project.id === "netpulse");
const otherDesignProjects = systemDesignProjects.filter((project) => project.id !== "netpulse");

export default function SystemDesigns() {
  return (
    <section id="system-designs" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">System Design Docs</h2>
            <p className="text-xs font-mono uppercase tracking-[0.45em] text-emerald-500">
              {systemDesignProjects.length} Architecture Deep Dives
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            Dedicated design pages for the systems behind the portfolio: service-mesh policy,
            autoscaling control loops, routing, queues, telemetry, AI evidence grounding,
            full-stack product flows, and NetPulse reliability upgrades.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {netPulse ? (
            <article className="border border-cyan-500/30 bg-neutral-950 p-5 font-mono">
              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                Flagship Design Track
              </p>
              <h3 className="mt-2 text-xl font-bold text-neutral-100">{netPulse.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {netPulse.architectureSummary}
              </p>

              {netPulse.phaseImprovements?.length ? (
                <div className="mt-5 space-y-3">
                  {netPulse.phaseImprovements.map((item) => (
                    <div
                      key={`${netPulse.id}-${item.phase}`}
                      className="border border-neutral-800 bg-black p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                          {item.phase}
                        </p>
                        <span className="rounded border border-neutral-700 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-400">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="mt-2 text-sm font-semibold text-neutral-100">{item.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-300">{item.summary}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={netPulse.systemDesignUrl}
                  className="rounded border border-cyan-400/50 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Open NetPulse System Design
                </a>
                {netPulse.liveUrl ? (
                  <a
                    href={netPulse.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            {otherDesignProjects.map((project) => (
              <article
                key={project.id}
                className="border border-neutral-800 bg-neutral-950 p-5 font-mono"
              >
                <p className="text-[10px] uppercase tracking-widest text-cyan-300/90">
                  {project.projectType}
                </p>
                <h3 className="mt-2 text-base font-bold text-neutral-100">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {project.architectureSummary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded border border-neutral-700 bg-black px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 space-y-1 text-[11px] text-emerald-300/90">
                  {project.productionCapabilities?.slice(0, 2).map((capability) => (
                    <p key={`${project.id}-${capability}`}>- {capability}</p>
                  ))}
                </div>
                {project.recentUpdates?.[0] ? (
                  <p className="mt-3 text-[11px] leading-relaxed text-amber-300/90">
                    Latest: {project.recentUpdates[0]}
                  </p>
                ) : null}
                <a
                  href={project.systemDesignUrl}
                  className="mt-4 inline-flex rounded border border-cyan-400/40 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Open System Design
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
