<script setup>
import { ref, watch } from 'vue'
import { useIsSlideActive } from '@slidev/client'
import { useTransition } from '@vueuse/core'

const props = defineProps({
  to: { type: Number, required: true },
  // optional live endpoint returning JSON; `pick` names the numeric field.
  // Falls back to `to` if the fetch fails, so the deck works offline.
  src: { type: String, default: '' },
  pick: { type: String, default: 'count' },
  decimals: { type: Number, default: 0 },
  suffix: { type: String, default: '' },
})

const final = ref(props.to)
if (props.src)
  fetch(props.src)
    .then((r) => r.json())
    .then((d) => {
      if (typeof d[props.pick] === 'number') final.value = d[props.pick]
    })
    .catch(() => {})

const target = ref(0)
const isActive = useIsSlideActive()
watch(
  [isActive, final],
  () => {
    target.value = isActive.value ? final.value : 0
  },
  { immediate: true },
)

const n = useTransition(target, { duration: 1600, transition: [0.16, 1, 0.3, 1] })
</script>

<template>
  <span>{{ n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) }}{{ suffix }}</span>
</template>
