'use client';

import { MotionDiv } from '../ui/motion';

export default function About() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <p className="max-w-2xl mx-auto text-center text-neutral-400">
            I am a passionate and driven Software Engineer with a knack for
            creating innovative and efficient solutions. My expertise lies in
            full-stack development, with a strong focus on building scalable and
            user-friendly web applications. I am always eager to learn new
            technologies and take on challenging projects.
          </p>
        </div>
      </section>
    </MotionDiv>
  );
}