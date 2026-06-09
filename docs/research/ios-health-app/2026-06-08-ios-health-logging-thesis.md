# iOS Health Logging Thesis

Date: 2026-06-08

## Working Thesis

The first app should not try to be a coach, dashboard, or public publishing tool. It should be a low-friction capture layer for personal movement research.

The app should:

- read selected HealthKit data with explicit permission
- support very fast manual logs
- store data locally first
- normalize records into the repo's research vocabulary
- sync only selected records to a controlled database
- avoid summaries and recommendations until the data model is proven

## Why An App Makes Sense

The current repo can define protocols and research questions, but daily capture will fail if logging is too slow. An iOS app can reduce friction by combining:

- Apple Health data already collected by phone/watch
- one-tap manual completion logs
- brief subjective fields such as effort, soreness, pain flags, and notes
- later sync into a database or static research summaries

## Definition Of Success

The app succeeds if it makes logging easier without corrupting the research boundary.

Success criteria:

- Morning floor can be logged in under 10 seconds.
- Cardio sessions can be imported from HealthKit or entered manually.
- Calisthenics sessions can be logged with completion, effort, and pain flags.
- HealthKit permissions are narrow and understandable.
- Nothing syncs off-device without explicit opt-in.
- Raw data and derived summaries are kept separate.

## Initial Data To Capture

### HealthKit Read Candidates

- workouts
- step count
- distance walking/running
- heart rate
- resting heart rate
- active energy
- exercise time

Later:

- HRV
- sleep
- VO2 max estimates
- walking/running speed
- flights climbed

### Manual Log Candidates

- morning floor completed
- morning floor minutes
- calisthenics A/B completed
- hot yoga completed
- effort, 1-10
- soreness, 0-10
- pain flag: none, mild, stop-signal
- bone-loading exposure
- free note

## Privacy Principle

Health data is sensitive. The default architecture should be:

```text
HealthKit + manual logs -> local app store -> explicit sync/export -> database/repo summaries
```

The app should not silently upload raw HealthKit data.

## First Research Questions

1. Which HealthKit data types are actually needed for EP-0004?
2. Which fields must remain manual because HealthKit cannot know intent?
3. Should the first sync target be CloudKit private database, a personal Postgres/Supabase backend, or local file export?
4. What is the minimum schema that supports cardio, calisthenics, morning floor, hot yoga, and later reviews?
5. What privacy policy and consent language would be required if this ever ships beyond personal use?

## Provisional Recommendation

Research path:

1. Define data types and privacy boundaries.
2. Build a paper/data model for logs.
3. Prototype local-only iOS logging.
4. Add HealthKit read-only import.
5. Add explicit export/sync.
6. Generate weekly summaries later.

Do not start with a cloud database as the source of truth. Start local-first, then sync normalized records.

