---
theme: seriph
title: 'FarmLink: Turning a Living Farm into Shareable Research Data'
titleTemplate: '%s — UC Merced'
favicon: /favicon.ico
info: |
  ## FarmLink
  Turning a Living Farm into Shareable Research Data.
  The Experimental Smart Farm at UC Merced.
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Satoshi
  serif: Satoshi
---

<div class="uc-cover">

<div class="uc-cover-main">

<div class="uc-cover-copy">

<div class="uc-kicker">UC Merced · Experimental Smart Farm</div>

# FarmLink

<div class="uc-subtitle">Turning a Living Farm into Shareable Research Data</div>

<div class="uc-tagline">Enabling Learning &amp; Discovery</div>

<div class="uc-presenter">
UC Tech 2026
</div>

</div>

<div class="uc-cover-logos" aria-label="Project partners">
  <img class="uc-cover-logo uc-cover-logo-wide" src="/logos/ucm-aes-logo.png" alt="UC Merced Agricultural Experiment Station">
  <div class="uc-cover-logo-row">
    <img class="uc-cover-logo uc-cover-logo-esf" src="/logos/esf-logo-horizontal.png" alt="Experimental Smart Farm">
    <img class="uc-cover-logo uc-cover-logo-vista" src="/logos/vista-logo-horizontal.png" alt="VISTA">
    <img class="uc-cover-logo uc-cover-logo-f3i" src="/logos/f3i-logo-dark.png" alt="F3I">
  </div>
</div>

</div>

</div>

<!--
Speaker notes: Open with the image of the farm. FarmLink is about making a
40-acre living research farm legible — turning the data it already produces
into something people can actually explore and learn from.
-->

---
layout: section
class: uc-section uc-section-photo uc-living
---

# A living research farm

<div class="uc-section-sub">40 acres that never stop producing data</div>

---
layout: default
---

# The Experimental Smart Farm

<div class="uc-farm-intro mt-6">

<div>

A **40-acre research farm** at UC Merced — a working agricultural site that
doubles as a sensor-rich laboratory in the heart of the Central Valley.

Every season adds new imagery, sensor readings, and field activity, turning the
farm into a living data system.

<img class="uc-data-photo" src="/farm/eddy-covariance-tower-sensor1-2000w.jpg" alt="Eddy covariance tower sensor collecting field data at the Experimental Smart Farm">

</div>

<div class="uc-stat-stack">

<div class="uc-stat"><span class="uc-stat-num">28</span><span class="uc-stat-label">fields tracked on the farm today</span></div>
<div class="uc-stat"><span class="uc-stat-num">40.6</span><span class="uc-stat-label">acres under active management</span></div>
<div class="uc-stat"><span class="uc-stat-num">75%</span><span class="uc-stat-label">of field capacity in use right now</span></div>

</div>

</div>

---
layout: default
---

# More data than measurements

<div class="uc-streams mt-10">

<div class="uc-card">
<img class="uc-card-photo" src="/farm/drone-2000w.jpg" alt="Drone used for aerial flights over the farm">
<div class="uc-card-eyebrow">From the air</div>
<h3>Drone imagery</h3>
Repeated flights become georeferenced orthomosaics that show field conditions
over time.
</div>

<div class="uc-card">
<img class="uc-card-photo" src="/farm/weather-station-2000w.jpg" alt="Weather station on the farm">
<div class="uc-card-eyebrow">From the ground</div>
<h3>Soil &amp; weather sensors</h3>
Continuous readings track moisture, temperature, and microclimate signals
across the plots.
</div>

<div class="uc-card">
<img class="uc-card-photo uc-card-photo-rtk" src="/farm/rtk-gps-800w.jpg" alt="RTK GPS equipment for centimeter-grade positioning">
<div class="uc-card-eyebrow">From the machines</div>
<h3>Equipment location</h3>
Centimeter-grade positions tie equipment movement to specific rows, passes,
and field work.
</div>

<div class="uc-card">
<img class="uc-card-photo uc-card-photo-tractor" src="/farm/tractor-field-activity-1200w.jpg" alt="Tractor operator conducting field work at the Experimental Smart Farm">
<div class="uc-card-eyebrow">From operations</div>
<h3>Field activity logs</h3>
Activities, irrigations, asset use, and other records capture what happened
on the farm.
</div>

</div>

<div class="uc-callout mt-8">
Each stream is valuable. The trouble is that each one is <strong>collected</strong>
and <strong>distributed</strong> in a different way.
</div>

---
layout: section
class: uc-section uc-section-photo uc-problem
---

# The problem

<div class="uc-section-sub">Great data, scattered everywhere</div>

---
layout: default
---

<div class="uc-silo-slide">

<div>

# Research data still moves project by project

Agricultural research produces data across many workflows: imagery, sensors,
equipment, field activities, samples, and archives.

Each workflow has its own tools, formats, permissions, and local context.

<div class="uc-silo-result">
The issue is not that data is missing. It is that useful records become hard to
<strong>find, interpret, and reuse</strong> after the original project moves on.
</div>

</div>

<div>

<div class="uc-silos" aria-label="Fragmented data silos">
<div class="uc-silo uc-silo-imagery">Imagery</div>
<div class="uc-silo uc-silo-sensors">Sensor exports</div>
<div class="uc-silo uc-silo-rtk">RTK files</div>
<div class="uc-silo uc-silo-activity">Activity logs</div>
<div class="uc-silo uc-silo-samples">Samples</div>
<div class="uc-silo uc-silo-archives">Archives</div>
</div>

<div class="uc-silo-caption">
Different collection paths. Different handoffs. No shared view of the farm.
</div>

</div>

</div>

---
layout: default
---

# A rare head start

<div class="uc-principle-wrap mt-10">

<div class="uc-principle">
Too new<br/>for legacy debt.
</div>

<div class="mt-8 max-w-3xl text-lg leading-relaxed opacity-90">
UC Merced is the newest UC campus, and the farm is newer still.
Nothing to migrate — just the chance to build data practices right
from day one.
</div>

</div>

<img class="uc-headstart-photo" src="/farm/drone-w-sky-bg-2000w.jpg" alt="Drone in flight against open sky above the Experimental Smart Farm">

---
layout: default
---

# What fragmentation costs us

<div class="uc-cost-grid mt-6">

<div class="uc-cost">
<h3>Hard to reuse</h3>
A dataset that makes sense to its collector is opaque to the next researcher.
Knowledge walks out the door when people do.
</div>

<div class="uc-cost">
<h3>Hard to learn from</h3>
Students and growers can't explore what they can't reach. The farm's story is
locked in formats only specialists can open.
</div>

<div class="uc-cost">
<h3>Hard to combine</h3>
The interesting questions live <em>across</em> streams — imagery against soil,
weather against yield. Silos make that the hard part.
</div>

<div class="uc-cost">
<h3>Reinvented every time</h3>
Every new project rebuilds the same plumbing from scratch instead of building
on what already works.
</div>

</div>

---
layout: section
class: uc-section uc-section-photo uc-vision
---

# The vision

<div class="uc-section-sub">One place to explore a living farm</div>

---
layout: default
---

# FarmLink: bringing it all together

<div class="mt-4 text-xl leading-relaxed">

A **single place** where researchers, students, and Central Valley growers can
see what's happening on the farm <span class="uc-em">over time</span> — without
needing to know where the data came from or how it was stored.

</div>

<div class="uc-pillar-grid mt-10">

<div class="uc-pillar">
<div class="uc-pillar-num">01</div>
<h3>Unify</h3>
Pull imagery, sensors, and position data into one coherent view of the farm.
</div>

<div class="uc-pillar">
<div class="uc-pillar-num">02</div>
<h3>Explore</h3>
Turn raw field data into something people can actually browse, question, and learn from.
</div>

<div class="uc-pillar">
<div class="uc-pillar-num">03</div>
<h3>Reuse</h3>
Make the approach a template, so other UC groups don't start from scratch.
</div>

</div>

---
layout: default
---

# Built for three audiences

<div class="uc-audience-grid mt-6">

<div class="uc-aud">
<img class="uc-aud-photo" src="/farm/soil-sample-team-2000w.jpg" alt="UC Merced researchers soil sampling in the field">
<h3>Researchers</h3>
A reliable, shared substrate for cross-stream questions — and data that
outlives any single project or grad student.
</div>

<div class="uc-aud">
<img class="uc-aud-photo" src="/farm/kat-inspecting-plants-2000w.jpg" alt="A student inspecting plants up close in the greenhouse">
<h3>Students</h3>
A way in. Explore real, current farm data without first learning four
specialist toolchains.
</div>

<div class="uc-aud">
<img class="uc-aud-photo" src="/farm/farm-manager-2000w.jpg" alt="A Central Valley grower walking a field next to a truck">
<h3>Central Valley growers</h3>
Insight from a working farm in their own region — research that connects
back to the people farming next door.
</div>

</div>

<div class="uc-callout mt-6">
The design test: <strong>nobody should need to know the pipeline to learn from the farm.</strong>
</div>

---
layout: default
---

# The core design principle

<div class="uc-principle-wrap mt-10">

<div class="uc-principle">
Hide the plumbing.<br/>Surface the farm.
</div>

<div class="mt-8 max-w-3xl text-lg leading-relaxed opacity-90">
A grower asking "how dry did the north field get last August?" shouldn't have to
know whether that answer comes from a sensor log, a satellite-derived model, or a
drone flight. FarmLink absorbs the messiness of <em>where</em> and <em>how</em> the
data was stored, and presents one honest, explorable view.
</div>

</div>

---
layout: section
class: uc-section uc-section-photo uc-hood
---

# Under the hood

<div class="uc-section-sub">What it takes to make a farm legible</div>

---
layout: default
---

# How the pieces fit together

<div class="uc-architecture">

<div class="uc-arch-group uc-arch-sources">
  <div class="uc-arch-label">Sources</div>
  <div class="uc-arch-node">Drone flights</div>
  <div class="uc-arch-node">Soil &amp; weather sensors</div>
  <div class="uc-arch-node">Equipment GPS / RTK</div>
  <div class="uc-arch-node">Historical archives</div>
</div>

<div class="uc-arch-pipe" aria-hidden="true"></div>

<div class="uc-arch-core">
  <div class="uc-arch-step">Ingest &amp; standardize</div>
  <div class="uc-arch-layer">
    <div class="uc-arch-layer-title">Unified data layer</div>
    <div class="uc-arch-layer-sub">common formats · shared keys</div>
  </div>
  <div class="uc-arch-step">Maps · time series · imagery</div>
</div>

<div class="uc-arch-pipe" aria-hidden="true"></div>

<div class="uc-arch-group uc-arch-audiences">
  <div class="uc-arch-label">People</div>
  <div class="uc-arch-node">Researchers</div>
  <div class="uc-arch-node">Students</div>
  <div class="uc-arch-node">Growers</div>
</div>

</div>

<div class="uc-callout mt-6">
The hard, reusable work lives in the middle: <strong>ingest &amp; standardize</strong> and the <strong>unified layer</strong>.
</div>

---
layout: default
---

# One farm, many ways to see it

<div class="uc-layerstack mt-4">
  <img src="/farm/generated/layer-terrain.jpg" alt="LiDAR terrain hillshade" style="clip-path: polygon(0 0, 23.3% 0, 16.3% 100%, 0 100%)">
  <img src="/farm/generated/layer-canopy.jpg" alt="LiDAR canopy height" style="clip-path: polygon(23.7% 0, 43.3% 0, 36.3% 100%, 16.7% 100%)">
  <img src="/farm/generated/layer-ndvi.jpg" alt="NDVI vegetation index" style="clip-path: polygon(43.7% 0, 63.3% 0, 56.3% 100%, 36.7% 100%)">
  <img src="/farm/generated/layer-thermal.jpg" alt="Thermal surface temperature" style="clip-path: polygon(63.7% 0, 83.3% 0, 76.3% 100%, 56.7% 100%)">
  <img src="/farm/generated/layer-rgb.jpg" alt="True-color drone orthomosaic" style="clip-path: polygon(83.7% 0, 100% 0, 100% 100%, 76.7% 100%)">
</div>

<div class="uc-layer-labels">
  <div><span class="uc-dot" style="background:#8fa3bc"></span>LiDAR terrain</div>
  <div><span class="uc-dot" style="background:#e3aa2f"></span>Canopy height</div>
  <div><span class="uc-dot" style="background:#489b53"></span>NDVI</div>
  <div><span class="uc-dot" style="background:#c04a2e"></span>Thermal</div>
  <div><span class="uc-dot" style="background:#3f5e43"></span>True color</div>
</div>

<div class="uc-callout mt-3">
One drone flight <strong>(Apr 28)</strong> plus one LiDAR pass <strong>(Jan 22)</strong> — five pixel-aligned views of the same ground.
</div>

---
layout: default
---

# Watching the season turn

<div class="uc-season-row mt-9">
  <figure>
    <img src="/farm/generated/season-jan.jpg" alt="NDVI, January 20: mixed winter cover, east beds bare">
    <figcaption class="uc-season-cap"><strong>January 20</strong> · winter cover</figcaption>
  </figure>
  <figure>
    <img src="/farm/generated/season-mar.jpg" alt="NDVI, March 25: peak green across nearly every field">
    <figcaption class="uc-season-cap"><strong>March 25</strong> · peak green</figcaption>
  </figure>
  <figure>
    <img src="/farm/generated/season-apr.jpg" alt="NDVI, April 28: cut hay drying in windrows before baling">
    <figcaption class="uc-season-cap"><strong>April 28</strong> · hay drying</figcaption>
  </figure>
</div>

<div class="uc-callout mt-6">
Same fields, same NDVI scale, three flights apart. Every flight lands in the archive — <strong>aligned and comparable</strong>.
</div>

---
layout: default
---

# What it looks like today

<div class="uc-proof-shot mt-4">
<img src="/app/esf-platform-home.jpg" alt="FarmKit: the Experimental Smart Farm's live field map and imagery browser, showing field boundaries, crop labels, and imagery history">
</div>

<div class="uc-callout mt-4">
This is <strong>FarmKit</strong>, the farm's live field map — already tracking 28+ fields, crop types, and a dated imagery history. FarmLink's unified layer builds on exactly this foundation.
</div>

---
layout: default
---

# The day-to-day, already tracked

<div class="uc-dual-shot-grid">

<div class="uc-dual-shot">
<img src="/app/esf-field-management.jpg" alt="FarmKit field management dashboard showing 28 fields, 40.6 acres of coverage, and 75% utilization">
<div class="uc-dual-shot-cap">
<h4>Field management</h4>
<p>Every boundary, crop, and season tracked in one place — the bookkeeping layer FarmLink's unify step builds on.</p>
</div>
</div>

<div class="uc-dual-shot">
<img src="/app/esf-equipment-management.jpg" alt="FarmKit equipment management dashboard showing 140 pieces of equipment across 18 locations">
<div class="uc-dual-shot-cap">
<h4>Equipment &amp; inventory</h4>
<p>140 pieces of equipment checked in and out across 18 locations — operations data, not just sensor data.</p>
</div>
</div>

</div>

---
layout: two-cols
layoutClass: gap-10
---

# Grounded in real data work

We're not starting from a blank page. The building blocks already exist as
working pieces — each one a stream FarmLink brings together.

::right::

<div class="uc-feed">

<div class="uc-feed-item">
<img class="uc-feed-photo" src="/farm/drone-2000w.jpg" alt="Drone flight over the farm">
<div class="uc-feed-text">
<h4>Drone imagery → georeferenced maps</h4>
Aerial flights processed into orthomosaics, tied to ground control in a
real coordinate system so layers actually line up.
</div>
</div>

<div class="uc-feed-item">
<img class="uc-feed-photo" src="/farm/rtk-gps-800w.jpg" alt="RTK base station">
<div class="uc-feed-text">
<h4>Centimeter positioning</h4>
A real-time correction (RTK) base station on the farm anchors equipment and
imagery to the same precise locations.
</div>
</div>

<div class="uc-feed-item">
<img class="uc-feed-photo" src="/farm/eddy-covariance-tower-sensor1-2000w.jpg" alt="Eddy covariance tower collecting climate data">
<div class="uc-feed-text">
<h4>Decades of climate context</h4>
Historical evapotranspiration and weather, pulled in to give today's readings
a long-term baseline.
</div>
</div>

</div>

---
layout: default
---

# Example: decades of context, on tap

<div class="uc-context-slide mt-4">

<div>

One early integration: stitching in a **multi-decade record** of
evapotranspiration and climate for the Merced area from a public gridded
dataset.

It turns a single day's sensor reading into a question worth asking:

<div class="uc-quote">"Is this August dry — or dry <em>for an August</em>?"</div>

That long baseline is exactly the kind of context a grower or student can't
easily assemble on their own, surfaced automatically.

</div>

<div class="uc-stat-stack">
<div class="uc-stat"><span class="uc-stat-num">47</span><span class="uc-stat-label">years of climate history integrated</span></div>
<div class="uc-stat"><span class="uc-stat-num">1</span><span class="uc-stat-label">query — no data wrangling required</span></div>
</div>

</div>

<div class="uc-note mt-6">
And it taught us the unglamorous truths: silent-failure data sources, scale
factors, grid snapping. Lessons that now make the <em>next</em> integration faster.
</div>

---
layout: default
---

# Reusable by design

<div class="mt-4 text-xl leading-relaxed">

The flood of sensor and imagery data isn't unique to one farm. It's the shape
of modern research across UC.

</div>

<div class="uc-reuse-grid mt-8">

<div class="uc-reuse">
<h3>The pattern repeats</h3>
Any group drowning in heterogeneous sensor and imagery data faces the same
ingest, standardize, and explore problem we're solving here.
</div>

<div class="uc-reuse">
<h3>So we build it as a template</h3>
The ingest and unification layer is designed to be lifted and adapted — so the
next group inherits the plumbing instead of rebuilding it.
</div>

</div>

<div class="uc-callout mt-8">
Solve it once on the farm. Hand the rest of UC a running start.
</div>

---
layout: default
---

# What we're learning

<div class="uc-learn-grid mt-10">

<div class="uc-learn">
<div class="uc-learn-num">1</div>
<h3>Integration is the product</h3>
The value isn't any single sensor — it's the connective tissue that lets streams
be seen together.
</div>

<div class="uc-learn">
<div class="uc-learn-num">2</div>
<h3>Real data is messy</h3>
Silent failures, unit quirks, mismatched coordinates. Designing for the mess up
front is what makes the result trustworthy.
</div>

<div class="uc-learn">
<div class="uc-learn-num">3</div>
<h3>Access changes who participates</h3>
The moment data is explorable, students and growers become contributors — not
just an audience.
</div>

</div>

---
layout: default
---

# Where we're headed

<div class="uc-timeline mt-4">

<div class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Now</h4>Individual streams working — imagery, positioning, and climate context proven out as pieces.</div>
</div>

<div class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Next</h4>The unified layer: common formats and shared keys so streams line up in one view.</div>
</div>

<div class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Then</h4>The explore experience — maps, time series, and imagery anyone can browse.</div>
</div>

<div class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Beyond</h4>Package the approach as a reusable template for other UC groups.</div>
</div>

</div>

<div class="uc-timeline-shot">
<img src="/farm/weeding-robot-2000w.jpg" alt="An autonomous weeding robot being tested on the farm">
<div class="uc-timeline-shot-cap">
The farm keeps adding new instruments — like this autonomous weeding robot —
which means new streams FarmLink needs to absorb, not new one-off pipelines.
</div>
</div>

---
layout: center
class: uc-closing
---

<div class="uc-kicker">UC Merced · Experimental Smart Farm</div>

# From a living farm<br/>to shareable discovery

<div class="uc-closing-sub">
FarmLink turns raw field data into something people can explore, learn from,
and build on — and makes the approach reusable across UC.
</div>

<div class="uc-presenter mt-10">
Thank you · Questions welcome<br/>
<span class="opacity-70">UC Tech 2026</span>
</div>

<!--
Close by returning to the opening image: this is one farm, but the goal is a
pattern UC can reuse anywhere data is piling up faster than people can use it.
-->
