'use client';

import { MotionDiv } from '@/components/ui/motion';
import { experienceData } from '@/content/experience';

export default function Experience() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Architectural Impact</h2>
          <div className="relative">
            <div className="border-l-2 border-neutral-700 absolute h-full left-1/2 -translate-x-1/2"></div>
            {experienceData.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`mb-8 flex justify-between items-center w-full ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-5/12"></div>
                  <div className="z-20 flex items-center bg-neutral-800 shadow-xl w-8 h-8 rounded-full">
                    <div className="bg-neutral-700 w-4 h-4 mx-auto rounded-full"></div>
                  </div>
                  <div
                    className={`w-5/12 px-4 py-2 rounded-lg shadow-xl ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <p className="text-neutral-400 text-sm">{item.date}</p>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm font-semibold">{item.company}</p>
                    <div className="mt-3 space-y-2 text-sm text-neutral-400">
                      {item.description.map(detail => (
                        <p key={detail}>- {detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
