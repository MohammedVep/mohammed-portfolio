import type { Metadata } from "next";
import Link from "next/link";
import ReferralSummaryCopy from "@/components/referral/ReferralSummaryCopy";
import { profileData } from "@/content/profile";
import { projectsData } from "@/content/projects";

export const metadata: Metadata = {
  title: "Why Refer Mohammed Vepari | Referral Packet",
  description:
    "A concise, evidence-based referral packet for SWA and new-grad backend, platform, and software engineering opportunities.",
};

const coreProjectIds = ["netpulse", "cloud-code-execution", "autoscale-os", "sentinel-mesh"] as const;

const projectReasons: Record<(typeof coreProjectIds)[number], string> = {
  netpulse: "Reliability, queueing, incident lifecycle, database pooling, and secure checker communication.",
  "cloud-code-execution":
    "Sandbox isolation, durable jobs, scale-to-zero workers, readiness-gated recovery, and DLQ handling.",
  "autoscale-os":
    "Java/Kubernetes orchestration, workload eligibility, 0-to-N scaling, cooldown, and operational metrics.",
  "sentinel-mesh":
    "Zero-trust policy decisions, audit trails, service topology, denied traffic, and security observability.",
};

const referralNote = `I reviewed Mohammed Vepari's resume and engineering portfolio for an SWA or new-grad software engineering opportunity. He completed an Honours Bachelor of Computer Science in 2026, including Operating Systems, Distributed Systems (85%), and Theory of Computing, and he is legally authorized to work in Canada without sponsorship. His strongest work is in backend and platform engineering: NetPulse, Cloud Sandbox, AutoScale OS, and SentinelMesh each include a public deployment and system-design documentation. His scale-to-zero work explains durable queueing, workload eligibility, 0-to-N recovery, readiness gates, and cold-start tradeoffs. I am referring him for assessment through the standard coding and interview process based on this reviewable evidence.`;

const reviewChecks = [
  {
    question: "Is the academic foundation verifiable?",
    answer:
      "Yes. The packet links an Honours BCS degree proof and lists completed systems coursework, including Operating Systems and Distributed Systems (85%).",
  },
  {
    question: "Is there technical evidence beyond a resume?",
    answer:
      "Yes. Four core systems have public endpoints and architecture pages; NetPulse and Cloud Sandbox also link source repositories.",
  },
  {
    question: "Does the candidate understand tradeoffs?",
    answer:
      "The scale-to-zero writeup explains why CPU metrics cannot wake zero workers, why durable queue signals are needed, and when a warm replica is the better choice.",
  },
  {
    question: "What is the safest referral claim?",
    answer:
      "Refer Mohammed for evaluation as an early-career backend/platform candidate. Do not claim senior production ownership or a past working relationship unless it is true.",
  },
] as const;

export default function ReferralPage() {
  const coreProjects = coreProjectIds
    .map((id) => projectsData.find((project) => project.id === id))
    .filter((project): project is (typeof projectsData)[number] => Boolean(project));
  const referralEmailHref = `mailto:${profileData.email}?subject=${encodeURIComponent(
    "SWA / New Grad Software Engineering Referral - Mohammed Vepari"
  )}&body=${encodeURIComponent(
    "Hi Mohammed, I reviewed your referral packet and would like to discuss an SWA or new-grad software engineering opportunity.\n\nCompany:\nRole or program link:\nApplication deadline:\nNext step:"
  )}`;

  return (
    <div className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-6xl px-6">
        <header className="border border-amber-400/30 bg-amber-400/5 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-amber-300">
            Referral_Decision_Packet
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Why Refer Mohammed Vepari?
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-200 md:text-lg">
            A work-authorized 2026 Honours BCS graduate focused on backend, platform, and
            infrastructure engineering, with four live systems and architecture documentation a
            referrer can review before making a decision.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
            <span className="rounded border border-emerald-500/40 px-3 py-2 text-emerald-300">
              Canada Work Authorized
            </span>
            <span className="rounded border border-cyan-500/40 px-3 py-2 text-cyan-300">
              Honours BCS 2026
            </span>
            <span className="rounded border border-neutral-700 px-3 py-2 text-neutral-300">
              Brampton / GTA
            </span>
            <span className="rounded border border-amber-400/40 px-3 py-2 text-amber-300">
              On-Site, Hybrid, or Remote EST/EDT
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={referralEmailHref}
              className="rounded bg-amber-300 px-4 py-3 text-xs font-mono font-bold uppercase tracking-widest text-black transition hover:bg-amber-200"
            >
              Discuss a Referral
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-emerald-500/40 px-4 py-3 text-xs font-mono uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300"
            >
              Open Resume
            </a>
            <a
              href={profileData.degreeProofUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-cyan-500/40 px-4 py-3 text-xs font-mono uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300"
            >
              Verify Degree
            </a>
          </div>
        </header>

        <section className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400">
            60_Second_Review
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">The referral case in four systems</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400">
            These are the strongest artifacts to inspect. Each card states what the system proves
            and links directly to the live deployment and design documentation.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {coreProjects.map((project) => (
              <article key={project.id} className="border border-neutral-800 bg-neutral-950 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                  {project.projectType}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {projectReasons[project.id as (typeof coreProjectIds)[number]]}
                </p>
                <p className="mt-3 border-l border-neutral-700 pl-3 text-xs leading-relaxed text-neutral-400">
                  {project.architectureSummary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-emerald-300"
                    >
                      Live
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded border border-neutral-700 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-neutral-300"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {project.systemDesignUrl ? (
                    <Link
                      href={project.systemDesignUrl}
                      className="rounded border border-cyan-500/40 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-cyan-300"
                    >
                      System Design
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-neutral-800 bg-neutral-950 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber-300">
              Internal_Referral_Note
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">A factual note a referrer can adapt</h2>
            <blockquote className="mt-5 border-l-2 border-amber-400 bg-black p-4 text-sm leading-relaxed text-neutral-200">
              {referralNote}
            </blockquote>
            <div className="mt-5">
              <ReferralSummaryCopy summary={referralNote} />
            </div>
          </div>

          <aside className="border border-red-400/20 bg-red-400/5 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-red-300">
              Credibility_Boundary
            </p>
            <h2 className="mt-3 text-xl font-bold text-white">What not to claim</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-300">
              <p>- Do not say you worked with Mohammed if you only reviewed this portfolio.</p>
              <p>- Do not describe staged load tests as customer production traffic.</p>
              <p>- Do not imply senior-level employment history from independent projects.</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-200">
              The appropriate endorsement is narrower and stronger: the evidence justifies an
              assessment through the company&apos;s standard coding and interview process.
            </p>
          </aside>
        </section>

        <section className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
            Referrer_Risk_Check
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">Questions a careful referrer may ask</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviewChecks.map((item) => (
              <article key={item.question} className="border border-neutral-800 bg-neutral-950 p-5">
                <h3 className="text-sm font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border border-neutral-800 bg-neutral-950 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300">
            Best_Fit
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">Suggested referral targets</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-neutral-300">
            SWA and new-grad software engineering programs, backend engineering, enterprise SaaS,
            platform engineering, cloud infrastructure, reliability tooling, and Java-oriented
            application or systems teams. Mohammed is available for on-site, hybrid, or remote
            roles aligned with EST/EDT working hours.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={referralEmailHref}
              className="rounded bg-emerald-300 px-4 py-3 text-xs font-mono font-bold uppercase tracking-widest text-black transition hover:bg-emerald-200"
            >
              Send Role Details
            </a>
            <Link
              href="/blog/scale-to-zero-without-losing-work"
              className="rounded border border-amber-400/40 px-4 py-3 text-xs font-mono uppercase tracking-widest text-amber-300"
            >
              Read Scale-to-Zero Decision
            </Link>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-neutral-700 px-4 py-3 text-xs font-mono uppercase tracking-widest text-neutral-300"
            >
              Review GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
