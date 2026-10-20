# Hybrid Run Mobility Plan

A mobile-first mobility tracker hosted on GitHub Pages.

## Features

- **Today**: the mobility routines for the selected day (e.g. Pre-lift A + Post-lift A on Monday), with tap-to-check exercises, dose and cue for each, and a progress bar. Finishing a routine collapses it and opens the next one. **Extras** holds the golf pre-round, the range-session warm-up, the crunched-day minimum and, on Mondays, the golf-weekend QL add-on.
- **Week strip**: `‹ ›` moves between weeks. Dots show finished days (green), partial days (grey) and crunched-day minimum days (amber).
- **Week**: the weekly schedule with minutes planned and done.
- **Plan**: the full plan for reference, covering priorities, the weekly table and every routine.
- **Rules**: the rules, progression toggles (calf raises past ~15 mi/week, strides once tempos start), a monthly-check log and red flags. The first Sunday of each month shows a reminder on Today.

## Files

- `index.html`: the app
- `mobility-data.js`: the plan itself (routines, weekly schedule, rules). Edit this file to change the plan.
- `archive/`: the old 12-week training tracker, still reachable at `/archive/`

## Storage

Everything is saved in the browser's localStorage under `mob:` keys (`mob:done:YYYY-MM-DD`, `mob:settings`, `mob:checks`), so it lives on whichever device and browser you use.
