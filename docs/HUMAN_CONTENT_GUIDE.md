# Human Content Editing Guide

Use this guide when you want the portfolio to feel more human, specific, and interview-defensible.
The goal is not to remove polished writing. The goal is to make every strong claim traceable to work you can explain.

## Main Editing Files

- `content/projects/index.ts`: project copy, metrics, links, build notes, tradeoffs, and next enhancements.
- `content/blog/index.ts`: engineering blog posts and incident-style writeups.
- `content/profile/index.ts`: personal links, headline, contact details, and public URLs.
- `content/education/index.ts`: coursework, GPA/percentage, and education facts.
- `components/sections/featured-systems/FeaturedSystems.tsx`: homepage NetPulse flagship layout.
- `components/sections/projects/Projects.tsx`: project cards and deep-dive modal layout.

## The 90 Percent Human Rule

Before sending the site to a recruiter, every flagship project should contain:

- One thing you personally built.
- One thing that broke or was harder than expected.
- One decision you made and why.
- One metric or result you can defend.
- One next enhancement you would actually build.
- One link that proves the project exists: live demo, repo, design doc, screenshot, or blog post.

## Project Editing Pattern

Use this pattern inside each `implementationNotes` block:

```ts
implementationNotes: {
  ownerSummary:
    "I built the ingestion and worker path because I wanted to understand how queue pressure affects database writes.",
  hardLesson:
    "The first version created duplicate alerts during retries, so I added incident lifecycle state and debounce rules.",
  nextEnhancement:
    "Next I would add a replayable incident timeline with screenshots from the dashboard and logs.",
}
```

Keep these notes in your real voice. It is fine if they are less polished than the rest of the site.
Recruiters skim, but engineers trust concrete details.

## Replace Generic Claims

Weak:

```text
Built a scalable cloud system with reliability best practices.
```

Better:

```text
I moved execution work behind a queue because synchronous requests were tying API latency to worker availability.
```

Weak:

```text
Implemented observability.
```

Better:

```text
I added separate counters for successful checks, failed checks, duplicate alerts, and retry windows so I could explain where incident noise came from.
```

## Evidence Backlog

Add these over time to make the site feel less generated and more owned:

- Screenshots of dashboards, logs, failing test output, and before/after states.
- Small diagrams you created by hand or from actual architecture.
- Short notes about bugs you hit during deployment.
- Commit links for important changes.
- A short demo video or GIF for NetPulse and the load balancer.
- Load test command snippets and exact environment assumptions.
- Real user or real reviewer feedback if you can get it.

## Metric Safety Checklist

Only keep a metric if you can answer:

- What command, script, or tool produced it?
- What environment was used?
- Was it local, staging, or production?
- What was the sample size?
- What broke before the fix?
- What tradeoff did the fix introduce?

If you cannot answer those questions, rewrite the metric as a qualitative claim until you can measure it.

## Blog Post Scaffold

Use this structure for future posts:

1. Problem: what was hard or risky.
2. Architecture: simple data flow before code.
3. Failure: what broke, slowed down, or became confusing.
4. Fix: what you changed.
5. Tradeoff: what got worse or more complex.
6. Evidence: screenshot, log, command, graph, or repo link.
7. Business impact: why the change matters to a team.

## Pre-Application Pass

Before applying to a role:

- Make sure resume wording matches portfolio wording.
- Remove any claim that sounds stronger than the code proves.
- Open every live link and repo link.
- Read the top NetPulse section out loud. If it sounds robotic, rewrite one sentence in your own words.
- Prepare a 90-second explanation for NetPulse, Cloud Code Execution, and Mini Load Balancer.

