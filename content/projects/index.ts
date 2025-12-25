export const projectsData = [
  {
    id: 'sentinel',
    title: "Project Sentinel: Agentic Orchestration",
    description: "An AI-native PaaS using eBPF to safely provision resources for autonomous agents.",
    metrics: "12ms Cold-Start | eBPF Sandboxed",
    tags: ["Rust", "eBPF", "WASM", "Next.js"],
    formalProof: "TLA+ Specification for Raft Consensus",
  },
  {
    id: 'moveysplash',
    title: "moveYSplash: Verified Bridge",
    description: "Formally verified asset bridge built in Move, ensuring 100% safety against resource leaks.",
    metrics: "Verified Invariants | Zero-Copy",
    tags: ["Move", "Sui", "Rust", "Lean 4"],
    formalProof: "Lean 4 Proof of Resource Conservation",
  },
  {
    id: 'helios',
    title: "Helios: Carbon-Aware Scheduler",
    description: "Spatio-temporal Kubernetes scheduler shifting workloads based on real-time grid carbon intensity.",
    metrics: "40% CO2 Reduction | Real-time Grid Sync",
    tags: ["Go", "Kubernetes", "Prometheus"],
    formalProof: "Safety proof for temporal scheduling windows",
  }
];