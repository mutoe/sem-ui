<template>
  <div :class="classes">
    <template v-if="piled">
      <div class="piled-background" />
      <div class="piled-background" />
    </template>
    <slot />
    <div v-if="loading" class="spinner" />
  </div>
</template>

<script setup lang="ts">
import { colors } from 'src/constants'
import type { ColorProps } from 'src/types'
import pick from 'src/utils/pick'
import { computed } from 'vue'

const props = defineProps<ColorProps & {
  disabled?: boolean
  loading?: boolean
  raised?: boolean
  stacked?: boolean
  'tallStacked'?: boolean
  piled?: boolean
  attached?: boolean
  color?: Sem.Color
}>()

const disabled = props.disabled || props.loading

const classes = computed(() => [
  'sem-segment',
  props.color,
  pick(props, 'raised', 'stacked', 'piled', 'attached', ...colors),
  { 'tall-stacked': props.tallStacked, disabled },
])

</script>

<style scoped lang="stylus">
$border = 1px solid rgba(34,36,38,0.15)
$padding = 1em

.sem-segment {
  position relative
  padding $padding $padding
  border $border
  border-radius rigor(2 / 7rem)
  margin 1rem 0
  background #fff
  box-shadow 0 1px 2px 0 rgba(34,36,38,0.15)
  font-size 1rem

  &.disabled::before {
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    display block
    background #fffc
    content ''
  }

  .spinner {
    loading()
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width unset

    &::before
    &::after {
      width 3em
      height 3em
      margin -1.5em 0 0 -1.5em
    }
  }

  &.raised {
    box-shadow 0 2px 2px 0 $color-light, 0 2px 4px 0 $color-light
  }

  stack-line() {
    position absolute
    left 0
    width 100%
    height 6px
    border-top 1px solid $color-light
    background rgba(0,0,0,0.03)
    content ""
  }

  &.stacked
  &.tall-stacked {
    padding-bottom 'calc(%s + 6px)' % $padding

    &::after {
      stack-line()
      bottom -3px
    }
  }

  &.tall-stacked::before {
    stack-line()
    bottom 0
  }

  &.piled .piled-background {
    position absolute
    z-index -1
    top 0
    right 0
    bottom 0
    left 0
    border $border
    background #fff

    &:nth-child(1) {
      transform rotate(-0.4deg) translate(-3px, 0px)
    }

    &:nth-child(2) {
      transform rotate(0.6deg) translate(2px, 1px)
    }
  }

  &.attached {
    &:not(:last-of-type) {
      margin-bottom -1px
      border-bottom-left-radius 0
      border-bottom-right-radius 0

      &.stacked
      &.tall-stacked {
        padding-bottom $padding

        &::after
        &::before {
          display none
        }
      }
    }

    &:not(:first-of-type) {
      margin-top 0
      border-top-left-radius 0
      border-top-right-radius 0
    }
  }

  for c in $colors {
    $current-color = lookup('$color-' + c)

    &.{c} {
      border-top-width 2px
      border-top-color $current-color
    }
  }

  > .sem-segment {
    &:last-child {
      margin-bottom 0
    }

    &:first-child {
      margin-top 0
    }
  }
}

</style>
