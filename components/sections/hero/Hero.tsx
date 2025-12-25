import Image from 'next/image';
import { Bento } from '@/components/ui/bento';

const items = [
  {
    id: 'archetype',
    className: 'col-span-12 lg:col-span-4',
    content: (
      <div className="flex flex-col h-full justify-between">
        <h3 className="text-xl font-mono font-bold text-emerald-500 underline decoration-2 underline-offset-4">
          [Archetype: Systems Architect]
        </h3>
        <p className="text-neutral-300 mt-4 leading-relaxed">
          Specializing in formally verified, carbon-aware orchestration for the agentic era. 
          Focusing on low-level kernel safety and high-integrity infrastructure.
        </p>
      </div>
    ),
    deepDiveContent: (
      <div className="font-mono">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Core Engineering Thesis</h2>
        <p className="mb-4 text-neutral-300">
          In 2026, standard SaaS is table stakes. I build the "Operating System for AI" 
          using eBPF, WASM, and formal mathematical proofs to ensure system-wide safety.
        </p>
      </div>
    ),
  },
  {
    id: 'telemetry',
    className: 'col-span-12 lg:col-span-8',
    content: (
      <div className="font-mono text-xs overflow-hidden">
        <div className="text-emerald-500 mb-2">// LIVE_KERNEL_TELEMETRY: Sentinel_Node_01</div>
        <div className="text-neutral-500">[0.0001] eBPF_PROBE_LOADED: syscall_intercept_enabled</div>
        <div className="text-neutral-500">[0.0004] MEM_ALLOC: verifying_segment_0xFF4E2</div>
        <div className="text-emerald-400">[0.0009] VERIFICATION_PASSED: invariant_check_success</div>
        <div className="text-neutral-500">[0.0012] AGENT_GOVERNOR: throttle_applied_recursive_loop_detected</div>
        <div className="animate-pulse text-neutral-400 mt-2">_</div>
      </div>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-emerald-400">Observability Layer</h2>
        <p className="text-neutral-300">This terminal displays mock telemetry from an eBPF-based governor that detects and prevents recursive agent loops at the kernel level.</p>
      </div>
    ),
  },
];

export default function Hero() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tighter">
            Mohammed Vepari
          </h1>
          <p className="text-xl text-neutral-500 font-mono">
            // PRINCIPAL_SYSTEMS_ENGINEER
          </p>
        </div>
        <Bento items={items} />
      </div>
    </section>
  );
}