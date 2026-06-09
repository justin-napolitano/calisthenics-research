# Framework Seed Review

Date: 2026-06-08

## Findings

### Medium: Transfer links are hypotheses, not evidence.

The initial transfer links are useful but mostly unsourced. They should stay marked as `seed` until source notes, coaching input, or logs support them.

### Medium: Martial arts records need safety and coaching boundaries.

The repo can study grappling, boxing, and Muay Thai mechanics, but future drills should distinguish solo movement study from contact training that requires qualified supervision.

### Medium: The current Astro site duplicates data from records.

The site uses `src/data/site.ts` for speed. Later work should render from YAML or a generated JSON projection so the site does not drift from the research records.

### Low: Atom fields may be too broad.

Fields such as `alignment` and `force_path` are useful but could become vague. The first validation pass should test whether real skills can be encoded consistently.

## Recommendations

- Keep claims and transfer links conservative.
- Add a source and review step before public skill recommendations.
- Add record validation before creating many atoms.
- Use the first 10 skill cards to pressure-test the schema.

## Update After Thesis Pivot

The user clarified that the core idea is not "movement atoms" first. The core idea is a kinesiology framework for balance, equilibrium disruption, pressure tiers, escape, takedown, and immobilization. Movement atoms and database records are now deferred implementation details pending EP-0003.
