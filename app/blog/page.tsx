import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsSorted } from "@/content/blog";

export const metadata: Metadata = {
  title: "Engineering Blog | Mohammed Vepari",
  description:
    "Incident-style engineering writeups covering architecture, stress testing, bottleneck resolution, and production impact.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">Engineering_Blog</p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Architecture Breakdowns and Incident-Style Deep Dives
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-neutral-300">
            These posts follow a strict arc: problem, architecture, failure point, resolution, and
            business impact. They are written for engineering hiring teams that want production-grade
            thinking, not tutorial-style demos.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {blogPostsSorted.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500">
                <span>{post.publishedAt}</span>
                <span>·</span>
                <span>{post.readTimeMinutes} min read</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-neutral-100">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{post.summary}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {post.targetCompanies.map((company) => (
                  <span
                    key={`${post.slug}-${company}`}
                    className="rounded border border-cyan-500/40 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-300"
                  >
                    {company}
                  </span>
                ))}
              </div>

              <div className="mt-3 space-y-1 text-[11px] text-emerald-300/90">
                <p>- Problem under hard constraints</p>
                <p>- Architecture data flow</p>
                <p>- Breaking point and bottleneck fix</p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
                >
                  Read Full Breakdown
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 font-mono">
          <h3 className="text-sm uppercase tracking-[0.3em] text-amber-300">How to Add a New Post</h3>
          <div className="mt-3 space-y-2 text-sm text-neutral-200">
            <p>
              1. Open <code>content/blog/index.ts</code> and add a new object in <code>blogPosts</code>.
            </p>
            <p>
              2. Follow this structure exactly: <code>hook</code> → <code>architecture</code> →{" "}
              <code>stressTest</code> → <code>bottleneckResolution</code> →{" "}
              <code>businessImpact</code>.
            </p>
            <p>
              3. Add optional stress-test screenshots to <code>public/</code> and set{" "}
              <code>stressTest.screenshotUrl</code>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
