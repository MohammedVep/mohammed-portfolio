'use client';

import { projectsData } from "@/content/projects";
import { Bento } from "@/components/ui/bento";

export default function Projects() {
  const items = projectsData.map((project, index) => ({
    id: project.id,
    className:
      index === 0 ? "col-span-12 lg:col-span-8" : "col-span-12 lg:col-span-4",
    content: (
      <div className="flex h-full flex-col justify-between font-mono">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-500/80">
              {project.metrics}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-neutral-200">{project.title}</h3>
          <p className="text-sm leading-relaxed text-neutral-400">{project.description}</p>
          <p className="mt-3 text-xs text-emerald-300/90">
            {project.highlights[0]}
          </p>
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
                  className="rounded border border-amber-400/40 px-2 py-1 text-[10px] uppercase tracking-widest text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
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
        <h2 className="mb-2 text-2xl font-bold text-emerald-400">{project.title}</h2>
        <p className="mb-4 text-xs uppercase tracking-widest text-emerald-500/80">
          {project.metrics}
        </p>

        <div className="space-y-6 text-sm">
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
                    className="rounded border border-amber-400/50 px-3 py-2 text-xs uppercase tracking-widest text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
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
              <pre className="text-[10px] text-neutral-400">
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

  return (
    <section id="projects" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Project_Vault
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-neutral-400">
          Featured work with architecture decisions, tradeoffs, measurable outcomes, and
          dedicated system design documents. Select a project to open the technical deep dive.
        </p>
        <Bento items={items} />
      </div>
    </section>
  );
}
