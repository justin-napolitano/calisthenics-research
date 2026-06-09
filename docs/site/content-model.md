# Website Content Model

Date: 2026-06-08

## ResearchProject

Fields:

- `id`
- `title`
- `status`
- `domain`
- `started`
- `thesis`
- `hypothesis`
- `protocol`
- `metrics`
- `falsifiers`
- `source_notes`
- `claim_ids`
- `latest_review`
- `next_decision_date`

Statuses:

- `active`
- `testing`
- `reviewed`
- `paused`
- `superseded`

## Protocol

Fields:

- `id`
- `title`
- `project_id`
- `version`
- `effective_date`
- `weekly_schedule`
- `daily_floor`
- `progression_rules`
- `stop_signals`
- `review_date`

## DailyLog

Fields:

- `date`
- `session_type`
- `morning_floor_completed`
- `morning_floor_minutes`
- `cardio_minutes`
- `weight_bearing_minutes`
- `calisthenics_completed`
- `hot_yoga_completed`
- `effort`
- `soreness`
- `pain_flags`
- `notes`

Daily logs are working records. They are not public by default.

## WeeklySummary

Fields:

- `week`
- `projects`
- `sessions_completed`
- `morning_floor_days`
- `cardio_minutes`
- `weight_bearing_minutes`
- `calisthenics_sessions`
- `hot_yoga_sessions`
- `adherence_rate`
- `recovery_summary`
- `pain_flags_summary`
- `decision`

Weekly summaries are the main public logging unit.

## Review

Fields:

- `id`
- `date`
- `project_id`
- `period`
- `hypothesis_result`
- `evidence_summary`
- `log_summary`
- `decision`
- `next_protocol`

## Claim

Fields already exist in:

```text
records/claims.yaml
```

Claims should be rendered on the site only after the evidence status is clear.

