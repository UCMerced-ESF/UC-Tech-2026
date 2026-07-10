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
transition: fade
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

<div class="uc-stat"><span class="uc-stat-num"><CountUp :to="28" /></span><span class="uc-stat-label">fields tracked on the farm today</span></div>
<div class="uc-stat"><span class="uc-stat-num"><CountUp :to="40.6" :decimals="1" /></span><span class="uc-stat-label">acres under active management</span></div>
<div class="uc-stat"><span class="uc-stat-num"><CountUp :to="75" suffix="%" /></span><span class="uc-stat-label">of field capacity in use right now</span></div>

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
transition: fade
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

<div v-click="8" class="uc-silo-result">
The issue is not that data is missing. It is that useful records become hard to
<strong>find, interpret, and reuse</strong> after the original project moves on.
</div>

</div>

<div>

<div class="uc-silos" aria-label="Fragmented data silos">
<div v-click class="uc-silo uc-silo-imagery">Imagery</div>
<div v-click class="uc-silo uc-silo-sensors">Sensor exports</div>
<div v-click class="uc-silo uc-silo-rtk">RTK files</div>
<div v-click class="uc-silo uc-silo-activity">Activity logs</div>
<div v-click class="uc-silo uc-silo-samples">Samples</div>
<div v-click class="uc-silo uc-silo-archives">Archives</div>
</div>

<div v-click class="uc-silo-caption">
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
layout: section
class: uc-section uc-section-photo uc-vision
transition: fade
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

<div class="uc-pillar-grid mt-8">

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
A shared foundation for cross-stream questions that outlives any one project.
</div>

<div class="uc-aud">
<img class="uc-aud-photo" src="/farm/kat-inspecting-plants-2000w.jpg" alt="A student inspecting plants up close in the greenhouse">
<h3>Students</h3>
Explore real farm data without first learning specialist toolchains.
</div>

<div class="uc-aud">
<img class="uc-aud-photo" src="/farm/farm-manager-2000w.jpg" alt="A Central Valley grower walking a field next to a truck">
<h3>Central Valley growers</h3>
Regional research that connects directly back to the people farming next door.
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
transition: fade
---

# Under the hood

<div class="uc-section-sub">What it takes to make a farm legible</div>

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
  <div><span class="uc-dot" style="background:#f29d6d"></span>Canopy height</div>
  <div><span class="uc-dot" style="background:#2b5a34"></span>NDVI</div>
  <div><span class="uc-dot" style="background:#de744f"></span>Thermal</div>
  <div><span class="uc-dot" style="background:#3f5e43"></span>True color</div>
</div>

<div class="uc-callout mt-3">
One drone flight <strong>(Apr 28)</strong> plus one LiDAR pass <strong>(Jan 22)</strong> — five pixel-aligned views of the same ground.
</div>

---
layout: default
---

# Watching the season turn

<div class="uc-season-fade mt-6">
  <img src="/farm/generated/season-jan.jpg" alt="NDVI, January 20: mixed winter cover, east beds bare">
  <img v-click="1" src="/farm/generated/season-mar.jpg" alt="NDVI, March 25: peak green across nearly every field">
  <img v-click="2" src="/farm/generated/season-apr.jpg" alt="NDVI, April 28: cut hay drying in windrows before baling">
  <div class="uc-season-chip" v-click.hide="1"><strong>January 20</strong> · winter cover</div>
  <div class="uc-season-chip" v-click="[1,2]"><strong>March 25</strong> · peak green</div>
  <div class="uc-season-chip" v-click="2"><strong>April 28</strong> · hay drying</div>
</div>

<div class="uc-callout mt-6">
Same fields, same NDVI scale, three flights apart. Every flight lands in the archive — <strong>aligned and comparable</strong>.
</div>

---
layout: default
---

# Seeing what the eye can't

<div class="uc-season-row mt-9">
  <figure>
    <img src="/farm/generated/pair-rgb.jpg" alt="True-color aerial view: orchard, row crops, and equipment yard all reading as ordinary green farmland">
    <figcaption class="uc-season-cap"><strong>True color</strong> · everything looks fine</figcaption>
  </figure>
  <figure>
    <img src="/farm/generated/pair-thermal.jpg" alt="Thermal view of the identical scene: irrigated rows and orchard cold blue, dry furrows, roads, and cut hay glowing hot">
    <figcaption class="uc-season-cap"><strong>Surface temperature</strong> · 21–31&nbsp;°C</figcaption>
  </figure>
</div>

<div class="uc-callout mt-6">
Irrigated ground holds <strong>21&nbsp;°C</strong> while cut hay bakes at <strong>31</strong> — water management, visible only from the air.
</div>

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
  <div class="uc-arch-node">Field activities</div>
  <div class="uc-arch-node">Irrigations</div>
</div>

<div v-click="1" class="uc-arch-pipe" aria-hidden="true"></div>

<div v-click="1" class="uc-arch-core">
  <div class="uc-arch-step">Ingest &amp; standardize</div>
  <div class="uc-arch-layer">
    <div class="uc-arch-layer-title">Unified data layer</div>
    <div class="uc-arch-layer-sub">common formats · shared keys</div>
  </div>
  <div class="uc-arch-step">Maps · time series · imagery</div>
</div>

<div v-click="2" class="uc-arch-pipe" aria-hidden="true"></div>

<div v-click="2" class="uc-arch-group uc-arch-audiences">
  <div class="uc-arch-label">People</div>
  <div class="uc-arch-node">Researchers</div>
  <div class="uc-arch-node">Students</div>
  <div class="uc-arch-node">Growers</div>
</div>

</div>

---
layout: default
class: uc-spec-slide
---

<h1 class="uc-spec-title">An open geospatial stack connects the farm</h1>

<div class="uc-spec-grid mt-4">

<div class="uc-spec-col">
<div class="uc-card-eyebrow">Software</div>
<div class="uc-spec"><strong>PostGIS / PostgreSQL</strong> — spatial core for field geometry, crop seasons, and sample footprints</div>
<div class="uc-spec"><strong>Supabase</strong> — REST APIs, authentication, and row-level security</div>
<div class="uc-spec"><strong>TiTiler + STAC</strong> — cloud-optimized GeoTIFFs and on-demand band combinations</div>
<div class="uc-spec"><strong>Mapbox</strong> — interactive maps for web and native mobile clients</div>
<div class="uc-spec"><strong>Time-series store</strong><span class="uc-spec-status">In build</span> — high-frequency sensor telemetry</div>
</div>

<div class="uc-spec-col">
<div class="uc-card-eyebrow">Hardware</div>
<div class="uc-spec"><strong>Drone payloads</strong> — RGB, multispectral, thermal, and LiDAR</div>
<div class="uc-spec"><strong>RTK GNSS base station</strong> — centimeter-grade positioning across the farm</div>
<div class="uc-spec"><strong>Eddy covariance tower</strong> — continuous flux and microclimate record</div>
<div class="uc-spec"><strong>Soil &amp; weather sensors</strong> — moisture, temperature, and weather across plots</div>
<div class="uc-spec"><strong>Autonomous weeding robot</strong><span class="uc-spec-status">Field testing</span> — newest incoming data stream</div>
</div>

</div>

<div class="uc-callout mt-3">
Open standards end to end — PostgreSQL, STAC, COGs — so the template can travel.
</div>

---
layout: default
class: uc-livemap-slide
transition: slide-up
---

# Imagery pipeline · live demo 🤞

<div class="uc-livemap mt-4">
<FarmMap />
</div>

<!--
Speaker notes: Nothing here is a screenshot — field boundaries stream from the
platform's API and every tile is rendered on demand by TiTiler.
Pan and zoom — this is the actual production stack at
esf.ucmerced.edu serving tiles to the slide right now. Switch True color →
NDVI → Thermal to show one COG becoming different products on the fly.
If the venue wifi dies, the previous slide shows the same idea statically.
-->

---
layout: default
---

# What it looks like today

<div class="uc-proof-shot mt-3">
<img src="/app/esf-platform-home.jpg" alt="FarmKit: the Experimental Smart Farm's live field map and imagery browser, showing field boundaries, crop labels, and imagery history">
</div>

<div class="uc-callout mt-3">
This is <strong>FarmKit</strong>, the farm's live field map — the foundation FarmLink's unified layer builds on.
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
<p>Boundaries, crops, and seasons tracked in one place.</p>
</div>
</div>

<div class="uc-dual-shot">
<img src="/app/esf-equipment-management.jpg" alt="FarmKit equipment management dashboard showing 140 pieces of equipment across 18 locations">
<div class="uc-dual-shot-cap">
<h4>Equipment &amp; inventory</h4>
<p>140 assets tracked across 18 locations — operations data, not just sensor data.</p>
</div>
</div>

</div>

---
layout: default
---

<h1 class="uc-metric-title">The platform already has a measurable footprint</h1>

<div class="uc-metric-intro">
The public data layer turns field observations into reusable records — and makes the scale visible.
</div>

<div class="uc-metric-grid mt-6">

<div class="uc-metric uc-metric-feature">
<div class="uc-metric-num"><CountUp :to="8247" src="https://esf.ucmerced.edu/api/export/soil-samples.count" /></div>
<div class="uc-metric-label">soil-analysis result rows</div>
<div class="uc-metric-detail">One row per analyte, with depth, date, location, unit, and method.</div>
</div>

<div class="uc-metric">
<div class="uc-metric-num"><CountUp :to="212" /></div>
<div class="uc-metric-label">mapped soil locations</div>
<div class="uc-metric-detail">A 2025 sampling grid tied back to the field map.</div>
</div>

<div class="uc-metric">
<div class="uc-metric-num"><CountUp :to="22" /></div>
<div class="uc-metric-label">high-resolution drone datasets</div>
<div class="uc-metric-detail">RGB and multispectral assets at roughly 1.9–5.4 cm per pixel.</div>
</div>

<div class="uc-metric">
<div class="uc-metric-num"><CountUp :to="511" /></div>
<div class="uc-metric-label">logged irrigations</div>
<div class="uc-metric-detail">Recorded by the irrigation automation system.</div>
</div>

</div>

<div class="uc-callout mt-6">
The same data is available to people through the map and to software through <strong>CSV, GeoJSON, STAC, and COG</strong> interfaces.
</div>

---
layout: default
---

# Sampling the ground truth

<div class="uc-season-row mt-8">
  <figure>
    <img src="/farm/generated/soil-grid.jpg" alt="212 soil sample points colored by lab pH over the July 2025 drone orthomosaic, with field boundaries outlined">
  </figure>
</div>

<div class="uc-layer-labels mt-2">
  <div><span class="uc-dot" style="background:#ffadad"></span>Acidic · pH 5.4</div>
  <div><span class="uc-dot" style="background:#190c09"></span>Median · 6.2</div>
  <div><span class="uc-dot" style="background:#9eb0ff"></span>Alkaline · 7.6</div>
</div>

<div class="uc-callout mt-4">
<strong>212 grid points</strong>, each cored at two depths in summer 2025 — lab chemistry mapped back to the exact spot it came from.
</div>

---
layout: default
---

<h1 class="uc-roadmap-title">The next phase makes the data easier to use</h1>

<div class="uc-timeline mt-4">

<div v-click class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>AI-assisted capture</h4>Turn voice and photo entry into structured field records.</div>
</div>

<div v-click class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Ask the farm</h4>Query fields, soil, irrigation, and imagery with source-linked answers.</div>
</div>

<div v-click class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Publish more</h4>Add activity and irrigation records to the public catalog.</div>
</div>

<div v-click class="uc-tl-item">
<div class="uc-tl-dot"></div>
<div class="uc-tl-body"><h4>Integrated compute</h4>Run notebooks and jobs beside STAC and COG data.</div>
</div>

</div>

<div class="uc-timeline-shot">
<img src="/farm/weeding-robot-2000w.jpg" alt="An autonomous weeding robot being tested on the farm">
<div class="uc-timeline-shot-cap">
Each new instrument — like this autonomous weeding robot — becomes a queryable,
reusable stream.
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

<div class="uc-sponsor-block" aria-label="Sponsors">
<div class="uc-sponsor-label">Sponsors</div>
<div class="uc-sponsor-strip">
  <img src="/logos/ucop-aws.png" alt="AWS">
  <img src="/logos/ucop-ibm.png" alt="IBM">
  <img src="/logos/ucop-huron.png" alt="Huron">
  <img src="/logos/ucop-google-cloud.png" alt="Google Cloud">
</div>
</div>

<div class="uc-presenter mt-10">
Thank you · Questions welcome<br/>
<span class="opacity-70">UC Tech 2026</span>
</div>

<!--
Close by returning to the opening image: this is one farm, but the goal is a
pattern UC can reuse anywhere data is piling up faster than people can use it.
-->
