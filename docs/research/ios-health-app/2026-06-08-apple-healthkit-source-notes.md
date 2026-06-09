# Source Notes: Apple HealthKit And Sync

Date: 2026-06-08

## Search Goal

Research whether an iOS app can pull from local health data, support easy logs, and later sync selected records to a database.

## Sources

### HealthKit Framework

Source: https://developer.apple.com/documentation/healthkit/

Apple describes HealthKit as the central repository for health and fitness data on iPhone and Apple Watch. Apps can access and share data with user permission.

Use in thesis:

- Confirms the app can use HealthKit as an input source.
- Reinforces that HealthKit is collaborative and permission-bound.

### Authorizing Access To Health Data

Source: https://developer.apple.com/documentation/healthkit/authorizing-access-to-health-data

Apple requires fine-grained authorization for reading and writing HealthKit data. Apps need custom purpose strings for reading and writing. Apple also notes that apps do not know whether someone granted or denied read permission; denied reads return only samples the app itself saved.

Use in thesis:

- Permission design is product design, not a technical afterthought.
- The app should ask for the smallest useful set of data types.
- Manual logs are still needed because HealthKit access may be denied or incomplete.

### Setting Up HealthKit

Source: https://developer.apple.com/documentation/healthkit/setting_up_healthkit

Apple requires enabling HealthKit capability, checking availability, creating a HealthKit store, and requesting permission. It also warns that App Review may reject apps that enable Clinical Health Records capability without using it.

Use in thesis:

- Use normal health and fitness data first.
- Do not request Clinical Health Records.

### HKAnchoredObjectQuery

Source: https://developer.apple.com/documentation/healthkit/hkanchoredobjectquery

Anchored object queries return HealthKit changes and an anchor for fetching only newer saved or deleted samples later.

Use in thesis:

- Good fit for incremental local import.
- Supports a sync model where the app remembers what HealthKit data it has already seen.

### CloudKit Encryption

Source: https://developer.apple.com/documentation/cloudkit/encrypting-user-data

Apple documents encrypted CloudKit fields for sensitive/private data, private and shared database support, and limitations around encrypted fields and indexing.

Use in thesis:

- CloudKit private database is a plausible personal sync target.
- Encrypted fields are useful but limit queryability.
- This may be better for personal sync than analytics-style database queries.

### App Store Review Guidelines: Health And Health Research

Source: https://developer.apple.com/app-store/review/guidelines/

Apple's guidelines treat health, fitness, and medical data as especially sensitive. Apps may not use or disclose health, fitness, or medical research data for advertising, marketing, or unrelated data mining. Apps must disclose the specific health data collected.

Use in thesis:

- No ad-tech or marketing use.
- Privacy policy and consent must be explicit if the app is distributed.
- The app should avoid third-party SDKs unless there is a strong reason.

## Provisional Architecture Implications

HealthKit can provide the observed activity layer. Manual logs provide intent and subjective response. A local-first app should normalize both into research records. Sync should be explicit and scoped.

Candidate sync models:

1. Local-only plus export to files.
2. CloudKit private database with encrypted fields.
3. Personal backend with Postgres if cross-platform website/database queries become necessary.

Do not decide the final database until the logging schema is stable.

