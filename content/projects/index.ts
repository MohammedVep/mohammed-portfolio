export const projectsData = [
  {
    id: 'sentinel',
    title: "Project Sentinel: Agentic Orchestration",
    description: "An AI-native PaaS using eBPF to safely provision resources for autonomous agents.",
    metrics: "12ms Cold-Start | eBPF Sandboxed",
    tags: ["Rust", "eBPF", "WASM", "Next.js"],
    formalProof: "TLA+ Specification for Raft Consensus",
    hardProblem:
      "Safely schedule autonomous agents across heterogeneous nodes without privilege escalation, cold-start spikes, or noisy-neighbor collapse.",
    architecture: `graph TD
  Agent[Agent Runtime]-->Planner[Policy Planner]
  Planner-->Probe[eBPF Policy Gate]
  Probe-->Kernel[Kernel Enforcer]
  Planner-->Scheduler[Global Scheduler]
  Scheduler-->NodePool[Heterogeneous Node Pool]`,
    tradeoffs: [
      "In-kernel eBPF enforcement over user-space sidecars reduces latency, but increases kernel-level complexity and verification burden.",
      "Cold-start caching improves tail latency but requires stricter cache invalidation to avoid policy drift.",
    ],
    invariants: [
      "No unverified syscall path reaches privileged namespaces.",
      "Agent resource grants are monotonic and always revocable.",
      "Quorum-backed leases are required before escalation.",
    ],
  },
  {
    id: 'moveysplash',
    title: "moveYSplash: Verified Bridge",
    description: "Formally verified asset bridge built in Move, ensuring 100% safety against resource leaks.",
    metrics: "Verified Invariants | Zero-Copy",
    tags: ["Move", "Sui", "Rust", "Lean 4"],
    formalProof: "Lean 4 Proof of Resource Conservation",
    hardProblem:
      "Move assets across chains without resource leaks, double-minting, or loss of conservation guarantees during failure recovery.",
    architecture: `graph LR
  Source[Move Chain]-->Guard[Proof Generator]
  Guard-->Relayer[Relayer Mesh]
  Relayer-->Verifier[On-chain Verifier]
  Verifier-->Target[Destination Vault]`,
    tradeoffs: [
      "Proof-carrying transfers improve safety but increase latency and on-chain verification cost.",
      "Zero-copy flows require strict handle ownership, limiting opportunistic batching.",
    ],
    invariants: [
      "Total asset supply remains conserved across all hops.",
      "No orphaned resource handles persist after settlement.",
      "Transfers finalize only with valid signatures and proofs.",
    ],
  },
  {
    id: 'helios',
    title: "Helios: Carbon-Aware Scheduler",
    description: "Spatio-temporal Kubernetes scheduler shifting workloads based on real-time grid carbon intensity.",
    metrics: "40% CO2 Reduction | Real-time Grid Sync",
    tags: ["Go", "Kubernetes", "Prometheus"],
    formalProof: "Safety proof for temporal scheduling windows",
    hardProblem:
      "Shift workloads to low-carbon windows while preserving latency SLOs and avoiding regional capacity contention.",
    architecture: `graph LR
  Metrics[Carbon + SLO Metrics]-->Forecaster[Grid Forecaster]
  Forecaster-->Optimizer[Temporal Optimizer]
  Optimizer-->Scheduler[K8s Scheduler Plugin]
  Scheduler-->Workloads[Workload Placement]`,
    tradeoffs: [
      "Predictive scheduling reduces carbon but can miss sudden grid spikes without fallback heuristics.",
      "Aggressive deferral lowers emissions but risks SLO burn without guardrails.",
    ],
    invariants: [
      "SLO error budgets never exceed defined thresholds.",
      "Carbon score is non-increasing when a feasible window exists.",
      "Scheduler fallbacks activate before overload conditions.",
    ],
  }
];
