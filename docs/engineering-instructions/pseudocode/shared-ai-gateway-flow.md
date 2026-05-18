# Pseudocode: Shared AI Gateway Flow

## Requirement Parsing

```text
function parseJobDescription(rawText):
  clean text
  extract skills
  extract required coursework
  extract location/work authorization constraints
  extract experience range
  extract role responsibilities
  return normalized requirements
```

## Evidence Matching

```text
function matchEvidence(requirements, portfolioEvidence):
  matches = []
  gaps = []

  for requirement in requirements:
    evidence = find projects, courses, skills, or experience that support requirement
    if evidence exists:
      matches.append({ requirement, evidence, confidence })
    else:
      gaps.append(requirement)

  return { matches, gaps }
```

## Fit Brief Generation

```text
function generateFitBrief(matches, gaps):
  use only matched evidence
  write concise summary
  include proof links
  include gaps honestly
  avoid promises about interview or offer odds
  return structured brief
```

