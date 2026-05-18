# Engineering Instructions

This folder is the manager-style build layer for the portfolio and related apps.
Use it when you want to turn an idea into clear work an engineer can implement without guessing.

## Why This Exists

Software engineers do need instructions, but not micromanagement.
Good instructions define:

- The business or user problem.
- The expected behavior.
- The constraints and non-goals.
- The important edge cases.
- The acceptance criteria.
- The test plan.
- The rollout expectation.

The engineer should still own implementation details, code quality, debugging, and tradeoff decisions.

## Folder Map

- `templates/`: reusable manager brief and pseudocode templates.
- `projects/`: concrete build briefs for portfolio apps and next enhancements.
- `pseudocode/`: implementation flows written before code.

## How To Use This Folder

1. Start with `templates/manager-build-brief-template.md`.
2. Create a project brief under `projects/`.
3. Add pseudocode under `pseudocode/` before writing production code.
4. Build the smallest working version first.
5. Add tests and acceptance checks.
6. Update the portfolio only after the project is real and verifiable.

## Definition Of A Good Build Brief

A good brief lets another engineer answer:

- What am I building?
- Why does it matter?
- Who uses it?
- What should happen when it works?
- What should happen when it fails?
- What is out of scope?
- How will we know it is done?

