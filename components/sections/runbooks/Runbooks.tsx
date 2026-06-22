const runbookItems = [
  {
    title: "NetPulse Incident Noise Reduction",
    summary:
      "What broke: noisy checks and alert trust. Fix: queue-based ingestion, PgBouncer pooling, retry windows, and incident lifecycle controls.",
    href: "/blog/netpulse-incident-noise-reduction",
    label: "Read NetPulse Writeup",
  },
  {
    title: "Cloud Sandbox Queue + DLQ Strategy",
    summary:
      "What broke: synchronous execution pressure and unsafe worker coupling. Fix: queue-first execution, bounded workers, DLQ recovery, and isolation-first design.",
    href: "/blog/queue-first-cloud-code-execution",
    label: "Read Sandbox ADR",
  },
  {
    title: "AutoScale OS Control Loop Design",
    summary:
      "What it proves: Java/Kubernetes orchestration, worker health, backlog-aware scaling, readiness checks, and Prometheus-style metrics surfaces.",
    href: "/system-design/autoscale-os",
    label: "Open AutoScale Design",
  },
  {
    title: "SentinelMesh Zero-Trust Control Plane",
    summary:
      "What it proves: service trust map, policy evaluation, blocked traffic, auth failures, audit stream, and operational security visibility.",
    href: "/system-design/sentinel-mesh",
    label: "Open Mesh Design",
  },
];

export default function Runbooks() {
  return (
    <section id="runbooks" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Architecture_And_Runbooks
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-neutral-300">
          Four core proof paths: what broke, how it was fixed, the metrics or operating signal,
          and the design docs recruiters can inspect quickly.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {runbookItems.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <h3 className="text-lg font-bold text-neutral-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.summary}</p>
              <a
                href={item.href}
                className="mt-4 inline-flex rounded border border-cyan-500/40 px-3 py-2 text-xs uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {item.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
