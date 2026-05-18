# Build Brief: NetPulse Real-User Evidence Upgrade

## Manager Summary

Upgrade NetPulse from a strong portfolio system into a more credible live monitoring product by adding real-user onboarding evidence, public status-page examples, and verifiable usage metrics.

## Why This Matters

NetPulse is the portfolio flagship. The strongest next step is moving from staged validation language to real usage evidence.

## Target User

- Developer who wants to monitor a personal site.
- Recruiter who wants to verify the live app quickly.
- Engineer who wants to inspect reliability decisions.

## Current Problem

The project demonstrates architecture, but some metrics are staged or load-test based. Recruiters may trust it more if they can see real public monitored targets and live status-page output.

## Desired Behavior

- A demo user can register or use demo mode safely.
- A reviewer can view at least one public status page.
- The app shows recent checks, incidents, and uptime summary.
- The portfolio links to the live demo, repo, system design, and one incident writeup.

## Non-Goals

- Do not expose private user checks.
- Do not send real email alerts to reviewers in demo mode.
- Do not claim real production scale until real usage exists.

## Pseudocode

```text
on new monitor create request:
  validate URL format
  verify user ownership or demo permission
  create monitor record
  enqueue first health check
  return monitor dashboard URL

on scheduled check:
  load active monitors
  enqueue check jobs by region
  for each job:
    perform HTTP check with timeout
    classify result as up/down/degraded
    save check result
    update uptime aggregate
    if failure threshold crossed:
      create or update incident
      debounce alert notification

on public status page request:
  load public monitor summary
  hide private owner data
  show uptime, recent incidents, and last check time
```

## Acceptance Criteria

- [ ] Demo mode cannot mutate privileged data.
- [ ] Public status page hides private user details.
- [ ] Failed checks do not create duplicate incidents during retry windows.
- [ ] Uptime summary is timestamped and explainable.
- [ ] Portfolio copy distinguishes real usage from staged validation.

## Test Plan

- Create a monitor for a known public URL.
- Simulate a timeout and confirm incident lifecycle behavior.
- Confirm duplicate alerts are suppressed.
- Confirm public status page works on mobile.
- Confirm logs show check execution and incident decision path.

