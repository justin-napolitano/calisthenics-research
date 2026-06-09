# SP-0008: Sync And Privacy

Status: draft
Parent: EP-0006

## Goal

Define what can leave the phone, how it leaves, and what database target should be tested first.

## Default Policy

Local-first. Explicit sync. Minimal data.

## Sync Tiers

### Tier 0: Local Only

All data stays in the iOS app.

Best for:

- first prototype
- privacy
- testing the logging UX

### Tier 1: File Export

Export selected summaries or normalized records to JSON, CSV, or Markdown.

Best for:

- repo integration
- low infrastructure
- easy review

### Tier 2: CloudKit Private Database

Sync selected records through the user's iCloud account.

Best for:

- personal Apple-device sync
- privacy-preserving Apple-native workflow

Tradeoff:

- less useful for public website queries
- encrypted fields limit indexing

### Tier 3: Personal Backend

Sync selected records to a personally controlled database, likely Postgres.

Best for:

- website summaries
- analysis queries
- future cross-platform tooling

Tradeoff:

- higher privacy/security burden
- requires auth, deletion, export, and backup policies

## Data That Should Not Sync By Default

- raw heart-rate samples
- exact location routes
- free-text pain/injury notes
- sleep details
- bodyweight/body composition
- anything from clinical records

## Data That Can Sync First

- completed practice events
- durations
- coarse cardio minutes
- weight-bearing minutes
- morning floor completion
- calisthenics completion
- hot yoga completion
- weekly aggregate summaries

