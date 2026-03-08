import { projectsData } from "@/content/projects";

const flagshipIds = ["netpulse", "cloud-code-execution", "realtime-transit-telemetry"] as const;

const architectureSnapshots: Record<(typeof flagshipIds)[number], string> = {
  netpulse: `Client Dashboard
      |
      v
Monitoring API
      |
      v
Regional Check Workers
      |
      v
Postgres + Redis
      |
      v
Alerts + Status Timeline`,
  "cloud-code-execution": `Client UI
   |
   v
Control API (ALB)
   |
   v
Queue + DLQ Orchestrator
   |
   v
Fargate Spot Worker Pool
   |
   v
Result Store + Recovery Replay`,
  "realtime-transit-telemetry": `Transit Feed Ingestion
        |
        v
Telemetry Processor
        |
        v
Stream Buffer + Event Store
        |
        v
WebSocket Push Layer
        |
        v
Operations Dashboard`,
};

export default function FeaturedSystems() {
  const projects = flagshipIds
    .map((id) => projectsData.find((project) => project.id === id))
    .filter((project): project is (typeof projectsData)[number] => Boolean(project));

  return (
    <section id="featured-systems" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Featured_Systems
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-neutral-300">
          Three flagship systems selected for fast recruiter review. Each includes architecture
          snapshot, measurable impact, and direct links to live evidence.
        </p>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <p className="text-[10px] uppercase tracking-widest text-cyan-300/90">
                {project.projectType}
              </p>
              <h3 className="mt-2 text-lg font-bold text-neutral-100">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{project.whyItMatters}</p>

              <div className="mt-3 space-y-1 text-[11px] text-emerald-300/90">
                {project.productionCapabilities?.slice(0, 3).map((capability, index) => (
                  <p key={`${project.id}-capability-${index}`}>- {capability}</p>
                ))}
              </div>

              <div className="mt-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-emerald-500">
                  Architecture Snapshot
                </p>
                <pre className="overflow-x-auto rounded border border-neutral-800 bg-black p-3 text-[10px] text-neutral-400">
                  {architectureSnapshots[project.id as (typeof flagshipIds)[number]]}
                </pre>
              </div>

              <div className="mt-4 space-y-1 text-[11px] text-neutral-300">
                {project.impactMetrics.slice(0, 2).map((metric, index) => (
                  <p key={`${project.id}-metric-${index}`}>- {metric}</p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-emerald-500/40 px-2 py-1 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-neutral-700 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-200"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.systemDesignUrl ? (
                  <a
                    href={project.systemDesignUrl}
                    className="rounded border border-cyan-400/40 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Architecture Deep Dive
                  </a>
                ) : null}
                {project.additionalLinks?.map((link) => (
                  <a
                    key={`${project.id}-${link.label}`}
                    href={link.url}
                    target={link.url.startsWith("/") ? undefined : "_blank"}
                    rel={link.url.startsWith("/") ? undefined : "noreferrer"}
                    className={`rounded border px-2 py-1 text-[10px] uppercase tracking-widest transition ${
                      link.label.toLowerCase().includes("sre")
                        ? "border-red-500/40 text-red-300 hover:border-red-300 hover:text-red-200"
                        : "border-amber-400/40 text-amber-300 hover:border-amber-300 hover:text-amber-200"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
