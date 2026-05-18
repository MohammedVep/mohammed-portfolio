# Pseudocode: New Feature Build Flow

## Goal

Use this flow when building any new app feature for NetPulse, Shared AI Gateway, Mini Load Balancer, or the portfolio site.

## Manager-To-Engineer Flow

```text
manager defines:
  problem
  target user
  expected behavior
  non-goals
  constraints
  acceptance criteria

engineer responds with:
  implementation plan
  risks
  data model changes
  API/interface changes
  test plan
  rollout plan
```

## Feature Implementation Flow

```text
create branch
read existing code paths
identify content/config/data model changes
write smallest implementation
add validation and failure handling
add tests or manual test checklist
run lint/build/test
smoke-test locally
update docs
commit with clear message
push branch or main depending on workflow
```

## Review Checklist

```text
if feature changes UI:
  test desktop
  test mobile
  test keyboard close/focus behavior if modal
  test links

if feature changes backend:
  test happy path
  test invalid input
  test dependency failure
  test duplicate request
  test logs/metrics

if feature changes portfolio claims:
  verify claim matches repo/live app
  verify metric is measured or rewrite it
  verify resume does not conflict
```

