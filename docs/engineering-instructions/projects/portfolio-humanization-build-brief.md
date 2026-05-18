# Build Brief: Portfolio Humanization Layer

## Manager Summary

Build a clearer human-authored evidence layer into the portfolio so recruiters and engineers can quickly see what Mohammed personally built, what failed, how it was fixed, and what would be improved next.

## Why This Matters

The portfolio already has strong systems language. The risk is that highly polished copy can feel generic if it does not include first-hand engineering details. This work makes the site easier to trust.

## Target User

- Primary user: recruiter or hiring manager scanning in 10-30 seconds.
- Secondary user: engineer doing a deeper project review.
- Owner: Mohammed, updating the site before applications.

## Current Problem

Some project descriptions are strong but can still read as polished summaries rather than lived engineering experience. Reviewers need concrete ownership, mistakes, tradeoffs, and evidence.

## Desired Behavior

- Each flagship project has a `Build Notes` section.
- Each project answers: what I owned, what was hard, what I would improve next.
- Each major claim links to proof: repo, live demo, system design, blog post, screenshot, or command output.
- The homepage still stays fast to skim.

## Non-Goals

- Do not add fake personal stories.
- Do not inflate metrics.
- Do not add private credentials, secrets, or internal employer information.
- Do not make the site sound less professional just to sound casual.

## Pseudocode

```text
for each project in portfolio:
  read title, metrics, links, and implementation notes
  render short project card for skimming
  if user opens deep dive:
    show problem
    show build notes
    show architecture
    show metrics
    show tradeoffs
    show proof links

when Mohammed updates a project:
  update facts in content/projects/index.ts
  add first-person build note
  verify live/repo/design links
  run build
  smoke-test relevant route
```

## Acceptance Criteria

- [ ] NetPulse has visible build notes above the fold or near flagship details.
- [ ] Every project has `implementationNotes` in `content/projects/index.ts`.
- [ ] System design pages render the same build notes.
- [ ] README explains where to edit content.
- [ ] Human content guide exists.
- [ ] `npm run build` passes.

## Test Plan

- Run `npm run build`.
- Open `/` and confirm NetPulse build notes are visible.
- Open `/system-design/netpulse` and confirm build notes render.
- Click Live/GitHub/System Design links for top projects.

