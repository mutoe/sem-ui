<template>
  <div class="sui-input">
    <input :class="classes" :type="inputType" :maxlength="props.maxLength" :placeholder="props.placeholder">
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import pick from '../utils/pick'

export type InputType = 'text' | 'number' | 'tel' | 'url' | 'email'

const props = defineProps<{
  type?: InputType
  number?: boolean
  tel?: boolean
  url?: boolean
  email?: boolean

  maxLength?: number
  placeholder?: string
  focus?: boolean
}>()

const classes = [
  pick(props, 'focus'),
]

const inputType = props.type
  || (props.number && 'number')
  || (props.tel && 'tel')
  || (props.url && 'url')
  || (props.email && 'email')
  || (props.email && 'email')
  || undefined
</script>

<style lang="stylus" scoped>
.sui-input {
  display inline-flex
  color $color-text

  input {
    max-width 100%
    font-size 100%
    outline 0
    padding: 0.678em 1em;
    background-color #fff
    border: 1px solid $border-color
    border-radius 0.218rem
    line-height 1.21em
    transition .1s ease, border-color .1s ease, box-shadow .1s ease

    &:focus
    &.focus {
      border-color $border-focus
      color $color-text
      box-shadow none
    }

    &::placeholder {
      color: $color-placeholder
    }
  }
}
</style>
