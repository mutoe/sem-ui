<template>
  <form>
    <slot v-bind="formFieldsProps" />
  </form>
</template>

<script lang="ts" setup generic="F extends Record<keyof F, any> = {}">
import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import type { ErrorResult, Rule, ValidateResult, ValidationSchema } from '@mutoe/form-validator'
import { validateField } from '@mutoe/form-validator'

const props = withDefaults(defineProps<{
  modelValue?: F
  schema?: ValidationSchema<keyof F>
  /**
   * Specifies the trigger event for validating the input in a form field.
   *
   * - `'change'`: The validation is triggered when the value of the input field changes.
   * - `'input'`: The validation is triggered as the user types or deletes characters in the input field.
   * - `'blur'`: The validation is triggered when the input field loses focus (e.g., when the user clicks outside the field).
   * - `'none'`: The validation is not triggered automatically.
   *   You should manually trigger the validation by calling the `validateForm` or `validateField` method.
   *
   * @default 'blur'
   */
  validateTrigger?: 'change' | 'input' | 'blur' | 'none'
  errors?: ValidateResult<F>
}>(), {
  modelValue: () => ({} as F),
  schema: () => ({}),
  validateTrigger: 'blur',
  errors: () => ({}),
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: F): void
  (e: 'update:errors', value: ValidateResult<F>): void
}>()

const innerErrors: Ref<ValidateResult<F>> = ref({})

watch(() => props.errors, (value) => {
  innerErrors.value = value
})
watch(innerErrors, (value) => {
  emit('update:errors', value)
}, { deep: true })

function validateFormField (key: keyof F, value: unknown) {
  const rule: Rule = props.schema[key] || {}
  const fieldErrors = validateField(value, rule, props.modelValue)
  if (Object.keys(fieldErrors).length) {
    innerErrors.value[key] = fieldErrors
  } else {
    delete innerErrors.value[key]
  }
}

const formFieldsProps = computed(() => {
  const fieldEntries = Object.entries(props.modelValue) as [keyof F, any][]
  return Object.fromEntries(fieldEntries.map(([key, value]) => {
    const rule: Rule = props.schema[key] || {}
    const fieldProps: Record<string, any> = {
      label: rule.label,
      modelValue: value,
      error: innerErrors.value[key] as ErrorResult,
      onUpdateModelValue: (value: string) => {
        emit('update:modelValue', { ...props.modelValue, [key]: value })
      },
    }
    if (props.validateTrigger === 'input') {
      fieldProps.onInput = (value: string) => validateFormField(key, value)
    }
    if (props.validateTrigger === 'change') {
      fieldProps.onChange = (value: string) => validateFormField(key, value)
    }
    if (props.validateTrigger === 'blur') {
      fieldProps.onBlur = (value: string) => validateFormField(key, value)
    }
    if (['number', 'email', 'url', 'text'].includes(rule.type as string)) {
      fieldProps.type = rule.type
    }
    if ('maxLength' in rule && rule.maxLength) {
      fieldProps.maxLength = rule.maxLength
    }
    return [key, fieldProps]
  }))
})

</script>

<style lang="stylus" scoped>

</style>
