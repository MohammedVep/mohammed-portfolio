'use client';

import { MotionDiv } from "@/components/ui/motion";
import { profileData } from "@/content/profile";

export default function About() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
          <p className="mx-auto max-w-3xl text-center leading-relaxed text-neutral-600">
            I am a Computer Science student and new grad software engineering candidate
            with hands-on project experience in full-stack web development. I focus on
            building clear user workflows, reliable backend logic, and measurable product
            outcomes. I am currently open to software engineering opportunities where I can
            contribute quickly and keep growing with strong mentorship and ownership.
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500">Education</p>
              <p className="mt-2 font-semibold text-neutral-800">
                Honors BCS, Expected 2026
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500">Current Focus</p>
              <p className="mt-2 font-semibold text-neutral-800">
                Full-Stack Apps, APIs, SQL, React
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500">Contact</p>
              <a
                href={`mailto:${profileData.email}`}
                className="mt-2 block font-semibold text-neutral-800 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
              >
                {profileData.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
