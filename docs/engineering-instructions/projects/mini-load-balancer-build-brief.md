# Build Brief: Mini Load Balancer Failure Replay

## Manager Summary

Add a failure replay mode to the Mini Load Balancer so reviewers can observe routing behavior when a backend becomes unhealthy and later recovers.

## Why This Matters

Load balancer claims are easier to trust when the reviewer can watch failover, retries, hysteresis, and recovery behavior instead of only reading about them.

## Target User

- Engineer reviewing Go/networking fundamentals.
- Recruiter looking for a quick live proof artifact.
- Mohammed during interviews, explaining failure handling.

## Current Problem

The load balancer has strong concepts, but the proof can be easier to consume if failure behavior is replayable.

## Desired Behavior

- Reviewer can start a replay scenario from the UI or admin endpoint.
- One backend is marked unhealthy.
- Traffic moves away from unhealthy backend.
- Recovery is delayed by hysteresis to avoid flapping.
- Metrics show active backend state and routing decisions.

## Non-Goals

- Do not run destructive tests against production dependencies.
- Do not add complex chaos infrastructure before a simple replay works.
- Do not hide backend state transitions.

## Pseudocode

```text
on replay start:
  load scenario config
  mark backend B as unhealthy at t+5s
  continue routing requests
  record backend selected for each request
  after recovery window:
    mark backend B as probing
  if health checks pass for threshold:
    mark backend B as healthy
  render timeline of state transitions

route request:
  load routing strategy
  filter healthy backends
  select backend
  if request fails and retry budget remains:
    retry on different healthy backend
  emit metric for selection and failure reason
```

## Acceptance Criteria

- [ ] Replay shows unhealthy, draining/probing, and healthy states.
- [ ] Retry count is bounded.
- [ ] Backend flapping does not cause immediate traffic oscillation.
- [ ] Metrics are visible during replay.
- [ ] README or blog post explains the scenario.

## Test Plan

- Run replay with round robin.
- Run replay with least connections.
- Confirm unhealthy backend receives no new traffic after threshold.
- Confirm recovered backend waits before receiving traffic.
- Confirm route metrics remain readable on mobile.

