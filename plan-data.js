const ACTIVE_PLAN = {
  id: "phase1",
  name: "Phase 1",
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
};
