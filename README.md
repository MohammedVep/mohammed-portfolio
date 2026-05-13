# Mohammed Vepari Portfolio

Next.js portfolio focused on backend, distributed systems, reliability, and project proof-of-work.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate Before Push

```bash
npm run build
```

## Content Editing Map

- `content/projects/index.ts`: primary project data, metrics, links, implementation notes, tradeoffs, and next enhancements.
- `content/blog/index.ts`: engineering blog posts and runbook-style writing.
- `content/profile/index.ts`: personal links, contact URLs, and external project URLs.
- `content/education/index.ts`: education, GPA/percentage, and coursework.
- `components/sections/featured-systems/FeaturedSystems.tsx`: homepage NetPulse flagship section.
- `components/sections/projects/Projects.tsx`: project grid and deep-dive modal rendering.

## Human Editing Workflow

1. Update the project facts in `content/projects/index.ts`.
2. Replace generic claims with concrete first-person build notes.
3. Add proof links: live demo, repo, system design, screenshot, or blog post.
4. Run `npm run build`.
5. Smoke-test the homepage, project modals, and external links.

Use `docs/HUMAN_CONTENT_GUIDE.md` when rewriting the portfolio so the copy stays specific, defensible, and interview-ready.

