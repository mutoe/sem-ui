<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { ButtonSize } from 'src/components/button/Button.vue'

const props = defineProps<{
  direction?: 'horizontal' | 'vertical'
  vertical?: boolean

  size?: ButtonSize
}>()

const classes = [
  'sui-button-group',
  props.direction,
  { vertical: props.vertical, horizontal: !props.direction && !props.vertical },
  props.size,
]
</script>

<style lang="stylus" scoped>
.sui-button-group {
  display inline-flex

  :deep(.sui-button.icon) {
    padding-right 1em
    padding-left 1em
  }

  for $size in $size-list {
    &.{$size} {
      :deep(.sui-button) {
        size($size)
      }
    }
  }

  &.horizontal {
    margin-right 0.25em

    :deep(.sui-button) {
      border-radius 0
      margin-right 0

      &:first-child {
        border-bottom-left-radius $border-radius
        border-top-left-radius $border-radius
      }

      &:last-child {
        border-bottom-right-radius $border-radius
        border-top-right-radius $border-radius
      }
    }
  }

  &.vertical {
    flex-direction column

    :deep(.sui-button) {
      border-radius 0
      margin-bottom 0

      &:first-child {
        border-top-left-radius $border-radius
        border-top-right-radius $border-radius
      }

      &:last-child {
        border-bottom-left-radius $border-radius
        border-bottom-right-radius $border-radius
      }
    }
  }
}
</style>
