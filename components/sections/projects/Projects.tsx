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
          <h3 className="text-xl font-bold text-neutral-200 mb-2">{project.title}</h3>
          <p className="text-sm text-neutral-400">{project.description}</p>
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
        <div className="space-y-4">
          <p className="text-neutral-300 italic">// Architectural RFC: System Specifications</p>
          <div className="p-4 bg-black border border-neutral-800 rounded text-sm">
            <h4 className="text-neutral-500 uppercase text-[10px] mb-2">Technical Constraints</h4>
            <p className="text-neutral-400">Discuss trade-offs here (e.g., eBPF vs. Sidecar latency)...</p>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section className="py-20 border-t border-neutral-900 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.5em] mb-4 text-center">Project_Vault</h2>
        <Bento items={items} />
      </div>
    </section>
  );
}