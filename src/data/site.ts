export const site = {
  title: "Living Health Journal",
  description:
    "A living research summary of personal health practice: cardio, calisthenics, mobility, hot yoga, logs, and evidence-backed decisions.",
};

export const currentUnderstanding = [
  {
    label: "Cardio",
    statement:
      "The current hypothesis is 180-240 moderate-equivalent minutes per week, built around a fixed Wednesday 5K, with walking or easy cardio filling volume.",
    status: "testing",
  },
  {
    label: "Calisthenics",
    statement:
      "Two focused full-body sessions per week should cover the health floor while preserving recovery for cardio and hot yoga.",
    status: "testing",
  },
  {
    label: "Morning floor",
    statement:
      "A daily 10-15 minute morning floor should carry cat-cow, down-dog/plank/push-up flow, squat patterning, core strength, and low-dose bone-loading without becoming a workout.",
    status: "new",
  },
  {
    label: "Bone health",
    statement:
      "Running and brisk walking help because they are weight-bearing, but a complete bone-health plan still needs resistance, posture, and balance work.",
    status: "supported",
  },
];

export const activeProjects = [
  {
    slug: "cardio-heart-health",
    title: "Cardio Dose For Heart Health",
    status: "active",
    domain: "Cardio",
    started: "2026-06-08",
    thesis:
      "Optimal cardio is the best sustainable benefit-to-burden range, not maximum running volume.",
    hypothesis:
      "Start with 180-240 moderate-equivalent minutes per week around the fixed Wednesday 5K.",
    protocol: [
      "Wednesday night 5K as the only planned hard run.",
      "Tuesday easy aerobic work.",
      "Saturday easy run, walk-jog, bike, or long walk.",
      "Sunday recovery walk if useful.",
    ],
    metrics: [
      "moderate-equivalent minutes",
      "vigorous minutes",
      "running minutes",
      "weight-bearing minutes",
      "5K effort",
      "lower-leg soreness",
    ],
    falsifiers: [
      "lower-leg pain repeats",
      "5K turns into a weekly race",
      "fatigue trends up for two weeks",
      "adherence falls below 80 percent",
    ],
    sources: ["HHS", "AHA", "WHO", "Lee 2022", "Arem 2015"],
    nextDecision: "After 4 weeks of logs",
  },
  {
    slug: "calisthenics-stability-bone-health",
    title: "Calisthenics For Stability, Mobility, And Bone Health",
    status: "active",
    domain: "Calisthenics",
    started: "2026-06-08",
    thesis:
      "Health-first calisthenics should preserve function, joint control, mobility, posture, and bone-health support before chasing mass or max strength.",
    hypothesis:
      "Two focused full-body sessions per week plus daily short movement exposure is the right starting dose.",
    protocol: [
      "Monday Calisthenics A.",
      "Friday Calisthenics B.",
      "Progress movement quality before load.",
      "Track recovery against running and hot yoga.",
    ],
    metrics: [
      "sessions completed",
      "movement quality",
      "range of motion",
      "balance difficulty",
      "soreness",
      "pain flags",
    ],
    falsifiers: [
      "two sessions are too much with cardio",
      "two sessions are too little to preserve function",
      "apartment-only back/posture work remains inadequate",
      "soreness harms cardio adherence",
    ],
    sources: ["HHS", "ACSM", "NIAMS", "BHOF", "Mayo Clinic"],
    nextDecision: "After 4 weeks of logs",
  },
  {
    slug: "morning-floor",
    title: "Morning Floor",
    status: "active",
    domain: "Daily practice",
    started: "2026-06-08",
    thesis:
      "A short morning practice can make mobility, push/squat exposure, core strength, posture, balance, and bone-loading consistent without adding training fatigue.",
    hypothesis:
      "A 10-15 minute morning floor built from cat-cow, down-dog/plank/push-up flow, squat patterning, and alternating core blocks is enough to support the baseline if it stays easy and repeatable.",
    protocol: [
      "Spine wake-up: cat-cow.",
      "Down-dog plank push-up flow.",
      "Squat pattern: bodyweight squats.",
      "Alternating core blocks: Front Plank and Bird-Dog/Modified Side Plank.",
      "Low-dose calf-raise bone-loading.",
    ],
    metrics: [
      "completion days",
      "duration",
      "push-up variation",
      "squat comfort",
      "core block A/B",
      "core benchmark notes",
      "posture/back work",
      "bone-loading notes",
      "joint response",
    ],
    falsifiers: [
      "it feels like another workout",
      "joint pain appears",
      "duration makes it hard to do daily",
      "logs show no useful signal",
    ],
    sources: ["NIAMS", "BHOF", "Mayo Clinic", "MedlinePlus", "ACE"],
    nextDecision: "After 14 mornings",
  },
  {
    slug: "hot-yoga-integration",
    title: "Hot Yoga Integration",
    status: "testing",
    domain: "Mobility and recovery",
    started: "2026-06-08",
    thesis:
      "Thursday hot yoga should be treated as mobility, balance, breath, heat exposure, and recovery signal, not automatically as cardio replacement.",
    hypothesis:
      "Hot yoga fits best after the Wednesday 5K if Friday calisthenics volume responds to recovery.",
    protocol: [
      "Thursday hot yoga stays fixed.",
      "Log hydration and heat response.",
      "Reduce Friday volume if Thursday recovery is poor.",
    ],
    metrics: [
      "attendance",
      "heat response",
      "hydration",
      "Friday readiness",
      "soreness",
      "sleep",
    ],
    falsifiers: [
      "Friday readiness is consistently poor",
      "heat stress symptoms appear",
      "hydration or sleep suffers",
    ],
    sources: ["NCCIH", "Mayo Clinic"],
    nextDecision: "After 4 Thursday sessions",
  },
];

export const deferredProjects = [
  {
    title: "iOS health logging app",
    reason: "Useful capture layer, but lower priority than getting the health journal and active projects online.",
  },
  {
    title: "Equilibrium and self-defense thesis",
    reason: "Important later work; deferred until the health baseline is grounded.",
  },
  {
    title: "Movement database",
    reason: "Wait until logging, project records, and review cadence are stable.",
  },
];

export const weeklyPlan = [
  {
    day: "Monday",
    focus: "Calisthenics A",
    intent: "Joint control, squat, push, posterior-chain control, back/posture, trunk, balance.",
  },
  {
    day: "Tuesday",
    focus: "Easy aerobic base",
    intent: "30-40 minutes walk, walk-jog, bike, or equivalent.",
  },
  {
    day: "Wednesday",
    focus: "Night 5K",
    intent: "Sustainable run, warm-up, cooldown, no extra hard work.",
  },
  {
    day: "Thursday",
    focus: "Hot yoga",
    intent: "Mobility, balance, breath, heat response, recovery check.",
  },
  {
    day: "Friday",
    focus: "Calisthenics B",
    intent: "Single-leg control, posture, trunk, lateral stability, mobility.",
  },
  {
    day: "Saturday",
    focus: "Easy cardio",
    intent: "30-45 minutes easy run, walk-jog, bike, or long walk.",
  },
  {
    day: "Sunday",
    focus: "Recovery walk",
    intent: "30-60 minutes walking plus short mobility.",
  },
];

export const exerciseReferences = {
  catCow: {
    name: "Cat-Cow",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/15/cat-cow/",
  },
  downwardFacingDog: {
    name: "Downward-Facing Dog",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/18/downward-facing-dog/",
  },
  bentKneePushUp: {
    name: "Bent-Knee Push-Up",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/13/bent-knee-push-up/",
  },
  pushUp: {
    name: "Push-Up",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/",
  },
  pushUpWithSingleLegRaise: {
    name: "Push-up with Single-leg Raise",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/42/push-up-with-single-leg-raise/",
  },
  chinUps: {
    name: "Chin-ups",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/190/chin-ups/",
  },
  pullUps: {
    name: "Pull-ups",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/191/pull-ups/",
  },
  bodyweightSquat: {
    name: "Bodyweight Squat",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/",
  },
  gobletSquat: {
    name: "Goblet Squat",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/362/goblet-squat/",
  },
  squatJumps: {
    name: "Squat Jumps",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/116/squat-jumps/",
  },
  birdDog: {
    name: "Bird-Dog",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/14/bird-dog/",
  },
  frontPlank: {
    name: "Front Plank",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/32/front-plank/",
  },
  modifiedSidePlank: {
    name: "Modified Side Plank",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/100/side-plank-modified/",
  },
  standingCalfRaisesWall: {
    name: "Standing Calf Raises - Wall",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/73/standing-calf-raises-wall/",
  },
  supinePelvicTilts: {
    name: "Supine Pelvic Tilts",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/7/supine-pelvic-tilts/",
  },
  gluteBridge: {
    name: "Glute Bridge Exercise",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/",
  },
  forwardLunge: {
    name: "Forward Lunge",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/94/forward-lunge/",
  },
  forwardLungeWithArmDrivers: {
    name: "Forward Lunge with Arm Drivers",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/95/forward-lunge-with-arm-drivers/",
  },
  sideLunge: {
    name: "Side Lunge",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/50/side-lunge/",
  },
  cycledSplitSquatJump: {
    name: "Cycled Split-Squat Jump",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/234/cycled-split-squat-jump/",
  },
  ckcParascapularExercises: {
    name: "CKC Parascapular Exercises",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/259/ckc-parascapular-exercises/",
  },
  hipRotationsPushUpPosition: {
    name: "Hip Rotations (Push-up Position)",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/110/hip-rotations-push-up-position/",
  },
  highPlankTSpineRotation: {
    name: "High Plank T-Spine Rotation",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/330/high-plank-t-spine-rotation/",
  },
  inchworms: {
    name: "Inchworms",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/254/inchworms/",
  },
  suitcaseCarry: {
    name: "Suitcase Carry",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/389/suitcase-carry/",
  },
  singleArmOverheadPress: {
    name: "Single Arm Overhead Press",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/395/single-arm-overhead-press/",
  },
  halfTurkishGetUp: {
    name: "Half Turkish Get-up",
    source: "ACE",
    url: "https://www.acefitness.org/resources/everyone/exercise-library/381/half-turkish-get-up/",
  },
};

export const morningFloor = [
  {
    step: "Spine wake-up",
    pattern: "Spine",
    movement: "Cat-Cow",
    count: "6-8 slow reps / 2 minutes",
    detail: "Cat-cow, 2 minutes.",
    references: [exerciseReferences.catCow],
  },
  {
    step: "Down-dog plank push-up flow",
    pattern: "Flow",
    movement: "Downward-facing dog to plank to push-up",
    count: "3-5 slow rounds, 1-5 push-ups each round / 4 minutes",
    detail:
      "Downward-facing dog to plank to bent-knee or full push-up, 3-5 slow rounds, 4 minutes.",
    references: [
      exerciseReferences.downwardFacingDog,
      exerciseReferences.bentKneePushUp,
      exerciseReferences.pushUp,
      exerciseReferences.frontPlank,
    ],
  },
  {
    step: "Squat pattern",
    pattern: "Squat",
    movement: "Bodyweight Squat",
    count: "6-10 clean reps / 3 minutes",
    detail: "Bodyweight squat, 3 minutes.",
    references: [exerciseReferences.bodyweightSquat],
  },
  {
    step: "Core block A",
    pattern: "Core A",
    movement: "Front Plank",
    count: "2-3 holds of 15-45 seconds / 4 minutes",
    detail: "Front plank, 4 minutes.",
    references: [exerciseReferences.frontPlank],
  },
  {
    step: "Core block B",
    pattern: "Core B",
    movement: "Bird-Dog plus Modified Side Plank",
    count: "4-8 Bird-Dog reps each side plus 10-30 second Modified Side Plank each side / 4 minutes",
    detail: "Bird-Dog plus Modified Side Plank, 4 minutes.",
    references: [exerciseReferences.birdDog, exerciseReferences.modifiedSidePlank],
  },
  {
    step: "Bone-loading and mobility finish",
    pattern: "Bone/mobility",
    movement: "Standing Calf Raises - Wall",
    count: "10-20 reps / 2 minutes",
    detail: "Standing Calf Raises - Wall, 2 minutes.",
    references: [exerciseReferences.standingCalfRaisesWall],
  },
];

export const strengthProtocolTiers = [
  {
    tier: "Beginner",
    role: "Fallback / form check",
    dose:
      "Lower-volume A/B options for deloads, poor recovery, or checking form.",
    note:
      "Use when the morning floor, running, or hot yoga already feels like enough.",
  },
  {
    tier: "Intermediate",
    role: "Current default test",
    dose:
      "Main A/B options built around current capacity, dynamic core, and no-supine work.",
    note:
      "Start here unless recovery says otherwise; this is the likely mainstay tier.",
  },
  {
    tier: "Advanced",
    role: "Test-only options",
    dose:
      "Small doses of advanced ACE-linked bodyweight movements.",
    note:
      "Use only when joint response, running, and hot yoga are clean.",
  },
];

export const personalStrengthSessions = [
  {
    title: "A1 Beginner: Capacity Primer",
    day: "Monday option",
    intent:
      "Fallback version for form checks, deloads, or low-recovery weeks.",
    movements: [
      {
        pattern: "Push",
        movement: "Bent-Knee Push-Up",
        count: "2-3 x 8-12",
        references: [exerciseReferences.bentKneePushUp],
      },
      {
        pattern: "Squat",
        movement: "Bodyweight squat",
        count: "2-3 x 12-15",
        references: [exerciseReferences.bodyweightSquat],
      },
      {
        pattern: "Posterior control",
        movement: "Bird-Dog",
        count: "2 x 6 each side",
        references: [exerciseReferences.birdDog],
      },
      {
        pattern: "Back/mobility",
        movement: "Downward-Facing Dog",
        count: "2 x 20-30 seconds",
        references: [exerciseReferences.downwardFacingDog],
      },
      {
        pattern: "Core",
        movement: "Front Plank",
        count: "2 x 20-30 seconds",
        references: [exerciseReferences.frontPlank],
      },
      {
        pattern: "Lower leg",
        movement: "Standing Calf Raises - Wall",
        count: "2 x 15-20",
        references: [exerciseReferences.standingCalfRaisesWall],
      },
      {
        pattern: "Single leg",
        movement: "Forward Lunge",
        count: "2 x 5-6 each side",
        references: [exerciseReferences.forwardLunge],
      },
    ],
  },
  {
    title: "A2 Intermediate: Push/Squat + Moving Core",
    day: "Monday option",
    intent:
      "Recommended starting point: keep the 50/50 capacity work and replace static-only core with moving plank patterns.",
    movements: [
      {
        pattern: "Push",
        movement: "Push-up",
        count: "50 total as 5 x 10 or clean submax sets",
        references: [exerciseReferences.pushUp],
      },
      {
        pattern: "Squat",
        movement: "Bodyweight squat",
        count: "50 total as 5 x 10 or clean submax sets",
        references: [exerciseReferences.bodyweightSquat],
      },
      {
        pattern: "Dynamic core",
        movement: "Hip Rotations (Push-up Position)",
        count: "2 x 5-8 each side",
        references: [exerciseReferences.hipRotationsPushUpPosition],
      },
      {
        pattern: "Scapular/core",
        movement: "CKC Parascapular Exercises",
        count: "2 x 2-4 holds of 5-10 seconds each side",
        references: [exerciseReferences.ckcParascapularExercises],
      },
      {
        pattern: "Back/mobility",
        movement: "Downward-Facing Dog",
        count: "2 x 30-45 seconds",
        references: [exerciseReferences.downwardFacingDog],
      },
      {
        pattern: "Lower leg",
        movement: "Standing Calf Raises - Wall",
        count: "2 x 20",
        references: [exerciseReferences.standingCalfRaisesWall],
      },
      {
        pattern: "Single leg",
        movement: "Forward Lunge",
        count: "2 x 6-10 each side",
        references: [exerciseReferences.forwardLunge],
      },
    ],
  },
  {
    title: "A3 Advanced: Integrated Control Test",
    day: "Monday option",
    intent:
      "Use only as a low-volume test when recovery is clean; quality beats density.",
    movements: [
      {
        pattern: "Push/integrated",
        movement: "Push-up with Single-leg Raise",
        count: "3 x 6-10 total, alternating legs",
        references: [exerciseReferences.pushUpWithSingleLegRaise],
      },
      {
        pattern: "Full-body",
        movement: "Inchworms",
        count: "3-5 controlled reps in a short lane",
        references: [exerciseReferences.inchworms],
      },
      {
        pattern: "Rotation/core",
        movement: "High Plank T-Spine Rotation",
        count: "2 x 5-8 each side",
        references: [exerciseReferences.highPlankTSpineRotation],
      },
      {
        pattern: "Single leg",
        movement: "Forward Lunge with Arm Drivers",
        count: "2 x 5-8 each side",
        references: [exerciseReferences.forwardLungeWithArmDrivers],
      },
      {
        pattern: "Power/bone",
        movement: "Squat Jumps",
        count: "2 x 5-8 quiet landings",
        references: [exerciseReferences.squatJumps],
      },
      {
        pattern: "Lower leg",
        movement: "Standing Calf Raises - Wall",
        count: "2 x 20-25",
        references: [exerciseReferences.standingCalfRaisesWall],
      },
    ],
  },
  {
    title: "B1 Beginner: Unilateral/Core Primer",
    day: "Friday option",
    intent:
      "Fallback version for Friday if hot yoga or the 5K leaves fatigue behind.",
    movements: [
      {
        pattern: "Single leg",
        movement: "Forward Lunge",
        count: "2 x 5-6 each side",
        references: [exerciseReferences.forwardLunge],
      },
      {
        pattern: "Push/control",
        movement: "Bent-Knee Push-Up",
        count: "2 x 8-12",
        references: [exerciseReferences.bentKneePushUp],
      },
      {
        pattern: "Squat/control",
        movement: "Bodyweight Squat",
        count: "2 x 12-15",
        references: [exerciseReferences.bodyweightSquat],
      },
      {
        pattern: "Trunk",
        movement: "Front Plank",
        count: "2 x 20-30 seconds",
        references: [exerciseReferences.frontPlank],
      },
      {
        pattern: "Lateral trunk",
        movement: "Modified Side Plank",
        count: "2 x 15-25 seconds each side",
        references: [exerciseReferences.modifiedSidePlank],
      },
      {
        pattern: "Back/mobility",
        movement: "Downward-Facing Dog",
        count: "2 x 20-30 seconds",
        references: [exerciseReferences.downwardFacingDog],
      },
      {
        pattern: "Bone/balance",
        movement: "Standing Calf Raises - Wall",
        count: "2 x 15-20",
        references: [exerciseReferences.standingCalfRaisesWall],
      },
    ],
  },
  {
    title: "B2 Intermediate: Unilateral + Moving Core",
    day: "Friday option",
    intent:
      "Recommended Friday test: unilateral legs, push volume, moving trunk control, and lateral stability.",
    movements: [
      {
        pattern: "Single leg",
        movement: "Forward Lunge",
        count: "3 x 6-10 each side",
        references: [exerciseReferences.forwardLunge],
      },
      {
        pattern: "Push/control",
        movement: "Push-up",
        count: "30-40 total as clean submax sets",
        references: [exerciseReferences.pushUp],
      },
      {
        pattern: "Lateral leg",
        movement: "Side Lunge",
        count: "2 x 6-10 each side",
        references: [exerciseReferences.sideLunge],
      },
      {
        pattern: "Dynamic core",
        movement: "Hip Rotations (Push-up Position)",
        count: "2 x 5-8 each side",
        references: [exerciseReferences.hipRotationsPushUpPosition],
      },
      {
        pattern: "Scapular/core",
        movement: "CKC Parascapular Exercises",
        count: "2 x 2-4 holds of 5-10 seconds each side",
        references: [exerciseReferences.ckcParascapularExercises],
      },
      {
        pattern: "Lateral trunk",
        movement: "Modified Side Plank",
        count: "2 x 20-30 seconds each side",
        references: [exerciseReferences.modifiedSidePlank],
      },
      {
        pattern: "Bone/balance",
        movement: "Standing Calf Raises - Wall",
        count: "2 x 20",
        references: [exerciseReferences.standingCalfRaisesWall],
      },
    ],
  },
  {
    title: "B3 Advanced: Rotation + Power Test",
    day: "Friday option",
    intent:
      "Advanced Friday option; skip the power line if it threatens Saturday cardio.",
    movements: [
      {
        pattern: "Single leg",
        movement: "Forward Lunge with Arm Drivers",
        count: "2 x 5-8 each side",
        references: [exerciseReferences.forwardLungeWithArmDrivers],
      },
      {
        pattern: "Push/control",
        movement: "Push-up with Single-leg Raise",
        count: "3 x 6-10 total, alternating legs",
        references: [exerciseReferences.pushUpWithSingleLegRaise],
      },
      {
        pattern: "Full-body",
        movement: "Inchworms",
        count: "3-5 controlled reps in a short lane",
        references: [exerciseReferences.inchworms],
      },
      {
        pattern: "Rotation/core",
        movement: "High Plank T-Spine Rotation",
        count: "2 x 5-8 each side",
        references: [exerciseReferences.highPlankTSpineRotation],
      },
      {
        pattern: "Lateral leg",
        movement: "Side Lunge",
        count: "2 x 8 each side",
        references: [exerciseReferences.sideLunge],
      },
      {
        pattern: "Power/bone",
        movement: "Cycled Split-Squat Jump",
        count: "2 x 3-5 each side, optional",
        references: [exerciseReferences.cycledSplitSquatJump],
      },
      {
        pattern: "Bone/balance",
        movement: "Standing Calf Raises - Wall",
        count: "2 x 20",
        references: [exerciseReferences.standingCalfRaisesWall],
      },
    ],
  },
];

export const targetedModules = [
  {
    title: "Core Stability And Moving Plank",
    cadence: "1-2x/week, 6-10 minutes",
    movements: [
      "Hip Rotations (Push-up Position): 2 x 5-8 each side",
      "CKC Parascapular Exercises: 2 x 2-4 holds of 5-10 seconds each side",
      "Modified side plank: 2 x 20-30 seconds each side",
    ],
    references: [
      exerciseReferences.hipRotationsPushUpPosition,
      exerciseReferences.ckcParascapularExercises,
      exerciseReferences.modifiedSidePlank,
    ],
  },
  {
    title: "Back And Posture",
    cadence: "1-2x/week, 6-10 minutes",
    movements: [
      "Downward-Facing Dog: 2 x 30-45 seconds",
      "Bird-Dog: 2 x 8 each side",
    ],
    references: [exerciseReferences.downwardFacingDog, exerciseReferences.birdDog],
  },
  {
    title: "Legs, Bone, And Balance",
    cadence: "1x/week only if running recovery is clean",
    movements: [
      "Forward Lunge: 2 x 6-10 each side",
      "Standing Calf Raises - Wall: 3 x 15-20",
    ],
    references: [exerciseReferences.forwardLunge, exerciseReferences.standingCalfRaisesWall],
  },
];

export const equipmentLayer = [
  {
    title: "E1 Pull + Loaded Carry",
    cadence: "1x/week; optional 2nd short exposure",
    intent:
      "Separate equipment work that covers true pulling, loaded carries, and external load without changing the daily floor.",
    movements: [
      {
        pattern: "Vertical pull",
        movement: "Pull-ups or Chin-ups",
        count: "3-5 clean submax sets, 1-3 reps in reserve",
        references: [exerciseReferences.pullUps, exerciseReferences.chinUps],
      },
      {
        pattern: "Loaded squat",
        movement: "Goblet Squat",
        count: "2-3 x 8-12",
        references: [exerciseReferences.gobletSquat],
      },
      {
        pattern: "Loaded carry",
        movement: "Suitcase Carry",
        count: "3-5 short carries or 20-40 seconds each side",
        references: [exerciseReferences.suitcaseCarry],
      },
      {
        pattern: "Vertical press",
        movement: "Single Arm Overhead Press",
        count: "2-3 x 5-8 each side",
        references: [exerciseReferences.singleArmOverheadPress],
      },
    ],
  },
];

export const weeklySupineSystem = [
  {
    title: "S1 Once-Weekly Supine System",
    cadence: "1x/week, done as one floor block",
    intent:
      "Put all on-the-back work in one intentional sit-down session so the standing sessions stay uninterrupted.",
    movements: [
      {
        pattern: "Pelvis/core",
        movement: "Supine Pelvic Tilts",
        count: "1-2 x 6-10 slow reps",
        references: [exerciseReferences.supinePelvicTilts],
      },
      {
        pattern: "Posterior chain",
        movement: "Glute Bridge Exercise",
        count: "2 x 8-12",
        references: [exerciseReferences.gluteBridge],
      },
      {
        pattern: "Integrated core",
        movement: "Half Turkish Get-up",
        count: "2 x 1-3 each side, light or unloaded",
        references: [exerciseReferences.halfTurkishGetUp],
      },
    ],
  },
];

export const evidenceHighlights = [
  {
    label: "Guideline floor",
    claim: "150 moderate-equivalent cardio minutes and 2 muscle-strengthening days per week.",
    status: "supported",
    source: "HHS, AHA, WHO",
  },
  {
    label: "Cardio target",
    claim: "180-240 moderate-equivalent minutes is the first personal target to test.",
    status: "hypothesis",
    source: "Guidelines plus dose-response evidence",
  },
  {
    label: "Bone health",
    claim: "Cardio alone is not enough; bone health needs weight-bearing, resistance, posture, and balance work.",
    status: "supported",
    source: "NIAMS, BHOF, IOF, Mayo Clinic",
  },
  {
    label: "Morning floor",
    claim: "A daily 10-15 minute practice can carry mobility, push/squat exposure, core strength, posture, and low-dose bone-loading.",
    status: "hypothesis",
    source: "Mayo Clinic, Harvard Health, ACE, bone-health guidance, personal test design",
  },
];

export const logbookModel = [
  {
    level: "Daily raw log",
    purpose: "Capture what happened with minimal friction.",
    publicDefault: "Private or working data",
  },
  {
    level: "Weekly summary",
    purpose: "Show adherence, cardio minutes, morning floor completion, soreness, and decisions.",
    publicDefault: "Primary public log unit",
  },
  {
    level: "Four-week review",
    purpose: "Decide whether to keep, increase, reduce, or revise a protocol.",
    publicDefault: "Public research decision",
  },
];
