<template>
  <label class="sui-input-wrapper" :for="inputId">
    <div class="field-title">{{ label }}</div>
    <div :class="classes">
      <div
        v-if="slots.prepend || (props.icon || props.loading) && iconPosition === 'left'"
        :class="['prepend', { icon: props.icon ?? props.loading }]"
      >
        <slot name="prepend">
          <template v-if="iconPosition === 'left'">
            <span v-if="loading" class="loading" />
            <Icon v-else :icon="props.icon" />
          </template>
        </slot>
      </div>

      <input
        :id="inputId"
        ref="inputRef"
        v-model="value"
        class="sui-input-element"
        :maxlength="props.maxLength"
        :placeholder="props.placeholder"
        :type="inputType"
        :disabled="props.disabled"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      >

      <div
        v-if="slots.append || (props.icon || props.loading) && iconPosition === 'right'"
        :class="['append', { icon: props.icon ?? props.loading }]"
      >
        <slot name="append">
          <template v-if="iconPosition === 'right'">
            <span v-if="loading" class="loading" />
            <Icon v-else :icon="props.icon" />
          </template>
        </slot>
      </div>
    </div>

    <ul v-if="helperText.length" :class="['helper-text', {error}]">
      <li v-for="item in error" :key="item">{{ item }}</li>
    </ul>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import Icon from 'src/components/icon/Icon.vue'
import { useId } from 'src/composables'
import pick from 'src/utils/pick'

const defaultConfig: Sem.InputConfig = {
  iconPosition: 'left',
}
const inputConfig: Sem.InputConfig = Object.assign(defaultConfig, globalThis.__SEM_CONFIG?.input)

export type InputType = 'text' | 'number' | 'tel' | 'url' | 'email' | 'password'
const inputId = useId()

const props = defineProps<{
  label?: string
  modelValue?: string
  maxLength?: number
  placeholder?: string

  type?: InputType
  text?: boolean
  number?: boolean
  tel?: boolean
  url?: boolean
  email?: boolean
  password?: boolean

  focus?: boolean
  disabled?: boolean
  fluid?: boolean

  error?: boolean | string | string[]
  helperText?: string | string[]

  iconPosition?: Sem.InputConfig['iconPosition']
  loading?: boolean
  icon?: IconDefinition

  onUpdateModelValue?: (value: string) => void
  onChange?: (value: string, event: Event) => void
  onInput?: (value: string, event: Event) => void
  onBlur?: (value: string, event: Event) => void
}>()

const iconPosition: Sem.InputConfig['iconPosition'] = props.iconPosition ?? inputConfig.iconPosition

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur', value: string, event: FocusEvent): void
  (e: 'change', value: string, event: Event): void
  (e: 'input', value: string, event: Event): void
}>()

const value = computed<string>({
  get: () => props.modelValue || '',
  set: val => {
    emit('update:modelValue', val)
    props.onUpdateModelValue?.(val)
  },
})

const slots = useSlots()

const hasError = computed<boolean>(() => {
  if (props.error === 'string') return props.error.length > 0
  if (Array.isArray(props.error)) return props.error.length > 0
  return Boolean(props.error)
})

const classes = computed(() => [
  'sui-input',
  pick(props, ['focus', 'disabled', 'fluid']),
  { error: hasError.value },
])

// eslint-disable-next-line complexity
const inputType = computed<InputType | undefined>(() => (props.number && 'number')
  || (props.tel && 'tel')
  || (props.url && 'url')
  || (props.email && 'email')
  || (props.text && 'text')
  || (props.password && 'password')
  || props.type
  || undefined)

const inputRef = ref<HTMLInputElement | null>(null)

const helperText = computed<string[]>(() => {
  if (props.error === 'string') return [props.error]
  if (Array.isArray(props.error)) return props.error
  if (typeof props.helperText === 'string') return [props.helperText]
  if (Array.isArray(props.helperText)) return props.helperText
  return []
})

function handleBlur (e: FocusEvent) {
  const target = e.target as HTMLInputElement
  emit('blur', target.value, e)
  props.onBlur?.(target.value, e)
}
function handleChange (e: Event) {
  const target = e.target as HTMLInputElement
  emit('change', target.value, e)
  props.onChange?.(target.value, e)
}
function handleInput (e: Event) {
  const target = e.target as HTMLInputElement
  emit('input', target.value, e)
  props.onInput?.(target.value, e)
}

export interface InputRef {
  focus: () => void
}

defineExpose({
  focus: () => void inputRef.value?.focus(),
} as InputRef)
</script>

<style lang="stylus" scoped>
$input-padding-vertical = 0.678em
$input-padding-horizontal = 1em

.sui-input-wrapper {
  display inline-block
  vertical-align top
}

.helper-text {
  padding 0 1em
  margin 8px 0

  &.error {
    color #9f3a38
  }
}

.sui-input {
  display inline-flex
  align-items center
  padding $input-padding-vertical ($input-padding-horizontal/ 2)
  border 1px solid $color-border
  border-radius $border-radius
  color $color-text
  line-height 1.21428571em
  transition box-shadow 0.1s ease, border-color 0.1s ease
  vertical-align middle

  &.fluid {
    width 100%
  }

  .sui-input-element {
    display block
    max-width 100%
    flex auto
    padding 0 ($input-padding-horizontal/ 2)
    border none
    background-color transparent
    color inherit
    font-size 100%
    line-height 1.21em
    outline 0
    transition 0.1s ease, border-color 0.1s ease, box-shadow 0.1s ease

    &::placeholder {
      color $color-placeholder
    }

    // Hide number input arrow buttons (for Chrome, Safari, Edge, Opera)

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin 0
      -webkit-appearance none
    }

    // Hide number input arrow buttons (for Firefox)

    &[type="number"] {
      -moz-appearance textfield
    }
  }

  &:focus-within,
  &.focus {
    border-color $border-focus
    box-shadow none
    color $color-text
  }

  &.disabled {
    background-color $color-disabled-background
    opacity 0.45
  }

  &.error {
    border-color #e0b4b4
    background-color #fff6f6
    color #9f3a38

    .sui-input-element::placeholder {
      color #e7bdbc
    }
  }

  .prepend
  .append {
    display flex
    flex none
    align-items center
    padding 0
    color #909090
  }

  .prepend {
    padding-left ($input-padding-horizontal / 2)

    &.icon {
      padding-right ($input-padding-horizontal / 2)
    }

    &:not(.icon) + .sui-input-element {
      padding-left 0
    }
  }

  .append {
    padding-right ($input-padding-horizontal / 2)
    margin-left -($input-padding-horizontal / 2)
  }

  .loading {
    loading()
  }
}
</style>
