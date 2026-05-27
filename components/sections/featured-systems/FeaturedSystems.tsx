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

const netPulseArchitecture = `API Layer
v
Queue
v
Regional Worker Pool
v
PgBouncer + PostgreSQL + Redis
v
Alerting + Dashboard`;

const netPulseMetrics = [
  "10,000+ concurrent regional worker write load tests",
  "P95 check-to-dashboard latency held under 45ms",
  "PgBouncer added to prevent PostgreSQL connection exhaustion",
];

const netPulseFailures = [
  "PostgreSQL connection exhaustion under burst traffic",
  "Duplicate incident alerts during retry windows",
  "Noisy single-sample failures creating low-trust alerts",
];

const netPulseFixes = [
  "PgBouncer connection pooling",
  "Queue-based ingestion with retry/debounce controls",
  "Incident lifecycle rules with alert deduplication",
];

const netPulseDecisions = [
  { decision: "Queue-based ingestion", reason: "Protect database during burst traffic" },
  { decision: "PgBouncer pooling", reason: "Avoid connection exhaustion" },
  { decision: "mTLS checker traffic", reason: "Secure worker-to-engine communication" },
  { decision: "Alert debouncing", reason: "Reduce duplicate incident noise" },
];

const proofLinkClass =
  "rounded border px-3 py-2 text-[10px] uppercase tracking-widest transition";

export default function FeaturedSystems() {
  const netPulse = projectsData.find((project) => project.id === "netpulse");
  const projects = flagshipIds
    .map((id) => projectsData.find((project) => project.id === id))
    .filter((project): project is (typeof projectsData)[number] => Boolean(project));
  const secondaryProjects = projects.filter((project) => project.id !== "netpulse");

  if (!netPulse) {
    return null;
  }

  return (
    <section id="featured-systems" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Flagship_System
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-neutral-300">
          NetPulse is the primary proof system on this portfolio. The rest of the projects support
          the same backend, reliability, and infrastructure story, with the current NetPulse
          roadmap split into Phase 2 onboarding work and Phase 3 real-user evidence.
        </p>

        <article className="border border-emerald-500/30 bg-neutral-950 p-5 font-mono md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-cyan-300">
                Distributed Uptime Monitoring System
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                NetPulse
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-neutral-300">
                Queue-based uptime monitoring system with retry logic, regional workers, PgBouncer
                connection pooling, mTLS worker communication, and incident lifecycle controls.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {netPulse.liveUrl ? (
                <a
                  href={netPulse.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${proofLinkClass} border-emerald-500/40 text-emerald-300 hover:border-emerald-300 hover:text-emerald-200`}
                >
                  Live Demo
                </a>
              ) : null}
              {netPulse.repoUrl ? (
                <a
                  href={netPulse.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${proofLinkClass} border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-neutral-100`}
                >
                  GitHub
                </a>
              ) : null}
              {netPulse.systemDesignUrl ? (
                <a
                  href={netPulse.systemDesignUrl}
                  className={`${proofLinkClass} border-cyan-400/50 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200`}
                >
                  System Design Doc
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-emerald-500">
                Simple Architecture
              </p>
              <pre className="overflow-x-auto border border-neutral-800 bg-black p-4 text-[11px] leading-relaxed text-neutral-300">
                {netPulseArchitecture}
              </pre>
              <p className="mt-3 border-l-2 border-neutral-700 pl-4 text-sm leading-relaxed text-neutral-300">
                Queue-based architecture protects the database during burst traffic and lets worker
                throughput scale independently from the dashboard/API layer.
              </p>
            </div>

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-amber-300">
                Metrics
              </p>
              <div className="space-y-2">
                {netPulseMetrics.map((metric) => (
                  <p key={metric} className="border border-neutral-800 bg-black px-3 py-2 text-sm text-neutral-200">
                    {metric}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">What Broke</h4>
              <div className="mt-3 space-y-2 text-sm text-neutral-300">
                {netPulseFailures.map((item) => (
                  <p key={item}>- {item}</p>
                ))}
              </div>
            </div>
            <div className="border border-neutral-800 bg-black p-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Fixes</h4>
              <div className="mt-3 space-y-2 text-sm text-neutral-300">
                {netPulseFixes.map((item) => (
                  <p key={item}>- {item}</p>
                ))}
              </div>
            </div>
          </div>

          {netPulse.phaseImprovements?.length ? (
            <div className="mt-6 border border-cyan-500/30 bg-cyan-500/5 p-4">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                NetPulse Phase 2-3 Upgrade Track
              </p>
              <div className="grid gap-4 lg:grid-cols-2">
                {netPulse.phaseImprovements.map((item) => (
                  <article key={item.phase} className="border border-neutral-800 bg-black p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                        {item.phase}
                      </p>
                      <span className="rounded border border-neutral-700 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-400">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="mt-2 text-sm font-bold text-neutral-100">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item.summary}</p>
                    <div className="mt-3 space-y-1 text-[11px] text-neutral-300">
                      {item.bullets.map((bullet) => (
                        <p key={`${item.phase}-${bullet}`}>- {bullet}</p>
                      ))}
                    </div>
                    {item.proofHref && item.proofLabel ? (
                      <a
                        href={item.proofHref}
                        className="mt-4 inline-flex rounded border border-cyan-400/40 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                      >
                        {item.proofLabel}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {netPulse.implementationNotes ? (
            <div className="mt-6 border border-neutral-800 bg-black p-4">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                Build Notes
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="border border-neutral-900 bg-neutral-950 p-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    What I Owned
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {netPulse.implementationNotes.ownerSummary}
                  </p>
                </div>
                <div className="border border-neutral-900 bg-neutral-950 p-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Hard Lesson
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {netPulse.implementationNotes.hardLesson}
                  </p>
                </div>
                <div className="border border-neutral-900 bg-neutral-950 p-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Next Enhancement
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {netPulse.implementationNotes.nextEnhancement}
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-6">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
              Engineering Decisions
            </p>
            <div className="overflow-x-auto border border-neutral-800">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead className="bg-black text-neutral-200">
                  <tr>
                    <th className="border-b border-neutral-800 px-4 py-3 font-semibold">Decision</th>
                    <th className="border-b border-neutral-800 px-4 py-3 font-semibold">Reason</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-300">
                  {netPulseDecisions.map((item) => (
                    <tr key={item.decision} className="border-b border-neutral-900 last:border-b-0">
                      <td className="px-4 py-3">{item.decision}</td>
                      <td className="px-4 py-3">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <div className="mt-8">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.4em] text-neutral-500">
            Secondary Systems
          </p>
          <div className="grid gap-5 lg:grid-cols-2">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="border border-neutral-800 bg-neutral-950 p-5 font-mono"
              >
                <p className="text-[10px] uppercase tracking-widest text-cyan-300/90">
                  {project.projectType}
                </p>
                <h3 className="mt-2 text-lg font-bold text-neutral-100">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {project.whyItMatters}
                </p>

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
      </div>
    </section>
  );
}
