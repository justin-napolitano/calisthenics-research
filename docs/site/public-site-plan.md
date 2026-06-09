# Public Site Plan

Date: 2026-06-08

## Working Title

Atomic Movement Lab

## Purpose

Turn the repo into a readable public surface for a long-term living research summary of what the user does in life. Fitness is the first active domain: cardio, calisthenics, morning practice, hot yoga, and eventually martial/self-defense study.

The site should show the current routine, active projects, logs, reviews, decisions, the research spine, and later the emerging equilibrium framework.

## Status

Planning resumed, implementation still gated.

The first public site should focus on the active health-baseline research work in [EP-0004](../execplans/EP-0004-calisthenics-cardio-thesis-review.md). The self-defense/equilibrium framework remains deferred until [EP-0003](../execplans/EP-0003-equilibrium-literature-review.md).

The site should not publish universal recommendations. It should publish active hypotheses, protocols, logs, reviews, and decisions.

## Site Principles

- Start with Markdown and structured records.
- Keep the site as a projection of the repo, not a separate source of truth.
- Separate health guidance, martial arts study, personal logs, and claims.
- Make uncertainty visible.
- Avoid mystical explanations unless they are being translated into observable mechanics.
- Publish summaries and decisions, not every raw personal detail.
- Label content as `active`, `testing`, `reviewed`, `paused`, or `superseded`.
- Treat life practice as data, but keep interpretation honest and bounded.

## First Pages

- Home: current active projects, baseline week, and latest review.
- Active Projects: cardio, calisthenics, morning floor, and later equilibrium/self-defense.
- Project Detail: thesis, protocol, metrics, evidence, logs, review status, and decision history.
- Routine: current health-first weekly plan and morning floor.
- Logbook: weekly summaries and 4-week reviews, not raw daily logs by default.
- Evidence: source-backed claims and open questions.
- About: why this exists and how uncertainty is handled.

## Later Pages

- Kinesiology framework.
- Movement records after the vocabulary stabilizes.
- Grappling research.
- Boxing research.
- Muay Thai research.
- Running and cardio logs.
- Yoga and mobility notes.
- Claim browser.
- Personal experiment summaries.

## Active Research Projects

Initial active projects:

1. Cardio dose for heart health.
2. Calisthenics for stability, mobility, function, and bone health.
3. Morning floor protocol.
4. Hot yoga integration and recovery.

Deferred projects:

1. Equilibrium and self-defense thesis.
2. Grappling/boxing/Muay Thai movement translation.
3. Movement database and atom records.

## Logging Model

Raw daily logs stay in:

```text
logs/YYYY-MM-DD.md
```

The website should prefer:

```text
logs/weekly/YYYY-WW.md
docs/reviews/YYYY-MM-DD-*.md
```

Daily logs answer "what happened today." Weekly summaries answer "what pattern is emerging." Reviews answer "what decision should change the plan."

## Public/Private Boundary

Safe to publish:

- hypothesis
- protocol
- target ranges
- weekly adherence
- aggregate cardio minutes
- aggregate morning-floor completion
- source notes
- decision reviews

Treat carefully or summarize:

- pain details
- weight/body composition
- medical conditions
- injury history
- location-specific activity details
- anything that sounds like medical advice for other people

## First Astro Implementation

Use Astro content collections for public content:

```text
src/content/projects/
src/content/log-summaries/
src/content/reviews/
src/content/routines/
src/content/notes/
```

Use repo docs and records as the research source of truth:

```text
docs/research/
records/claims.yaml
records/sources.yaml
logs/
```

The first implementation can manually duplicate a small amount of content into `src/content`. Later, add a projection script that turns repo records into site content.

## Asset

The first hero image was generated with the built-in image generation tool and copied into:

```text
public/assets/movement-field.png
```

Prompt:

```text
Create a polished editorial image about unified movement practice grounded in physics and science, not mysticism. Bright modern training studio, one adult athlete shown as a tasteful composite motion study across running stride, deep squat, guard stance, low grappling base, boxing punch mechanics, Muay Thai kick chamber, and yoga balance.
```
