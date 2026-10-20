const GLOSSARY_DATA = {

  // ── STRENGTH ──────────────────────────────────────────────

  "Trap bar deadlift": {
    category: "Strength",
    muscles: "Hamstrings, glutes, erectors, traps, forearms",
    description: "A hip-hinge pulling movement performed with a hex (trap) bar. The neutral grip and centered loading reduces shear on the spine compared to a conventional deadlift while still building maximal posterior chain strength.",
    cues: ["Hinge at the hips, not the knees", "Drive the floor away — don't think 'pull'", "Keep chest tall and lats engaged", "Lock hips and knees out together at the top"]
  },

  "Trap bar deadlift — speed focus": {
    category: "Power",
    muscles: "Hamstrings, glutes, erectors, traps",
    description: "A submaximal trap bar deadlift performed with maximal intent on the concentric phase. Lower load (~60% 1RM) allows you to develop rate of force development and explosive hip extension — the same qualities that drive sprint speed and swing power.",
    cues: ["Load is light — move it FAST", "Full reset between reps, no touch-and-go", "Squeeze glutes hard at lockout", "Don't sacrifice position for speed"]
  },

  "Trap bar deadlift — heavy": {
    category: "Strength",
    muscles: "Hamstrings, glutes, erectors, traps",
    description: "Phase 2 variant focused on maximal load (RPE 8–9). Builds on Phase 1 baseline by adding a 5th set and pushing intensity. This is where true strength gains are consolidated.",
    cues: ["Brace hard before breaking the floor", "Keep the bar close — no swinging", "Control the eccentric — don't drop the weight", "RPE 8–9: hard but form stays locked"]
  },

  "Trap bar deadlift — near maximal": {
    category: "Strength",
    muscles: "Hamstrings, glutes, erectors, traps",
    description: "Phase 3 peak expression — working to a 3-rep max at RPE 9. This is the heaviest pulling you'll do in the program. All prior volume and technique work culminates here.",
    cues: ["Full warm-up before working to 3RM", "Treat each set like it's the last one", "If form breaks, stop — the PR isn't worth an injury", "Trust the process — the work is already done"]
  },

  "Romanian deadlift": {
    category: "Strength",
    muscles: "Hamstrings, glutes, erectors",
    description: "A hip-hinge movement that emphasizes hamstring lengthening under load. Unlike a full deadlift, the bar stays close to the legs and the knees stay soft while the hips drive backward. The 3-second eccentric forces maximal hamstring time under tension.",
    cues: ["Push hips back, not knees down", "Feel a deep stretch in the hamstrings before reversing", "3-second controlled lowering on every rep", "Maintain a neutral spine throughout — no rounding"]
  },

  "Bulgarian split squat": {
    category: "Strength",
    muscles: "Quads, glutes, hip flexors, adductors",
    description: "A single-leg squat with the rear foot elevated. Demands hip mobility, single-leg stability, and quad/glute strength simultaneously. Excellent for identifying and correcting side-to-side imbalances.",
    cues: ["Front foot far enough forward that shin stays vertical", "Drive the back knee toward the floor, don't collapse it inward", "Stay tall — don't lean excessively forward", "Push through the heel and mid-foot of the front foot"]
  },

  "Nordic hamstring curl": {
    category: "Strength",
    muscles: "Hamstrings (eccentric focus), glutes",
    description: "One of the most effective exercises for hamstring injury prevention and strength. Anchor feet and lower your body toward the floor under control — only 5 reps per set means each rep should be maximally difficult.",
    cues: ["Go as slow as possible on the way down", "Use your hands to catch yourself at the bottom if needed", "Drive your hips into extension at the top", "5 reps is plenty — quality over quantity"]
  },

  "Copenhagen plank": {
    category: "Strength",
    muscles: "Hip adductors, core, glutes",
    description: "A side plank variation where the top leg is elevated on a bench and the bottom leg is suspended. Highly effective for adductor strength — an often neglected area critical for groin health and lateral force production.",
    cues: ["Keep hips stacked — don't let them sag or rotate", "Bottom foot does not touch the floor", "Squeeze the top inner thigh to drive into the bench", "Progress duration gradually — adductors fatigue quickly"]
  },

  "Dead bug": {
    category: "Core",
    muscles: "Deep core (transverse abdominis), hip flexors, contralateral stability",
    description: "An anti-extension core exercise that trains the ability to maintain spinal position while moving your limbs. The contralateral (opposite arm/leg) pattern mirrors the demands of running and golf.",
    cues: ["Press your lower back into the floor — keep it there", "Move slowly and with control", "Exhale fully as you extend the limbs", "Only go as far as you can without arching your back"]
  },

  "Dead bug — weighted": {
    category: "Core",
    muscles: "Deep core, hip flexors",
    description: "Phase 2 progression of the dead bug using a light dumbbell or plate in the extended hand. Increases the anti-extension demand on the core.",
    cues: ["Same mechanics as bodyweight — back stays flat", "Light weight only — this is a core exercise, not an arm exercise", "Don't let the added weight rush your tempo"]
  },

  "Incline dumbbell press": {
    category: "Strength",
    muscles: "Upper pecs, anterior deltoid, triceps",
    description: "A pressing movement performed on a 30–45° incline bench. Emphasizes the upper chest and front shoulder more than flat pressing, which is important for shoulder health and balanced pressing strength.",
    cues: ["Control the descent — 2–3 seconds down", "Drive dumbbells up and slightly together at the top", "Keep shoulder blades retracted and depressed throughout", "Don't let elbows flare past 45°"]
  },

  "Cable row (neutral grip)": {
    category: "Strength",
    muscles: "Mid back (rhomboids, mid traps), rear delts, biceps",
    description: "A horizontal pulling movement using a cable machine with a neutral (palms facing) grip. Builds the mid-back thickness essential for posture, shoulder health, and force transfer in rotational sports.",
    cues: ["Lead with your elbows — don't curl the weight", "Squeeze shoulder blades together at the end", "Don't lean back excessively — use your back, not momentum", "Keep core braced to prevent lumbar extension"]
  },

  "Neutral grip pull-ups / lat pulldown": {
    category: "Strength",
    muscles: "Lats, biceps, rear delts, rhomboids",
    description: "Vertical pulling movement performed with palms facing each other. Neutral grip reduces shoulder stress while maximizing lat engagement. Use lat pulldown when full pull-ups aren't available.",
    cues: ["Initiate by depressing the shoulder blades", "Drive elbows toward your hips — not just down", "Full hang at the bottom to maximize range of motion", "Avoid kipping or swinging"]
  },

  "Weighted pull-ups": {
    category: "Strength",
    muscles: "Lats, biceps, rear delts",
    description: "Phase 2/3 progression adding load via a belt or dumbbell between feet. One of the best measures of upper body relative strength. Work to a challenging RM in Phase 3.",
    cues: ["Add weight only when bodyweight form is solid", "Same cues as unweighted — don't let extra load compromise form", "Full dead hang between reps", "Control the eccentric"]
  },

  "Face pulls": {
    category: "Strength",
    muscles: "Rear deltoids, external rotators, mid traps",
    description: "A cable exercise pulling toward the face with elbows high. Non-negotiable for shoulder health in any program that includes pressing. Directly counters the internal rotation pattern of bench press, golf swing, and overhead movements.",
    cues: ["Pull to the forehead, not the chin", "Elbows should stay above wrist level throughout", "Externally rotate at the end — thumbs back", "Never skip these — they keep your shoulders healthy"]
  },

  "Landmine press": {
    category: "Strength",
    muscles: "Anterior deltoid, upper pecs, triceps, serratus",
    description: "A single-arm pressing movement using a barbell anchored at floor level. The arc of the landmine allows a more shoulder-friendly pressing path while also training anti-rotation core stability.",
    cues: ["Stagger stance for stability", "Drive the bar in an arc — up and forward", "Don't let the shoulder shrug up", "Core stays braced against the rotational tendency"]
  },

  "Band external rotation": {
    category: "Strength",
    muscles: "Infraspinatus, teres minor (rotator cuff)",
    description: "An isolation exercise for the external rotators of the shoulder. Critical for rotator cuff health, especially in golfers where high internal rotation loads accumulate over thousands of swings.",
    cues: ["Elbow stays at 90° and pinned to the side", "Rotate out slowly — no momentum", "Hold briefly at end range", "Light resistance — this is preventive, not strength work"]
  },

  "Pallof press": {
    category: "Core",
    muscles: "Obliques, transverse abdominis, glutes (anti-rotation)",
    description: "An anti-rotation core exercise using a cable or band. Resisting the cable's pull trains the obliques and deep core to resist rotational forces — exactly what's needed to stabilize the spine during the golf swing.",
    cues: ["Stand sideways to the anchor with feet shoulder-width", "Brace hard before pressing out", "Hold fully extended for 1–2 seconds", "Don't rotate — the goal is no movement"]
  },

  "Rear delt fly": {
    category: "Strength",
    muscles: "Posterior deltoid, rhomboids, mid traps",
    description: "A horizontal abduction movement targeting the often-underdeveloped rear shoulder. Performed with dumbbells, cables, or a machine. Builds the posterior shoulder strength needed for healthy shoulder mechanics.",
    cues: ["Slight bend in the elbow — not straight-armed", "Lead with your elbows, not your hands", "Squeeze at the top — feel it in the back of the shoulder", "Light to moderate weight — go too heavy and you'll cheat"]
  },

  "Goblet squat": {
    category: "Strength",
    muscles: "Quads, glutes, adductors, core",
    description: "A squat variation holding a dumbbell or kettlebell at chest height. The front load counterbalances and makes it easier to maintain an upright torso, making it ideal for reinforcing squat mechanics.",
    cues: ["Hold the weight close to the chest", "Elbows track inside the knees at the bottom", "Full depth — crease of the hip below the knee", "Stay tall — use the weight to pull yourself into depth"]
  },

  "Single-leg RDL": {
    category: "Strength",
    muscles: "Hamstrings, glutes, hip stabilizers",
    description: "A single-leg hip-hinge that trains posterior chain strength and hip stability simultaneously. Demands more from the glute medius and stabilizers than bilateral RDLs. Excellent for identifying hip control deficits.",
    cues: ["Hinge at the hip — the rear leg lifts as your torso drops", "Keep hips square — don't let the hip of the raised leg rotate open", "Feel the stretch in the standing leg's hamstring", "A slight bend in the standing knee is fine"]
  },

  "Jefferson curl": {
    category: "Strength",
    muscles: "Spinal erectors (loaded stretch), hamstrings",
    description: "A loaded spinal flexion movement performed with light weight. Despite looking alarming, when done progressively it builds posterior chain resilience and spinal mobility. Only appropriate once mobility and body awareness are established.",
    cues: ["Very controlled — start bodyweight, add load slowly over weeks", "Curl one vertebra at a time from the top down", "Feel a decompression on the way back up", "Never rush this exercise"]
  },

  "Cable rotations (golf pattern)": {
    category: "Strength",
    muscles: "Obliques, glutes, thoracic rotators, core",
    description: "A rotational pulling/pushing pattern that mimics the golf swing kinetic chain. The cable provides constant resistance through the rotation, making it ideal for building the specific strength needed to generate swing speed safely.",
    cues: ["Initiate from the hips and lead hip — not the arms", "Controlled speed in Phase 1; explosive in Phase 2+", "Keep the trail arm reaching across the body at finish", "Rotate fully — don't short the follow-through"]
  },

  "Landmine rotations": {
    category: "Power",
    muscles: "Obliques, thoracic rotators, shoulders, hips",
    description: "A rotational exercise using a landmine-anchored barbell. Trains the full rotational chain — hips through core through upper body — in a pattern closely related to the golf swing.",
    cues: ["Let the hips initiate — they rotate before the arms move", "Control the arc of the bar", "Stay tall — don't side-bend to reach the floor", "Phase 3: max load but maintain arc quality"]
  },

  "Dumbbell row (3-point stance)": {
    category: "Strength",
    muscles: "Lats, rhomboids, biceps, rear delt",
    description: "A single-arm row with one hand braced on a bench or rack. The 3-point stance provides stability without the lumbar compression of a chest-supported row, allowing heavy loading.",
    cues: ["Keep the torso parallel to the floor", "Drive the elbow back and up — not just back", "Don't let the shoulder drop on the pulling side", "Full range: arm fully extended at the bottom"]
  },

  "Rotational med ball slam": {
    category: "Power",
    muscles: "Obliques, lats, shoulders, thoracic rotators",
    description: "An explosive rotational slam — generating maximal rotational power from the ground up and expressing it through the upper body. One of the best exercises for building sport-specific power for golf.",
    cues: ["Start with a full wind-up — opposite hip turns away", "Drive from the legs through the core", "Release at full extension — slam hard", "Use a wall in Phase 2 for lateral slams"]
  },

  "Single-leg balance + rotation": {
    category: "Strength",
    muscles: "Hip stabilizers (glute medius), ankle, core",
    description: "Standing on one leg while performing a controlled upper body rotation. Trains the single-leg stability and rotational dissociation critical for the golf swing follow-through.",
    cues: ["Soft knee on the standing leg — never locked", "Rotate through the thoracic spine, not the lumbar", "Eyes closed in Phase 2 for increased proprioceptive demand", "Stay tall — don't let the hip hike on the standing side"]
  },

  "Wrist roller / forearm work": {
    category: "Strength",
    muscles: "Forearm flexors and extensors, grip",
    description: "Progressive forearm loading using a wrist roller or similar implement. Builds grip endurance and wrist stability — important for club control and injury prevention at the wrist and elbow.",
    cues: ["Go slow — this fatigues quickly", "Equal reps in both directions (wind and unwind)", "Stop before grip failure — forearm pump is normal"]
  },

  "Single-leg rotational press": {
    category: "Power",
    muscles: "Shoulders, core, hip stabilizers, obliques",
    description: "A Phase 3 exercise combining a single-leg balance with an overhead or horizontal press, adding rotation. Trains the full kinetic chain integration seen in advanced athletic movement.",
    cues: ["Establish balance first, then add movement", "Rotate from the thoracic spine", "Don't compensate with lumbar rotation"]
  },

  "Anti-extension plank / ab wheel": {
    category: "Core",
    muscles: "Transverse abdominis, erectors, hip flexors",
    description: "An anti-extension core exercise. The ab wheel rollout is the most challenging version — it maximally loads the core's ability to prevent lumbar hyperextension as the arms extend overhead.",
    cues: ["Start with a short rollout range and increase over time", "Brace the core before rolling out", "Don't let the hips sag at full extension", "Pull back with the lats — not just the abs"]
  },

  // ── POWER / PLYOMETRIC ──────────────────────────────────

  "Box jumps": {
    category: "Power",
    muscles: "Quads, glutes, calves, reactive connective tissue",
    description: "A bilateral plyometric jump to a box, focusing on maximal explosive hip extension and a soft, controlled landing. Full reset between reps ensures maximal effort and teaches proper landing mechanics.",
    cues: ["Full reset between every rep — no quick bouncing", "Swing arms explosively to aid take-off", "Land softly — absorb through hips, knees, ankles", "Step down, don't jump down from the box"]
  },

  "Max height box jumps": {
    category: "Power",
    muscles: "Quads, glutes, calves",
    description: "Phase 3 peak expression of box jumps — finding maximum jump height. Serves as both a training stimulus and a performance test to measure power development over the 12-week program.",
    cues: ["Full approach — don't creep into the jump", "Commit fully — hesitation kills height", "Compare to Phase 1 baseline"]
  },

  "Lateral bounding": {
    category: "Power",
    muscles: "Glutes, hip abductors, quads, adductors",
    description: "Explosive single-leg lateral jumps, landing and stabilizing on the opposite leg. Develops frontal plane power and stability — critical for athletic cutting movements and weight transfer in the golf swing.",
    cues: ["Push off the outside edge of the foot", "Land and absorb on a bent knee — no collapsing inward", "Stick the landing for 1–2 seconds before the next rep", "Drive from the glutes, not the ankle"]
  },

  "Sled push": {
    category: "Power",
    muscles: "Quads, glutes, calves, posterior chain",
    description: "Loaded sled pushing over 20m. Builds horizontal force production and acceleration mechanics. High load version in Phase 2 increases muscular demand; it also has zero eccentric component so recovery is fast.",
    cues: ["Lean into the sled aggressively — about 45°", "Drive with full hip extension on each step", "Push from the ground, not just against the sled", "Maintain forward lean throughout the full 20m"]
  },

  "Sled drag (backward)": {
    category: "Power",
    muscles: "Quads, glutes, hamstrings, calves",
    description: "Walking/jogging backward while pulling a loaded sled. Develops quad strength through hip extension and is a low-impact way to add lower body volume. The backward drag also loads the quads eccentrically.",
    cues: ["Stay upright — don't lean back", "Long stride, pushing the ground away", "Keep tension in the strap throughout"]
  },

  "Lateral band walks": {
    category: "Strength",
    muscles: "Glute medius, hip abductors",
    description: "Side-stepping with a resistance band around the ankles or above the knees. One of the most effective exercises for glute medius activation — the hip abductor responsible for knee tracking and single-leg stability.",
    cues: ["Keep hips level — no bobbing up and down", "Maintain slight squat position throughout", "Step wide enough to keep tension in the band", "Control the speed — don't let the band yank you back"]
  },

  // ── CARDIO / SPRINT ────────────────────────────────────

  "10m accelerations": {
    category: "Cardio",
    muscles: "Full lower body, sprint mechanics",
    description: "Short acceleration sprints focusing on the first 10 meters of a sprint — the acceleration phase. Drive mechanics, forward lean, and full hip extension are the targets.",
    cues: ["Start from a 2-point stance or falling start", "45° forward lean in the first 3 steps", "Pump arms aggressively — they drive the legs", "Full recovery (90 sec) between each"]
  },

  "30m build-up sprints": {
    category: "Cardio",
    muscles: "Full lower body, sprint mechanics",
    description: "Gradual acceleration sprints reaching near-maximal speed by 30m. Allows the nervous system to express high-velocity mechanics without the explosive demand of flying starts.",
    cues: ["Start slow, build smoothly — not an explosion from the start", "By 20m you should be at 90% effort", "Tall posture at top speed — not hunched", "Walk-back recovery is full recovery"]
  },

  "20m fly sprints": {
    category: "Cardio",
    muscles: "Full lower body, top-end sprint mechanics",
    description: "Phase 2 sprint variation where you take a running start and sprint maximally through a 20m 'fly zone.' Trains top-end speed without the stress of acceleration from a dead stop.",
    cues: ["Build for 20–30m before the fly zone", "Relax at top speed — clenching slows you down", "Tall posture — drive knees, not just feet", "Full recovery between every rep"]
  },

  "40m sprints": {
    category: "Cardio",
    muscles: "Full lower body, full sprint cycle",
    description: "Full sprint effort over 40m. Combines acceleration (0–15m) and early top-speed phases. Builds on the 10m and 30m volumes from Phase 1.",
    cues: ["Explosive start, transition to upright by 15m", "Don't decelerate early — push through the finish", "Walk-back recovery — every rep should feel fast"]
  },

  "Easy jog": {
    category: "Cardio",
    muscles: "Full lower body, cardiovascular system",
    description: "400m easy aerobic warm-up jog to elevate heart rate, lubricate joints, and prepare the body for higher-intensity work. Should feel genuinely easy — conversational pace.",
    cues: ["Conversational pace — if you can't talk, slow down", "Land midfoot, not on the heel", "Relax the shoulders and arms"]
  },

  "Assault bike or treadmill": {
    category: "Cardio",
    muscles: "Full body (assault bike) or lower body (treadmill), cardiovascular system",
    description: "Zone 2 aerobic conditioning at HR 130–145 bpm. Builds the aerobic base that supports recovery, fat metabolism, and the ability to sustain repeated high-intensity efforts.",
    cues: ["Stay in Zone 2 — you should be able to hold a conversation", "HR 130–145 is the target zone", "Consistent cadence throughout — don't drift above Zone 2"]
  },

  "High knees": {
    category: "Cardio",
    muscles: "Hip flexors, quads, calves",
    description: "Sprint warm-up drill emphasizing hip flexor activation and fast foot turnover. Prepares the body for the acceleration patterns of sprint work.",
    cues: ["Drive the knee up to hip height", "Fast and light on the feet", "Arms pump in rhythm with the legs"]
  },

  "Butt kicks": {
    category: "Cardio",
    muscles: "Hamstrings, hip flexors",
    description: "Sprint warm-up drill emphasizing hamstring cycling — the motion of pulling the foot back under the hip during sprinting. Reinforces the back-swing phase of the sprint cycle.",
    cues: ["Kick the heel up toward the glute", "Stay on your toes — don't flat-foot", "Keep forward movement minimal — this is about the heel kick"]
  },

  "A-skips": {
    category: "Cardio",
    muscles: "Hip flexors, quads, calves",
    description: "A classic sprint drill that rehearses the drive phase of sprinting. One leg drives up while the other pawbacks into the ground. Builds coordination, hip flexor strength, and ground contact mechanics.",
    cues: ["Drive the knee up with force", "The down leg strikes the ground directly under the hip", "Stay tall — no forward lean", "Arms pump in opposition to legs"]
  },

  "Lateral shuffles": {
    category: "Cardio",
    muscles: "Hip abductors, quads, glutes",
    description: "Side-to-side shuffling covering 20m in each direction. Warms up the frontal plane movement patterns and the hip abductors used in lateral bounding and sport-specific direction changes.",
    cues: ["Stay low and athletic — don't stand up between steps", "Don't cross your feet", "Touch down with the outside foot first on each shuffle"]
  },

  "Falling starts / lean-and-go": {
    category: "Cardio",
    muscles: "Full lower body",
    description: "An acceleration drill where you lean forward from your ankles (like a falling tree) until gravity forces you to step. Teaches aggressive forward lean and the 'fall into the run' acceleration cue.",
    cues: ["Lean from ankles — not from the hips", "The first step is a reaction to gravity, not a push", "Aggressive arm drive from the first step"]
  },

  // ── WARM-UP / MOBILITY ────────────────────────────────

  "Foam roll quads": {
    category: "Warm-up",
    muscles: "Quadriceps",
    description: "Self-myofascial release on the front of the thigh. The quads are heavily loaded on lower body days and respond well to pre-session rolling to reduce stiffness and improve tissue quality.",
    cues: ["Slow, deliberate passes — not speed rolling", "Pause on tender spots for 20–30 seconds", "Rotate the leg slightly to hit the vastus lateralis and medialis"]
  },

  "Foam roll hamstrings + glutes": {
    category: "Warm-up",
    muscles: "Hamstrings, gluteus maximus",
    description: "Self-myofascial release on the posterior chain. Prepares the tissues for the high hip-hinge demands of deadlifts and RDLs. Cross the leg over the knee to increase pressure on the glutes.",
    cues: ["Cross one ankle over the opposite knee to intensify glute pressure", "Breathe and relax into tender spots", "Spend more time on the side that feels tighter"]
  },

  "Thoracic foam roll": {
    category: "Warm-up",
    muscles: "Thoracic spine, mid back",
    description: "Extension mobilization over a foam roller targeting the mid and upper back. Counters the flexion-dominant posture of desk work and is essential before pressing and rotational exercises.",
    cues: ["Support your head — don't let the neck hyperextend", "Move in small segments (one or two vertebrae at a time)", "Exhale as you extend over the roller"]
  },

  "Full body foam roll": {
    category: "Warm-up",
    muscles: "Calves, hamstrings, glutes, thoracic spine",
    description: "A systematic full-body rolling sequence covering the major lower body and back tissues. Used as a comprehensive warm-up prep before lower body power days and as pliability work on Saturday.",
    cues: ["Follow the order: calves → hamstrings → glutes → thoracic", "1.5 min per area is the target", "Don't rush — this sets up everything that follows"]
  },

  "90/90 hip stretch": {
    category: "Warm-up",
    muscles: "Hip external rotators, hip flexors, glutes",
    description: "A seated hip stretch where both legs are bent at 90° — front leg externally rotated, rear leg internally rotated. One of the most complete hip stretches in the program, addressing both rotation directions.",
    cues: ["Sit tall — don't collapse through the spine to get lower", "Lean forward from the hip, not the back", "Hold the tightest position for the full prescribed time"]
  },

  "Hip flexor kneeling stretch": {
    category: "Warm-up",
    muscles: "Hip flexors (iliopsoas, rectus femoris)",
    description: "A kneeling lunge stretch targeting the hip flexor of the rear leg. Extended sitting shortens the hip flexors which limits hip extension in deadlifts and stride length in sprinting.",
    cues: ["Posterior pelvic tilt — tuck the tailbone under", "Feel the stretch in the front of the rear leg's hip, not the lower back", "Keep the torso upright throughout"]
  },

  "World's greatest stretch": {
    category: "Warm-up",
    muscles: "Hip flexors, thoracic spine, hamstrings, adductors",
    description: "A multi-joint dynamic warm-up sequence combining a lunge, thoracic rotation, and hamstring stretch in one fluid movement. One of the most comprehensive single warm-up exercises available.",
    cues: ["Step into a deep lunge — back knee off the ground", "Plant the same-side hand inside the front foot", "Rotate the top arm toward the ceiling — reach full extension", "Then straighten the front leg for the hamstring component"]
  },

  "Glute bridges": {
    category: "Warm-up",
    muscles: "Glutes, hamstrings, core",
    description: "A foundational glute activation exercise. The 1-second pause at the top ensures full glute contraction and is critical for activating the glutes before heavy hip-hinge work.",
    cues: ["Feet hip-width, close enough to feel it in the glutes", "Drive through the heels — not the toes", "Squeeze hard at the top and hold for 1 second", "Keep ribs down — don't extend through the lower back"]
  },

  "Banded glute bridges": {
    category: "Warm-up",
    muscles: "Glutes (medius and maximus), hip external rotators",
    description: "Phase 2/3 glute bridge progression with a resistance band above the knees. The band adds abduction demand which better activates the gluteus medius and external rotators.",
    cues: ["Push knees out against the band throughout", "Same bridge cues as bodyweight version", "The band makes even 15 reps hard — that's the point"]
  },

  "Leg swings (sagittal + frontal)": {
    category: "Warm-up",
    muscles: "Hip flexors, hamstrings, hip abductors/adductors",
    description: "Dynamic hip mobility drills swinging the leg forward/back (sagittal) and side-to-side (frontal). Lubricates the hip joint and dynamically increases range of motion before loaded movement.",
    cues: ["Hold onto something for balance", "Let momentum carry the leg — don't force the range", "Sagittal: increase swing amplitude each rep", "Frontal: keep torso upright as the leg crosses midline"]
  },

  "Shoulder CARs": {
    category: "Warm-up",
    muscles: "Rotator cuff, deltoids, shoulder capsule",
    description: "Controlled Articular Rotations for the shoulder — slow, full-range circular movements that explore and maintain the complete shoulder range of motion. Essential for shoulder health in a program with heavy pressing and pulling.",
    cues: ["Move as slowly as possible", "Keep the rest of the body still — isolate the shoulder", "Try to find and own the end range in every direction", "Pain-free only — if something hurts, back off the range"]
  },

  "Hip CARs": {
    category: "Warm-up",
    muscles: "Hip capsule, glutes, hip rotators",
    description: "Controlled Articular Rotations for the hip. Full circular movements that lubricate the hip joint and train neuromuscular control at end ranges. Particularly important for golf hip mobility.",
    cues: ["Brace the core and glute of the standing leg", "Make the biggest circle you can while keeping the pelvis still", "Slow is better — fight for every degree of range", "Phase 3: 8 reps per side at maximum ROM"]
  },

  "Thread the needle": {
    category: "Warm-up",
    muscles: "Thoracic rotators, shoulder girdle",
    description: "A quadruped thoracic rotation where one arm reaches under the body, then opens up toward the ceiling. Warms up the thoracic spine rotation needed for pressing and golf conditioning exercises.",
    cues: ["Plant the non-moving hand firmly", "Rotate from the thoracic spine — not the lumbar", "Open the arm fully toward the ceiling on the extension phase", "Breathe into the rotation"]
  },

  "Band pull-aparts": {
    category: "Warm-up",
    muscles: "Rear delts, rhomboids, mid traps",
    description: "A shoulder health warm-up holding a band and pulling it apart horizontally. One of the most efficient ways to pre-activate the posterior shoulder before pressing and pulling exercises.",
    cues: ["Keep arms straight throughout", "Pull to chest level — not up toward the face", "Squeeze shoulder blades together at full pull-apart", "Control the return — don't let the band snap back"]
  },

  "Wall slides": {
    category: "Warm-up",
    muscles: "Serratus anterior, lower traps, shoulder stabilizers",
    description: "Sliding the arms up a wall while maintaining forearms and low back in contact. Trains the scapular upward rotation needed for healthy overhead shoulder mechanics.",
    cues: ["Keep the entire forearm on the wall throughout", "Flatten the lower back against the wall — tuck the tailbone", "Reach up as high as you can while maintaining contact", "Move slowly and deliberately"]
  },

  "Scapular push-ups": {
    category: "Warm-up",
    muscles: "Serratus anterior, scapular stabilizers",
    description: "A push-up variation where only the shoulder blades move — protraction (forward) and retraction (back) — without bending the elbows. Trains serratus anterior and scapular control essential for shoulder health.",
    cues: ["Arms stay straight — only the scapulae move", "Full protraction: let the shoulder blades spread wide around the ribcage", "Full retraction: squeeze them together", "This should feel like it's working between the shoulder blades"]
  },

  "Cat-cow": {
    category: "Warm-up",
    muscles: "Spinal erectors, abdominals, thoracic spine",
    description: "A fundamental spinal mobility drill alternating between lumbar/thoracic flexion (cat) and extension (cow). Warms up the full spine and promotes segmental movement before loaded exercises.",
    cues: ["Breathe: exhale on cat (round), inhale on cow (extend)", "Move each vertebra deliberately", "Emphasize the thoracic extension on cow"]
  },

  "Lizard pose": {
    category: "Warm-up",
    muscles: "Hip flexors, groin, glutes, thoracic spine",
    description: "A deep lunge stretch with the front foot outside the hand. One of the deepest hip-opening positions — targets the hip flexors, adductors, and external rotators simultaneously.",
    cues: ["Front foot goes outside the same-side hand", "Lower the back knee if needed for depth", "Work to get the forearms to the floor over time", "Breathe and relax deeper with each exhale"]
  },

  "90/90 hip rotations": {
    category: "Warm-up",
    muscles: "Hip internal and external rotators",
    description: "Dynamic rotation from one 90/90 position to the other, moving through internal rotation of one hip while the other externally rotates. Builds hip rotation mobility critical for lower body power and golf.",
    cues: ["Move with control — feel each transition", "Work to keep both feet close to the floor throughout the rotation", "Don't use your hands to force the hips down"]
  },

  "Box jump landing practice": {
    category: "Warm-up",
    muscles: "Quads, glutes, calves",
    description: "Low-intensity jump landing rehearsal — stepping or jumping to a box and focusing on soft, controlled landings. Prepares the joints and nervous system for the explosive box jumps in the main block.",
    cues: ["Land like a cat — quiet and absorbed", "Bend at hips, knees, and ankles simultaneously on landing", "Knees track over toes — no valgus collapse"]
  },

  "Thoracic rotation in quadruped": {
    category: "Warm-up",
    muscles: "Thoracic rotators, obliques",
    description: "On hands and knees, reaching one arm behind the head and rotating the elbow toward the ceiling. Isolated thoracic rotation exercise that directly trains the range of motion needed for the golf swing.",
    cues: ["Keep the lower back still — only the thoracic spine rotates", "Follow your elbow with your eyes", "Try to stack the rotating shoulder over the planted shoulder at full rotation"]
  },

  // ── COOL-DOWN / STRETCHING ────────────────────────────

  "Supine hamstring stretch": {
    category: "Cool-down",
    muscles: "Hamstrings",
    description: "Lying on your back, pulling one leg toward the chest with knee extended. A gentle, prolonged hamstring stretch appropriate after heavy hip-hinge work.",
    cues: ["Keep the non-stretching leg flat on the floor", "Flex the foot to increase the stretch", "Hold for the full 90 seconds — use a strap if needed"]
  },

  "Supine hamstring with strap": {
    category: "Cool-down",
    muscles: "Hamstrings",
    description: "A supine hamstring stretch using a strap to hold the leg overhead, allowing greater range than using just the hands. Used on longer pliability sessions (Saturday) for extended holds.",
    cues: ["Loop strap around the arch of the foot", "Keep the hip of the stretching leg down — don't let it lift", "Gradually straighten the knee over the hold"]
  },

  "Hamstring PNF stretch": {
    category: "Cool-down",
    muscles: "Hamstrings",
    description: "Proprioceptive Neuromuscular Facilitation stretching for the hamstrings. Contract the hamstring against resistance for 5–8 seconds, then relax and move deeper. More effective than static stretching alone.",
    cues: ["Contract-relax-move pattern: push against the strap, then relax and pull deeper", "3 rounds per side", "Don't force the stretch — let the relaxation phase do the work"]
  },

  "Couch stretch": {
    category: "Cool-down",
    muscles: "Hip flexors, rectus femoris, quads",
    description: "A deep hip flexor stretch with the rear foot elevated against a wall. One of the most effective hip flexor stretches available — especially important for addressing the shortening that occurs after prolonged sitting.",
    cues: ["Rear shin should be vertical against the wall", "Posterior pelvic tilt — flatten the lower back", "Squeeze the glute of the rear leg to deepen the stretch", "Keep the torso upright — avoid arching the lower back"]
  },

  "Pigeon pose": {
    category: "Cool-down",
    muscles: "Hip external rotators, glutes, piriformis",
    description: "A yoga-derived hip stretch targeting the piriformis and external rotators. One of the most effective stretches for hip tightness and is critical for golfers who need hip internal rotation mobility.",
    cues: ["Front shin is as close to parallel to the torso as mobility allows", "Square the hips — don't let them tip toward the bent leg side", "Work toward getting the front shin more horizontal over time", "Breathe deeply and let the hip sink with each exhale"]
  },

  "Reclined spinal twist": {
    category: "Cool-down",
    muscles: "Lumbar rotators, IT band, glutes, thoracic spine",
    description: "Lying on your back and letting one knee cross to the opposite side while the upper back stays flat. A gentle decompression and rotational stretch for the lumbar spine after heavy loading days.",
    cues: ["Keep both shoulders on the floor", "You can use the opposite hand to gently guide the knee further", "Look the opposite direction of the crossed knee for a full spinal twist"]
  },

  "Diaphragmatic breathing": {
    category: "Cool-down",
    muscles: "Diaphragm, parasympathetic nervous system",
    description: "Slow, deep belly breathing used to downregulate the nervous system after training. Shifts from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest), which promotes recovery. Also included in the daily minimum.",
    cues: ["Breathe into the belly — ribcage expands in all directions, not just up", "Inhale for 4 counts, hold for 2, exhale for 6", "Let the body fully relax with each exhale", "This is not optional — parasympathetic recovery matters"]
  },

  "Doorway pec stretch": {
    category: "Cool-down",
    muscles: "Pectoralis major, anterior deltoid",
    description: "Standing in a doorway with arms at 90° and pressing gently forward. Counteracts the shortening of the chest muscles that occurs with heavy pressing and the internal rotation of the golf swing.",
    cues: ["Arms at 90° or slightly higher to target different pec fibers", "Step through gently — no aggressive forcing", "Feel it across the chest and front of the shoulder, not the shoulder joint"]
  },

  "Pec minor doorway stretch": {
    category: "Warm-up",
    muscles: "Pectoralis minor, coracobrachialis",
    description: "A stretch targeting the pec minor — a small but important muscle that can anteriorly tilt the shoulder blade when tight. A common contributor to shoulder impingement.",
    cues: ["Arm higher than 90° to target the pec minor specifically", "Keep the shoulder blade flat against the ribcage", "Lean forward gently without the shoulder blade winging out"]
  },

  "Cross-body posterior shoulder": {
    category: "Cool-down",
    muscles: "Posterior deltoid, infraspinatus, teres minor",
    description: "Pulling one arm horizontally across the body to stretch the back of the shoulder. Essential for restoring posterior capsule length after heavy pressing and pulling work.",
    cues: ["Use the opposite elbow to apply gentle pressure, not the hand", "Keep the shoulder of the stretched arm depressed — don't let it shrug up", "Feel it in the back of the shoulder, not the neck"]
  },

  "Overhead lat stretch": {
    category: "Cool-down",
    muscles: "Latissimus dorsi, teres major",
    description: "Reaching one arm overhead and bending laterally (or using a doorframe) to stretch the lat. The lats can limit shoulder and thoracic mobility when tight — common in people who do heavy pulling work.",
    cues: ["Create a side-bend — reach the arm long away from the body", "Hold something overhead for a supported version", "Feel the stretch from the hip to the armpit on the stretched side"]
  },

  "Thoracic extension over foam roll": {
    category: "Cool-down",
    muscles: "Thoracic spine, erectors",
    description: "Lying over a foam roller placed perpendicular to the spine and extending back over it. Directly mobilizes the thoracic spine into extension — important after heavy pressing and rotational work.",
    cues: ["Support the head — don't let the neck hyperextend", "Work through the mid and upper back segments, not the lumbar", "You can hold a light weight overhead for added traction"]
  },

  "Wrist flexor/extensor stretch": {
    category: "Cool-down",
    muscles: "Forearm flexors, forearm extensors",
    description: "Stretching both sides of the forearm — one with palm down and one with palm up — to maintain wrist mobility and reduce tension after gripping work.",
    cues: ["Gentle pressure only — these tendons can be sensitive", "Hold each direction for 30 seconds", "Do both flexors and extensors on each side"]
  },

  "Hip flexor stretch": {
    category: "Cool-down",
    muscles: "Hip flexors, iliopsoas",
    description: "A kneeling or standing hip flexor stretch performed after sprint work. Restores hip extension range of motion that is reduced by the intense hip flexor contractions during sprinting.",
    cues: ["Tuck the pelvis under to get the deepest stretch", "The stretch should be felt in the front of the hip, not the knee", "Hold for the full 60 seconds — hip flexors are dense tissues"]
  },

  "Hamstring stretch": {
    category: "Cool-down",
    muscles: "Hamstrings",
    description: "A standing or supine hamstring stretch after sprint work. Lengthens the hamstrings after the intense eccentric load of sprint back-swing mechanics.",
    cues: ["Hinge from the hip, not the back", "Soft knee if needed to protect against lower back strain", "Breathe into the stretch — don't hold your breath"]
  },

  "Child's pose to cobra": {
    category: "Cool-down",
    muscles: "Spinal erectors, hip flexors (cobra), glutes (child's pose)",
    description: "A flowing sequence between two yoga poses — child's pose (full spinal flexion) and cobra (lumbar extension). Mobilizes the full spine and is an efficient way to decompress after heavy training days.",
    cues: ["Child's pose: reach arms long and breathe into the lower back", "Cobra: use the back muscles, not just the arms — press up gently", "Move slowly between positions — let each one release fully"]
  },

  "Thoracic rotation": {
    category: "Cool-down",
    muscles: "Thoracic rotators",
    description: "A seated or supine rotation targeting thoracic mobility. Used in both the daily minimum and pliability sessions to maintain and develop the thoracic rotation range of motion essential for the golf swing.",
    cues: ["Keep the lower back neutral — rotation happens in the thoracic spine", "Breathe into the rotation — exhale to go a little deeper", "10 reps per side is a guideline — use the full range each rep"]
  },

  "Easy walk": {
    category: "Cardio",
    muscles: "Full lower body, cardiovascular system",
    description: "A post-sprint cool-down walk of 400m. Active recovery that helps clear lactate, reduce heart rate, and restore normal movement before static stretching.",
    cues: ["Truly easy — slower than comfortable jogging", "Use this time to shake out and decompress", "Walk the full 400m — don't skip the cool-down"]
  }
};
