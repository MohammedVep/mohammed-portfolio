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
      "Kernel-space eBPF guards guarantee syscall-level safety, while user-space WASM keeps policy iteration fast; I split policies so only safety-critical checks live in-kernel.",
      "Reduced helper call overhead by batching map lookups and caching verifier-approved program state, trading memory for lower per-request latency.",
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
      "Lean 4 proofs enforce resource conservation, but proof-carrying transfers add verification latency; I gated proofs to finalization paths only.",
      "Zero-copy transfers avoid serialization overhead but require strict handle ownership, limiting batching across concurrent bridges.",
    ],
    invariants: [
      "No asset can be double-spent across the bridge boundary.",
      "No asset can be trapped in a bridge contract after settlement.",
      "Total asset supply remains conserved across all hops.",
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
      "Carbon-aware placement improves emissions but can miss sudden grid spikes; I added a fallback heuristic that reverts to SLO-first scheduling.",
      "The scheduler balances carbon score with job deadlines using a weighted priority queue, trading optimality for predictable completion windows.",
    ],
    invariants: [
      "SLO error budgets never exceed defined thresholds.",
      "Job deadlines are never violated when a feasible window exists.",
      "Scheduler fallbacks activate before overload conditions.",
    ],
  },
  {
    id: 'audittrace',
    title: "AuditTrace: Compliance-as-Code",
    description:
      "Immutable audit logging for sensitive system calls using eBPF probes and append-only storage guarantees.",
    metrics: "Tamper-Evident | 1.3M Events/Min",
    tags: ["eBPF", "Rust", "Linux", "Compliance"],
    formalProof: "Append-only log integrity proof",
    hardProblem:
      "Capture and persist every sensitive syscall without introducing user-visible latency or allowing log tampering.",
    architecture: `graph TD
  Syscall[Kernel Syscalls]-->Probe[eBPF Probe]
  Probe-->Buffer[Ring Buffer]
  Buffer-->Hasher[Hash Chain]
  Hasher-->Store[Append-Only Log]
  Store-->Auditor[Verifier + Report]`,
    tradeoffs: [
      "Kernel probes provide coverage guarantees, but raise performance risk; I used ring buffers and rate-limited metadata to cap overhead.",
      "Hash chaining improves tamper evidence, but increases write amplification; I batch commits per epoch to keep ingestion steady.",
    ],
    invariants: [
      "Sensitive syscalls are logged exactly once.",
      "Log entries are append-only and hash-linked.",
      "Audit exports are verifiable without trust in the collector.",
    ],
  }
];
