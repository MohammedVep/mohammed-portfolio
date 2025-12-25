'use client';

import { MotionDiv } from '@/components/ui/motion';

const arsenal = [
  {
    group: 'Core Systems',
    items: [
      { name: 'Rust', level: 'HIGH_INTEGRITY', note: 'Zero-cost safety for core runtimes.' },
      { name: 'Go', level: 'PRODUCTION_GRADE', note: 'Distributed control planes and schedulers.' },
      { name: 'Move', level: 'FORMALIZED', note: 'Resource safety in on-chain execution.' },
    ],
  },
  {
    group: 'Observability',
    items: [
      { name: 'eBPF', level: 'KERNEL_NATIVE', note: 'Policy enforcement at syscall boundaries.' },
      { name: 'Prometheus', level: 'SIGNAL_RICH', note: 'High-cardinality telemetry pipelines.' },
      { name: 'Tracing', level: 'FULL_STACK', note: 'Cross-service causality graphs.' },
    ],
  },
  {
    group: 'Mathematical Rigor',
    items: [
      { name: 'TLA+', level: 'MODEL_CHECKED', note: 'Consensus and lease safety proofs.' },
      { name: 'Lean 4', level: 'PROOF_ASSISTED', note: 'Machine-checked invariants.' },
      { name: 'Formal Methods', level: 'INVARIANT_FIRST', note: 'Safety properties baked into design.' },
    ],
  },
];

export default function Skills() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20 border-t border-neutral-900 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Technical Arsenal</h2>
            <p className="text-xs font-mono text-emerald-500 uppercase tracking-[0.4em]">
              Capability_Allocation_Map
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {arsenal.map((group, groupIndex) => (
              <MotionDiv
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-xl"
              >
                <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-400 mb-6">
                  {group.group}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <MotionDiv
                      key={item.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: itemIndex * 0.1 }}
                      className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-neutral-100">{item.name}</p>
                          <p className="text-xs text-neutral-400 mt-1">{item.note}</p>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                          CAP_LEVEL: {item.level}
                        </span>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
