# Website Architecture

Date: 2026-06-08

## Site Type

The site should be a living research summary of the user's life practice, not a polished fitness brand page.

Its job is to show:

- what is being practiced in real life
- what is being tested
- why it is being tested
- what the current protocol is
- what the logs show
- what changed after review
- which claims are supported, assumed, or rejected

## Core Information Architecture

### Home

Purpose:

- Give a fast overview of the project.
- Show active research projects.
- Show the current baseline week.
- Show the latest decision or review.

Sections:

- Current thesis.
- Active projects.
- This week's protocol.
- Latest log summary.
- Evidence status.

### Active Projects

Purpose:

- Track research work as experiments, not advice.

Initial projects:

- Cardio dose for heart health.
- Calisthenics for stability, mobility, function, and bone health.
- Morning floor protocol.
- Hot yoga integration and recovery.

Later projects:

- Equilibrium and self-defense thesis.
- Grappling movement research.
- Boxing movement research.
- Muay Thai movement research.

### Project Detail

Each project page should include:

- status
- thesis
- hypothesis
- why it matters
- protocol
- metrics
- evidence
- falsifiers
- current result
- decision history

### Routine

Purpose:

- Show what to do this week.
- Keep daily decisions simple.

Sections:

- Weekly schedule.
- Morning floor.
- Calisthenics A/B.
- Cardio plan.
- Hot yoga handling.
- Stop signals.

### Logbook

Purpose:

- Show summarized practice data without turning the site into raw diary output.

Levels:

- daily raw logs in `logs/`
- weekly public summaries
- 4-week project reviews
- decision notes

### Evidence

Purpose:

- Show claims, sources, and uncertainty.

Sections:

- Supported claims.
- Working assumptions.
- Open questions.
- Rejected or superseded claims.

## Content Sources

Research source of truth:

```text
docs/research/
records/claims.yaml
records/sources.yaml
references.bib
```

Practice source of truth:

```text
logs/
docs/reviews/
docs/planning/
```

Site source:

```text
src/content/
src/pages/
src/data/
```

## Data Flow

Phase 1:

```text
Markdown docs -> hand-authored Astro content -> website
```

Phase 2:

```text
Markdown/YAML records -> projection script -> Astro content -> website
```

Phase 3:

```text
Database -> API/static export -> website
```

## Public Logging Policy

Raw daily logs are working data. They should not be published by default.

Publish weekly summaries that include:

- sessions completed
- morning floor completion
- moderate-equivalent cardio minutes
- weight-bearing minutes
- calisthenics sessions
- hot yoga completion
- soreness trend
- pain flags summarized without sensitive detail
- decision for next week

## Build Bias

The first site should be static Astro with Markdown content collections. Do not add a database until the records, questions, and review cadence are stable.
