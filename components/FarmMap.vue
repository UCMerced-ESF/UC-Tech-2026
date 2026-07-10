<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// token lives in .env (gitignored): VITE_MAPBOX_TOKEN=pk.…
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

// TiTiler reached via the Vite dev proxy (see vite.config.ts) to dodge the
// platform's doubled CORS header on tile responses
const TITILER_ITEM =
  '/esf-titiler/collections/esf-multispectral/items/c9484c78-b648-42a8-8643-32a20e750d7e'
const FIELDS_URL = 'https://esf.ucmerced.edu/api/export/fields.geojson'
// bbox of the March 25 flight, from its STAC record
const BOUNDS = [-120.41709, 37.35314, -120.40539, 37.35838]

const BAMAKO_R = 'ffe5adfee4abfde3a9fce2a7fbe1a5fae0a3f9dfa0f8de9ef7dd9cf6dc9af5db97f4da95f3d993f2d891f1d78ef0d68cefd58aedd488ecd385ebd283ead181e9d07ee8cf7ce7cd7ae6cc77e5cb75e4ca73e3c970e2c86ee0c76cdfc669dec567ddc464dcc262dbc160dac05dd9bf5bd7be59d6bd56d5bc54d4bb51d3b94fd2b84dd0b74acfb648ceb546cdb444cbb341cab23fc9b03dc7af3bc6ae39c5ad37c3ac35c2ab34c0aa32bfa930bea82ebca72cbba62bb9a529b8a327b7a225b5a124b4a022b29f20b19e1fb09d1dae9c1bad9b1aac9a18aa9916a99815a89713a69611a59510a4940ea2930da1920ba092099e91089d90069c8f059b8e04998e03988d03978d02958c01948c01938b01918b00908b008f8a008d8a008c8a008b89008989008889008789008588008488008388008188008087007f87007d87007c86007b86007986007885017785017584017484017383027183027082036f82036e81046d80046b80056a7f05697e06687e07677d07667c08657c09647b0a637a0a61790b60790c5f780d5e770d5d770e5c760f5b750f5a7410597411587311567212557213547113537014527015516f15506e164f6e174e6d174d6c184c6b184b6b194a6a1a49691a48691b47681c46681c45671d44661e43661e42651f41641f4064203f63213e62213d62223c61223b61233a6023395f24385f25375e25365e26355d26355c27345c27335b28325b29315a29305a2a2f592a2e582b2e582b2d572c2c572c2b562d2a562d29552e29552e28542f27542f265330265330255231245231235132225132225033215033204f33204f341f4e341e4e351d4d351d4d361c4d361b4c371b4c371a4b37194b38194a38184a39174a3917493916493a16483a15483a14483b14473b13473c13473c12463c12463d11453d10453d10453e0f443e0f443e0e443f0e433f0d433f0d43400c42400c42400b42410b41410a41410a4142094042094042084042083f43073f43073f43063f44063e44053e44053e45043d45043d45033d45033c46023c46023c46013c47013b47003b47003b47'
const DAVOS = '00054a00074c00094d000b4f010c50010e51020f5302105403125604135704145905165a05175b06185d071a5e071b60081c61091e620a1f640b20650b22670c23680d24690e266b0e276c0f286d102a6f112b70112c71122e73132f7413307514327715337816347917367a17377c18387d193a7e1a3b7f1a3c801b3e821c3f831d40841e41851e43861f448720458821478922488a23498b234a8c244c8d254d8e264e8f274f902851902952912a53922a54932b56932c57942d58952e59952f5a96305b97315c97325e98335f9834609935619936629a37639a38649a39659b3a669b3a679b3b689c3c699c3d6a9c3e6b9c3f6c9d406d9d416e9d426f9d43709d44709d45719d46729d47739d48749d49759d4a769d4b769d4c779d4d789d4e799d4f799d507a9c517b9c527c9c537c9c547d9c557e9b567f9b567f9b57809b58819a59819a5a829a5b83995c83995d84995e85985f8598608698618697628797638897648896658996658a95668a95678b95688b94698c946a8d936b8d936c8e936d8e926e8f926f909170909171919172919073929074938f74938f75948f76958e77958e78968d79968d7a978d7b988c7c988c7d998c7e9a8b7f9a8b809b8b819c8a829d8a839d8a849e89869f8987a08988a08989a1888aa2888ba3888ca3888da4888fa58890a68791a78792a88793a98795aa8796ab8797ac8799ad889aae889baf889db0889eb188a0b289a1b389a3b489a4b68aa6b78aa8b88ba9b98babbb8cadbc8caebd8db0bf8eb2c08fb4c190b6c391b8c492b9c693bbc794bdc995bfca96c1cc98c3cd99c5cf9bc7d09cc9d29ecbd39fcdd5a1cfd6a2d0d8a4d2d9a6d4dba8d6dca9d8deabd9dfaddbe0afdde2b1dee3b3e0e4b5e1e5b6e3e7b8e4e8bae6e9bce7eabee8ebc0eaecc2ebedc4eceec6edefc7eeefc9eff0cbf0f1cdf1f2cff2f2d0f3f3d2f3f4d4f4f4d6f5f5d7f5f6d9f6f6dbf7f7ddf7f7def8f8e0f8f8e1f9f9e3f9f9e5faf9e6fafae8fbfae9fbfbebfbfbecfcfbeefcfcf0fcfcf1fcfcf3fdfdf4fdfdf6fdfdf7fefdf9fefefafefefcfefefdfefefe'
const LAJOLLA = '1919001a1a011b1a011c1a011d1b021e1b021e1b031f1c03201c04211c04221c05231d05241d06241d07251e07261e08271e08281f09291f092a1f0a2b200a2c200b2d200c2e210c2f210d30210d31220e32220f33220f3423103523103624113724113924123a25133b25133c26143d26143f2615402716412716432817442817452918472919482a1a4a2a1a4b2b1b4d2b1c4e2c1d502c1d512d1e532d1f542e20562e21572f21592f225b30235c30245e312560322661322763332865332967342a69352b6a352c6c362c6e362d70372e72382f743830763931783932793a337b3b347d3b357f3c36813c37833d38853e39873e3a893f3a8b3f3b8d403c8f403d92413e94413e96423f9842409a43409c43419e4442a04442a24543a44544a64644a84645ab4745ad4746af4846b14847b34947b54947b74a48b94a48bb4b48bc4c49be4c49c04d49c24d4ac44e4ac54f4ac7504bc9514bca514bcc524bcd534ccf544cd0554cd1564cd2584cd4594dd55a4dd65b4dd75c4dd75e4dd85f4dd9604eda614edb634edb644edc654edc674edd684edd694fde6b4fde6c4fdf6d4fdf6e4fe0704fe0714fe0724fe1744fe17550e17650e17750e27950e27a50e27b50e37c50e37d50e37f50e38050e48150e48251e48351e48551e58651e58751e58851e58951e68b51e68c51e68d51e68e51e68f52e79052e79252e79352e79452e89552e89652e89752e89852e99a52e99b52e99c52e99d53ea9e53ea9f53eaa153eaa253eba353eba453eba553eba653eba853eca953ecaa54ecab54ecac54edae54edaf54edb054edb154eeb355eeb455eeb555efb655efb856efb956efba56f0bc57f0bd57f0be58f1c058f1c159f1c25af1c45af2c55bf2c75cf2c85df3ca5ff3cb60f4cd61f4ce63f4d065f5d167f5d369f5d46bf6d66df6d76ff7d971f7da74f7dc77f8dd79f8df7cf8e07ff9e282f9e384fae587fae68afae78dfbe890fbea93fbeb96fbec99fced9cfcef9ffcf0a2fcf1a5fdf2a8fdf3abfdf4aefdf5b0fef6b3fef7b6fef8b8fef9bbfefabefefbc0fffcc3fffdc6fffec8fffecb'

// Crameri scientific colour maps (fabiocrameri.ch) aren't in TiTiler's registry,
// so pass them explicitly. 128 discrete intervals: a full 256-entry colormap
// makes the tile URL blow nginx's 8k limit (414).
function crameri(hex) {
  const c = (i) => [0, 2, 4].map((o) => parseInt(hex.slice(i * 6 + o, i * 6 + o + 2), 16))
  const iv = Array.from({ length: 128 }, (_, k) => [[k * 2, k * 2 + 2], [...c(k * 2), 255]])
  return encodeURIComponent(JSON.stringify(iv))
}

const NDVI = '(multiband_b5-multiband_b3)/(multiband_b5%2Bmultiband_b3)'
const NDRE = '(multiband_b5-multiband_b4)/(multiband_b5%2Bmultiband_b4)'

// ponytail: item id + rescales hardcoded to the latest flight; re-point when a newer flight lands
const MODES = [
  {
    name: 'True color',
    base: 'assets=multiband&asset_bidx=multiband%7C3,2,1&nodata=0',
    point: 'assets=multiband&asset_bidx=multiband%7C3,2,1',
    init: { min: 0, max: 0.37925702476501466 },
    fmtPoint: (v) => `R ${v[0]?.toFixed(3)} · G ${v[1]?.toFixed(3)} · B ${v[2]?.toFixed(3)}`,
    note: 'RGB bands straight from the multispectral orthomosaic',
  },
  {
    name: 'NDVI',
    base: `expression=${NDVI}&nodata=0&colormap=${crameri(BAMAKO_R)}`,
    point: `expression=${NDVI}`,
    init: { min: 0, max: 1 },
    lo: -0.2, hi: 1, step: 0.01,
    fmt: (v) => v.toFixed(2),
    fmtPoint: (v) => `NDVI ${v[0]?.toFixed(3)}`,
    note: '(NIR − Red) / (NIR + Red), computed per tile on demand · Crameri bamako scale',
  },
  {
    name: 'Red edge',
    base: `expression=${NDRE}&nodata=0&colormap=${crameri(DAVOS)}`,
    point: `expression=${NDRE}`,
    init: { min: 0, max: 0.5 },
    lo: -0.2, hi: 0.8, step: 0.01,
    fmt: (v) => v.toFixed(2),
    fmtPoint: (v) => `NDRE ${v[0]?.toFixed(3)}`,
    note: 'NDRE — chlorophyll signal the red edge band makes visible · Crameri davos scale',
  },
  {
    name: 'Thermal',
    base: `assets=multiband&asset_bidx=multiband%7C6&nodata=0&colormap=${crameri(LAJOLLA)}`,
    point: 'assets=multiband&asset_bidx=multiband%7C6',
    init: { min: 288, max: 311 },
    lo: 283, hi: 316, step: 0.5,
    fmt: (v) => `${(v - 273.15).toFixed(0)}°C`,
    fmtPoint: (v) => `${(v[0] - 273.15).toFixed(1)} °C`,
    note: 'Surface temperature from the LWIR band · Crameri lajolla scale',
  },
]

const active = ref(0)
const container = ref(null)
// live rescale bounds per mode, driven by the sliders
const P = reactive(MODES.map((m) => ({ ...m.init })))
let map, ro

const tilesFor = (i) => [
  `${TITILER_ITEM}/tiles/WebMercatorQuad/{z}/{x}/{y}@2x.png?${MODES[i].base}&rescale=${P[i].min},${P[i].max}`,
]

function setMode(i) {
  active.value = i
  map?.getSource('imagery')?.setTiles(tilesFor(i))
}

// debounce slider drags so TiTiler re-renders ~4×/s, not per pixel of drag
let timer
function refresh() {
  clearTimeout(timer)
  timer = setTimeout(() => map?.getSource('imagery')?.setTiles(tilesFor(active.value)), 250)
}

function clamp(which) {
  const p = P[active.value]
  const step = MODES[active.value].step
  if (which === 'min') p.min = Math.min(p.min, p.max - step)
  else p.max = Math.max(p.max, p.min + step)
  refresh()
}

onMounted(() => {
  map = new mapboxgl.Map({
    container: container.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    bounds: BOUNDS,
    fitBoundsOptions: { padding: 30 },
    maxZoom: 22,
    attributionControl: false,
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.ScaleControl({ unit: 'imperial' }), 'bottom-right')

  // Slidev scales/hides slides during navigation; keep the canvas in sync
  ro = new ResizeObserver(() => map.resize())
  ro.observe(container.value)

  map.on('load', () => {
    map.addSource('imagery', {
      type: 'raster',
      tiles: tilesFor(active.value),
      tileSize: 256,
      bounds: BOUNDS,
    })
    map.addLayer({ id: 'imagery', type: 'raster', source: 'imagery' })

    map.addSource('fields', { type: 'geojson', data: FIELDS_URL })
    map.addLayer({
      id: 'field-lines',
      type: 'line',
      source: 'fields',
      paint: { 'line-color': '#ffffff', 'line-width': 1.4, 'line-opacity': 0.85 },
    })
  })

  // click anywhere → ask TiTiler for the raw value at that point
  map.getCanvas().style.cursor = 'crosshair'
  const popup = new mapboxgl.Popup({ closeButton: false, maxWidth: 'none' })
  map.on('click', async (e) => {
    const m = MODES[active.value]
    popup.setLngLat(e.lngLat).setHTML('<div class="farm-pop">…</div>').addTo(map)
    let txt = 'no data here'
    try {
      const r = await fetch(`${TITILER_ITEM}/point/${e.lngLat.lng},${e.lngLat.lat}?${m.point}`)
      if (r.ok) {
        const d = await r.json()
        if (d.values?.some((v) => v)) txt = m.fmtPoint(d.values)
      }
    } catch {}
    popup.setHTML(`<div class="farm-pop">${txt}</div>`)
  })
})

onUnmounted(() => {
  ro?.disconnect()
  map?.remove()
})
</script>

<template>
  <div class="farm-map">
    <div ref="container" class="farm-map-canvas" />
    <div class="farm-map-modes">
      <button
        v-for="(m, i) in MODES"
        :key="m.name"
        :class="{ active: i === active }"
        @click="setMode(i)"
      >{{ m.name }}</button>
    </div>
    <div class="farm-map-sliders">
      <template v-if="active === 0">
        <span>Brightness</span>
        <input
          type="range" min="0.08" max="0.75" step="0.005"
          :value="0.83 - P[0].max"
          @input="P[0].max = +(0.83 - $event.target.value).toFixed(3); refresh()"
        />
      </template>
      <template v-else>
        <span>{{ MODES[active].fmt(P[active].min) }}</span>
        <input
          type="range" :min="MODES[active].lo" :max="MODES[active].hi" :step="MODES[active].step"
          v-model.number="P[active].min" @input="clamp('min')"
        />
        <span>to</span>
        <input
          type="range" :min="MODES[active].lo" :max="MODES[active].hi" :step="MODES[active].step"
          v-model.number="P[active].max" @input="clamp('max')"
        />
        <span>{{ MODES[active].fmt(P[active].max) }}</span>
      </template>
    </div>
    <div class="farm-map-note">{{ MODES[active].note }}</div>
  </div>
</template>

<style scoped>
.farm-map {
  position: relative;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--uc-shadow);
}
.farm-map-canvas {
  position: absolute;
  inset: 0;
}
.farm-map-modes {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 6px;
}
.farm-map-modes button {
  font-family: var(--uc-sans);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(14, 22, 33, 0.78);
  color: #fff;
  cursor: pointer;
  backdrop-filter: blur(4px);
}
.farm-map-modes button.active {
  background: var(--uc-gold);
  border-color: var(--uc-gold);
  color: var(--uc-navy);
}
.farm-map-note {
  position: absolute;
  left: 12px;
  bottom: 12px;
  font-size: 0.78rem;
  color: #fff;
  background: rgba(14, 22, 33, 0.78);
  padding: 5px 12px;
  border-radius: 8px;
  backdrop-filter: blur(4px);
}
.farm-map-sliders {
  position: absolute;
  top: 58px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(14, 22, 33, 0.78);
  padding: 7px 12px;
  border-radius: 10px;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}
.farm-map-sliders span {
  min-width: 2.2em;
  text-align: center;
}
.farm-map-sliders input[type='range'] {
  width: 110px;
  accent-color: #e3aa2f;
}
.farm-map :deep(.mapboxgl-popup-content) {
  font-family: var(--uc-sans);
  font-size: 0.8rem;
  font-weight: 650;
  color: #172334;
  padding: 6px 11px;
  border-radius: 8px;
}
</style>
