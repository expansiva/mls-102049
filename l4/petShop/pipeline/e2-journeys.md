# Site PetShop - E2 Journey Audit

Module: `petShop`
Language: pt-BR
Version: v1
Generated at: 2026-07-16T21:24:29.865Z

## Source of Truth
- Full structured artifact: `e2-journeys.json`
- This markdown is an audit summary, not a duplicate copy of the journey catalog.

## Current Snapshot
- Actors: 2
- Journeys: 8
- Features: 14
- Feature priorities: now=13, soon=1, later=0, never=0

## Changes
- Initial E2 version created with 2 actor(s), 8 journey(ies), and 14 feature(s).

## Recorded Decisions
- [featurePriority] A expiração automática de reservas em 24 horas foi marcada como 'soon' pois o core loop funciona com liberação manual pela loja, mas a automação agrega valor importante. (reservationExpiration)

## Audit Note
- Human review should use the widget or the JSON artifact for the full journey content.
- Future adjustment loops should append request/result events and promote only approved versions.

