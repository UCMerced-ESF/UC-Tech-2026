# FarmLink — UC Tech 2026 Deck

A [Sli.dev](https://sli.dev) presentation: *FarmLink — Turning a Living Farm into
Shareable Research Data*. UC Merced Experimental Smart Farm.

## Run it

```bash
cd farmlink-deck
npm install        # first time only
npm run dev        # opens http://localhost:3030 with live reload
```

Edit `slides.md` and the browser updates instantly. Press `f` for fullscreen,
`o` for slide overview, and `?` for all shortcuts. Speaker notes are in the
presenter view (click the controls, bottom-left, or open `/presenter`).

## Export

```bash
npm run build      # static site -> ./dist (deploy anywhere)
npm run export     # PDF -> ./slides-export.pdf  (needs: npx playwright install chromium)
```

## Project layout

```
farmlink-deck/
├── slides.md              # all slide content (Markdown + a little HTML)
├── styles/
│   ├── index.ts           # auto-loaded by Slidev
│   └── uc-merced.css      # UC Merced brand styling (navy + gold)
├── package.json
└── README.md
```

## Branding

UC Merced palette is defined as CSS variables at the top of
`styles/uc-merced.css` (`--uc-navy`, `--uc-gold`, …). Change those to retheme
the whole deck. Custom classes like `.uc-card`, `.uc-stat`, `.uc-pillar`, and
`.uc-timeline` are used throughout `slides.md`.

## Slide map

1. Cover
2. Section — A living research farm
3. The Experimental Smart Farm (what it is)
4. Three streams of data (imagery / sensors / equipment)
5. Section — The problem
6. Data lives in silos
7. What fragmentation costs us
8. Section — The vision
9. FarmLink: bringing it all together (unify / explore / reuse)
10. Built for three audiences
11. The core design principle
12. Section — Under the hood
13. How the pieces fit together (architecture diagram)
14. Grounded in real data work
15. Example — decades of climate context
16. Reusable by design
17. What we're learning
18. Where we're headed (roadmap)
19. Closing

> Content drafted from the FarmLink concept and prior project work (drone
> imagery + georeferencing, RTK base station positioning, multi-decade ET/climate
> integration). Figures and claims are placeholders where noted — swap in your
> own numbers and screenshots before presenting.
