# Pseudocode: Edge Balancer Flow

## Request Routing

```text
function routeRequest(request):
  strategy = load current routing strategy
  backends = load healthy backends

  if no healthy backends:
    return 503 with stable error body

  selected = strategy.select(backends, request)
  response = proxy request to selected backend

  if response fails and retry budget remains:
    mark failure signal
    retry different healthy backend

  record route metric
  return response
```

## Health Checks

```text
function healthCheckLoop():
  every interval:
    for backend in backendPool:
      result = check backend health endpoint
      update consecutive success/failure counters

      if failures exceed threshold:
        mark backend unhealthy

      if successes exceed recovery threshold:
        mark backend healthy
```

## Graceful Draining

```text
function drainBackend(backendId):
  mark backend draining
  stop sending new requests
  wait for active requests to finish or timeout
  remove backend from active pool
  emit drain metric
```

