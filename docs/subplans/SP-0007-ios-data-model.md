# SP-0007: iOS Data Model

Status: draft
Parent: EP-0006

## Goal

Define the smallest app data model that supports the active cardio and calisthenics research.

## Candidate Records

### PracticeEvent

Represents something intentionally practiced.

Fields:

- `id`
- `started_at`
- `ended_at`
- `type`
- `source`
- `duration_minutes`
- `notes`

Types:

- `morning_floor`
- `calisthenics_a`
- `calisthenics_b`
- `run`
- `walk`
- `bike`
- `hot_yoga`
- `recovery`

Sources:

- `manual`
- `healthkit`
- `imported`

### SubjectiveCheckIn

Represents personal response.

Fields:

- `id`
- `date`
- `effort`
- `soreness`
- `pain_flag`
- `energy`
- `sleep_quality`
- `note`

### HealthMetricSample

Represents normalized HealthKit-derived data.

Fields:

- `id`
- `healthkit_uuid`
- `type`
- `start`
- `end`
- `value`
- `unit`
- `source_revision`
- `imported_at`

### SyncRecord

Represents the state of exported or synced data.

Fields:

- `local_id`
- `remote_id`
- `remote_target`
- `last_synced_at`
- `sync_status`

## Open Questions

- Should morning floor be a standalone event or a checklist?
- Should HealthKit workout samples be preserved as raw metadata or normalized only?
- Should pain flags sync at all, or remain device-local?
- Should the first export format be JSON, CSV, or Markdown?

