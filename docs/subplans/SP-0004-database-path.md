# SP-0004: Database Path

Status: draft
Parent: EP-0001

## Goal

Move from Markdown and YAML records to a database only after the entities and questions stabilize.

## Phase 1: File-Backed Records

- Movement atoms in YAML.
- Skills in YAML.
- Transfer links in YAML.
- Claims and sources in YAML.
- Markdown research and review notes.

## Phase 2: Validation

- JSON schemas.
- Record linting.
- Link checks.
- Duplicate ID checks.

## Phase 3: Database

Candidate stores:

- SQLite for local-first queryability.
- Postgres if the graph becomes multi-user, API-backed, or agent-driven.

## First Queries

- Show every skill using `atom.force-from-floor`.
- Show every claim without a source.
- Show every transfer link still marked `seed`.
- Show every martial skill with no safety or coaching note.

