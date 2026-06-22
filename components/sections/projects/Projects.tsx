import { projectsData } from "@/content/projects";

const additionalProjectIds = [
  "mini-load-balancer",
  "realtime-transit-telemetry",
  "ai-job-match-analysis",
  "moveysplash",
] as const;

const additionalPositioning: Record<(typeof additionalProjectIds)[number], string> = {
  "mini-load-balancer":
    "Go networking fundamentals and failure-handling proof; kept lower so the page stays focused on current platform/security systems.",
  "realtime-transit-telemetry":
    "Realtime dashboard and stream-correctness proof; useful support evidence, but secondary to the core backend/platform brand.",
  "ai-job-match-analysis":
    "Applied AI product proof; kept lower so AI does not distract from the stronger infrastructure and backend signal.",
  moveysplash:
    "Academic full-stack product proof; useful for product delivery context, but lower priority than infra/backend systems.",
};

const linkClass =
  "rounded border px-3 py-2 text-[10px] uppercase tracking-widest transition";

export default function Projects() {
  const additionalProjects = additionalProjectIds
    .map((id) => projectsData.find((project) => project.id === id))
    .filter((project): project is (typeof projectsData)[number] => Boolean(project));

  return (
    <section id="projects" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.45em] text-neutral-500">
            Additional_Projects
          </p>
          <h2 className="text-2xl font-bold text-white">Supporting Work, Kept Below the Main Proof</h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-300">
            These projects are still useful proof, but they are intentionally lower on the page so
            recruiters first see the four strongest backend/platform systems: NetPulse, Cloud
            Sandbox, AutoScale OS, and SentinelMesh.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {additionalProjects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cyan-300/90">
                  {project.projectType}
                </p>
                <h3 className="mt-3 text-lg font-bold text-neutral-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {project.whyItMatters}
                </p>
                <p className="mt-3 rounded border border-neutral-800 bg-black p-3 text-[11px] leading-relaxed text-neutral-400">
                  {additionalPositioning[project.id as (typeof additionalProjectIds)[number]]}
                </p>

                <div className="mt-4 space-y-2 text-[11px] text-emerald-300/90">
                  {project.impactMetrics.slice(0, 2).map((metric, index) => (
                    <p key={`${project.id}-additional-metric-${index}`}>- {metric}</p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded border border-neutral-700 bg-black px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkClass} border-emerald-500/40 text-emerald-300 hover:border-emerald-300 hover:text-emerald-200`}
                  >
                    Live
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkClass} border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-neutral-100`}
                  >
                    Repo
                  </a>
                ) : null}
                {project.systemDesignUrl ? (
                  <a
                    href={project.systemDesignUrl}
                    className={`${linkClass} border-cyan-400/40 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200`}
                  >
                    Design
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
