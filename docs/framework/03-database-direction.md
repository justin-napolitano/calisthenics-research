# Database Direction

## Status

Deferred until the equilibrium literature review stabilizes the vocabulary.

## Long-Term Shape

The future database should store records for:

- movement atoms
- skills
- drills
- claims
- sources
- constraints
- domains
- practice logs
- reviews
- transfer links

## First Entities

### MovementAtom

The atomic structure being studied.

### Skill

A recognizable movement or tactical unit composed of atoms.

Examples:

- bodyweight squat
- 5K sustainable run
- hip escape
- jab
- round kick
- tree pose

### Drill

A repeatable practice format that trains one or more atoms.

### Claim

A statement that needs evidence, review, or personal testing.

### TransferLink

A relationship that says one atom or skill may help explain or train another.

## First Database Questions

- Which atoms appear across the most domains?
- Which skills share the same failure modes?
- Which drills train the same atom with the lowest injury risk?
- Which claims are evidence-backed versus personal assumptions?
- Which logged practices improved stability, mobility, cardio, or pain-free movement?

## Implementation Bias

Start as files. Move to a database only when the records are stable enough that queries are more useful than directory browsing.

Do not treat the current seed movement records as canonical. They are scratch data for later schema pressure-testing.
