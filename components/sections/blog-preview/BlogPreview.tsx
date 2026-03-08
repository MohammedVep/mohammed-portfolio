import Link from "next/link";
import { blogPostsSorted } from "@/content/blog";

export default function BlogPreview() {
  const latest = blogPostsSorted.slice(0, 3);

  return (
    <section id="blog-preview" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
              Engineering_Notes
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-neutral-300">
              Incident-style writeups that show architecture decisions, load behavior, bottleneck
              analysis, and measurable outcomes.
            </p>
          </div>
          <Link
            href="/blog"
            className="rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
          >
            View All Posts
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                {post.publishedAt} · {post.readTimeMinutes} min
              </div>
              <h3 className="mt-2 text-lg font-bold text-neutral-100">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{post.summary}</p>

              <div className="mt-3 space-y-1 text-[11px] text-emerald-300/90">
                <p>- Problem, architecture, stress, resolution, impact</p>
                <p>- Target teams: {post.targetCompanies.join(", ")}</p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
                >
                  Read Post
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
