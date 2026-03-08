'use client';

import { MotionDiv } from "@/components/ui/motion";

const arsenal = [
  {
    group: "Languages & Runtime",
    items: [
      { name: "Go", level: "ACTIVE", note: "Load balancing, concurrency control, and runtime profiling." },
      { name: "Node.js", level: "ACTIVE", note: "Distributed API services, queue workers, and async processing." },
      { name: "TypeScript", level: "ACTIVE", note: "Type-safe backend and frontend platform development." },
      { name: "Python", level: "STRONG", note: "Scripting, logic implementation, and systems tooling support." },
      { name: "Java", level: "STRONG", note: "Backend fundamentals and object-oriented systems design." },
      { name: "SQL", level: "ACTIVE", note: "Schema design, indexing, and query optimization." },
    ],
  },
  {
    group: "Infrastructure & Cloud",
    items: [
      { name: "AWS (Fargate, ALB, VPC)", level: "ACTIVE", note: "Cloud-native deployment and service networking." },
      { name: "Terraform (IaC)", level: "ACTIVE", note: "Repeatable infrastructure provisioning and change control." },
      { name: "Docker", level: "ACTIVE", note: "Containerized service packaging and runtime consistency." },
      { name: "Linux / cgroups", level: "PROJECT", note: "Isolation and resource-bound execution constraints." },
    ],
  },
  {
    group: "Observability & Reliability",
    items: [
      { name: "Prometheus", level: "ACTIVE", note: "Service metrics for traffic and health behavior visibility." },
      { name: "Grafana", level: "ACTIVE", note: "Operational dashboards for failure and scaling diagnostics." },
      { name: "Go pprof", level: "ACTIVE", note: "Heap and CPU profiling for runtime bottleneck elimination." },
      { name: "Redis / BullMQ DLQ", level: "ACTIVE", note: "Queue durability and dead-letter recovery workflows." },
      { name: "mTLS + Incident Controls", level: "ACTIVE", note: "Zero-trust communication and alert lifecycle hardening." },
    ],
  },
  {
    group: "Data & Web Platforms",
    items: [
      { name: "PostgreSQL / MySQL", level: "ACTIVE", note: "Relational data modeling and persistence." },
      { name: "React / Next.js", level: "ACTIVE", note: "Dashboard and recruiter-facing web interfaces." },
      { name: "REST / WebSocket APIs", level: "ACTIVE", note: "Realtime and request-response service integration." },
      { name: "Supabase", level: "PROJECT", note: "Rapid full-stack data and auth integration." },
      { name: "Angular", level: "PROJECT", note: "Capstone implementation for complex user workflows." },
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
      <section id="skills" className="border-t border-neutral-900 bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-emerald-500">
              Recruiter_Ready_Skill_Map
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {arsenal.map((group, groupIndex) => (
              <MotionDiv
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-xl"
              >
                <h3 className="mb-6 text-sm font-mono uppercase tracking-[0.3em] text-emerald-400">
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
                          <p className="mt-1 text-xs text-neutral-400">{item.note}</p>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                          {item.level}
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
