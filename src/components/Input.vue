<template>
  <label :class="classes">
    <div v-if="slots.prepend || props.icon || props.loading" class="prepend">
      <slot name="prepend">
        <span v-if="loading" class="loading" />
        <Icon v-else :icon="props.icon" />
      </slot>
    </div>

    <input
      ref="inputRef"
      v-model="value"
      class="sui-input-element"
      :maxlength="props.maxLength"
      :placeholder="props.placeholder"
      :type="inputType"
      :disabled="props.disabled"
    />

    <div v-if="slots.append" class="append">
      <slot name="append"></slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useSlots } from '@vue/runtime-core'
import { computed } from 'vue'
import pick from '../utils/pick'

export type InputType = 'text' | 'number' | 'tel' | 'url' | 'email'

const props = defineProps<{
  modelValue?: string
  maxLength?: number
  placeholder?: string

  type?: InputType
  text?: boolean
  number?: boolean
  tel?: boolean
  url?: boolean
  email?: boolean

  focus?: boolean
  disabled?: boolean
  error?: boolean
  fluid?: boolean

  loading?: boolean
  icon?: IconDefinition
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const value = computed<string>({
  get: () => props.modelValue || '',
  set: val => void emit('update:modelValue', val),
})

const slots = useSlots()

const classes = [
  'sui-input',
  pick(props, ['focus', 'disabled', 'fluid', 'error']),
]

const inputType = props.type
  || (props.number && 'number')
  || (props.tel && 'tel')
  || (props.url && 'url')
  || (props.email && 'email')
  || (props.text && 'text')
  || undefined

let inputRef = $ref<HTMLInputElement | null>(null)

defineExpose({
  focus: () => void inputRef?.focus(),
})

</script>

<style lang="stylus" scoped>
$input-padding-vertical = 0.678em;
$input-padding-horizontal = 1em;

.sui-input {
  display inline-flex
  align-items center
  color $color-text
  padding: $input-padding-vertical ($input-padding-horizontal/ 2);
  border: 1px solid $border-color
  border-radius $border-radius
  transition box-shadow .1s ease, border-color .1s ease
  vertical-align middle
  line-height 1.21428571em

  &.fluid {
    width: 100%
  }

  .sui-input-element {
    flex auto
    display block
    max-width 100%
    font-size 100%
    outline 0
    padding 0 ($input-padding-horizontal/ 2)
    background-color transparent
    border none
    line-height 1.21em
    transition .1s ease, border-color .1s ease, box-shadow .1s ease
    color inherit

    &::placeholder {
      color: $color-placeholder
    }

    // Hide number input arrow buttons (for Chrome, Safari, Edge, Opera)
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance none
      margin 0
    }
    // Hide number input arrow buttons (for Firefox)
    &[type="number"] {
      -moz-appearance textfield
    }
  }

  &:focus-within,
  &.focus {
    border-color $border-focus
    color $color-text
    box-shadow none
  }

  &.disabled {
    opacity: 0.45
    background-color $color-disabled-background
  }

  &.error {
    background-color #fff6f6
    border-color #e0b4b4
    color #9f3a38

    .sui-input-element::placeholder {
      color #e7bdbc
    }
  }

  .prepend
  .append {
    display flex
    padding 0 ($input-padding-horizontal/ 2)
    align-items center
    color #909090
  }

  .loading {
    loading()
  }
}
</style>
