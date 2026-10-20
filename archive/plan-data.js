const ACTIVE_PLAN = {
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
};
