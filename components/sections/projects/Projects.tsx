'use client';

import { Bento } from "@/components/ui/bento";
import { projectsData, type PortfolioProject } from "@/content/projects";

const categoryOrder: PortfolioProject["projectType"][] = [
  "Distributed Systems & Cloud APIs",
  "Scaling & Messaging Systems",
  "Algorithms & Visualization",
  "Full-Stack Product Engineering",
];

const categoryDescriptions: Record<PortfolioProject["projectType"], string> = {
  "Distributed Systems & Cloud APIs":
    "Reliability-focused backend systems with routing, failover, and API-driven operations.",
  "Scaling & Messaging Systems":
    "Queue-based and real-time data pipelines designed for throughput, isolation, and safe execution.",
  "Algorithms & Visualization":
    "Algorithmic systems that surface routing, optimization, and tradeoff decisions clearly.",
  "Full-Stack Product Engineering":
    "End-to-end applications with product UX, backend workflows, and documented design decisions.",
};

const toArchitecturePreview = (summary: string) =>
  summary
    .split("->")
    .map((node) => node.trim())
    .filter(Boolean)
    .join("\n  -> ");

function buildBentoItems(categoryProjects: PortfolioProject[]) {
  return categoryProjects.map((project, index) => ({
    id: project.id,
    className:
      categoryProjects.length === 1
        ? "col-span-12"
        : index === 0
          ? "col-span-12 lg:col-span-8"
          : "col-span-12 lg:col-span-4",
    content: (
      <div className="flex h-full flex-col justify-between font-mono">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-500/80">
              {project.metrics}
            </span>
          </div>
          <p className="mb-2 text-[10px] uppercase tracking-widest text-cyan-300/90">
            {project.projectType}
          </p>
          <h3 className="mb-2 text-xl font-bold text-neutral-200">{project.title}</h3>
          <p className="text-sm leading-relaxed text-neutral-300">{project.whyItMatters}</p>

          <div className="mt-3 space-y-1 text-[11px] text-neutral-400">
            <p>
              <span className="text-neutral-200">Tech:</span> {project.tags.join(", ")}
            </p>
            <p>
              <span className="text-neutral-200">Architecture:</span> {project.architectureSummary}
            </p>
          </div>

          <div className="mt-3">
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-emerald-500">
              Architecture Snapshot
            </p>
            <pre className="overflow-x-auto rounded border border-neutral-800 bg-black p-3 text-[10px] text-neutral-400">
              {toArchitecturePreview(project.architectureSummary)}
            </pre>
          </div>

          <div className="mt-3 space-y-1 text-[11px] text-emerald-300/90">
            {project.impactMetrics.slice(0, 2).map((metric, metricIndex) => (
              <p key={`${project.id}-metric-preview-${metricIndex}`}>- {metric}</p>
            ))}
          </div>

          {project.recentUpdates?.length ? (
            <p className="mt-2 text-[11px] text-amber-300/90">
              Update: {project.recentUpdates[0]}
            </p>
          ) : null}
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.liveUrl ||
          project.repoUrl ||
          project.systemDesignUrl ||
          (project.additionalLinks?.length ?? 0) > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="rounded border border-emerald-500/30 px-2 py-1 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200"
                >
                  Live
                </a>
              ) : null}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="rounded border border-neutral-700 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
                >
                  Repo
                </a>
              ) : null}
              {project.systemDesignUrl ? (
                <a
                  href={project.systemDesignUrl}
                  onClick={(event) => event.stopPropagation()}
                  className="rounded border border-cyan-400/40 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  System Design
                </a>
              ) : null}
              {project.additionalLinks?.map((link) => (
                <a
                  key={`${project.id}-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
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
          ) : null}
        </div>
      </div>
    ),
    deepDiveContent: (
      <div className="font-mono">
        <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-cyan-300">{project.projectType}</p>
        <h2 className="mb-2 text-2xl font-bold text-emerald-400">{project.title}</h2>
        <p className="mb-4 text-xs uppercase tracking-widest text-emerald-500/80">{project.metrics}</p>

        <div className="space-y-6 text-sm">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
              Why This Project Matters
            </h4>
            <p className="mt-2 text-neutral-200">{project.whyItMatters}</p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
              Tech + Architecture Summary
            </h4>
            <div className="mt-2 space-y-2 rounded border border-neutral-800 bg-neutral-950 p-4 text-neutral-300">
              <p>
                <span className="text-neutral-100">Tech:</span> {project.tags.join(", ")}
              </p>
              <p>
                <span className="text-neutral-100">Architecture:</span> {project.architectureSummary}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">Impact Metrics</h4>
            <div className="mt-2 space-y-2 rounded border border-emerald-500/30 bg-emerald-500/5 p-4 text-neutral-200">
              {project.impactMetrics.map((metric, metricIndex) => (
                <p key={`${project.id}-metric-${metricIndex}`}>- {metric}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">Problem</h4>
            <p className="mt-2 text-neutral-300">{project.hardProblem}</p>
          </div>

          {project.liveUrl ||
          project.repoUrl ||
          project.systemDesignUrl ||
          (project.additionalLinks?.length ?? 0) > 0 ? (
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">Links</h4>
              <div className="mt-3 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-400/60 hover:text-emerald-200"
                  >
                    Source Code
                  </a>
                ) : null}
                {project.systemDesignUrl ? (
                  <a
                    href={project.systemDesignUrl}
                    className="rounded border border-cyan-400/50 px-3 py-2 text-xs uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    System Design Doc
                  </a>
                ) : null}
                {project.additionalLinks?.map((link) => (
                  <a
                    key={`${project.id}-detail-${link.label}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded border px-3 py-2 text-xs uppercase tracking-widest transition ${
                      link.label.toLowerCase().includes("sre")
                        ? "border-red-500/50 text-red-300 hover:border-red-300 hover:text-red-200"
                        : "border-amber-400/50 text-amber-300 hover:border-amber-300 hover:text-amber-200"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
              System Architecture
            </h4>
            <div className="mt-2 rounded border border-neutral-800 bg-black p-4">
              <pre className="overflow-x-auto text-[10px] text-neutral-400">
                {`mermaid
${project.architecture}
`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
              Engineering Decisions
            </h4>
            <div className="mt-2 space-y-2 rounded border border-neutral-800 bg-neutral-950 p-4 text-neutral-300">
              {project.tradeoffs.map((tradeoff, tradeoffIndex) => (
                <p key={`${project.id}-tradeoff-${tradeoffIndex}`}>- {tradeoff}</p>
              ))}
            </div>
          </div>

          {project.behavioralSignals?.length ? (
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-amber-300">
                Behavioral + Impact Signals
              </h4>
              <div className="mt-2 space-y-2 rounded border border-amber-500/30 bg-amber-500/5 p-4 text-neutral-200">
                {project.behavioralSignals.map((signal, signalIndex) => (
                  <p key={`${project.id}-signal-${signalIndex}`}>- {signal}</p>
                ))}
              </div>
            </div>
          ) : null}

          {project.productionCapabilities?.length ? (
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-cyan-400">
                Production-Grade Capabilities
              </h4>
              <div className="mt-2 space-y-2 rounded border border-cyan-500/30 bg-cyan-500/5 p-4 text-neutral-200">
                {project.productionCapabilities.map((capability, capabilityIndex) => (
                  <p key={`${project.id}-production-${capabilityIndex}`}>- {capability}</p>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
              Quality Guarantees
            </h4>
            <div className="mt-2 space-y-2 rounded border border-neutral-800 bg-neutral-950 p-4 text-neutral-300">
              {project.invariants.map((invariant, invariantIndex) => (
                <p key={`${project.id}-invariant-${invariantIndex}`}>- {invariant}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">
              Outcome Highlights
            </h4>
            <div className="mt-2 space-y-2 rounded border border-neutral-800 bg-neutral-950 p-4 text-neutral-300">
              {project.highlights.map((highlight, highlightIndex) => (
                <p key={`${project.id}-highlight-${highlightIndex}`}>- {highlight}</p>
              ))}
            </div>
          </div>

          {project.recentUpdates?.length ? (
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-amber-400">
                Recent Upgrades
              </h4>
              <div className="mt-2 space-y-2 rounded border border-amber-500/30 bg-amber-500/5 p-4 text-neutral-200">
                {project.recentUpdates.map((item, updateIndex) => (
                  <p key={`${project.id}-update-${updateIndex}`}>- {item}</p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    ),
  }));
}

export default function Projects() {
  const groupedProjects = categoryOrder
    .map((category) => ({
      category,
      description: categoryDescriptions[category],
      projects: projectsData.filter((project) => project.projectType === category),
    }))
    .filter((group) => group.projects.length > 0);

  return (
    <section id="projects" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-white">
          Core Infrastructure Engineering
        </h2>
        <p className="mb-4 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Production Systems Portfolio
        </p>
        <p className="mx-auto mb-6 max-w-3xl text-center text-sm text-neutral-300">
          Core infrastructure systems and reliability engineering projects. All systems are
          provisioned via Infrastructure as Code (Terraform), instrumented with deep observability
          pipelines, and rigorously tested through chaos simulations and load validation.
        </p>
        <div className="mx-auto mb-10 max-w-4xl rounded-xl border border-neutral-800 bg-neutral-950 p-5 font-mono text-sm text-neutral-300">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-amber-300">
            Engineering Behavioral Signals
          </p>
          <p>- Built systems with explicit failure handling, retries, and reliability controls.</p>
          <p>- Documented architecture tradeoffs and scaling decisions in each project deep dive.</p>
          <p>- Demonstrated deployment + observability readiness with public demos and live metrics.</p>
        </div>

        <div className="space-y-12">
          {groupedProjects.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
              <p className="mb-4 mt-1 text-sm text-neutral-400">{group.description}</p>
              <Bento items={buildBentoItems(group.projects)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
