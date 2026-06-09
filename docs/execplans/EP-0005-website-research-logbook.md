# EP-0005: Website Research Logbook

Status: draft
Date: 2026-06-08

## Goal

Plan the website as a public living research summary with active projects, protocols, log summaries, and reviews.

## Core Decision

Yes: the website should have active research projects and logging.

No: the website should not publish every raw daily log by default.

The site should publish:

- what is actually being practiced in the user's life
- active hypotheses
- current protocol
- weekly summaries
- 4-week reviews
- evidence status
- decision history

## First Active Projects

1. Cardio dose for heart health.
2. Calisthenics for stability, mobility, function, and bone health.
3. Morning floor protocol.
4. Hot yoga integration and recovery.

## First Site Routes

```text
/
/projects/
/projects/cardio-heart-health/
/projects/calisthenics-stability-bone-health/
/projects/morning-floor/
/routine/
/logbook/
/evidence/
/about/
```

## First Content Collections

```text
src/content/projects/
src/content/log-summaries/
src/content/reviews/
src/content/routines/
src/content/notes/
```

## Acceptance Criteria

- The site makes the current protocol obvious.
- The site makes uncertainty obvious.
- Active projects are testable and have falsifiers.
- Weekly log summaries can be added without changing page code.
- Raw logs remain optional and are not required for the public site.
- The site can later be generated from repo records.

## Non-Goals

- Database implementation.
- Self-defense framework pages.
- Movement atom implementation.
- Automated log ingestion.
- Public medical advice.
