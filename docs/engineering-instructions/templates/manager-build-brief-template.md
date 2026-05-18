# Manager Build Brief Template

## Project Name

`Replace with app or feature name`

## Manager Summary

Build `feature/app` so that `target user` can `complete important task` without `current pain point`.

## Why This Matters

Explain the user, recruiter, engineering, or business reason this should exist.
Keep this short and practical.

## Target User

- Primary user:
- Secondary user:
- Reviewer / operator:

## Current Problem

What is broken, missing, confusing, slow, unsafe, or hard to verify right now?

## Desired Behavior

When the feature works correctly:

- The user can:
- The system should:
- The operator/reviewer can verify:

## Non-Goals

This work should not include:

- Non-goal 1
- Non-goal 2
- Non-goal 3

## Constraints

- Runtime:
- Framework:
- Database/storage:
- Auth/security:
- Deployment:
- Cost limit:
- Performance expectation:

## User Stories

- As a `user`, I want `action`, so that `benefit`.
- As an `operator`, I want `visibility`, so that `failure mode can be diagnosed`.
- As a `reviewer`, I want `proof`, so that `claim can be verified`.

## Data Model Sketch

```ts
type Entity = {
  id: string;
  createdAt: string;
  // Add fields here before coding.
};
```

## API / Interface Sketch

```http
GET /api/example
POST /api/example
```

## Pseudocode

```text
on user action:
  validate input
  check permissions
  execute core operation
  persist result
  emit metric/log
  return stable response

on failure:
  classify error
  retry only if safe
  record failure reason
  return useful message
```

## Acceptance Criteria

- [ ] Core happy path works.
- [ ] Invalid input is rejected safely.
- [ ] Failure state is visible to the user or operator.
- [ ] Logs/metrics exist for the critical path.
- [ ] Mobile layout is usable if UI is included.
- [ ] README or system design doc explains the implementation.
- [ ] Build/test command passes.

## Test Plan

- Unit tests:
- Integration tests:
- Manual smoke test:
- Failure-mode test:
- Link/deployment test:

## Rollout Plan

1. Build locally.
2. Test core paths.
3. Deploy to staging or preview.
4. Smoke-test live URL.
5. Update portfolio links/docs.
6. Monitor first usage.

## Risks

- Risk:
  Mitigation:

## Open Questions

- Question 1
- Question 2

