---
target: 06-amapola homepage
total_score: 33
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
timestamp: 2026-07-29T03-33-27Z
slug: prototipos-06-amapola-src-pages-index-astro
---
# Critique — Amapola · Pastelería Sureña (06-amapola)

Method: dual-agent (A design review + B mechanical detector, isolated parallel).

## Design Health: 33/40 — Good (upper)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of status | 3 | /carta sticky index has no active-category highlight |
| 2 | Match real world | 4 | CLP, Chilean Spanish, kuchen/por encargo, printed-carta leader |
| 3 | Control & freedom | 4 | Popover menu Esc/outside; view toggle reversible |
| 4 | Consistency | 3 | WhatsApp CTA magenta (header/hero) vs green (PideAqui) |
| 5 | Error prevention | 2 | Delivery hours shown as store hours; map coords null |
| 6 | Recognition vs recall | 4 | Prices visible, descriptions never hover-hidden, sticky index |
| 7 | Flexibility/efficiency | 3 | Prefilled WhatsApp + Lista/Bloques toggle, only accelerators |
| 8 | Aesthetic/minimalist | 3 | Bloques view mostly "Foto pronto" empty tiles |
| 9 | Error recovery | 3 | No custom 404; Hustlewebs footer link href="#" dead |
| 10 | Help & docs | 4 | FAQ + "Cómo comprar" work as pre-purchase docs |
| Total | | 33/40 | Good (upper) |

Detector (B): 0 findings, exit 0. No console errors, no failed network/broken assets.

## Design specificity
Authored-adjacent, carried by copy + palette, not the visual system. Strong: role-named tokens (cream+magenta+purple), authentic Chilean bakery copy. Big miss: named "Amapola" (poppy) yet zero poppy motif anywhere (favicon, dividers, empty tiles, footer). Bricolage (urban/editorial) type contradicts "recetas de la abuela sureña". Only bespoke element: Franja.astro brushstroke on /carta.

## Priority issues
- [P1] No persistent mobile WhatsApp CTA (header CTA hidden md:inline-block). → layout
- [P1] Unconfirmed data as fact: delivery hours labeled store hours; coords null map. → harden
- [P2] Bloques view mostly "Foto pronto" (3 of ~24 photos) — unfinished in a pitch. → polish
- [P2] Custom-cake conversion (highest margin) least supported: no price range, no lead time, no fondant photo. → clarify
- [P2] No amapola/poppy brand motif; visual system is a warm template. → delight

## Persona red flags
- Jordan: dual-colored WhatsApp buttons read as different actions; "Por encargo" no anchor; wrong hours/pin.
- Riley: Bloques → "Foto pronto" wall; "Cómo llegar" coords null → generic search; footer Hustlewebs href="#" dead.
- Casey (mobile): no always-visible WhatsApp button on mobile — #1 leak for a WhatsApp-first funnel.

## Minor
- Dead imports: Ofertas + Comentarios imported, not rendered (removed from Layout).
- imagenes.js "placeholders" comment stale (real photos now).
- kuchenmora.jpg 732KB source.
- Valoracion "Miles de clientes" generic prose next to concrete 4,7·1.000+.
