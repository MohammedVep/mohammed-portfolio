'use client';

import { MotionDiv } from '@/components/ui/motion';
import { educationData } from '@/content/education';

export default function Education() {
  return (
    <section className="py-20 border-t border-neutral-900 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-xs font-mono text-emerald-500 uppercase tracking-[0.5em] mb-12 text-center">
          Academic_Foundation
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <MotionDiv
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 font-mono"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-emerald-500 text-sm">{edu.degree}</p>
                </div>
                <span className="text-[10px] text-neutral-500">{edu.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-400">
                  GPA: {edu.gpa}
                </div>
                {edu.honours && (
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
                    {'// Graduating with Honours'}
                  </div>
                )}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
