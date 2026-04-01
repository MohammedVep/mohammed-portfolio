const runbookItems = [
  {
    title: "Migration Notes: App Runner to ECS for the AI Gateway and Go Load Balancer",
    summary:
      "Why both services outgrew App Runner, why the AI gateway moved to ECS Express Mode while the load balancer moved to regular ECS, and which AWS alternatives remained viable.",
    href: "/blog/app-runner-to-ecs-migration-notes",
    label: "Read Migration Notes",
  },
  {
    title: "ADR: Fargate Spot and Firecracker Isolation Strategy",
    summary:
      "Why I selected AWS Fargate Spot + isolation-first execution boundaries over EC2 worker fleets for asynchronous payload workloads.",
    href: "/blog/queue-first-cloud-code-execution",
    label: "Read ADR",
  },
  {
    title: "Post-Mortem: Surviving a 15k Req/Min Payload Spike",
    summary:
      "Failure timeline, root-cause analysis, and queue-decoupling response path used to stabilize throughput and memory pressure.",
    href: "/blog/queue-first-cloud-code-execution",
    label: "Read Post-Mortem",
  },
  {
    title: "FinOps Report: 70% Compute Reduction with Spot",
    summary:
      "Cost and scaling analysis for elastic worker execution using spot capacity, queue-depth triggers, and recovery guardrails.",
    href: "/blog/queue-first-cloud-code-execution",
    label: "Read FinOps Report",
  },
];

export default function Runbooks() {
  return (
    <section id="runbooks" className="border-t border-neutral-900 bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-center text-xs font-mono uppercase tracking-[0.5em] text-emerald-500">
          Architecture_And_Runbooks
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-neutral-300">
          Engineering writing focused on architecture decisions, incident response, and operating
          economics. This is the evidence layer behind the project metrics.
        </p>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {runbookItems.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 font-mono"
            >
              <h3 className="text-lg font-bold text-neutral-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.summary}</p>
              <a
                href={item.href}
                className="mt-4 inline-flex rounded border border-cyan-500/40 px-3 py-2 text-xs uppercase tracking-widest text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                {item.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
