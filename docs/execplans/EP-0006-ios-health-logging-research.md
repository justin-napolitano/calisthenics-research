# EP-0006: iOS Health Logging Research

Status: draft
Date: 2026-06-08

## Goal

Research an iOS app that captures HealthKit data and easy manual logs for the living research system.

## Core Decision

The first app should be a capture layer, not an analysis layer.

Summaries can come later after the data model and logging cadence are stable.

## Deliverables

- HealthKit source notes.
- iOS logging thesis.
- Draft data model for app-captured records.
- Privacy and sync boundary.
- Decision note on first sync target.

## Research Questions

1. Which HealthKit types are necessary for cardio and bone-health tracking?
2. Which manual fields are required for the morning floor, calisthenics, hot yoga, and pain/recovery?
3. What local storage model should be used first?
4. What sync target best fits personal research: file export, CloudKit, or personal Postgres?
5. What should never leave the phone by default?

## Candidate Architecture

```text
iPhone / Apple Watch
  -> HealthKit
  -> iOS capture app
  -> local store
  -> explicit sync/export
  -> personal database or repo records
  -> later website summaries
```

## Acceptance Criteria

- The app requires no cloud account for basic logging.
- HealthKit read permissions are narrow and purpose-specific.
- Manual logs can be entered in under 10 seconds for common events.
- Sync is opt-in and reversible.
- Raw logs and derived summaries are stored separately.
- No public website feature depends on raw daily health data.

## Non-Goals

- Building the app now.
- Building the database now.
- Writing coaching recommendations.
- Publishing raw health logs.
- Adding third-party analytics or advertising SDKs.

