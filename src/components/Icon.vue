<template>
  <FontAwesomeIcon v-if="icon" v-bind="props" :icon="icon" />
</template>

<script lang="ts" setup>
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  icon?: IconDefinition
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270
  swapOpacity?: boolean
  size?: 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  spin?: boolean
  symbol?: string | boolean
  title?: string
  inverse?: boolean
  mask?: object | any[] | string
  transform?: object | string
}>()
</script>
