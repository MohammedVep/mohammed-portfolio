// components/sections/projects/Projects.tsx
import { projectsData } from '@/content/projects';
import { Bento } from '@/components/ui/bento';

export default function Projects() {
  const items = projectsData.map((project, index) => ({
    id: `project-${index}`,
    className: index === 0 ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4',
    content: (
      <div className="flex flex-col h-full justify-between font-mono">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-500/80">
              {project.metrics}
            </span>
          </div>
          <h3 className="text-xl font-bold text-neutral-200 mb-2">{project.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
          {project.formalProof && (
            <div className="mt-3 inline-block rounded border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 text-[10px] text-emerald-400">
              Status: Formally Verified · {project.formalProof}
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 bg-neutral-800 rounded border border-neutral-700 text-neutral-500 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    deepDiveContent: (
      <div className="font-mono">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">{project.title}</h2>
        <div className="space-y-6 text-sm">
          <div>
            <p className="text-neutral-300 italic">{'// Architectural RFC: System Specifications'}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">The Hard Problem</h4>
            <p className="mt-2 text-neutral-300">{project.hardProblem}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">System Architecture</h4>
            <div className="mt-2 rounded border border-neutral-800 bg-black p-4">
              <pre className="text-[10px] text-neutral-400">
                {`mermaid
${project.architecture}
`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">Trade-offs</h4>
            <div className="mt-2 space-y-2 rounded border border-neutral-800 bg-neutral-950 p-4 text-neutral-300">
              {project.tradeoffs.map((tradeoff, tradeoffIndex) => (
                <p key={`${project.id}-tradeoff-${tradeoffIndex}`}>- {tradeoff}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-emerald-500">Invariants</h4>
            <div className="mt-2 space-y-2 rounded border border-neutral-800 bg-neutral-950 p-4 text-neutral-300">
              {project.invariants.map((invariant, invariantIndex) => (
                <p key={`${project.id}-invariant-${invariantIndex}`}>- {invariant}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section id="projects" className="py-20 border-t border-neutral-900 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.5em] mb-4 text-center">Project_Vault</h2>
        <Bento items={items} />
      </div>
    </section>
  );
}
