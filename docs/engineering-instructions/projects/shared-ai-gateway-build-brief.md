# Build Brief: Shared AI Gateway Evidence Panel

## Manager Summary

Enhance Shared AI Gateway with an evidence panel so generated role-fit output shows which portfolio facts, projects, and links were used. The goal is credibility, not AI flashiness.

## Why This Matters

An AI feature can hurt credibility if it feels generic. Evidence grounding makes it clear the system is using real project facts instead of producing unsupported praise.

## Target User

- Recruiter who wants a fast summary without pasting a full job post.
- Engineer who wants to verify claims.
- Mohammed, using the tool to tailor applications responsibly.

## Current Problem

Generated fit summaries are useful, but reviewers may not know which facts produced them.

## Desired Behavior

- Default page explains the portfolio fit without requiring interaction.
- If a job description is pasted, output includes matched requirements.
- Each matched requirement links to supporting project evidence.
- Unsupported requirements are labeled honestly as gaps.

## Non-Goals

- Do not guarantee interviews or offers.
- Do not generate fake experience.
- Do not hide gaps.
- Do not require recruiters to use the tool to understand the candidate.

## Pseudocode

```text
on job description submit:
  parse requirements into normalized skills and signals
  load portfolio evidence index
  for each requirement:
    find matching projects, coursework, and experience
    assign confidence level
    if no evidence exists:
      mark as gap
  generate summary using only matched evidence
  render fit brief with evidence panel

for evidence panel:
  show requirement
  show matched project/coursework
  show proof link
  show confidence label
```

## Acceptance Criteria

- [ ] Every generated claim has a visible evidence source.
- [ ] Gaps are shown instead of hidden.
- [ ] Output is readable without sounding inflated.
- [ ] Default page has a recruiter-safe summary before any AI interaction.
- [ ] System design page explains parsing, retrieval, prompting, and formatting.

## Test Plan

- Paste Veeva-style new grad job description.
- Confirm OS, Distributed Systems, Java/Python, and Toronto availability are matched.
- Confirm missing requirements are marked as gaps.
- Confirm links open correctly.

