# EP-0002: Public Astro Site

Status: planning, implementation gated by EP-0004
Date: 2026-06-08

## Goal

Build a public Astro site that presents the movement project as a living research notebook while keeping Markdown and structured records as the source of truth.

Implementation is gated by EP-0004. The first site should focus on cardio, calisthenics, the morning floor, hot yoga integration, and logging/review summaries. EP-0003 self-defense/equilibrium work remains deferred.

## Deliverables

- Astro scaffold.
- Home page.
- Active projects index.
- Project detail page template.
- Routine page.
- Logbook summary page.
- Evidence page.
- Site plan.
- Generated hero asset stored in the repo.

## Acceptance Criteria

- The homepage explains the project as active health and movement research grounded in source notes and logs.
- The routine page includes the fixed Wednesday 5K and Thursday hot yoga anchors.
- The active projects page shows cardio, calisthenics, morning floor, and hot yoga integration.
- The logbook page shows summaries and reviews, not raw daily logs by default.
- The evidence page separates supported claims, assumptions, and open questions.
- The site can build locally with `npm run build`.

## Later Work

- Render records from YAML instead of duplicating site data.
- Add movement detail pages after vocabulary stabilizes.
- Add research source pages.
- Add log summaries.
- Add database-backed API when the records stabilize.
