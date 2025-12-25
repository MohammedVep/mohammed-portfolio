export default function Hero() {
  const heroItems = [
    {
      id: 'archetype',
      className: 'col-span-12 lg:col-span-4',
      content: (
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-lg font-mono font-bold text-emerald-500 underline decoration-2 underline-offset-4">
            [Archetype: Systems Architect]
          </h3>
          <p className="text-neutral-300 mt-4 leading-relaxed">
            I build formally verified infrastructure for the agentic era. 
            Currently focusing on eBPF-based kernel safety and carbon-aware orchestration.
          </p>
        </div>
      ),
    },
    {
      id: 'telemetry',
      className: 'col-span-12 lg:col-span-8',
      content: (
        <div className="font-mono text-[10px] text-neutral-500 overflow-hidden opacity-70">
          <div className="text-emerald-500 mb-2">// LIVE_SYS_TELEMETRY: Sentinel_Node_01</div>
          <div>[0.0001] eBPF_PROBE_LOADED: syscall_intercept_enabled</div>
          <div>[0.0004] MEM_ALLOC: verifying_segment_0xFF4E2</div>
          <div className="text-emerald-400">[0.0009] VERIFICATION_PASSED: invariant_check_success</div>
          <div className="animate-pulse">_</div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-bold text-white mb-2 tracking-tighter">Mohammed Vepari</h1>
        <p className="text-neutral-500 font-mono mb-12">// PRINCIPAL_SYSTEMS_ENGINEER</p>
        <Bento items={heroItems} />
      </div>
    </section>
  );
}