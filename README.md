# Fitness Tracker
A mobile-first workout tracking app hosted on GitHub Pages.

## Features

- **Today** — Daily workout view with collapsible blocks (warm-up/cool-down collapsed by default), shortcut to the relevant log tab based on day type, and phase-aware navigation across all 12 weeks
- **Week strip** — Swipable `‹ ›` navigation across all weeks in the full plan; logged days marked with accent dots
- **Phase progress bar** — Live week-within-phase progress bar and streak counter below the topbar
- **Lift** — Key lift dashboard (PR, estimated 1RM, sparklines) + strength logging + history grouped by exercise
- **Cardio** — Log sprint and zone-2 sessions with history and metrics
- **Mobility** — Daily minimum checklist (persisted) + day-specific warm-up and cool-down reference
- **Log** — Weekly check-in form tracking sessions, fatigue, sleep, QL pain, pliability, and notes
- **Plan page** — Tabbed view: "Current Phase" shows the active phase calendar, week notes, and full exercise reference; "Full Plan" shows all 3 phases in a single calendar overview

## Files

- `index.html` — Main app (all 5 tabs + week navigation)
- `plan.html` — Plan viewer (Current Phase / Full Plan tabs)
- `full-plan.js` — Single source of truth for all 3 phases (12 weeks total)

## How phases work

`full-plan.js` exports a `PLANS` array with 3 phase objects. Both `index.html` and `plan.html` call `getActivePlan()` at load time, which compares today's date against each phase's `startDate` and duration to automatically select the correct phase. No manual switching needed — the app advances to the next phase automatically on the correct date.

**Phase schedule:**
- Phase 1 — Accumulation: Apr 13 – May 10, 2026
- Phase 2 — Transmutation: May 11 – Jun 7, 2026
- Phase 3 — Realization: Jun 8 – Jul 5, 2026

## Storage

All workout data is keyed by phase id (e.g. `phase1:tplogs`), so data from previous phases is preserved in localStorage when the active phase advances.
