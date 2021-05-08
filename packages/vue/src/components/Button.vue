<template>
  <button :class="classes" :disabled="props.disabled || props.loading" :aria-disabled="props.disabled || props.loading">
    <div v-if="props.loading" class="loading"></div>

    <template v-else-if="!props.animated">
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
import pick from 'src/utils/pick'
import { defineProps } from 'vue'

export type ButtonTheme = 'primary' | 'secondary' | 'default'
export type ButtonAnimated = true | 'horizontal' | 'vertical' | 'fade'
export type ButtonColor = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black'

const props = defineProps<{
  content?: string


  active?: boolean
  disabled?: boolean
  loading?: boolean

  fluid?: boolean

  theme?: ButtonTheme
  primary?: boolean
  secondary?: boolean
  positive?: boolean
  negative?: boolean
  basic?: boolean
  color?: ButtonColor
  red?: boolean
  orange?: boolean
  yellow?: boolean
  olive?: boolean
  green?: boolean
  teal?: boolean
  blue?: boolean
  violet?: boolean
  purple?: boolean
  pink?: boolean
  brown?: boolean
  grey?: boolean
  black?: boolean

  animated?: ButtonAnimated
}>()

const classes = [
  'sui-button',
  props.animated === true ? 'horizontal' : props.animated,
  pick(props, 'animated', 'active', 'fluid'),

  props.theme,
  pick(props, ['primary', 'secondary']),

  props.color,
  pick(props, ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black', 'basic', 'positive', 'negative']),
]

</script>

<style lang="stylus" scoped>
$shadow-distance = 0px
$shadow-offset = ($shadow-distance / 2)
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
  display: inline-flex
  justify-content center
  align-items center
  min-height $input-min-height
  font-size $font-size-basic
  outline none
  border none
  margin: 0 $horizontal-margin $vertical-margin 0
  padding 0 $horizontal-padding
  border-radius $border-radius
  box-shadow $box-shadow
  transition $transition
  transition-duration $default-duration
  transition-timing-function $default-easing
  transition-property $transition-property
  vertical-align middle

  &.fluid {
    display block
    width 100%
  }

  &:hover,
  &:focus,
  &.active {
    filter brightness(0.9)
    box-shadow $border-box-shadow
  }

  &:active:not(:disabled) {
    filter brightness(0.85)
  }

  &.basic {
    color rgba(#000, 0.6)
    background: transparent
    border 1px solid currentColor

    &:active:not(:disabled) {
      background-color rgba(#f8f8f8, 0.2)
      box-shadow 0 0 0 1px rgba(#000, 0.15) inset, 0 1px 4px 0 rgba(34, 36, 38, .15) inset
    }
  }

  &.primary {
    box-shadow $border-box-shadow
    background-color $color-primary
    color $color-text-inverse

    &.basic {
      box-shadow none
      background-color transparent
      color $color-primary
    }
  }

  &.secondary {
    box-shadow $border-box-shadow
    background-color $color-secondary
    color $color-text-inverse

    &:hover
    &:focus
    &.active {
      filter brightness(1.5)
    }

    &:active:not(:disabled) {
      filter brightness(2)
    }

    &.basic {
      color $color-secondary
      background-color transparent

      &:hover
      &:focus
      &.active {
        filter brightness(2.5)
      }

      &:active:not(:disabled) {
        background-color $color-secondary, rgba(#fff, 0.2)
        box-shadow 0 0 0 1px rgba(#000, 0.15) inset, 0 1px 4px 0 rgba(34, 36, 38, .15) inset
      }
    }
  }

  for c in 'red' 'orange' 'yellow' 'olive' 'green' 'teal' 'blue' 'violet' 'purple' 'pink' 'brown' 'grey' 'black' 'positive' 'negative' {
    &.{c} {
      background-color lookup('$color-' + c)
      color $color-text-inverse

      &:hover
      &:focus
      &.active {
        filter brightness(0.9)
        box-shadow $border-box-shadow
      }

      &:active:not(:disabled) {
        filter brightness(0.85)
      }

      &.basic {
        background-color #fff
        color: lookup('$color-' + c)
        border: 1px solid currentColor

        &:hover
        &:focus
        &.active {
          filter brightness(1.1)
        }

        &:active:not(:disabled) {
          background-color lookup('$color-' + c), rgba(#fff, 0.2)
          box-shadow 0 0 0 1px rgba(#000, 0.15) inset, 0 1px 4px 0 rgba(34, 36, 38, .15) inset
        }
      }
    }
  }

  &:disabled:not(.loading) {
    cursor: default
    opacity: 0.45
    box-shadow none
  }

  .loading {
    loading()
    min-width 4em
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
