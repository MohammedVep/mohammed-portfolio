import { profileData } from "@/content/profile";
import { projectsData } from "@/content/projects";
import { blogPostsSorted } from "@/content/blog";

export default function RecruiterIndex() {
  const liveProjectCount = projectsData.filter((project) => Boolean(project.liveUrl)).length;
  const systemDesignCount = projectsData.filter((project) => Boolean(project.systemDesignUrl)).length;
  const recentUpgrades = projectsData
    .flatMap((project) =>
      (project.recentUpdates ?? []).slice(0, 1).map((item) => ({
        project: project.title,
        detail: item,
      }))
    )
    .slice(0, 5);

  return (
    <section id="recruiter-index" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 font-mono">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">Recruiter_Index</p>
          <h2 className="mt-3 text-2xl font-bold text-white">Fast Validation Hub for Hiring Teams</h2>
          <p className="mt-3 max-w-4xl text-sm text-neutral-300">
            One place to verify live systems, architecture depth, recent upgrades, and technical
            writing quality without hunting through the portfolio.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Live Systems</p>
              <p className="mt-2 text-2xl font-bold text-emerald-300">{liveProjectCount}</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">System Design Docs</p>
              <p className="mt-2 text-2xl font-bold text-cyan-300">{systemDesignCount}</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Engineering Blog Posts</p>
              <p className="mt-2 text-2xl font-bold text-amber-300">{blogPostsSorted.length}</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Role Fit Tool</p>
              <a
                href="/#role-fit"
                className="mt-2 inline-flex rounded border border-emerald-500/40 px-3 py-1 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Open Brief
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300">Recent Platform Upgrades</p>
              <div className="mt-3 space-y-2 text-sm text-neutral-200">
                {recentUpgrades.map((item) => (
                  <p key={`${item.project}-${item.detail}`}>
                    - <span className="text-neutral-100">{item.project}:</span> {item.detail}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                Direct Recruiter Actions
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-neutral-700 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
                >
                  Resume
                </a>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-neutral-700 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
                >
                  GitHub
                </a>
                <a
                  href="/blog"
                  className="rounded border border-amber-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-amber-300 transition hover:border-amber-300 hover:text-amber-200"
                >
                  Engineering Blog
                </a>
                <a
                  href={profileData.sreDashboardUrl}
                  className="rounded border border-red-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-red-300 transition hover:border-red-300 hover:text-red-200"
                >
                  SRE Dashboard
                </a>
                <a
                  href="/#featured-systems"
                  className="rounded border border-cyan-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Flagship Systems
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Email
                </a>
              </div>

              <div className="mt-4 space-y-1 text-[11px] text-neutral-400">
                {blogPostsSorted.slice(0, 2).map((post) => (
                  <p key={post.slug}>
                    - Latest post: <span className="text-neutral-200">{post.title}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                Tier 1 / Hyper-Scale
              </p>
              <p className="mt-2 text-sm text-neutral-200">Hyperscale Infrastructure & FinOps Alignment</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                Built with strict adherence to Amazon's Frugality and Operational Excellence
                principles by architecting Fargate Spot FinOps optimization and automated DLQ
                replay mechanisms engineered for zero payload loss during simulated partitions.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Tier 2 / Deep Tech</p>
              <p className="mt-2 text-sm text-neutral-200">Systems Reliability & Secure Cloud Primitives</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                Terraform-first IaC delivery, deep observability instrumentation, and secure service
                primitives (mTLS, isolation-first container strategy, hardened data-path controls)
                for mission-critical platform operations.
              </p>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300">
                Tier 3 / Local Enterprise
              </p>
              <p className="mt-2 text-sm text-neutral-200">End-to-End Delivery & Operational Autonomy</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                Owns features from local environment to AWS production: service code, VPC/ALB
                deployment path, CI/CD wiring, and runtime health verification. Available for
                hybrid integration in the GTA or remote EST collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
