'use client';

import { MotionDiv } from "@/components/ui/motion";
import { profileData } from "@/content/profile";

const operatingPrinciples = [
  "Design for failure first, then optimize for speed.",
  "Publish measurable impact, not vague implementation claims.",
  "Document architecture and tradeoffs so teams can reason quickly.",
];

export default function About() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="about" className="border-t border-neutral-900 bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">Engineer_Profile</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Systems Mindset with Product Delivery Discipline</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              {profileData.summary} I focus on building systems that are both understandable and
              resilient under stress, then presenting that evidence in ways hiring teams can verify
              quickly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-black p-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Education</p>
                <p className="mt-2 text-sm font-semibold text-neutral-100">Honours BCS, Expected 2026</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-black p-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Primary Focus</p>
                <p className="mt-2 text-sm font-semibold text-neutral-100">
                  Distributed Systems, Platform APIs, Reliability
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-black p-4">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Direct Contact</p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="mt-2 block text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300">Operating Principles</p>
              <div className="mt-3 space-y-2 text-sm text-neutral-200">
                {operatingPrinciples.map((principle) => (
                  <p key={principle}>- {principle}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
