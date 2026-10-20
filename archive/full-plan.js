const PLANS = [
  {
    id: "phase1",
    name: "Phase 1 — Accumulation",
    weeks: 4,
    startDate: "2026-04-13",
    weekNotes: [
      "Week 1 — Establish baseline. Focus on form and RPE calibration.",
      "Week 2 — Add load on main lifts where RPE allows.",
      "Week 3 — Peak week. Push compound movements.",
      "Week 4 — Deload. Reduce volume ~40%, maintain intensity."
    ],
    days: [
      { day:"Monday", label:"Lower body strength", tag:"Posterior chain", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Foam roll quads",presc:"90 sec/side",sets:0},
          {name:"Foam roll hamstrings + glutes",presc:"90 sec/side",sets:0},
          {name:"90/90 hip stretch",presc:"60 sec/side",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"45 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Glute bridges",presc:"2×15, 1 sec pause",sets:2,reps:"15"},
          {name:"Leg swings (sagittal + frontal)",presc:"10 reps/side",sets:0}
        ]},
        { name:"Strength block", dur:"45 min", ex:[
          {name:"Trap bar deadlift",presc:"4×6 @ RPE 7–8",sets:4,reps:"6"},
          {name:"Romanian deadlift",presc:"3×10, 3-sec eccentric",sets:3,reps:"10"},
          {name:"Bulgarian split squat",presc:"3×8/side",sets:3,reps:"8"},
          {name:"Nordic hamstring curl",presc:"3×5",sets:3,reps:"5"},
          {name:"Copenhagen plank",presc:"3×20 sec/side",sets:3,reps:"20s"},
          {name:"Dead bug",presc:"3×8/side",sets:3,reps:"8"}
        ]},
        { name:"Cool-down pliability", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]}
      ]},
      { day:"Tuesday", label:"Upper body strength", tag:"Shoulder integrity", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Pec minor doorway stretch",presc:"45 sec/side",sets:0},
          {name:"Shoulder CARs",presc:"5 reps/side",sets:0},
          {name:"Thread the needle",presc:"5 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"2×20",sets:2,reps:"20"},
          {name:"Wall slides",presc:"2×10",sets:2,reps:"10"},
          {name:"Scapular push-ups",presc:"2×12",sets:2,reps:"12"}
        ]},
        { name:"Strength block", dur:"45 min", ex:[
          {name:"Incline dumbbell press",presc:"4×10 @ RPE 7",sets:4,reps:"10"},
          {name:"Cable row (neutral grip)",presc:"4×10 @ RPE 7",sets:4,reps:"10"},
          {name:"Neutral grip pull-ups / lat pulldown",presc:"3×8–10",sets:3,reps:"10"},
          {name:"Face pulls",presc:"4×15",sets:4,reps:"15"},
          {name:"Landmine press",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Band external rotation",presc:"3×15/side",sets:3,reps:"15"},
          {name:"Pallof press",presc:"3×12/side",sets:3,reps:"12"}
        ]},
        { name:"Cool-down pliability", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Thoracic extension over foam roll",presc:"90 sec",sets:0},
          {name:"Wrist flexor/extensor stretch",presc:"30 sec each direction",sets:0}
        ]}
      ]},
      { day:"Wednesday", label:"Cardio + sprint development", tag:"Aerobic base", type:"cardio", blocks:[
        { name:"Sprint warm-up", dur:"10 min", ex:[
          {name:"Easy jog",presc:"400m",sets:0},
          {name:"High knees",presc:"2×20m",sets:0},
          {name:"Butt kicks",presc:"2×20m",sets:0},
          {name:"A-skips",presc:"2×20m",sets:0},
          {name:"Lateral shuffles",presc:"2×20m each direction",sets:0},
          {name:"Falling starts / lean-and-go",presc:"4×10m",sets:0}
        ]},
        { name:"Sprint work", dur:"20 min", ex:[
          {name:"10m accelerations",presc:"6 reps, 90 sec recovery",sets:6,reps:"1"},
          {name:"30m build-up sprints",presc:"4 reps, walk-back recovery",sets:4,reps:"1"},
          {name:"Sled push",presc:"4×20m, moderate load",sets:4,reps:"20m"}
        ]},
        { name:"Zone 2 cardio", dur:"20 min", ex:[
          {name:"Assault bike or treadmill",presc:"Zone 2, HR 130–145, conversational pace",sets:0}
        ]},
        { name:"Cool-down", dur:"5 min", ex:[
          {name:"Easy walk",presc:"400m",sets:0},
          {name:"Hip flexor stretch",presc:"60 sec/side",sets:0},
          {name:"Hamstring stretch",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Thursday", label:"Lower body power", tag:"Athletic movement", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Full body foam roll",presc:"4 min — calves → hamstrings → glutes → thoracic",sets:0},
          {name:"Cat-cow",presc:"10 reps",sets:0},
          {name:"Lizard pose",presc:"60 sec/side",sets:0},
          {name:"90/90 hip rotations",presc:"10 reps/side",sets:0},
          {name:"Box jump landing practice",presc:"2×5",sets:2,reps:"5"}
        ]},
        { name:"Power + athletic block", dur:"50 min", ex:[
          {name:"Box jumps",presc:"4×4, full reset between reps",sets:4,reps:"4"},
          {name:"Trap bar deadlift — speed focus",presc:"4×3 @ ~60% 1RM, explosive",sets:4,reps:"3"},
          {name:"Lateral bounding",presc:"3×6/side",sets:3,reps:"6"},
          {name:"Goblet squat — tempo",presc:"3×10 (3 sec down, 1 sec pause)",sets:3,reps:"10"},
          {name:"Single-leg RDL",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Lateral band walks",presc:"3×20 steps/direction",sets:3,reps:"20"},
          {name:"Sled drag (backward)",presc:"3×20m",sets:3,reps:"20m"}
        ]},
        { name:"Cool-down", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Jefferson curl",presc:"2×8 bodyweight, very controlled",sets:2,reps:"8"}
        ]}
      ]},
      { day:"Friday", label:"Upper body + golf conditioning", tag:"Rotational power", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Pec minor doorway stretch",presc:"45 sec/side",sets:0},
          {name:"Shoulder CARs",presc:"5 reps/side",sets:0},
          {name:"Hip CARs",presc:"5 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"2×20",sets:2,reps:"20"},
          {name:"Thoracic rotation in quadruped",presc:"10 reps/side",sets:0}
        ]},
        { name:"Strength + golf block", dur:"50 min", ex:[
          {name:"Cable rotations (golf pattern)",presc:"4×12/side, controlled speed",sets:4,reps:"12"},
          {name:"Landmine rotations",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Dumbbell row (3-point stance)",presc:"4×10/side",sets:4,reps:"10"},
          {name:"Rotational med ball slam",presc:"3×8/side",sets:3,reps:"8"},
          {name:"Face pulls",presc:"3×15",sets:3,reps:"15"},
          {name:"Rear delt fly",presc:"3×15",sets:3,reps:"15"},
          {name:"Single-leg balance + rotation",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Wrist roller / forearm work",presc:"2 sets",sets:2,reps:"—"}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Pigeon pose",presc:"90 sec/side",sets:0}
        ]}
      ]},
      { day:"Saturday", label:"Long aerobic + full pliability", tag:"Base building", type:"cardio", blocks:[
        { name:"Cardio", dur:"30–45 min", ex:[
          {name:"Option A — easy jog / run-walk",presc:"Zone 2, conversational. 3 min jog / 2 min walk if needed",sets:0},
          {name:"Option B — assault bike / row erg",presc:"40 min Zone 2 steady state",sets:0}
        ]},
        { name:"Full pliability session", dur:"30 min", ex:[
          {name:"Full body foam roll",presc:"5 min",sets:0},
          {name:"Child's pose to cobra",presc:"5 reps",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"90/90 hip stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"Supine hamstring with strap",presc:"90 sec/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"5 min",sets:0}
        ]}
      ]},
      { day:"Sunday", label:"Rest + pliability minimum", tag:"Recovery", type:"rest", blocks:[
        { name:"Daily minimum", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]}
    ]
  },

  {
    id: "phase2",
    name: "Phase 2 — Transmutation",
    weeks: 4,
    startDate: "2026-05-11",
    weekNotes: [
      "Week 5 — Reload after deload. Reintroduce volume with added intensity.",
      "Week 6 — Progress main lifts. Introduce contrast training on lower days.",
      "Week 7 — Peak intensity week. Push RPE 8–9 on compounds.",
      "Week 8 — Deload. Reduce volume ~40%, maintain speed and power qualities."
    ],
    days: [
      { day:"Monday", label:"Lower body strength — heavy", tag:"Posterior chain load", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Foam roll calves + hamstrings + glutes",presc:"90 sec/area",sets:0},
          {name:"90/90 hip stretch",presc:"60 sec/side",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"60 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"6 reps/side",sets:0},
          {name:"Banded glute bridges",presc:"2×15",sets:2,reps:"15"},
          {name:"Leg swings",presc:"12 reps/side",sets:0}
        ]},
        { name:"Strength block", dur:"50 min", ex:[
          {name:"Trap bar deadlift — heavy",presc:"5×4 @ RPE 8–9",sets:5,reps:"4"},
          {name:"Romanian deadlift",presc:"4×8, 3-sec eccentric",sets:4,reps:"8"},
          {name:"Bulgarian split squat",presc:"4×6/side, add load vs Phase 1",sets:4,reps:"6"},
          {name:"Nordic hamstring curl",presc:"4×5",sets:4,reps:"5"},
          {name:"Copenhagen plank",presc:"3×25 sec/side",sets:3,reps:"25s"},
          {name:"Pallof press — heavy band",presc:"3×12/side",sets:3,reps:"12"},
          {name:"Dead bug — weighted",presc:"3×8/side",sets:3,reps:"8"}
        ]},
        { name:"Contrast pairing", dur:"10 min", ex:[
          {name:"Heavy RDL → single-leg hop stick",presc:"3 rounds: 4 RDL then 4 hops/side, 2 min rest",sets:3,reps:"4"}
        ]},
        { name:"Cool-down pliability", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Jefferson curl",presc:"2×8, add 5–10 lb from Phase 1",sets:2,reps:"8"},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]}
      ]},
      { day:"Tuesday", label:"Upper body strength — load progression", tag:"Pressing strength", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Shoulder CARs",presc:"6 reps/side — add light load if pain-free",sets:0},
          {name:"Pec minor doorway stretch",presc:"60 sec/side",sets:0},
          {name:"Band pull-aparts",presc:"3×20",sets:3,reps:"20"},
          {name:"Wall slides",presc:"2×12",sets:2,reps:"12"},
          {name:"Scapular push-ups",presc:"2×15",sets:2,reps:"15"}
        ]},
        { name:"Strength block", dur:"50 min", ex:[
          {name:"Incline dumbbell press",presc:"5×6 @ RPE 8",sets:5,reps:"6"},
          {name:"Weighted pull-ups / lat pulldown",presc:"4×6–8",sets:4,reps:"7"},
          {name:"Cable row (neutral grip)",presc:"4×8 @ RPE 8",sets:4,reps:"8"},
          {name:"Face pulls",presc:"4×15",sets:4,reps:"15"},
          {name:"Landmine press",presc:"4×8/side",sets:4,reps:"8"},
          {name:"Band external rotation",presc:"3×15/side",sets:3,reps:"15"},
          {name:"Pallof press",presc:"3×12/side",sets:3,reps:"12"},
          {name:"Rear delt fly",presc:"3×15",sets:3,reps:"15"}
        ]},
        { name:"Cool-down pliability", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Thoracic extension over foam roll",presc:"90 sec",sets:0}
        ]}
      ]},
      { day:"Wednesday", label:"Speed + conditioning", tag:"Sprint mechanics", type:"cardio", blocks:[
        { name:"Sprint warm-up", dur:"12 min", ex:[
          {name:"Easy jog",presc:"400m",sets:0},
          {name:"Dynamic mobility circuit",presc:"High knees, butt kicks, A-skips, B-skips × 2×20m each",sets:0},
          {name:"Build-up strides",presc:"4×40m @ 70–80% effort",sets:4,reps:"1"}
        ]},
        { name:"Sprint block", dur:"25 min", ex:[
          {name:"20m fly sprints",presc:"6 reps, full recovery — mechanics focus",sets:6,reps:"1"},
          {name:"40m sprints",presc:"4 reps, walk-back recovery",sets:4,reps:"1"},
          {name:"Sled push — heavier load",presc:"5×20m",sets:5,reps:"20m"},
          {name:"Sled resisted sprint",presc:"4×20m, 10–15% bodyweight",sets:4,reps:"20m"}
        ]},
        { name:"Zone 2 finish", dur:"15 min", ex:[
          {name:"Assault bike or treadmill",presc:"HR 130–145, conversational",sets:0}
        ]},
        { name:"Cool-down", dur:"5 min", ex:[
          {name:"Easy walk + hip flexor stretch",presc:"400m + 60 sec/side",sets:0},
          {name:"Hamstring PNF stretch",presc:"Contract-relax, 3 rounds/side",sets:0}
        ]}
      ]},
      { day:"Thursday", label:"Lower body power — contrast training", tag:"Explosive development", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Full body foam roll",presc:"5 min",sets:0},
          {name:"Lizard pose",presc:"60 sec/side",sets:0},
          {name:"90/90 hip rotations",presc:"12 reps/side",sets:0},
          {name:"Box jump landing — depth drop focus",presc:"3×5",sets:3,reps:"5"}
        ]},
        { name:"Power block — contrast pairs", dur:"55 min", ex:[
          {name:"Contrast A: Heavy goblet squat → box jump",presc:"4 rounds: 5 squats @ RPE 8, then 4 box jumps, 3 min rest",sets:4,reps:"5"},
          {name:"Contrast B: Single-leg RDL → lateral bound",presc:"3 rounds: 8/side RDL then 6/side bound, 2 min rest",sets:3,reps:"8"},
          {name:"Trap bar deadlift — speed",presc:"4×3 @ 65% 1RM, explosive",sets:4,reps:"3"},
          {name:"Lateral band walks — heavy band",presc:"3×25 steps/direction",sets:3,reps:"25"},
          {name:"Sled drag (backward)",presc:"4×20m",sets:4,reps:"20m"}
        ]},
        { name:"Cool-down", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Friday", label:"Upper body + golf power", tag:"Rotational power", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Hip CARs",presc:"6 reps/side",sets:0},
          {name:"Shoulder CARs",presc:"6 reps/side",sets:0},
          {name:"Thoracic rotation in quadruped",presc:"12 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"3×20",sets:3,reps:"20"}
        ]},
        { name:"Golf power block", dur:"55 min", ex:[
          {name:"Cable rotations — add speed",presc:"4×10/side @ 70% cable, explosive concentric",sets:4,reps:"10"},
          {name:"Rotational med ball wall slam",presc:"4×8/side, max intent",sets:4,reps:"8"},
          {name:"Landmine rotations — heavier",presc:"4×8/side",sets:4,reps:"8"},
          {name:"Dumbbell row (3-point stance)",presc:"4×10/side",sets:4,reps:"10"},
          {name:"Face pulls",presc:"4×15",sets:4,reps:"15"},
          {name:"Single-leg balance + rotation — eyes closed",presc:"3×12/side",sets:3,reps:"12"},
          {name:"Wrist roller / forearm work",presc:"3 sets",sets:3,reps:"—"},
          {name:"Rear delt fly",presc:"3×15",sets:3,reps:"15"}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Pigeon pose",presc:"90 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Saturday", label:"Long aerobic — push duration", tag:"Endurance progression", type:"cardio", blocks:[
        { name:"Cardio — extended", dur:"40–55 min", ex:[
          {name:"Run / run-walk",presc:"Zone 2 — target continuous 30 min run if possible",sets:0},
          {name:"Option B — assault bike",presc:"50 min steady state Zone 2",sets:0}
        ]},
        { name:"Full pliability", dur:"30 min", ex:[
          {name:"Full body foam roll",presc:"5 min",sets:0},
          {name:"Pigeon pose",presc:"2.5 min/side",sets:0},
          {name:"90/90 hip stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"6 reps/side",sets:0},
          {name:"Supine hamstring with strap",presc:"90 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"12 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"5 min",sets:0}
        ]}
      ]},
      { day:"Sunday", label:"Rest + pliability minimum", tag:"Recovery", type:"rest", blocks:[
        { name:"Daily minimum", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]}
    ]
  },

  {
    id: "phase3",
    name: "Phase 3 — Realization",
    weeks: 4,
    startDate: "2026-06-08",
    weekNotes: [
      "Week 9 — Reload. Re-establish intensity from Phase 2 peak.",
      "Week 10 — Max effort week. Heaviest lifts of the program.",
      "Week 11 — Volume taper begins. Keep intensity, drop volume ~20%.",
      "Week 12 — Performance assessment. Test key lifts, aerobic marker, and rotational power."
    ],
    days: [
      { day:"Monday", label:"Lower body — peak strength", tag:"Max posterior chain", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Foam roll full lower body",presc:"90 sec/area",sets:0},
          {name:"90/90 hip stretch",presc:"60 sec/side",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"60 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"6 reps/side",sets:0},
          {name:"Banded glute bridges",presc:"2×15",sets:2,reps:"15"},
          {name:"Leg swings",presc:"12 reps/side",sets:0}
        ]},
        { name:"Strength block", dur:"55 min", ex:[
          {name:"Trap bar deadlift — near maximal",presc:"Work to 3RM @ RPE 9 — heaviest of program",sets:3,reps:"3"},
          {name:"Romanian deadlift",presc:"4×6, 3-sec eccentric, max load",sets:4,reps:"6"},
          {name:"Bulgarian split squat",presc:"4×5/side, max load",sets:4,reps:"5"},
          {name:"Nordic hamstring curl",presc:"4×6 — controlled throughout",sets:4,reps:"6"},
          {name:"Copenhagen plank",presc:"3×30 sec/side",sets:3,reps:"30s"},
          {name:"Anti-extension plank / ab wheel",presc:"3×30 sec",sets:3,reps:"30s"}
        ]},
        { name:"Cool-down pliability", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Jefferson curl",presc:"3×8 with weight — deepest ROM of program",sets:3,reps:"8"},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]}
      ]},
      { day:"Tuesday", label:"Upper body — peak strength", tag:"Pressing peak", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Shoulder CARs",presc:"6 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"3×20",sets:3,reps:"20"},
          {name:"Wall slides",presc:"2×12",sets:2,reps:"12"},
          {name:"Pec minor doorway stretch",presc:"60 sec/side",sets:0}
        ]},
        { name:"Strength block", dur:"55 min", ex:[
          {name:"Incline dumbbell press",presc:"Work to 4RM @ RPE 9",sets:4,reps:"4"},
          {name:"Weighted pull-ups",presc:"Work to 3RM @ RPE 9",sets:3,reps:"3"},
          {name:"Cable row",presc:"4×6 @ RPE 9",sets:4,reps:"6"},
          {name:"Face pulls",presc:"5×15 — non-negotiable",sets:5,reps:"15"},
          {name:"Landmine press",presc:"4×6/side",sets:4,reps:"6"},
          {name:"Band external rotation",presc:"3×15/side",sets:3,reps:"15"},
          {name:"Rear delt fly",presc:"4×15",sets:4,reps:"15"}
        ]},
        { name:"Cool-down pliability", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Thoracic extension over foam roll",presc:"90 sec",sets:0}
        ]}
      ]},
      { day:"Wednesday", label:"Speed — max velocity", tag:"Sprint peak", type:"cardio", blocks:[
        { name:"Extended warm-up", dur:"15 min", ex:[
          {name:"Easy jog",presc:"400m",sets:0},
          {name:"Full dynamic mobility",presc:"All drills × 2×20m",sets:0},
          {name:"Build-up strides",presc:"5×40m at 80–95% effort progression",sets:5,reps:"1"}
        ]},
        { name:"Sprint block — peak", dur:"25 min", ex:[
          {name:"30m fly sprints",presc:"6 reps, near max intent, full recovery",sets:6,reps:"1"},
          {name:"60m sprints",presc:"3 reps, full recovery",sets:3,reps:"1"},
          {name:"Sprint + deceleration",presc:"4×30m — sprint 20m, controlled decel 10m",sets:4,reps:"1"},
          {name:"Sled sprint",presc:"4×20m",sets:4,reps:"20m"}
        ]},
        { name:"Week 12 aerobic assessment", dur:"30 min", ex:[
          {name:"Continuous run — note time/distance",presc:"Week 12 only: 30 min continuous @ conversational pace — track vs Week 1 baseline",sets:0}
        ]},
        { name:"Cool-down", dur:"5 min", ex:[
          {name:"Easy walk",presc:"400m",sets:0},
          {name:"Hamstring PNF",presc:"3 rounds/side",sets:0},
          {name:"Hip flexor stretch",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Thursday", label:"Lower body — max power expression", tag:"Power peak", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Full body foam roll",presc:"5 min",sets:0},
          {name:"90/90 hip rotations",presc:"12 reps/side",sets:0},
          {name:"Lizard pose",presc:"60 sec/side",sets:0},
          {name:"Box jump landing — max height practice",presc:"3×4",sets:3,reps:"4"}
        ]},
        { name:"Power block — peak expression", dur:"55 min", ex:[
          {name:"Max height box jumps",presc:"5×3 — find peak height",sets:5,reps:"3"},
          {name:"Contrast: heavy trap bar → max effort broad jump",presc:"4 rounds: 3 reps @ 80% 1RM then 3 broad jumps",sets:4,reps:"3"},
          {name:"Lateral bounding — max distance",presc:"4×5/side",sets:4,reps:"5"},
          {name:"Single-leg RDL — heavy",presc:"4×6/side",sets:4,reps:"6"},
          {name:"Sled sprint + sled drag superset",presc:"3 rounds: 20m push + 20m drag",sets:3,reps:"20m"}
        ]},
        { name:"Cool-down", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Friday", label:"Golf power — peak expression", tag:"Swing speed peak", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Hip CARs",presc:"8 reps/side — max ROM",sets:0},
          {name:"Shoulder CARs",presc:"6 reps/side",sets:0},
          {name:"Thoracic rotation in quadruped",presc:"12 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"3×20",sets:3,reps:"20"}
        ]},
        { name:"Golf peak block", dur:"55 min", ex:[
          {name:"Rotational med ball wall slam — max intent",presc:"5×6/side — peak power session",sets:5,reps:"6"},
          {name:"Cable rotations — explosive",presc:"4×8/side @ 75–80% cable load",sets:4,reps:"8"},
          {name:"Landmine rotations — max load",presc:"4×6/side",sets:4,reps:"6"},
          {name:"Single-leg rotational press",presc:"4×8/side",sets:4,reps:"8"},
          {name:"Face pulls",presc:"5×15",sets:5,reps:"15"},
          {name:"Single-leg balance + eyes closed rotation",presc:"3×12/side",sets:3,reps:"12"},
          {name:"Wrist roller",presc:"3 sets",sets:3,reps:"—"},
          {name:"Overspeed cable pull-through (Week 12)",presc:"3×6/side — lighter load, max speed intent",sets:3,reps:"6"}
        ]},
        { name:"Week 12 assessment", dur:"10 min", ex:[
          {name:"Rotational med ball throw — record max distance",presc:"Both sides — compare to Week 1",sets:0},
          {name:"Single-leg balance hold — record max time",presc:"Eyes closed, both sides",sets:0},
          {name:"Shoulder CAR quality check",presc:"Note ROM vs Week 1 baseline",sets:0}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Pigeon pose",presc:"90 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Saturday", label:"Aerobic milestone + full pliability", tag:"Endurance peak", type:"cardio", blocks:[
        { name:"Cardio — peak duration", dur:"45–60 min", ex:[
          {name:"Continuous run",presc:"Target 45 min Zone 2 by Week 11 — note vs Week 1",sets:0},
          {name:"Week 12 option",presc:"Easy 30 min jog — recovery before final assessment",sets:0}
        ]},
        { name:"Full pliability — extended", dur:"35 min", ex:[
          {name:"Full body foam roll",presc:"6 min",sets:0},
          {name:"Pigeon pose",presc:"3 min/side",sets:0},
          {name:"90/90 hip stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"6 reps/side",sets:0},
          {name:"Supine hamstring with strap + PNF",presc:"3 rounds/side",sets:0},
          {name:"Jefferson curl",presc:"2×8 with weight",sets:2,reps:"8"},
          {name:"Thoracic rotation",presc:"12 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"5 min",sets:0}
        ]}
      ]},
      { day:"Sunday", label:"Rest + pliability minimum", tag:"Recovery", type:"rest", blocks:[
        { name:"Daily minimum", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]}
    ]
  },

  {
    id: "bridge-2026-07-14",
    name: "Bridge Week — Recovery before Phase 4",
    weeks: 1,
    startDate: "2026-07-13",
    weekNotes: [
      "Travel fatigue (red-eye) + 54 holes of golf this weekend. Light/placeholder training only — Phase 4 start pushed to Monday 7/20."
    ],
    days: [
      { day:"Monday", label:"Already passed", tag:"N/A", type:"rest", blocks:[
        { name:"Daily minimum", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]},
      { day:"Tuesday", label:"Lower body (light)", tag:"Recovery before golf", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Foam roll quads",presc:"90 sec/side",sets:0},
          {name:"Foam roll hamstrings + glutes",presc:"90 sec/side",sets:0},
          {name:"90/90 hip stretch",presc:"60 sec/side",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"45 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Leg swings (sagittal + frontal)",presc:"10 reps/side",sets:0}
        ]},
        { name:"Strength block (light)", dur:"25 min", ex:[
          {name:"Trap bar deadlift",presc:"3×5 @ RPE 5, technique focus",sets:3,reps:"5"},
          {name:"Goblet squat",presc:"2×10 @ RPE 5",sets:2,reps:"10"},
          {name:"Glute bridges",presc:"2×15",sets:2,reps:"15"}
        ]},
        { name:"Cool-down pliability", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]}
      ]},
      { day:"Wednesday", label:"Upper body (light)", tag:"Recovery before golf", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Pec minor doorway stretch",presc:"45 sec/side",sets:0},
          {name:"Shoulder CARs",presc:"5 reps/side",sets:0},
          {name:"Thread the needle",presc:"5 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"2×20",sets:2,reps:"20"}
        ]},
        { name:"Strength block (light)", dur:"25 min", ex:[
          {name:"Incline dumbbell press",presc:"3×8 @ RPE 5",sets:3,reps:"8"},
          {name:"Cable row (neutral grip)",presc:"3×8 @ RPE 5",sets:3,reps:"8"},
          {name:"Face pulls",presc:"2×15",sets:2,reps:"15"}
        ]},
        { name:"Cool-down pliability", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Thoracic extension over foam roll",presc:"90 sec",sets:0}
        ]}
      ]},
      { day:"Thursday", label:"Light cardio / rest (optional)", tag:"Recovery", type:"cardio", blocks:[
        { name:"Zone 2 cardio (optional — skip if still fatigued)", dur:"20 min", ex:[
          {name:"Assault bike or treadmill",presc:"Zone 2, easy conversational pace, entirely optional",sets:0}
        ]},
        { name:"Pliability minimum (if skipping cardio)", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]},
      { day:"Friday", label:"Golf (54 holes this weekend) — no lifting", tag:"Recovery priority", type:"rest", blocks:[
        { name:"Evening pliability minimum", dur:"10 min", ex:[
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"Hamstring stretch",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]},
      { day:"Saturday", label:"Golf (54 holes this weekend) — no lifting", tag:"Recovery priority", type:"rest", blocks:[
        { name:"Evening pliability minimum", dur:"10 min", ex:[
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"Hamstring stretch",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]},
      { day:"Sunday", label:"Golf (54 holes this weekend) — no lifting", tag:"Recovery priority", type:"rest", blocks:[
        { name:"Evening pliability minimum", dur:"10 min", ex:[
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"Hamstring stretch",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]}
    ]
  },

  {
    id: "phase4",
    name: "Phase 4 — Upper Body Intensification + Aerobic Base",
    weeks: 6,
    startDate: "2026-07-20",
    weekNotes: [
      "Week 1 — Baseline reset after CA travel week. Test 3RM trap bar deadlift + 3RM incline DB/Swiss bar press. Lower body submaximal all week. New movements (flat DB bench, seated DB press, weighted pull-ups) start light to establish real numbers.",
      "Week 2 — Progress upper body load on established lifts. First real load added to pull-ups (10-25 lbs). Zone 2 duration builds. Lower stays maintenance.",
      "Week 3 — Continue upper body progression. Zone 2 duration builds further. Sprint mechanics sharpen.",
      "Week 4 — Peak upper body intensity week for this block. Zone 2 duration near its longest. Check in on recovery — this is week 4 of 6, watch fatigue trend.",
      "Week 5 — Hold intensity, aerobic volume peaks (longest Zone 2 and Saturday sessions of the block). This is the week the aerobic base adaptation should start showing (easier pace at same HR).",
      "Week 6 — Deload. Reduce volume ~40% across the board, maintain upper body intensity, easy aerobic work only. Retest 3RM deadlift and incline press to measure the block."
    ],
    days: [
      { day:"Monday", label:"Lower body strength — maintenance", tag:"Hold, don't chase", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Foam roll quads",presc:"90 sec/side",sets:0},
          {name:"Foam roll hamstrings + glutes",presc:"90 sec/side",sets:0},
          {name:"90/90 hip stretch",presc:"60 sec/side",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"45 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Glute bridges",presc:"2×15, 1 sec pause",sets:2,reps:"15"},
          {name:"Leg swings (sagittal + frontal)",presc:"10 reps/side",sets:0}
        ]},
        { name:"Strength block — submaximal", dur:"40 min", ex:[
          {name:"Trap bar deadlift",presc:"3×5 @ RPE 7 (hold ~365-375 lbs, not chasing 425)",sets:3,reps:"5"},
          {name:"Romanian deadlift",presc:"3×10, 3-sec eccentric",sets:3,reps:"10"},
          {name:"Bulgarian split squat",presc:"3×8/side, hold near 185 lb Phase 3 mark, don't chase new PR this phase",sets:3,reps:"8"},
          {name:"Nordic hamstring curl",presc:"4×6, 3-sec eccentric — matches Phase 3 execution",sets:4,reps:"6"},
          {name:"Copenhagen plank",presc:"3×30 sec/side — matches Phase 3 mark",sets:3,reps:"30s"},
          {name:"Dead bug (weighted)",presc:"3×10/side @ 25 lbs, progress past 22.5 lb Phase 3 mark",sets:3,reps:"10"},
          {name:"Pallof press",presc:"3×10/side, heavy band, progress band tension past 70 lb Phase 3 mark",sets:3,reps:"10"}
        ]},
        { name:"Cool-down pliability", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]}
      ]},
      { day:"Tuesday", label:"Upper body strength — intensification", tag:"Priority day", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Pec minor doorway stretch",presc:"45 sec/side",sets:0},
          {name:"Shoulder CARs",presc:"5 reps/side",sets:0},
          {name:"Thread the needle",presc:"5 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"2×20",sets:2,reps:"20"},
          {name:"Wall slides",presc:"2×10",sets:2,reps:"10"},
          {name:"Scapular push-ups",presc:"2×12",sets:2,reps:"12"}
        ]},
        { name:"Strength block — progressive load", dur:"50 min", ex:[
          {name:"Incline DB press",presc:"4×6 @ RPE 8, progress weekly from 80 lb baseline",sets:4,reps:"6"},
          {name:"Swiss bar floor press",presc:"New movement Phase 4 — no prior baseline. Wk1-2: 3×8 @ RPE 6, find working weight. Wk3+: progress from there",sets:3,reps:"8"},
          {name:"Weighted pull-ups",presc:"Wk1-2: 4×5-6 @ BW or +10-25 lbs, first time adding load off 10-rep BW mark. Wk3+: progress load as reps stay clean",sets:4,reps:"5-6"},
          {name:"Cable row (neutral grip)",presc:"4×10 @ 165-170 lbs, progress past 160 lb Phase 3 mark weekly",sets:4,reps:"10"},
          {name:"Seated DB shoulder press",presc:"New movement Phase 4 — no prior baseline. Wk1-2: 3×8 @ RPE 6, find working weight. Wk3+: progress from there",sets:3,reps:"8"},
          {name:"Face pulls",presc:"4×15 @ 52.5-55 lbs, progress past 50 lb Phase 3 mark",sets:4,reps:"15"},
          {name:"Band external rotation",presc:"3×15/side, increase band tension when 15 reps feel like RPE 6 or less",sets:3,reps:"15"}
        ]},
        { name:"Cool-down pliability", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Thoracic extension over foam roll",presc:"90 sec",sets:0},
          {name:"Wrist flexor/extensor stretch",presc:"30 sec each direction",sets:0}
        ]}
      ]},
      { day:"Wednesday", label:"Speed + sprint mechanics", tag:"Keep this quality distinct from Zone 2", type:"cardio", blocks:[
        { name:"Sprint warm-up", dur:"10 min", ex:[
          {name:"Easy jog",presc:"400m",sets:0},
          {name:"High knees",presc:"2×20m",sets:0},
          {name:"Butt kicks",presc:"2×20m",sets:0},
          {name:"A-skips",presc:"2×20m",sets:0},
          {name:"Lateral shuffles",presc:"2×20m each direction",sets:0},
          {name:"Falling starts / lean-and-go",presc:"4×10m",sets:0}
        ]},
        { name:"Sprint mechanics + acceleration", dur:"15 min", ex:[
          {name:"Wall drills — A-position, marching, running",presc:"3×5 reps/side, technical focus, no speed emphasis",sets:3,reps:"5"},
          {name:"High knee skips (A-skip progression)",presc:"3×20m, technical",sets:3,reps:"20m"},
          {name:"10m accelerations — technical, not max effort",presc:"4-5 reps @ ~70-80%, walk-back recovery",sets:5,reps:"1"},
          {name:"30m build-up sprints",presc:"3-4 reps, building to ~85-90%, walk-back recovery",sets:4,reps:"1"}
        ]},
        { name:"Sprint work — max effort", dur:"25-30 min", ex:[
          {name:"60-yard sprints — 3-point start",presc:"2-3 reps @ 100%, full recovery (3-5 min)",sets:3,reps:"1"},
          {name:"60-yard sprints — falling start",presc:"2-3 reps @ 100%, full recovery (3-5 min)",sets:3,reps:"1"},
          {name:"60-yard sprints — standing start",presc:"2-3 reps @ 100%, full recovery (3-5 min), matching Phase 3 volume",sets:3,reps:"1"}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Easy walk",presc:"400m",sets:0},
          {name:"Hip flexor stretch",presc:"60 sec/side",sets:0},
          {name:"Hamstring stretch",presc:"60 sec/side",sets:0},
          {name:"Calf stretch",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Thursday", label:"Upper body volume + golf rotational", tag:"2nd upper day — lagging area", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"12 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Shoulder CARs",presc:"5 reps/side",sets:0},
          {name:"Hip CARs",presc:"5 reps/side",sets:0},
          {name:"Band pull-aparts",presc:"2×20",sets:2,reps:"20"},
          {name:"Thoracic rotation in quadruped",presc:"10 reps/side",sets:0}
        ]},
        { name:"Upper hypertrophy block", dur:"30 min", ex:[
          {name:"DB bench press — moderate load, higher volume",presc:"Use working weight established on Tuesday's flat press, higher reps",sets:4,reps:"10"},
          {name:"Neutral grip pull-ups / lat pulldown",presc:"4×10",sets:4,reps:"10"},
          {name:"Landmine press",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Dumbbell row (3-point stance)",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Rear delt fly",presc:"3×15",sets:3,reps:"15"}
        ]},
        { name:"Golf rotational block (moved from old Friday slot)", dur:"25 min", ex:[
          {name:"Rotational med ball throw (wall, horizontal)",presc:"4×8/side, speed-focused, full recovery between sides",sets:4,reps:"8"},
          {name:"Landmine rotations",presc:"4×8/side @ 47.5-50 lbs, progress past 45 lb Phase 3 mark",sets:4,reps:"8"},
          {name:"Rotational med ball slam — max intent",presc:"5×8/side @ 8-10 lbs, progress past 8 lb / 5x6 Phase 3 mark",sets:5,reps:"8"},
          {name:"Single-leg rotational press",presc:"4×10/side @ 15 lbs, progress past 12.5 lb Phase 3 mark",sets:4,reps:"10"},
          {name:"Single-leg balance + rotation",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Wrist roller / forearm work",presc:"2 sets",sets:2,reps:"—"}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Pigeon pose",presc:"90 sec/side",sets:0}
        ]}
      ]},
      { day:"Friday", label:"Zone 2 aerobic base", tag:"New quality — true aerobic development", type:"cardio", blocks:[
        { name:"Warm-up", dur:"5 min", ex:[
          {name:"Easy pace ramp",presc:"5 min, build to Zone 2",sets:0}
        ]},
        { name:"Zone 2 steady state", dur:"30-40 min", ex:[
          {name:"Run, bike, or row — Zone 2 (HR 130-145, conversational)",presc:"Wk1: 25-30 min (easing back in post-travel). Wk2-3: build to 35-40 min. Wk4-5: hold 40-45 min, peak duration. Wk6 deload: back to 25-30 min easy",sets:0}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Easy walk",presc:"5 min",sets:0},
          {name:"Hip flexor stretch",presc:"60 sec/side",sets:0},
          {name:"Calf stretch",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]},
        { name:"Pliability block", dur:"12 min", ex:[
          {name:"Foam roll calves + hamstrings",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"90/90 hip stretch",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation in quadruped",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0}
        ]}
      ]},
      { day:"Saturday", label:"Long aerobic + full pliability", tag:"Base building", type:"cardio", blocks:[
        { name:"Cardio", dur:"35-50 min", ex:[
          {name:"Option A — easy jog / run-walk",presc:"Zone 2, conversational. Wk1: 30-35 min easing back in. Build weekly toward 50 min by Wk5. Wk6 deload: back to 30 min",sets:0},
          {name:"Option B — bike / row erg",presc:"Wk1: 35 min. Build to 50 min Zone 2 steady state by Wk5. Wk6 deload: 30 min",sets:0},
          {name:"Option C — golf round counts as active recovery, not a substitute for Zone 2",presc:"n/a",sets:0}
        ]},
        { name:"Full pliability session", dur:"30 min", ex:[
          {name:"Full body foam roll",presc:"5 min",sets:0},
          {name:"Child's pose to cobra",presc:"5 reps",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"90/90 hip stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"Supine hamstring with strap",presc:"90 sec/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"5 min",sets:0}
        ]}
      ]},
      { day:"Sunday", label:"Rest + pliability minimum", tag:"Recovery", type:"rest", blocks:[
        { name:"Daily minimum", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]}
    ]
  },

  {
    id: "phase5",
    name: "Phase 5 — Return to Training + Recomp Base",
    weeks: 4,
    startDate: "2026-08-31",
    weekNotes: [
      "Week 1 — First structured week back after 6 weeks off (last trained July 16). Lifts capped at RPE 6–7, technique and hip mobility over load. Cardio has three distinct jobs, and if you're running on Tuesday or Saturday, both start as run/walk intervals — six weeks off means impact tolerance is down even though the engine feels fine. Thursday adds short sprint work plus a Zone 2 finisher, starting sub-max (70-75% effort) no matter how good it feels to open up — save that for Week 3. Bike/row/incline walk don't need the interval treatment, continuous is fine there from day one.",
      "Week 2 — Build. Nudge lift loads up based on how Week 1 felt — aim for RPE 7 on the main compounds. Cardio ticks up on the same conservative step-pattern below across all three days, interval ratios shifting toward more running and less walking. Thursday's sprint effort nudges up too, still short of anything near max. Nutrition should be fully dialed in by now if Week 1 was just getting the habit started.",
      "Week 3 — Continue building lifts toward pre-layoff working weights where RPE allows — six weeks off doesn't hit every movement pattern equally. This is the first week it's reasonable to open up on Thursday's sprints (~85-90%) and to drop Saturday's jog from intervals to continuous, if the first two weeks felt clean on both — earned, not automatic. Tuesday and Saturday hit their longest durations of the block either way.",
      "Week 4 — Deload + reassessment. Lift volume down ~30-40%, intensity stays moderate. Cardio drops to easy/short across all three days — Tuesday and Saturday back to Week 1's interval pattern if running, and Thursday skips structured sprinting entirely — no new high-intensity stress right before a reassessment. This is a deload, not a reset: Phase 6 picks cardio back up from wherever Week 3 landed. End of week, check in on the hips, the QL under real load, and where the recomp is trending. That decides whether Phase 6 keeps building this base or shifts back toward performance."
    ],
    days: [
      { day:"Monday", label:"Full body A — hinge + push", tag:"Foundation reset", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Foam roll quads",presc:"90 sec/side",sets:0},
          {name:"Foam roll hamstrings + glutes",presc:"90 sec/side",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"45 sec/side — priority item right now, hips have been tight",sets:0},
          {name:"90/90 hip stretch (internal + external)",presc:"60 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Leg swings (sagittal + frontal)",presc:"10 reps/side",sets:0},
          {name:"Glute bridges",presc:"2×15, 1 sec pause",sets:2,reps:"15"}
        ]},
        { name:"Strength block", dur:"40 min", ex:[
          {name:"Trap bar deadlift",presc:"Wk1: 3×6 @ RPE 6-7, technique focus, let it land wherever it lands. Wk2: 3×6 @ RPE 7. Wk3: 4×5 @ RPE 7-8, pushing back toward working weight. Wk4 deload: 2×5 @ RPE 5-6",sets:3,reps:"6"},
          {name:"Romanian deadlift",presc:"3×10, 3-sec eccentric",sets:3,reps:"10"},
          {name:"Bulgarian split squat",presc:"3×8/side — keep depth comfortable this week given hip tightness, full range as it opens up",sets:3,reps:"8"},
          {name:"Pallof press",presc:"3×10/side, moderate band",sets:3,reps:"10"},
          {name:"Dead bug",presc:"3×8/side",sets:3,reps:"8"}
        ]},
        { name:"Cool-down pliability", dur:"12 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"3 min",sets:0}
        ]}
      ]},
      { day:"Tuesday", label:"Run/walk intervals + hip mobility", tag:"Interval rebuild, outside gym", type:"cardio", blocks:[
        { name:"Run/walk intervals", dur:"15-24 min", ex:[
          {name:"Run/walk intervals — HR capped at Zone 2 (130-145) on the run portions",presc:"Wk1: 1 min jog / 2 min walk × 5 rounds (15 min). Wk2: 2 min jog / 2 min walk × 5 (20 min). Wk3: 3 min jog / 1 min walk × 6 (24 min). Wk4 deload: back to Wk1's pattern, easy. Walk portions are full recovery, not filler — if the run portions are creeping past HR 145, the walk breaks aren't long enough yet.",sets:0}
        ]},
        { name:"Hip mobility focus", dur:"15 min", ex:[
          {name:"Kneeling hip flexor stretch",presc:"60 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"90/90 hip CARs (internal + external)",presc:"8 reps/side, slow and controlled",sets:0},
          {name:"Pigeon pose",presc:"90 sec/side",sets:0},
          {name:"Deficit reverse lunge",presc:"2×8/side bodyweight — loaded hip flexor stretch, keep it light",sets:2,reps:"8"}
        ]}
      ]},
      { day:"Wednesday", label:"Full body B — pull + golf rotation", tag:"Upper + rotational", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Thoracic foam roll",presc:"90 sec",sets:0},
          {name:"Pec minor doorway stretch",presc:"45 sec/side",sets:0},
          {name:"Shoulder CARs",presc:"5 reps/side",sets:0},
          {name:"Thread the needle",presc:"5 reps/side",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Band pull-aparts",presc:"2×20",sets:2,reps:"20"}
        ]},
        { name:"Strength block", dur:"45 min", ex:[
          {name:"Incline dumbbell press",presc:"3×10 @ RPE 7, moderate load — hypertrophy range this block, not chasing the old 4×6 RPE8 weight yet",sets:3,reps:"10"},
          {name:"Neutral grip pull-ups / lat pulldown",presc:"3×8-10 bodyweight. If 8+ reps feels like RPE 6 or easier by Wk3, add light load",sets:3,reps:"10"},
          {name:"Cable row (neutral grip)",presc:"3×10 @ moderate load, build back toward 160 lb mark by end of block",sets:3,reps:"10"},
          {name:"Goblet squat — tempo",presc:"3×10, 3-sec down, 1-sec pause — lower-stress way to keep squat pattern in without loading the spine heavy this week",sets:3,reps:"10"},
          {name:"Landmine rotations",presc:"3×8/side, light-moderate — rebuilding from scratch, don't reference the 45-50 lb Phase 4 mark yet",sets:3,reps:"8"},
          {name:"Face pulls",presc:"3×15",sets:3,reps:"15"}
        ]},
        { name:"Cool-down pliability", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Cross-body posterior shoulder",presc:"60 sec/side",sets:0},
          {name:"Overhead lat stretch",presc:"60 sec/side",sets:0},
          {name:"Couch stretch",presc:"60 sec/side",sets:0}
        ]}
      ]},
      { day:"Thursday", label:"Sprint work + Zone 2", tag:"Speed + aerobic base", type:"cardio", blocks:[
        { name:"Sprint warm-up", dur:"10 min", ex:[
          {name:"Easy jog",presc:"3-4 min, build from walk to light jog",sets:0},
          {name:"High knees",presc:"2×20m",sets:0},
          {name:"Butt kicks",presc:"2×20m",sets:0},
          {name:"A-skips",presc:"2×20m",sets:0},
          {name:"Falling starts / lean-and-go",presc:"3×10m, light",sets:0}
        ]},
        { name:"Sprint work", dur:"10-15 min", ex:[
          {name:"Accelerations / build-up sprints",presc:"Sprinting is the highest strain-risk piece of this whole rebuild — new stimulus on top of six weeks off — so effort stays sub-max even though it won't feel like it needs to. Wk1: 10m accelerations from a jog-in, ~70-75% effort, 6 reps, full recovery (90 sec+). Wk2: 20m build-ups easing up to ~80% by the last 10m, 5-6 reps. Wk3: 30m build-ups reaching ~85-90% in the final 10m, 4-5 reps — first week it's fair to actually open up. True max-effort sprinting waits for Phase 6, once three clean weeks are banked. Wk4 deload: skip structured sprinting, 3-4 easy 15m strides at ~60% if anything.",sets:0}
        ]},
        { name:"Zone 2 finisher", dur:"10-15 min", ex:[
          {name:"Bike, row, jog, or brisk walk — easy Zone 2",presc:"Wk1: 10 min. Wk2: 12 min. Wk3: 15 min. Wk4 deload: 10 min easy, or skip if legs are fried. Sprint work itself is short and recovery-heavy, so this is what keeps Thursday contributing to the weekly cardio total.",sets:0}
        ]},
        { name:"Cool-down + daily minimum", dur:"10 min", ex:[
          {name:"Supine hamstring stretch",presc:"90 sec/side — non-negotiable after sprint work",sets:0},
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]},
      { day:"Friday", label:"Full body C — power + golf + conditioning", tag:"Athletic + metabolic", type:"lift", blocks:[
        { name:"Pliability warm-up", dur:"15 min", ex:[
          {name:"Full body foam roll",presc:"4 min",sets:0},
          {name:"Hip flexor kneeling stretch",presc:"45 sec/side",sets:0},
          {name:"90/90 hip rotations",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Leg swings",presc:"10 reps/side",sets:0}
        ]},
        { name:"Power + athletic block", dur:"35 min", ex:[
          {name:"Trap bar deadlift — speed focus",presc:"3×3 @ ~50% RPE6, explosive intent, full reset between reps",sets:3,reps:"3"},
          {name:"Single-leg RDL",presc:"3×8/side, light-moderate — balance and hip hinge pattern over load right now",sets:3,reps:"8"},
          {name:"Rotational med ball slam",presc:"3×8/side, moderate intent — rebuilding from the 8lb/5x6 Phase 3 mark",sets:3,reps:"8"},
          {name:"Dumbbell row (3-point stance)",presc:"3×10/side",sets:3,reps:"10"},
          {name:"Single-leg balance + rotation",presc:"3×10/side",sets:3,reps:"10"}
        ]},
        { name:"Conditioning finisher", dur:"12 min", ex:[
          {name:"Sled push/pull + farmer carry circuit",presc:"Wk1: 3 rounds — sled push 20m, farmer carry 20m, walk-back recovery, moderate load, learn the pacing. Wk2-3: add a round or tighten rest. Wk4 deload: 2 easy rounds only",sets:0}
        ]},
        { name:"Cool-down", dur:"10 min", ex:[
          {name:"Doorway pec stretch",presc:"90 sec/side",sets:0},
          {name:"Pigeon pose",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]},
      { day:"Saturday", label:"Long aerobic + full pliability", tag:"Base building", type:"cardio", blocks:[
        { name:"Cardio — the real base-building session", dur:"20-35 min", ex:[
          {name:"Option A — jog: run/walk intervals to start, continuous once earned",presc:"Same impact logic as Tuesday, scaled up since this is the longest session of the week. Wk1: 1 min jog / 2 min walk × 6-7 rounds (~20 min). Wk2: 2 min jog / 2 min walk × 7 rounds (~28 min). Wk3: either continue 3 min jog / 1 min walk × 8-9 rounds (~35 min), or shift to continuous easy jogging for the full 35 min IF Wk1-2 felt clean — not automatic. Wk4 deload: back to Wk1's easier interval pattern (~20 min).",sets:0},
          {name:"Option B — assault bike, row erg, or incline walk (continuous is fine here)",presc:"No impact, so no interval requirement — continuous Zone 2 works from Wk1. Same duration targets: Wk1 20 min, Wk2 28 min, Wk3 35 min, Wk4 deload 20 min. Good default for the first couple weeks regardless of running plans — takes joint stress off the table while the aerobic engine rebuilds. Phase 6 is where 40-45+ min comes back into play.",sets:0},
          {name:"Option C — golf round counts as active recovery, not a substitute for structured Zone 2",presc:"n/a",sets:0}
        ]},
        { name:"Full pliability session", dur:"30 min", ex:[
          {name:"Full body foam roll",presc:"5 min",sets:0},
          {name:"Child's pose to cobra",presc:"5 reps",sets:0},
          {name:"Pigeon pose",presc:"2 min/side",sets:0},
          {name:"90/90 hip stretch",presc:"90 sec/side",sets:0},
          {name:"Couch stretch",presc:"90 sec/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"Supine hamstring with strap",presc:"90 sec/side",sets:0},
          {name:"Reclined spinal twist",presc:"60 sec/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"5 min",sets:0}
        ]}
      ]},
      { day:"Sunday", label:"Rest + pliability minimum", tag:"Recovery", type:"rest", blocks:[
        { name:"Daily minimum", dur:"10 min", ex:[
          {name:"Foam roll — previous muscles",presc:"3 min",sets:0},
          {name:"Hip 90/90",presc:"60 sec/side",sets:0},
          {name:"Thoracic rotation",presc:"10 reps/side",sets:0},
          {name:"World's greatest stretch",presc:"5 reps/side",sets:0},
          {name:"Diaphragmatic breathing",presc:"2 min",sets:0}
        ]}
      ]}
    ]
  }
];
