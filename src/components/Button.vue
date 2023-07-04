<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    @keydown.space.enter="innerActive = true"
    @keyup.space.enter="innerActive = false"
    @click="emit('click', $event)"
  >
    <template v-if="!withLabel">
      <div v-if="props.loading" class="loading">Loading</div>

      <template v-else-if="animation">
        <div class="content visible">
          <slot>{{ props.content }}</slot>
        </div>
        <div class="content hidden">
          <slot name="animated" />
        </div>
      </template>

      <template v-else>
        <Icon v-if="leftIcon" :class="[{ gutter: props.content || slots.default }, 'left']" :icon="leftIcon" />
        <slot>{{ props.content }}</slot>
        <Icon v-if="rightIcon" :class="[{ gutter: props.content || slots.default }, 'right']" :icon="rightIcon" />
      </template>
    </template>

    <template v-else>
      <div v-if="leftLabel" :class="['label', 'left', { icon: props.leftLabelIcon }]">
        <div v-if="props.loading" class="loading">Loading</div>
        <slot v-else name="leftLabel">
          <Icon :icon="props.leftLabelIcon" />
        </slot>
      </div>
      <span class="content">
        <Icon v-if="leftIcon" :class="[{ gutter: props.content || slots.default }, 'left']" :icon="leftIcon" />
        <slot>{{ props.content }}</slot>
        <Icon v-if="rightIcon" :class="[{ gutter: props.content || slots.default }, 'right']" :icon="rightIcon" />
      </span>
      <span v-if="rightLabel" :class="['label', 'right', { icon: props.rightLabelIcon }]">
        <div v-if="props.loading" class="loading">Loading</div>
        <slot v-else name="rightLabel">
          <Icon :icon="props.rightLabelIcon" />
        </slot>
      </span>
    </template>
  </button>
</template>

<script lang="ts" setup>
import type { VNode } from 'vue'
import { computed, ref } from 'vue'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Icon from 'src/components/Icon.vue'
import { colors } from 'src/constants'
import type { ColorProps } from 'src/types'
import { hasSlot } from 'src/utils/has-slot'
import pick from 'src/utils/pick'

export type ButtonTheme = 'default' | 'ghost'
export type ButtonAnimation = 'horizontal' | 'vertical' | 'fade'
export type ButtonSize = 'mini' | 'small' | 'middle' | 'large' | 'massive'

const props = withDefaults(defineProps<ColorProps & {
  content?: string
  /** Alias for leftIcon */
  icon?: IconDefinition
  leftIcon?: IconDefinition
  rightIcon?: IconDefinition
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
  circular?: boolean

  color?: Sem.Color
  theme?: ButtonTheme
  ghost?: boolean

  // FIXME: animation could be pass in boolean value
  animation?: ButtonAnimation
}>(), {
  animation: 'horizontal',
})

const slots = defineSlots<{
  default(props?: object): VNode[]
  animated(props?: object): VNode[]
  leftLabel(props?: object): VNode[]
  rightLabel(props?: object): VNode[]
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const leftIcon = computed(() => props.leftIcon || props.icon)
const leftLabel = computed(() => Boolean(props.leftLabelIcon || hasSlot(slots.leftLabel)))
const rightLabel = computed(() => Boolean(props.rightLabelIcon || hasSlot(slots.rightLabel)))
const withLabel = computed(() => leftLabel.value || rightLabel.value)
const innerActive = ref(false)
const animation = computed(() => hasSlot(slots.animated) && props.animation)
const classes = computed(() => [
  'sui-button',
  animation.value && `animation ${animation.value}`,
  pick(props, 'active', 'fluid', 'circular'),
  { active: !props.disabled && innerActive.value },

  { 'with-label': withLabel.value },
  { 'only-icon': (leftIcon.value || props.rightIcon) && !(props.content ?? slots.default) },

  props.theme,
  props.color,
  pick(props, [...colors, 'ghost']),

  props.size,
  pick(props, 'mini', 'small', 'large', 'massive'),
])
</script>

<style lang="stylus" scoped>
$shadow-distance = 0px
$shadow-offset = ($shadow-distance / 2)
$vertical-padding = rigor(2 / 7em + 1 / 2em)
$horizontal-padding = 1.5em
$vertical-margin = 0.25em
$horizontal-margin = 0.25em
$transition-property = opacity, background-color, color, box-shadow, background
$animate-duration = 0.3s
$icon-width = rigor(36 / 14em)

box-shadow-border($color = currentColor, $width = 1px) {
  box-shadow 0 0 0 $width $color inset
}

.sui-button {
  display inline-flex
  min-height 1em
  align-items center
  justify-content center
  padding $vertical-padding $horizontal-padding
  border none
  border-radius $border-radius
  margin 0 $horizontal-margin $vertical-margin 0
  background-color $color-light
  color $color-text
  cursor pointer
  font-size 1rem
  line-height 1em
  outline none
  transition-duration $default-duration
  transition-property $transition-property
  transition-timing-function $default-easing
  vertical-align middle

  .gutter {
    &.left {
      margin-right rigor(4 / 7em)
    }

    &.right {
      margin-left rigor(4 / 7em)
    }
  }

  &.circular {
    border-radius 3em

    &.with-label .label {
      &.left {
        border-bottom-left-radius 3em
        border-top-left-radius 3em
      }

      &.right {
        border-bottom-right-radius 3em
        border-top-right-radius 3em
      }
    }
  }

  &.only-icon {
    width $icon-width
    padding $vertical-padding
  }

  &.fluid {
    display flex
    width 100%
    justify-content center
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
    background transparent
    color $color-grey
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
    align-items stretch
    padding 0

    $decorator-size = 0.8em

    .content {
      padding $vertical-padding $horizontal-padding
    }

    .label {
      position relative
      display flex
      align-items center
      padding 0 calc(1em - 2px)
      font-weight bold

      &:not(.icon) {
        background-color #fff

        ^[1]:not(.ghost) ^[2..-1] {
          box-shadow-border($color-light)
        }

        &::before {
          position absolute
          top 50%
          display block
          width $decorator-size
          height $decorator-size
          background-color #fff
          content ""
          transform translateY($decorator-size / -2) rotateZ(45deg)
        }
      }

      &.icon {
        width $icon-width
        justify-content center
        padding $vertical-padding
        background-color rgba(#000, 0.15)

        .loading {
          min-width 1em
        }
      }

      &.left {
        border-bottom-left-radius $border-radius
        border-top-left-radius $border-radius

        &::before {
          right "calc(%s + 0.1em)" % ($decorator-size/ -2)
        }
      }

      &.right {
        border-bottom-right-radius $border-radius
        border-top-right-radius $border-radius

        &::before {
          left "calc(%s + 0.1em)" % ($decorator-size/ -2)
        }
      }
    }

    &.secondary {
      .label {
        background-color rgba(#fff, 0.15)
      }
    }

    &.ghost {
      .label {
        background-color transparent

        &::after {
          position absolute
          top 0
          bottom 0
          width 1px
          content ""

          ^[3].left^[-1..-1] {
            right 0
          }

          ^[3].right^[-1..-1] {
            left 0
          }

          ^[3].icon^[-1..-1] {
            background-color currentColor
          }
        }

        &:not(.icon) {
          &::after {
            display block
            box-sizing border-box
            border solid currentColor
            border-width 0.78em 0
          }

          &::before {
            border 1px solid currentColor
            background-color transparent
          }

          &.left::before {
            right "calc(%s + 0.02em)" % ($decorator-size/ -2)
            border-bottom none
            border-left none
          }

          &.right::before {
            left "calc(%s + 0.02em)" % ($decorator-size/ -2)
            border-top none
            border-right none
          }
        }
      }
    }
  }

  for c in $colors {
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
        color $current-color
        box-shadow-border()

        &:not(:disabled) {
          &:hover,
          &:focus {
            filter brightness(1.2)
          }

          &:active,
          &.active {
            opacity 0.7
          }
        }
      }

      &.with-label:not(.ghost) .label:not(.icon) {
        background-color #fff
        color $current-color
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
    cursor default
    opacity 0.45
  }

  .loading {
    loading()
    min-width 3em
  }

  &.animation {
    position relative
    z-index 1
    overflow hidden
    vertical-align middle

    .visible, .hidden {
      transition transform $animate-duration $default-easing,
        opacity $animate-duration $default-easing
      will-change transform, opacity
    }

    .hidden {
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      display flex
      align-items center
      justify-content center
    }

    &.horizontal {
      .visible {
        transform translateX(0)
      }

      .hidden {
        transform translateX(100%)
      }

      &:hover,
      &:active,
      &.active {
        .visible {
          transform translateX(-200%)
        }

        .hidden {
          transform translateX(0)
        }
      }
    }

    &.vertical {
      .visible {
        transform translateY(0)
      }

      .hidden {
        transform translateY(-100%)
      }

      &:hover,
      &:active,
      &.active {
        .visible {
          transform translateY(200%)
        }

        .hidden {
          transform translateY(0)
        }
      }
    }

    &.fade {
      .visible {
        opacity 1
        transform scale(1)
      }

      .hidden {
        opacity 0
        transform scale(1.5)
      }

      &:hover,
      &:active,
      &.active {
        .visible {
          opacity 0
          transform scale(0.75)
        }

        .hidden {
          opacity 1
          transform scale(1)
        }
      }
    }
  }
}
</style>
