# Pseudocode: Portfolio App Content Flow

## Goal

Keep portfolio content centralized, easy to update, and hard to overclaim.

## Flow

```text
app starts:
  load profileData
  load projectsData
  load blogPosts
  render hero summary
  render NetPulse flagship section
  render runbooks and blog previews
  render project categories
  render skills, experience, education, contact

project card render:
  show title
  show why it matters
  show tech stack
  show architecture snapshot
  show top metrics
  show proof links

project deep dive open:
  lock page scroll
  show problem
  show build notes
  show impact metrics
  show links
  show architecture
  show decisions
  show production capabilities
  show quality guarantees
  show recent updates
  allow close by button, overlay click, or Escape key

system design route:
  read projectId from URL
  find matching project
  if missing:
    show 404
  else:
    render project description, metrics, links, architecture, build notes, decisions, and outcomes
```

## Update Rule

```text
when adding or changing a project:
  update content/projects/index.ts first
  add implementationNotes
  add or update systemDesignUrl
  add proof links
  run npm run build
  open local route
  verify links
```

## Human Credibility Rule

```text
for each strong claim:
  if claim has proof:
    keep it
  else if claim is true but not measured:
    rewrite as qualitative
  else:
    remove it
```

