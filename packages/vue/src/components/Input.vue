<template>
  <label :class="classes">
    <div v-if="slots.prepend || props.icon || props.loading" class="prepend">
      <slot name="prepend">
        <span v-if="loading" class="loading" />
        <Icon v-else :icon="props.icon" />
      </slot>
    </div>

    <input
      v-model="value"
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
import { computed, defineEmit, defineProps, useContext } from 'vue'
import pick from '../utils/pick'

export type InputType = 'text' | 'number' | 'tel' | 'url' | 'email'

const props = defineProps<{
  modelValue?: string

  type?: InputType
  number?: boolean
  tel?: boolean
  url?: boolean
  email?: boolean

  maxLength?: number
  placeholder?: string
  focus?: boolean
  loading?: boolean
  disabled?: boolean
  error?: boolean
  icon?: IconDefinition
}>()

const emit = defineEmit<{
  (e: 'update:modelValue', value: any): void
}>()

const value = computed<string>({
  get: () => props.modelValue || '',
  set: (val) => void emit('update:modelValue', val),
})

const { slots } = useContext()

const classes = [
  'sui-input',
  pick(props, 'focus'),
  { disabled: props.disabled, error: props.error },
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
$input-padding-vertical = 0.678em;
$input-padding-horizontal = 1em;

.sui-input {
  display inline-flex
  align-items center
  color $color-text
  padding: $input-padding-vertical ($input-padding-horizontal/ 2);
  border: 1px solid $border-color
  border-radius 0.218rem
  transition box-shadow .1s ease, border-color .1s ease
  vertical-align middle
  min-height $input-min-height

  input {
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
  }

  &:focus-within,
  &.focus {
    border-color $border-focus
    color $color-text
    box-shadow none
  }

  &.disabled {
    opacity: 0.45
  }

  &.error {
    background-color #fff6f6
    border-color #e0b4b4
    color #9f3a38

    input::placeholder {
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
