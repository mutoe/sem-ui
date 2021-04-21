<template>
  <button :class="classes">
    <template v-if="!props.animated">
      <slot>{{ props.content }}</slot>
    </template>

    <template v-else>
      <div class="visible">
        <slot>{{ props.content }}</slot>
      </div>
      <div class="hidden">
        <slot name="animated"/>
      </div>
    </template>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

export type ButtonTheme = 'primary' | 'secondary' | 'default'
export type ButtonAnimated = true | 'horizontal' | 'vertical' | 'fade'

const props = defineProps<{
  content?: string
  theme?: ButtonTheme
  animated?: ButtonAnimated
}>()

const classes = [
  'sui-button',
  props.theme,
  props.animated === true ? 'horizontal' : props.animated,
  { animated: props.animated },
]

</script>

<style lang="stylus" scoped>
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
$animate-duration = 0.3s

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

  &.animated {
    position relative
    overflow hidden
    vertical-align middle
    z-index 1

    .visible, .hidden {
      will-change: transform, opacity
      transition: transform $animate-duration $default-easing,
        opacity $animate-duration $default-easing
    }

    .hidden {
      position: absolute
      top: 0
      left: 0
      right 0
      bottom 0
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.horizontal {
      .visible {
        transform: translateX(0)
      }

      .hidden {
        transform: translateX(100%)
      }

      &:hover,
      &:active {
        .visible {
          transform: translateX(-200%)
        }

        .hidden {
          transform: translateX(0)
        }
      }
    }

    &.vertical {
      .visible {
        transform: translateY(0)
      }

      .hidden {
        transform: translateY(-100%)
      }

      &:hover,
      &:active {
        .visible {
          transform: translateY(200%)
        }

        .hidden {
          transform: translateY(0)
        }
      }
    }

    &.fade {
      .visible {
        opacity 1
        transform: scale(1)
      }

      .hidden {
        opacity 0
        transform: scale(1.5)
      }

      &:hover,
      &:active {
        .visible {
          opacity 0
          transform: scale(0.75)
        }

        .hidden {
          opacity 1
          transform: scale(1)
        }
      }
    }
  }
}
</style>
