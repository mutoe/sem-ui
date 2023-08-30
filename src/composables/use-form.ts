import type { Ref } from 'vue'
import { reactive, ref } from 'vue'
import type { ValidateResult, ValidationSchema } from '@mutoe/form-validator'
import { validateForm } from '@mutoe/form-validator'

export default function useForm<F extends Record<keyof F, any>> (formData: F, schema: ValidationSchema<F> = {}, api?: (form: F) => void | Promise<void>) {
  const form: Ref<F> = ref(formData) as Ref<F>
  const errors: Ref<ValidateResult<F>> = ref({})
  const submitting = ref(false)

  function isFormValid (): boolean {
    const result = validateForm(form.value, schema)
    errors.value = result
    return !Object.values(result).some(Boolean)
  }

  const formProps = reactive({
    modelValue: form,
    onUpdateModelValue: (newForm: F) => void (form.value = newForm),
    errors,
    onUpdateErrors: (newErrors: ValidateResult<F>) => void (errors.value = newErrors),
    schema,
  })

  function parseErrorResponse (error: any) {
    if (error?.response?.status !== 400 || !error?.response?.data) return
    errors.value = JSON.parse(error.response.data)
  }

  const formEvents = reactive({
    submit: api
      ? async (event: Event) => {
        event.preventDefault()
        if (!isFormValid()) return

        try {
          submitting.value = true
          await api(form.value)
        } catch (error) {
          parseErrorResponse(error)
        } finally {
          submitting.value = false
        }
      }
      : undefined,
  })

  return {
    form,
    errors,
    schema,
    formProps,
    formEvents,
    isFormValid,
    parseErrorResponse,
    submitting,
  }
}
