# Phase 1 Fitness Tracker

A mobile-first workout tracking app hosted on GitHub Pages.

## Features

- **Today** — Daily workout view with smart shortcut to the relevant log tab (lift/cardio/mobility) based on day of week
- **Lift** — Key lift dashboard (PR, estimated 1RM, sparklines) + strength logging + history grouped by exercise
- **Cardio** — Log sprint and zone-2 sessions with history and metrics
- **Mobility** — Daily minimum checklist (persisted) + day-specific warm-up and cool-down reference
- **Log** — Weekly check-in form tracking sessions, fatigue, sleep, QL pain, pliability, and notes
- **Full plan** — Phase calendar grid showing all 4 weeks, week notes, and collapsible full exercise reference

## Files

- `index.html` — Main app (all 5 tabs)
- `plan.html` — Full phase overview (calendar + exercise reference)
- `plan-data.js` — Single source of truth for the active training plan

## Switching plans

Update `ACTIVE_PLAN` in `plan-data.js` — change the `id`, `name`, `weeks`, `startDate`, `weekNotes`, and `days`. All stored data is prefixed by plan id so previous phase data is preserved in localStorage.
