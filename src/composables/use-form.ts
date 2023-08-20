import type { Ref } from 'vue'
import { reactive, ref } from 'vue'
import type { ValidateResult, ValidationSchema } from '@mutoe/form-validator'
import { validateForm } from '@mutoe/form-validator'

export default function useForm<F extends Record<keyof F, any>> (formData: F, schema: ValidationSchema<F> = {}) {
  const form: Ref<F> = ref(formData) as Ref<F>
  const errors: Ref<ValidateResult<F>> = ref({})

  function isFormValid (): boolean {
    const result = validateForm(form.value, schema)
    errors.value = result
    return !Object.values(result).some(Boolean)
  }

  const formBinding = reactive({
    modelValue: form,
    onUpdateModelValue: (newForm: F) => void (form.value = newForm),
    errors,
    onUpdateErrors: (newErrors: ValidateResult<F>) => void (errors.value = newErrors),
    schema,
  })

  return {
    form,
    errors,
    schema,
    formBinding,
    isFormValid,
  }
}
