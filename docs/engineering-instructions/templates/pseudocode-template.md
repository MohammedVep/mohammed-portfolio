# Pseudocode Template

Use this before writing code. The point is to make the logic obvious before implementation details hide it.

## Feature

`Feature name`

## Input

```text
What comes into the system?
```

## Output

```text
What should the system return, save, display, or trigger?
```

## Happy Path

```text
function handleFeature(input):
  validate input
  normalize input
  load required data
  check permissions or ownership
  run core business logic
  save result
  emit log/metric
  return response
```

## Failure Paths

```text
if input is invalid:
  return validation error

if dependency fails:
  retry if operation is idempotent
  otherwise record failed state
  return recoverable error

if permission fails:
  return forbidden without leaking private data
```

## Edge Cases

- Empty input:
- Duplicate request:
- Slow dependency:
- Partial failure:
- Retry behavior:
- Mobile/responsive behavior:

## Observability

Track:

- Request count
- Success count
- Failure count
- Latency
- Retry count
- User-visible error rate

