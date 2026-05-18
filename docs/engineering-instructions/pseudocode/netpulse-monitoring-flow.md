# Pseudocode: NetPulse Monitoring Flow

## Monitor Creation

```text
function createMonitor(userId, url, interval):
  require authenticated user
  validate url uses http or https
  normalize url
  check user quota
  save monitor with status pending
  enqueue initial check
  return monitor id and dashboard link
```

## Check Execution

```text
function executeCheck(checkJob):
  load monitor
  start timer
  try:
    send HTTP request with timeout
    classify response as up, degraded, or down
    save check result with latency and region
  catch timeout/network error:
    save failed check result
  update rolling uptime summary
  evaluate incident state
  emit check metric
```

## Incident Evaluation

```text
function evaluateIncident(monitor, latestResult):
  load recent check window
  if failures below threshold:
    do not create incident
    return

  existingIncident = find open incident for monitor
  if existingIncident exists:
    append event and debounce alert
  else:
    create incident
    enqueue alert if not in demo mode
```

## Recovery

```text
function evaluateRecovery(monitor):
  load open incident
  load recent successful checks
  if success threshold met:
    mark incident resolved
    save recovery timestamp
    notify user if alerts enabled
```

