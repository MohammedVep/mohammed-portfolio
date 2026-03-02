import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/content/projects";

type SystemDesignPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectSystemDesignPage({ params }: SystemDesignPageProps) {
  const { projectId } = await params;
  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">{project.title} System Design</h1>
          <Link
            href="/#projects"
            className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-300"
          >
            Back to Portfolio
          </Link>
        </div>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-xs uppercase tracking-widest text-cyan-300/90">{project.projectType}</p>
          <p className="text-sm text-neutral-300">{project.description}</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-emerald-500/80">{project.metrics}</p>
          {project.liveUrl ||
          project.repoUrl ||
          project.systemDesignUrl ||
          (project.additionalLinks?.length ?? 0) > 0 ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Live Demo
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                >
                  Source Repository
                </a>
              ) : null}
              {project.additionalLinks?.map((link) => (
                <a
                  key={`${project.id}-design-link-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-amber-400/50 px-3 py-2 text-xs uppercase tracking-widest text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Why This Project Matters
          </h2>
          <p className="text-sm text-neutral-200">{project.whyItMatters}</p>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Tech + Architecture Summary
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>
              <span className="font-semibold text-neutral-100">Tech:</span> {project.tags.join(", ")}
            </li>
            <li>
              <span className="font-semibold text-neutral-100">Architecture:</span>{" "}
              {project.architectureSummary}
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-300">Impact Metrics</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-200">
            {project.impactMetrics.map((metric, index) => (
              <li key={`${project.id}-metric-${index}`}>{metric}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">Core Problem</h2>
          <p className="text-sm text-neutral-300">{project.hardProblem}</p>
        </section>

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            High-Level Architecture
          </h2>
          <pre className="overflow-x-auto rounded border border-neutral-800 bg-black p-4 text-[11px] text-neutral-400">
            {`mermaid
${project.architecture}
`}
          </pre>
        </section>

        {project.productionCapabilities?.length ? (
          <section className="mb-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
            <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Production-Grade Capabilities
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-200">
              {project.productionCapabilities.map((capability, index) => (
                <li key={`${project.id}-capability-${index}`}>{capability}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Engineering Decisions
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            {project.tradeoffs.map((tradeoff, index) => (
              <li key={`${project.id}-tradeoff-${index}`}>{tradeoff}</li>
            ))}
          </ul>
        </section>

        {project.behavioralSignals?.length ? (
          <section className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
            <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-300">
              Behavioral + Impact Signals
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-200">
              {project.behavioralSignals.map((signal, index) => (
                <li key={`${project.id}-behavior-${index}`}>{signal}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Quality Guarantees
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            {project.invariants.map((invariant, index) => (
              <li key={`${project.id}-invariant-${index}`}>{invariant}</li>
            ))}
          </ul>
        </section>

        {project.recentUpdates?.length ? (
          <section className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
            <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-300">Recent Upgrades</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-200">
              {project.recentUpdates.map((update, index) => (
                <li key={`${project.id}-update-${index}`}>{update}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">Outcome Highlights</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
            {project.highlights.map((highlight, index) => (
              <li key={`${project.id}-highlight-${index}`}>{highlight}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
