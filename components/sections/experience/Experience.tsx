'use client';

import { MotionDiv } from "@/components/ui/motion";
import { experienceData } from "@/content/experience";

export default function Experience() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="experience" className="border-t border-neutral-900 bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Operational ownership, reliability awareness, and delivery discipline carried into
              production-style project work.
            </p>
          </div>

          <div className="grid gap-5">
            {experienceData.map((item, index) => (
              <MotionDiv
                key={`${item.company}-${item.title}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500">{item.company}</p>
                    <h3 className="mt-1 text-xl font-bold text-neutral-100">{item.title}</h3>
                  </div>
                  <span className="rounded border border-neutral-700 bg-black px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-400">
                    {item.date}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-neutral-300">
                  {item.description.map((detail) => (
                    <p key={`${item.company}-${detail}`}>- {detail}</p>
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
