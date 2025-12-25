'use client';

import { MotionDiv } from '../ui/motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
];

export default function Skills() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <MotionDiv
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="p-4 rounded-lg shadow-xl">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-2.5">
                    <div
                      className="bg-neutral-400 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
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