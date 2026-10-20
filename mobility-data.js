// Hybrid Run Mobility Plan — single source of truth for the app.
// Item fields: n = exercise, d = dose, c = cue, b = block heading (starts a new block),
// when = settings flag that must be on for the item to show.

const PLAN_META = {
  title: 'Hybrid Run Mobility Plan',
  date: 'Oct 20, 2026',
  intro: "Your hips don't need more range. Your QL, hamstrings and shoulders do, and your hips need control at the range you already have. That's about 2.5 hours of mobility a week, built around four priorities:",
  priorities: [
    ['Low back / QL', "A QL usually stays tight because it's doing bracing work your obliques and glute med should share. Release it, then train side stability so it can let go."],
    ['Hamstrings', 'Treat them as nervous-system tension, not short muscle. Use active and loaded work, and never static-stretch them cold.'],
    ['Shoulders and T-spine', 'Bench pressing plus golf rotation. Open the pecs and lats, and keep the back of the shoulder moving with controlled rotations rather than cranking on it.'],
    ['Running tissue', 'Calves, Achilles and feet, built up before mileage climbs toward the 5K.']
  ],
  assumption: "Squats are on Friday, since Thursday is a run day. If they're actually Thursday, swap Pre-lift B onto that day."
};

const ROUTINES = {
  preLiftA: {
    title: 'Pre-lift A', sub: 'Before bench', min: 12,
    items: [
      { n: 'Foam roll T-spine', d: '90 sec', c: 'Hands behind head, extend over the roller one segment at a time' },
      { n: 'Lacrosse ball pec minor', d: '45 sec/side', c: 'Ball just under the collarbone near the shoulder, slow arm sweeps' },
      { n: 'Quadruped T-spine rotation', d: '8/side', c: 'Hips stay still, exhale as you rotate' },
      { n: 'Shoulder CARs', d: '3/direction/side', c: 'Ribs down, biggest pain-free circle you can control' },
      { n: 'Band dislocates', d: '10', c: 'Wide grip, narrow it over the weeks' },
      { n: 'Scap push-ups', d: '10', c: 'Spread the shoulder blades wide at the top' },
      { n: 'Band pull-aparts', d: '2 x 15', c: 'Shoulder blades down and back, no shrug' },
      { n: 'Bench ramp-up', d: '2–3 light sets', c: 'Rehearse your setup: arch, leg drive, blades pinned' }
    ]
  },
  postLiftA: {
    title: 'Post-lift A', sub: 'After bench', min: 8,
    items: [
      { n: 'Doorway pec stretch', d: '60 sec/side', c: 'Elbow at 90°, step through, long exhale' },
      { n: 'Bench prayer stretch (lats)', d: '60 sec', c: 'Elbows on the bench, sit hips back, let the chest drop' },
      { n: 'Cross-body posterior shoulder', d: '45 sec/side', c: 'Pin the shoulder blade down so the stretch lands in the back of the shoulder' },
      { n: 'T-spine extension over roller', d: '60 sec', c: 'Arms overhead, breathe into the upper back' },
      { n: 'Wrist flexor and extensor stretch', d: '30 sec each', c: 'Golf grip and pressing both load the forearms' },
      { n: '90/90 breathing', d: '2 min', c: 'On your back, feet on the bench, full exhale until your low back flattens' }
    ],
    note: "The 90/90 breathing closes every lift on purpose. It turns down the guarding that keeps your QL tight. Add face pulls (2 x 15) between bench sets if they aren't already in your program."
  },
  preLiftB: {
    title: 'Pre-lift B', sub: 'Before squat', min: 12,
    items: [
      { n: 'Foam roll calves, quads, glutes', d: '2 min total', c: 'Slow passes, pause on tender spots' },
      { n: 'Lacrosse ball QL', d: '60 sec/side', c: 'Lie on your back, ball beside the spine just above the pelvis. Never on bone.' },
      { n: 'Cat-cow', d: '8', c: 'Move one vertebra at a time' },
      { n: 'Supine hamstring floss', d: '10/side', c: 'Leg up, point and flex the foot. Keep it moving, no hold.' },
      { n: 'Active straight-leg raise', d: '8/side', c: 'Opposite leg pinned flat, lower slowly' },
      { n: 'Half-kneeling ankle rocks', d: '10/side', c: 'Knee drives over the pinky toe, heel stays down' },
      { n: 'Side plank', d: '2 x 20 sec/side', c: 'Hips stacked, long line from head to heel' },
      { n: 'Goblet squat hold with pry', d: '45 sec', c: 'Elbows push the knees out, shift side to side' },
      { n: 'Squat ramp-up', d: '2–3 light sets', c: 'Same brace and depth as your work sets' }
    ]
  },
  postLiftB: {
    title: 'Post-lift B', sub: 'After squat', min: 8,
    items: [
      { n: 'Banded hamstring PNF', d: '2 rounds/side', c: 'Push into the band 5 sec, relax, pull 20 sec deeper. Toes slightly in.' },
      { n: 'Couch stretch', d: '60 sec/side', c: "Squeeze the glute and keep ribs down so the low back doesn't arch" },
      { n: "Child's pose side reach", d: '45 sec/side', c: 'Walk hands to one side, breathe into the opposite ribs' },
      { n: 'Supine twist', d: '45 sec/side', c: 'Shoulders stay flat' },
      { n: 'Crocodile breathing', d: '1 min', c: 'Face down, breathe into your low back and feel it widen' }
    ],
    note: "The child's pose side reach is your main QL stretch. If your back is tight after the lift, give it an extra 30 seconds per side."
  },
  preRun: {
    title: 'Pre-run', sub: 'Dynamic', min: 5, minIf: { strides: 10 },
    items: [
      { n: 'Leg swings, front to back', d: '10/side', c: "Control the swing, don't fling it" },
      { n: 'Leg swings, side to side', d: '10/side', c: 'Hold something, stay tall' },
      { n: 'Walking knee hug to toe raise', d: '10 total', c: 'Rise onto the toe of the standing leg' },
      { n: 'Walking lunge with rotation', d: '6/side', c: 'Rotate the chest toward the front leg' },
      { n: 'Ankle pogos', d: '2 x 20', c: 'Stiff ankles, quick ground contacts' },
      { n: 'High-knee march or A-skip', d: '2 x 20 m', c: 'Tall posture, foot lands under the hip' },
      { n: 'Strides', d: '4 x 20 sec', c: 'Build to quick and relaxed, full recovery between', when: 'strides' }
    ]
  },
  postRun: {
    title: 'Post-run reset', sub: 'Short holds while warm', min: 5,
    items: [
      { n: 'Straight-knee calf stretch on a wall', d: '45 sec/side', c: 'Heel down, hips square' },
      { n: 'Bent-knee soleus stretch', d: '45 sec/side', c: 'Same position, sink the knee forward' },
      { n: 'Standing hip flexor stretch with reach', d: '30 sec/side', c: 'Tuck the pelvis, reach the same-side arm up and over' },
      { n: 'Elevated-heel hamstring hinge', d: '30 sec/side', c: 'Heel on a step, hinge with a flat back. Gentle.' },
      { n: 'Single-leg calf raises', d: '2 x 15/side', c: 'Slow up, slower down', when: 'calfRaises' }
    ],
    note: 'The calf and soleus work matters most here. They take the most load as mileage climbs, and Achilles trouble is the usual thing that derails a first 5K block.'
  },
  session1: {
    title: 'Session 1', sub: 'Posterior chain and low back', min: 30,
    intro: "This is your hamstring and QL day. It runs release → reset → lengthen → stabilize, because range you don't own under control won't stick. Do the easy bike first if you're riding, so you start warm.",
    items: [
      { b: 'Release · 6 min', n: 'Foam roll calves, hamstrings, glutes', d: '3 min', c: 'Slow, 3 breaths on any tender spot' },
      { n: 'Lacrosse ball QL', d: '60 sec/side', c: 'Beside the spine, above the pelvis' },
      { n: 'Lacrosse ball under the foot', d: '30 sec/side', c: 'Standing, roll heel to toes' },
      { b: 'Reset · 3 min', n: '90/90 breathing, feet on a box', d: '2 x 5 breaths', c: 'Exhale fully, feel the low back flatten into the floor' },
      { b: 'Lengthen · 11 min', n: 'Jefferson curl', d: '2 x 8', c: '10–15 lb, roll down one vertebra at a time, 3 sec down' },
      { n: 'Banded hamstring PNF', d: '3 rounds/side', c: 'Push 5 sec, relax, pull 20 sec deeper' },
      { n: 'Standing side bend on a rack', d: '45 sec/side', c: 'Hold the rack overhead, sit the hip away, breathe into the side ribs' },
      { n: 'Cossack squat', d: '2 x 6/side', c: 'Slow and controlled, straight-leg toes up' },
      { n: 'Couch stretch', d: '60 sec/side', c: 'Glute squeezed, ribs down' },
      { b: 'Stabilize · 8 min', n: 'Side plank with top-leg raise', d: '2 x 20 sec/side', c: "Hips don't sag or rotate" },
      { n: 'Suitcase carry', d: '2 x 30 m/side', c: 'Moderate dumbbell, stay perfectly level' },
      { n: 'Bird dog', d: '2 x 6/side', c: '3-sec hold, no rocking' },
      { n: 'Hip airplanes', d: '2 x 4/side', c: 'Hold a rack, rotate the pelvis open and closed over the standing leg' },
      { b: 'Downshift · 2 min', n: 'Crocodile breathing', d: '2 min', c: 'Face down, breathe into your low back' }
    ],
    note: 'The suitcase carry and side plank do as much for your QL as any stretch. When the obliques and glute med carry their share, the QL stops guarding. Hip airplanes give your mobile hips control on one leg, which helps both running and the golf swing.'
  },
  session2: {
    title: 'Session 2', sub: 'Shoulders, T-spine and rotation', min: 30,
    intro: "This is your shoulder and golf day. It undoes a weekend of swinging and sets your shoulders up for Monday's bench. On a morning round, do it afterward. On an afternoon round, do Blocks 1–2 beforehand as a longer warm-up and finish the rest after.",
    items: [
      { b: 'Release · 5 min', n: 'Foam roll T-spine', d: '90 sec', c: 'Segment by segment' },
      { n: 'Foam roll lats', d: '45 sec/side', c: 'Arm overhead, thumb up' },
      { n: 'Lacrosse ball back of shoulder', d: '45 sec/side', c: 'Against a wall, ball on the shoulder blade, slow arm movement' },
      { n: 'Lacrosse ball pec minor', d: '30 sec/side', c: 'Under the collarbone' },
      { b: 'T-spine and rotation · 9 min', n: 'Open books', d: '8/side', c: 'Side-lying, knees stacked, 3-sec hold open' },
      { n: 'Thread the needle with reach', d: '8/side', c: 'Follow the hand with your eyes, hips still' },
      { n: 'Half-kneeling rotation with stick', d: '8/side', c: 'Stick across the shoulders, rotate over the front knee' },
      { n: 'Pallof press', d: '2 x 10/side', c: 'Cable or band, resist the rotation, ribs down' },
      { b: 'Shoulders · 9 min', n: 'Shoulder CARs', d: '3/direction/side', c: 'Slow, ribs down' },
      { n: 'Wall slides', d: '2 x 10', c: 'Back flat on the wall, forearms slide up' },
      { n: 'Prone Y-T-W', d: '1 x 8 each', c: 'Thumbs up, light or no weight' },
      { n: 'Band external rotation at 90/90', d: '2 x 12/side', c: 'Elbow at shoulder height, slow 3-sec lower' },
      { n: 'Bench prayer stretch', d: '60 sec', c: 'Elbows on the bench, sit back' },
      { b: 'Hips and golf · 5 min', n: 'Standing hip CARs', d: '3/direction/side', c: 'Hold a rack, pelvis stays level' },
      { n: '90/90 switches, hands-free', d: '8 each way', c: 'Your hips have range, this trains control' },
      { b: 'Downshift · 2 min', n: "Child's pose side reach", d: '45 sec/side', c: 'Breathe into the opposite ribs' }
    ],
    note: 'As a lefty, your lead side is the right side. If one direction of the half-kneeling rotation feels tighter, give it an extra set. Lack of lead-side rotation usually shows up as early extension or swaying in the swing.'
  },
  preRound: {
    title: 'Pre-round', sub: 'Golf warm-up · just a club', min: 8,
    intro: 'Do this before every round, before you hit a single range ball.',
    items: [
      { n: 'Leg swings, both directions', d: '10 each/side', c: 'Hand on the cart or bag' },
      { n: 'Walking lunge with rotation', d: '5/side', c: 'Rotate toward the front leg' },
      { n: 'Overhead side bend with club', d: '8/side', c: 'Club overhead, reach long, wakes up the QL gently' },
      { n: 'Standing T-spine rotation, club across shoulders', d: '10/side', c: 'Golf posture, rotate around the spine, hips quiet' },
      { n: 'Standing hip CARs', d: '3/direction/side', c: 'Use the club as a cane' },
      { n: 'Shoulder CARs', d: '3/direction/side', c: 'Slow' },
      { n: 'Progressive swings with a wedge', d: '10', c: 'Half → three-quarter → full' }
    ]
  },
  range: {
    title: 'Range session', sub: 'Midweek range trip', min: 3,
    intro: 'Before you start hitting.',
    items: [
      { n: 'Overhead side bend with club', d: '8/side', c: 'Club overhead, reach long' },
      { n: 'Standing T-spine rotation, club across shoulders', d: '10/side', c: 'Golf posture, hips quiet' },
      { n: 'Progressive swings with a wedge', d: '10', c: 'Half → three-quarter → full' }
    ]
  },
  minimum: {
    title: 'Crunched-day minimum', sub: 'When time is short', min: 8,
    items: [
      { n: "Foam roll yesterday's muscles", d: '3 min', c: 'Whatever you trained or ran yesterday' },
      { n: "Child's pose side reach", d: '60 sec/side', c: 'Breathe into the opposite ribs' },
      { n: 'Open books', d: '8/side', c: 'Side-lying, knees stacked, 3-sec hold open' },
      { n: '90/90 breathing', d: '2 min', c: 'Full exhale until your low back flattens' }
    ]
  },
  qlAddon: {
    title: 'Golf-weekend QL add-on', sub: 'After the lift, if your low back is tight', min: 6,
    items: [
      { n: 'Lacrosse ball QL', d: '60 sec/side', c: 'Beside the spine, above the pelvis' },
      { n: 'Side plank', d: '2 x 20 sec/side', c: 'Hips stacked, long line from head to heel' },
      { n: 'Suitcase carry', d: '2 x 30 m/side', c: 'Moderate dumbbell, stay perfectly level' }
    ]
  }
};

const RUN_INTRO = 'Five minutes on each side of every run. Dynamic before, short static holds after, while the tissue is warm.';

// Index 0 = Monday
const WEEK = [
  { day: 'Mon', name: 'Upper lift', training: 'Upper lift (bench)', sessions: ['preLiftA', 'postLiftA'], extras: ['qlAddon'],
    intro: 'The goal before benching is a mobile T-spine and a set, stable shoulder blade. Afterward, open everything the press shortened.' },
  { day: 'Tue', name: 'Easy run', training: 'Easy run', sessions: ['preRun', 'postRun'], intro: RUN_INTRO },
  { day: 'Wed', name: 'Posterior chain', training: 'Off / easy bike', sessions: ['session1'] },
  { day: 'Thu', name: 'Easy run', training: 'Easy run', sessions: ['preRun', 'postRun'], intro: RUN_INTRO },
  { day: 'Fri', name: 'Full body lift', training: 'Full body lift (squat)', sessions: ['preLiftB', 'postLiftB'],
    intro: "Before squatting, wake up the hamstrings and obliques so the QL doesn't take over the bracing. Skip long hip holds: your hips already have the range, so the squat hold is about control." },
  { day: 'Sat', name: 'Run + round', training: 'Easy run + round', sessions: ['preRun', 'postRun', 'preRound'],
    intro: 'Run first and get to the course warm. Do the pre-round routine anyway.' },
  { day: 'Sun', name: 'Shoulders + rotation', training: 'Off / easy bike + round', sessions: ['session2'] }
];

// Always offered under "Extras" (plus any day-specific extras)
const EXTRAS = ['preRound', 'range', 'minimum'];

const RULES = [
  "Pre-lift work is never optional. If you're short on time, cut post-lift work first.",
  'No static hamstring stretching cold. Hold stretches only after a session, or after the release and reset blocks.',
  'Keep stretch intensity at 6/10. Tension is fine. Sharp, burning or tingling means back off.',
  "On a crunched day, do the minimum: foam roll yesterday's muscles (3 min), child's pose side reach (60 sec/side), open books (8/side) and 90/90 breathing (2 min)."
];

// Toggles in Rules tab; `key` matches item.when / routine.minIf
const PROGRESSIONS = [
  { key: 'calfRaises', label: 'Running past ~15 miles a week', detail: 'Adds 2 x 15 slow single-leg calf raises to each post-run reset.' },
  { key: 'strides', label: 'Tempos or intervals have started', detail: 'Pre-run grows to 10 min with 4 x 20-sec strides. Time to rework the run days too.' }
];
const PROGRESSION_NOTE = "Low back tighter after a golf weekend: repeat Wednesday's QL release, side plank and suitcase carry after Monday's lift (Monday → Extras → Golf-weekend QL add-on).";

const MONTHLY_CHECKS = [
  { key: 'aslr', label: 'Active straight-leg raise', marker: 'Hamstring marker', how: 'How high the leg goes with the other pinned flat.', ph: 'e.g. L 70° / R 65°' },
  { key: 'wall', label: 'Wall shoulder flexion', marker: 'Shoulder marker', how: 'Back flat on a wall: can both thumbs touch it overhead with no rib flare?', ph: 'e.g. Both touch, slight flare on R' },
  { key: 'bend', label: 'Standing side bend', marker: 'QL marker', how: 'Do your fingertips reach the same spot down each leg?', ph: 'e.g. L mid-knee / R 1 in. higher' }
];

const RED_FLAGS = [
  'Low back pain that radiates below the knee, or any numbness or tingling in the leg',
  "Achilles or shin pain that's worse each morning, or that changes how you run",
  'Shoulder pain during pressing, not just tightness after'
];
