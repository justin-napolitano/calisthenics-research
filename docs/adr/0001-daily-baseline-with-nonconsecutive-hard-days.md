# ADR-0001: Daily Baseline With Nonconsecutive Hard Days

Date: 2026-06-08

## Status

Superseded by [ADR-0002](0002-health-first-integrated-week.md).

## Context

The user wants a daily baseline routine. Public health guidance supports regular activity and at least 2 days per week of muscle-strengthening. Beginner resistance-training guidance also points toward 2 to 3 nonconsecutive full-body sessions per week.

The tension is that a daily habit is useful, but hard full-body training every day is a poor default for a beginner baseline.

## Decision

The original seed defined the routine as daily practice with two intensities:

- Hard full-body circuit on Monday, Wednesday, and Friday.
- Easy circuit, walk, or mobility block on the other days.

All days are logged. Only hard days are progressed.

ADR-0002 revises this after the user clarified fixed Wednesday 5K, Thursday hot yoga, and a health-first goal where heart health, stability, and mobility outrank mass and peak strength.

## Consequences

Positive:

- Supports daily habit formation.
- Leaves recovery room.
- Keeps logs comparable.
- Makes progression easier to reason about.

Tradeoffs:

- The phrase "daily routine" now means daily habit, not identical work every day.
- Pulling strength is underdeveloped until a safe row, band, ring, or bar option is added.
