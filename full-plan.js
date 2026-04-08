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
  }
];

const ACTIVE_PLAN = PLANS[0];
