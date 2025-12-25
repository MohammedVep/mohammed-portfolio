'use client';

import { Bento } from '@/components/ui/bento';
import { projectsData } from '@/content/projects';

const items = projectsData.map((project, index) => ({
  id: project.id,
  className: index % 3 === 0 ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4',
  content: (
    <div className="flex flex-col h-full justify-between font-mono">
      <div>
        <div className="text-xs text-emerald-500 mb-2">// {project.metrics}</div>
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
      </div>
      <div className="flex gap-2 mt-6 flex-wrap">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-1 bg-neutral-800 text-neutral-400 rounded border border-neutral-700 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
    </div>
  ),
  deepDiveContent: (
    <div className="font-mono text-neutral-300 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-emerald-400 mb-2">{project.title}</h2>
        <p className="text-emerald-500/70 underline font-bold">RFC-0{index + 1}: Architectural Specification</p>
      </div>
      <div>
        <h4 className="text-white font-bold uppercase tracking-widest text-sm underline decoration-emerald-500 mb-2">The Hard Problem</h4>
        <p>Implementing isolation in shared-resource environments where AI agents can trigger recursive exhaustion loops.</p>
      </div>
      <div>
        <h4 className="text-white font-bold uppercase tracking-widest text-sm underline decoration-emerald-500 mb-2">Formal Integrity</h4>
        <div className="bg-black/50 p-4 border border-emerald-500/20 rounded">
          <code className="text-xs text-emerald-400 leading-relaxed italic">
            // {project.formalProof}
            <br />
            THEOREM: Safe_Memory_Transition 
            <br />
            FORALL node: State, Invariant(node) =&gt; Next(node)
          </code>
        </div>
      </div>
    </div>
  ),
}));

export default function Projects() {
  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.5em] mb-4 text-center">
          Project_Vault
        </h2>
        <h3 className="text-4xl font-bold text-center text-white mb-16">High-Integrity Systems</h3>
        <Bento items={items} />
      </div>
    </section>
  );
}