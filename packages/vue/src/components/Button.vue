<template>
  <button :class="['sui-button', props.theme]">
    <slot>{{ props.content }}</slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

export type ButtonTheme = 'primary' | 'secondary' | 'default'

const props = defineProps<{
  theme?: ButtonTheme
  content?: string
}>()

</script>

<style lang="stylus">
$shadow-distance = 0px
$shadow-offset = ($shadow-distance / 2)
$vertical-padding = (4 / 7 + 1 / 4) em
$horizontal-padding = 1.5em
$vertical-margin = 0
$horizontal-margin = 0.25em
$border-box-shadow = 0 0 0 1px transparent inset
$shadow-box-shadow = 0px -$shadow-distance 0px 0px $border-color inset
$box-shadow = $border-box-shadow, $shadow-box-shadow
$transition-property = opacity, background-color, color, box-shadow, background

.sui-button {
  color $color-text
  cursor pointer
  display: inline-block;
  min-height 1em
  font-size $font-size-basic
  outline none
  border none
  margin: 0 $horizontal-margin $vertical-margin 0
  padding $vertical-padding $horizontal-padding ($vertical-padding + $shadow-offset)
  border-radius $border-radius
  box-shadow $box-shadow
  transition $transition
  transition-duration $default-duration
  transition-timing-function $default-easing
  transition-property $transition-property

  &:hover,
  &:focus,
  &.active {
    background-color #c0c1c2
    background-image none
    box-shadow $border-box-shadow
    color rgba(#000, 0.95)
  }

  &.primary {
    box-shadow $border-box-shadow
    background-color $color-primary
    color $color-text-inverse
  }

  &.secondary {
    box-shadow $border-box-shadow
    background-color $color-secondary
    color $color-text-inverse
  }
}
</style>
