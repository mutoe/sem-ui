<template>
  <button
    role="button"
    :class="classes"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    @keydown.space.enter="active = true"
    @keyup.space.enter="active = false"
  >
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
      <span v-if="slots.leftLabel ?? props.leftLabelIcon" :class="['label', 'left', { icon: props.leftLabelIcon }]">
        <slot name="leftLabel">
          <Icon :icon="props.leftLabelIcon" />
        </slot>
      </span>
      <span v-if="withLabel" class="content">
        <Icon v-if="props.icon" :class="{ gutter: props.content || slots.default }" :icon="props.icon" />
        <slot>{{ props.content }}</slot>
      </span>
      <template v-else>
        <Icon v-if="props.icon" :class="{ gutter: props.content || slots.default }" :icon="props.icon" />
        <slot>{{ props.content }}</slot>
      </template>
      <span v-if="slots.rightLabel ?? props.rightLabelIcon" :class="['label', 'right', { icon: props.rightLabelIcon }]">
        <slot name="rightLabel">
          <Icon :icon="props.rightLabelIcon" />
        </slot>
      </span>
    </template>
  </button>
</template>

<script lang="ts" setup>
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useSlots } from 'vue'
import pick from 'src/utils/pick'

export type ButtonTheme = 'primary' | 'secondary' | 'default';
export type ButtonAnimated = true | 'horizontal' | 'vertical' | 'fade';
export type ButtonColor = 'light' | 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black';
export type ButtonSize = 'mini' | 'small' | 'middle' | 'large' | 'massive';

const props = defineProps<{
  content?: string;
  icon?: IconDefinition;
  leftLabelIcon?: IconDefinition;
  rightLabelIcon?: IconDefinition;

  size?: ButtonSize;
  mini?: boolean;
  small?: boolean;
  large?: boolean;
  massive?: boolean;

  active?: boolean;
  disabled?: boolean;
  loading?: boolean;

  fluid?: boolean;
  circular?: boolean;

  theme?: ButtonTheme;
  primary?: boolean;
  secondary?: boolean;
  positive?: boolean;
  negative?: boolean;
  ghost?: boolean;

  color?: ButtonColor;
  red?: boolean;
  orange?: boolean;
  yellow?: boolean;
  olive?: boolean;
  green?: boolean;
  teal?: boolean;
  blue?: boolean;
  violet?: boolean;
  purple?: boolean;
  pink?: boolean;
  brown?: boolean;
  grey?: boolean;
  black?: boolean;

  animated?: ButtonAnimated;
}>()

const slots = useSlots()

const colors: (keyof typeof props)[] = [
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
  'ghost',
  'positive',
  'negative',
  'primary',
  'secondary',
]

const withLabel = props.leftLabelIcon ?? props.rightLabelIcon ?? slots.leftLabel ?? slots.rightLabel
let active = $ref(false)

const classes = $computed(() => [
  'sui-button',
  props.animated === true ? 'horizontal' : props.animated,
  pick(props, 'animated', 'active', 'fluid', 'circular'),
  { active: !props.disabled && active },

  { 'with-label': withLabel },
  { 'only-icon': props.icon && !(props.content ?? slots.default) },

  props.theme,
  props.color,
  pick(props, colors),

  props.size,
  pick(props, 'mini', 'small', 'large', 'massive'),
])
</script>

<style lang="stylus" scoped>
$shadow-distance = 0px
$shadow-offset = ($shadow-distance / 2)
$vertical-padding = (2 / 7em + 1 / 2em)
$horizontal-padding = 1.5em
$vertical-margin = 0
$horizontal-margin = 0.25em
$transition-property = opacity, background-color, color, box-shadow, background
$animate-duration = 0.3s

box-shadow-border($color = currentColor, $width = 1px) {
  box-shadow 0 0 0 $width $color inset
}

.sui-button {
  color $color-text
  cursor pointer
  display: inline-flex
  justify-content center
  align-items center
  min-height 1em
  line-height 1em
  font-size 1rem
  outline none
  border none
  margin: 0 $horizontal-margin $vertical-margin 0
  padding $vertical-padding $horizontal-padding
  border-radius $border-radius
  transition $transition
  transition-duration $default-duration
  transition-timing-function $default-easing
  transition-property $transition-property
  vertical-align middle
  background-color $color-light

  .gutter {
    margin-right: (4 / 7em);
  }

  &.circular {
    border-radius 3em

    &.with-label .label {
      &.left {
        border-top-left-radius 3em
        border-bottom-left-radius 3em
      }

      &.right {
        border-top-right-radius 3em
        border-bottom-right-radius 3em
      }
    }
  }

  &.only-icon {
    padding $vertical-padding
    width (36/14)em
  }

  &.fluid {
    display flex
    justify-content center
    width 100%
  }

  for $size in $size-list {
    &.{$size} {
      size($size)
    }
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      filter brightness(0.9)
    }

    &:focus {
      outline double 3px $color-light
    }

    &:active,
    &.active {
      transform translate(1px, 1px)

      &:not(.with-label) {
        filter brightness(0.8)
      }
    }
  }

  &.ghost {
    color $color-grey
    background: transparent
    box-shadow-border(currentColor)

    &:not(:disabled) {
      &:hover,
      &:focus {
        filter brightness(1.3)
      }

      &:active,
      &.active {
        background-color rgba(#aaa, 0.15)
      }

      &:focus {
        outline double 3px currentColor
      }
    }
  }

  &.with-label {
    padding 0
    align-items stretch

    $decorator-size = .8em

    .content {
      padding $vertical-padding $horizontal-padding
    }

    .label {
      display flex
      align-items center
      padding 0 calc(1em - 2px)
      font-weight bold
      position relative

      &:not(.icon) {
        background-color #fff
        box-shadow-border($color-light)

        &::before {
          content ""
          position absolute
          display block
          top 50%
          background-color #fff
          width $decorator-size
          height $decorator-size
          transform translateY($decorator-size / -2) rotateZ(45deg)
        }
      }

      &.icon {
        background-color rgba(#000, .15)
      }

      &.left {
        border-top-left-radius $border-radius
        border-bottom-left-radius $border-radius

        &::before {
          right: "calc(%s + 0.1em)" % ($decorator-size/ -2)
        }
      }

      &.right {
        border-top-right-radius $border-radius
        border-bottom-right-radius $border-radius

        &::before {
          left: "calc(%s + 0.1em)" % ($decorator-size/ -2)
        }
      }
    }

    &.secondary {
      .label {
        background-color rgba(#fff, .15)
      }
    }

    &.ghost {
      .label {
        background-color transparent
        box-shadow-border()

        &:not(.icon) {
          background-color #fff

          &::before {
            border 1px solid currentColor
          }

          &.left::before {
            right: "calc(%s + 0.02em)" % ($decorator-size/ -2)
            border-left none
            border-bottom none
          }

          &.right::before {
            left: "calc(%s + 0.02em)" % ($decorator-size/ -2)
            border-right none
            border-top none
          }
        }
      }
    }
  }

  for c in 'red' 'orange' 'yellow' 'olive' 'green' 'teal' 'blue' 'violet' 'purple' 'pink' 'brown' 'grey' 'black' 'positive' 'negative' 'primary' 'secondary' {
    $current-color = lookup('$color-' + c)

    &.{c} {
      background-color $current-color
      color $color-text-inverse

      &:not(:disabled) {
        &:hover
        &:focus {
          filter brightness(0.9)
        }

        &:focus {
          outline double 3px $current-color
        }

        &:active,
        &.active {
          filter brightness(0.85)
        }
      }

      &.ghost {
        background-color transparent
        color: $current-color
        box-shadow-border()

        &:not(:disabled) {
          &:hover,
          &:focus {
            box-shadow-border(currentColor)
            filter brightness(1.2)

            &.with-label .label {
              box-shadow-border(currentColor)
            }
          }

          &:active,
          &.active {
            opacity .7
          }
        }
      }

      &.with-label:not(.ghost) .label:not(.icon) {
        color $current-color
        background-color #fff
        box-shadow-border()
      }
    }
  }

  &.secondary {
    &:not(:disabled) {
      &:hover
      &:focus {
        filter brightness(1.5)

        &.ghost {
          filter brightness(2.5)
        }
      }

      &:active
      &.active {
        filter brightness(2)

        &.ghost {
          filter brightness(2)
        }
      }
    }
  }

  &:disabled:not(.loading) {
    cursor: default
    opacity: 0.45
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
      &:active,
      &.active {
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
      &:active,
      &.active {
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
      &:active,
      &.active {
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
