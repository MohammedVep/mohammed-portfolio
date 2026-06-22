import { projectsData, type PortfolioProject } from "@/content/projects";

type ProjectWithSystemDesign = PortfolioProject & {
  systemDesignUrl: string;
};

const coreDesignIds = ["netpulse", "cloud-code-execution", "autoscale-os", "sentinel-mesh"] as const;

const coreDesignReasons: Record<(typeof coreDesignIds)[number], string> = {
  netpulse: "Reliability flagship: incidents, queueing, PgBouncer, mTLS, and alert lifecycle.",
  "cloud-code-execution": "Platform/security proof: sandboxed execution, queue/DLQ recovery, and worker isolation.",
  "autoscale-os": "Java/Kubernetes platform proof: autoscaling control loop, worker scheduling, metrics, and readiness.",
  "sentinel-mesh": "Security/backend proof: zero-trust policy evaluation, audit stream, trust map, and alerts.",
};

const systemDesignProjects = projectsData.filter(
  (project): project is ProjectWithSystemDesign => Boolean(project.systemDesignUrl),
);

const coreDesignProjects = coreDesignIds
  .map((id) => systemDesignProjects.find((project) => project.id === id))
  .filter((project): project is ProjectWithSystemDesign => Boolean(project));

const additionalDesignProjects = systemDesignProjects.filter(
  (project) => !coreDesignIds.includes(project.id as (typeof coreDesignIds)[number]),
);

export default function SystemDesigns() {
  return (
    <section id="system-designs" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">Core System Design Docs</h2>
            <p className="text-xs font-mono uppercase tracking-[0.45em] text-emerald-500">
              4 Primary Architecture Deep Dives
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            The main review path is intentionally narrow: four systems, each with a live endpoint,
            architecture summary, what broke / how it was fixed, metrics, and system design docs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {coreDesignProjects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col justify-between border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cyan-300/90">
                  Primary Design Doc
                </p>
                <h3 className="mt-2 text-base font-bold text-neutral-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {coreDesignReasons[project.id as (typeof coreDesignIds)[number]]}
                </p>
                <p className="mt-3 border-l-2 border-neutral-700 pl-3 text-xs leading-relaxed text-neutral-400">
                  {project.architectureSummary}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={project.systemDesignUrl}
                  className="rounded border border-cyan-400/40 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Open Design
                </a>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                  >
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {additionalDesignProjects.length ? (
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 font-mono">
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
              Additional Design Docs
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Supporting projects remain available for validation, but they are intentionally kept
              below the four core backend/platform systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {additionalDesignProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.systemDesignUrl}
                  className="rounded border border-neutral-700 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-cyan-400/60 hover:text-cyan-200"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
