'use client';

import { MotionDiv } from "@/components/ui/motion";

const arsenal = [
  {
    group: "Languages",
    items: [
      { name: "Java", level: "STRONG", note: "OOP fundamentals and backend problem solving." },
      { name: "Python", level: "STRONG", note: "Scripting, logic implementation, and data workflows." },
      { name: "TypeScript", level: "ACTIVE", note: "Type-safe full-stack web application development." },
      { name: "SQL", level: "ACTIVE", note: "Schema design, joins, indexing, and query optimization." },
    ],
  },
  {
    group: "Web Development",
    items: [
      { name: "React", level: "ACTIVE", note: "Component-driven UI with reusable frontend architecture." },
      { name: "Next.js", level: "ACTIVE", note: "Production-ready frontend and routing workflows." },
      { name: "Node.js", level: "ACTIVE", note: "API and backend service development." },
      { name: "Angular", level: "PROJECT", note: "Capstone implementation for complex user flows." },
    ],
  },
  {
    group: "Databases & Engineering Foundations",
    items: [
      { name: "PostgreSQL / MySQL", level: "ACTIVE", note: "Relational data modeling and persistence." },
      { name: "Supabase", level: "PROJECT", note: "Rapid full-stack data and auth integration." },
      { name: "Data Structures", level: "CORE", note: "Applied through coursework and coding projects." },
      { name: "Algorithms", level: "CORE", note: "Performance-focused implementation and optimization." },
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
          <div className="grid gap-8 lg:grid-cols-3">
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
