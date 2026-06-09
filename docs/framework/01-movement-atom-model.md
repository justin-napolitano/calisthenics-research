# Movement Atom Model

## Definition

A movement atom is the smallest useful unit of movement analysis in this repo. It is not necessarily the smallest possible biomechanical unit. It is the smallest unit that helps plan practice, compare skills, and explain transfer across systems.

## Required Fields

- `id`: stable identifier.
- `name`: human-readable name.
- `domain`: health, calisthenics, running, yoga, grappling, boxing, Muay Thai, or cross-domain.
- `intent`: what the atom tries to accomplish.
- `base`: stance, support, or contact condition.
- `alignment`: key joint or spine relationships.
- `force_path`: how force enters, transfers, or leaves the body.
- `range`: useful range of motion.
- `timing`: when the atom occurs relative to breath, contact, or another movement.
- `constraint`: the limiting condition that makes the atom meaningful.
- `failure_modes`: ways the atom breaks down.
- `drills`: practice formats that train the atom.
- `evidence`: source links, claim IDs, or review notes.
- `transfer`: related atoms or skills in other domains.

## Status Values

- `seed`: plausible and useful, not yet reviewed.
- `researched`: linked to source notes or claims.
- `tested`: logged in personal practice.
- `reviewed`: passed a critical review note.
- `deprecated`: retained for history but no longer recommended.

## Design Rule

If an atom cannot be observed, cued, drilled, or logged, it is probably too abstract.

