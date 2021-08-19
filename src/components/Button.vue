<template>
  <button role="button" :class="classes" :disabled="props.disabled || props.loading" :aria-disabled="props.disabled || props.loading">
    <div v-if="props.loading" class="loading">Loading</div>

    <template v-else-if="props.animated">
      <div class="content visible">
        <slot>{{ props.content }}</slot>
      </div>
      <div class="content hidden">
        <slot name="animated" />
      </div>
    </template>

    <template v-else>
      <Icon v-if="props.icon" :class="{ gutter: props.content || slots.default }" :icon="props.icon" />
      <span v-if="props.leftLabelIcon" class="label left">
        <Icon :icon="props.leftLabelIcon" />
      </span>
      <span class="content">
        <slot>{{ props.content }}</slot>
      </span>
      <span v-if="props.rightLabelIcon" class="label right">
        <Icon :icon="props.rightLabelIcon" />
      </span>
    </template>
  </button>
</template>

<script lang="ts" setup>
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useSlots } from 'vue'
import pick from 'src/utils/pick'

export type ButtonTheme = 'primary' | 'secondary' | 'default'
export type ButtonAnimated = true | 'horizontal' | 'vertical' | 'fade'
export type ButtonColor = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black'
export type ButtonSize = 'mini' | 'small' | 'default' | 'large' | 'massive'

const props = defineProps<{
  content?: string
  icon?: IconDefinition
  leftLabelIcon?: IconDefinition
  rightLabelIcon?: IconDefinition

  size?: ButtonSize
  mini?: boolean
  small?: boolean
  large?: boolean
  massive?: boolean

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

const slots = useSlots()

const classes = [
  'sui-button',
  props.animated === true ? 'horizontal' : props.animated,
  pick(props, 'animated', 'active', 'fluid'),

  { 'with-label': props.leftLabelIcon ?? props.rightLabelIcon },

  props.theme,
  pick(props, ['primary', 'secondary']),

  props.color,
  pick(props, [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
    'basic',
    'positive',
    'negative',
  ]),

  props.size,
  pick(props, 'mini', 'small', 'large', 'massive'),
]
</script>

<style lang="stylus" scoped>
$shadow-distance = 0px
$shadow-offset = ($shadow-distance / 2)
$vertical-padding = .78571429em
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
  min-height 1em
  font-size 1rem
  outline none
  border none
  margin: 0 $horizontal-margin $vertical-margin 0
  padding $vertical-padding $horizontal-padding
  border-radius $border-radius
  box-shadow $box-shadow
  transition $transition
  transition-duration $default-duration
  transition-timing-function $default-easing
  transition-property $transition-property
  vertical-align middle

  .gutter {
    margin-right: (4 / 7) em;
  }

  &.fluid {
    display flex
    justify-content center
    width 100%
  }

  &.mini {
    font-size (1 - 1.5 / 7) rem
  }

  &.small {
    font-size (1 - 0.75 / 7) rem
  }

  &.large {
    font-size (1 + 2 / 7) rem
  }

  &.massive {
    font-size (1 + 4 / 7) rem
  }

  &:hover,
  &:focus,
  &.active {
    filter brightness(0.9)
    box-shadow $border-box-shadow
  }

  &:focus {
    outline auto
  }

  &:active:not(:disabled) {
    filter brightness(0.8)

    .content,
    svg {
      transform translate(1px, 1px)
    }
  }

  &.basic {
    color rgba(#000, 0.6)
    background: transparent
    border 1px solid currentColor

    &:active:not(:disabled) {
      background-color rgba(#f8f8f8, 0.2)
      box-shadow 0 0 0 1px rgba(#000, 0.15) inset, 0 1px 4px 0 rgba(34, 36, 38, .15) inset
    }

    &:focus {
      outline double 3px currentColor
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
        background-color transparent
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
    min-width 3em
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


  &.with-label {
    padding 0
    align-items stretch

    .content {
      padding $vertical-padding $horizontal-padding
    }

    .label {
      display flex
      align-items center
      padding 0 1em
      background-color rgba(#000, .15)

      &.left {
        border-top-left-radius $border-radius
        border-bottom-left-radius $border-radius
      }
      &.right {
        border-top-right-radius $border-radius
        border-bottom-right-radius $border-radius
      }
    }

    &.secondary {
      .label {
        background-color rgba(#fff, .2)
      }
    }

    &.basic {
      .label {
        background-color transparent
        &.left {
          border-right 1px solid currentColor
        }
        &.right {
          border-left 1px solid currentColor
        }
      }
    }
  }
}
</style>
