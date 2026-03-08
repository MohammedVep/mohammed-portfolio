import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostsSorted, getBlogPostBySlug } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPostsSorted.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Engineering Blog",
    };
  }

  return {
    title: `${post.title} | Engineering Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black py-16 text-neutral-200">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-300"
          >
            Back to Blog
          </Link>
          <div className="text-[10px] uppercase tracking-widest text-neutral-500">
            {post.publishedAt} · {post.readTimeMinutes} min read
          </div>
        </div>

        <header className="mb-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">Incident_Architecture_Breakdown</p>
          <h1 className="mt-3 text-3xl font-bold text-white">{post.title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-300">{post.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={`${post.slug}-${tag}`}
                className="rounded border border-neutral-700 bg-neutral-900 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-6 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400">1. Hook and Stakes</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">{post.hook.problem}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">{post.hook.stakes}</p>
        </section>

        <section className="mb-6 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400">2. Architecture Diagram</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">{post.architecture.summary}</p>
          <pre className="mt-4 overflow-x-auto rounded border border-neutral-800 bg-black p-4 text-[11px] text-neutral-400">
            {`mermaid
${post.architecture.diagram}
`}
          </pre>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            {post.architecture.components.map((component, index) => (
              <li key={`${post.slug}-component-${index}`}>{component}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-amber-300">3. Stress Test and Breaking Point</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            <span className="font-semibold text-neutral-100">Setup:</span> {post.stressTest.setup}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            <span className="font-semibold text-neutral-100">Failure Signal:</span>{" "}
            {post.stressTest.breakingPoint}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-200">
            {post.stressTest.evidence.map((item, index) => (
              <li key={`${post.slug}-evidence-${index}`}>{item}</li>
            ))}
          </ul>
          {post.stressTest.screenshotUrl ? (
            <figure className="mt-4 rounded border border-neutral-800 bg-black p-3">
              <img
                src={post.stressTest.screenshotUrl}
                alt={post.stressTest.screenshotAlt ?? `${post.title} stress test evidence`}
                className="w-full rounded"
              />
              {post.stressTest.screenshotCaption ? (
                <figcaption className="mt-2 text-xs text-neutral-400">
                  {post.stressTest.screenshotCaption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </section>

        <section className="mb-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            4. Bottleneck Root Cause and Resolution
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            <span className="font-semibold text-neutral-100">Root Cause:</span>{" "}
            {post.bottleneckResolution.rootCause}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            <span className="font-semibold text-neutral-100">Resolution:</span>{" "}
            {post.bottleneckResolution.solution}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-200">
            {post.bottleneckResolution.tradeoffs.map((item, index) => (
              <li key={`${post.slug}-tradeoff-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-300">5. Business Impact</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-200">
            {post.businessImpact.map((item, index) => (
              <li key={`${post.slug}-impact-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400">References and Live Evidence</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.links.map((link) => (
              <a
                key={`${post.slug}-${link.label}`}
                href={link.url}
                target={link.url.startsWith("/") ? undefined : "_blank"}
                rel={link.url.startsWith("/") ? undefined : "noreferrer"}
                className="rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
