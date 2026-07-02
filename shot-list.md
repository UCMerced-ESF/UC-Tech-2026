# FarmLink deck — imagery shot list

Assets to collect for the UC Tech 2026 presentation. Drop new files into
`public/app/` (screenshots) or `public/farm/` (photos), then we'll slot them in.

*Slide numbers below are pre-Jul 2; three imagery slides were inserted at
15–17, so anything ≥15 is now +3 (e.g. "slide 15" → 18).*

## Platform screenshots — highest impact

- [ ] **1. Multispectral/NDVI layer rendered over a field** — the imagery
  browser actually *showing* a false-color or NDVI overlay on field boundaries.
  → Upgrade for slide 15 ("What it looks like today"). Proves the "explore" pillar.
- [ ] **2. Field detail / season timeline view** — one field's history: crop
  seasons across years, dated imagery for that field.
  → Companion for slide 14 (architecture); shows geometry-seasonality separation on screen.
- [ ] **3. Soil sampling workflow** — chain-of-custody record with lab
  attachments (map half now covered by generated G4).
  → "Grounded in real data work" slide; headline paper capability, currently invisible in deck.
- [ ] **4. Mobile app screenshot** — field view in a phone frame (or see photo #8).
  → Deck currently only shows desktop web; paper touts native mobile clients.
- [x] **5. Equipment dashboard on an active day** — DONE (Jul 2): replaced with
  Equipment Inventory page showing actual equipment by yard (140 total / 138
  available). Empty-state "All caught up!" dashboard retired.
- [ ] **6. Time-series chart of the 47-year climate record** — one August
  highlighted against the long-term ET/weather baseline.
  → Slide 18 ("decades of context, on tap") — lands the "dry, or dry *for an August*?" quote.

## Generated from data (GDAL pipeline — no collection needed)

- [x] **G1. Layer collage** — DONE (Jul 2): terrain / canopy / NDVI / thermal /
  true-color diagonal slices, slide 15 "One farm, many ways to see it".
- [x] **G2. NDVI season strip** — DONE (Jul 2): Jan 20 / Mar 25 / Apr 28 on a
  fixed scale, slide 16 "Watching the season turn".
- [x] **G3. Thermal vs true-color pair** — DONE (Jul 2): 21–31 °C surface temp,
  slide 17 "Seeing what the eye can't".
- [ ] **G4. Soil sampling grid map** — 192 grid points + field boundaries over
  the RGB ortho in deck colors. → "Grounded in real data work" slide's empty
  column; covers the map half of screenshot #3. Consider adding the 26 eDNA
  sample points as a second point class — unique science story for free.
- [ ] **G5. Full-farm ortho hero** — the whole Apr 28 mosaic; covers photo #7
  and retires a duplicate. → Slide 4 drone card and/or a section background.
- [ ] **G6. Resolution punch-in** — full farm → one orchard row → individual
  plants at 4.4 cm/px, as a 3-step zoom strip. Lands "see every plant from the
  air" without a word of text. → Slide 4 sensing story.
- [ ] **G7. Canopy-height orchard close-up** — CHM crop where every tree is a
  distinct measurable dot; "count and measure every tree in one LiDAR pass."
  → Pairs with G6 or a future use-case slide.

## Field photography

- [ ] **7. Drone orthomosaic output** — superseded by generated G5 (render the
  Apr 28 mosaic straight from the COG, no photo needed).
- [ ] **8. Someone using the platform outdoors** — tablet/phone in hand with the
  app open, crops in background.
  → Slide 11 (students), slide 20 (access changes who participates), or closing. Nothing currently connects the software to the farm.
- [ ] **9. Soil sampling close-up** — corer, labeled sample bags, hands in dirt.
  → Pairs with screenshot #3 on slide 17; frees the recycled drone/RTK/eddy photos.
- [ ] **10. Soil probe / sensor install close-up** — the missing sensor type
  (have: weather station, eddy tower).
  → Slide 4 "Soil & weather sensors" card, or a future sensor-continuity slide (paper Fig. 2 story).
- [ ] **11. Irrigation in action** — drip lines, sprinklers, water moving.
  → No water imagery anywhere in deck; supports the sustainability/water-management story.
- [ ] **12. Field day / tour moment** — growers and researchers talking at the farm.
  → Slide 11 "Central Valley growers" card (currently leads with a truck).
- [ ] **13. Crop close-ups: tomatoes and almonds** — the paper's two flagship
  use cases (20 tomato varieties; almond orchard boundary change).
  → For a potential use-case slide drawn from the paper.
- [ ] **14. Second golden-hour wide shot** — any distinct dusk/dawn landscape.
  → Closing slide background (currently shares farm-sunrise with slide 2).

## Top five if time is short

**#1, #2, #6, #8** (+ generated G4/G5, no collection needed) — they fix the
deck's biggest gap: it *talks about* making the farm explorable but only shows
three static dashboard screenshots.

## Known duplicates the new photos retire

- `drone-2000w.jpg` — slides 4 & 17
- `rtk-gps-800w.jpg` — slides 4, 13 (section bg) & 17
- `eddy-covariance-tower-sensor1-2000w.jpg` — slides 3 & 17
- `farm-sunrise-2400w.jpg` — slide 2 & closing backgrounds
