'use client';

import { MotionDiv } from "@/components/ui/motion";
import { profileData } from "@/content/profile";

export default function Contact() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact" className="border-t border-neutral-900 bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-3 text-center text-3xl font-bold text-white">Contact</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-400">
            I am open to software engineering internships and new grad opportunities.
            The fastest way to reach me is by email.
          </p>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profileData.email}`}
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">Email</p>
              <p className="mt-2 text-emerald-300">{profileData.email}</p>
            </a>
            <a
              href={`tel:${profileData.phone.replace(/[^\d+]/g, "")}`}
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">Phone</p>
              <p className="mt-2 text-emerald-300">{profileData.phone}</p>
            </a>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">LinkedIn</p>
              <p className="mt-2 text-emerald-300">linkedin.com/in/mohammed-v-2094b222a</p>
            </a>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 transition hover:border-emerald-500/60"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">GitHub</p>
              <p className="mt-2 text-emerald-300">github.com/MohammedVep</p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-500/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              Download Resume
            </a>
            <a
              href={profileData.netPulseLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-mono uppercase tracking-widest text-neutral-300 transition hover:border-emerald-400/60 hover:text-emerald-200"
            >
              View NetPulse Live
            </a>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
