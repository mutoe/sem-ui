import { reactive, ref } from 'vue'
import type { ValidateResult } from '@mutoe/form-validator'
import { validateForm } from '@mutoe/form-validator'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from 'src/components/button/Button.vue'
import Form from 'src/components/form/Form.vue'
import Input from 'src/components/input/Input.vue'
import type { ValidationSchema } from '../form-validator'

const meta = {
  component: Form,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Form>
export default meta

type Story = StoryObj<typeof meta>

const passwordRegexp: { pattern: RegExp, message: string } = {
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]+$/,
  message: 'Password must contain at least one uppercase letter, one lowercase letter and one number',
}
const schema: ValidationSchema<typeof form> = {
  username: { type: 'text', label: 'Username', maxLength: 32, required: true },
  email: { type: 'email', label: 'Email', required: true },
  password: { type: 'text', label: 'Password', minLength: 6, maxLength: 16, required: true, regexp: passwordRegexp },
}

export const Basic: Story = {
  render: args => {
    return {
      components: { Form, Input, Button },
      template: `
        <Form v-model="form" v-model:errors="errors" :schema="schema" v-slot="field" @submit.prevent="onSubmit" style="display: flex; flex-direction: column;" >
          <Input v-bind="field.username" placeholder="Enter your username"></Input>
          <Input v-bind="field.email" placeholder="Enter your email"></Input>
          <Input v-bind="field.password" password placeholder="Enter your password"></Input>

          <Button type="submit">Submit</Button>
          
          <div :style="{display: 'flex'}">
            <pre>form: {{form}}</pre>
            <pre>errors: {{errors}}</pre>
            <pre>field props: {{field}}</pre>
          </div>
        </Form>
      `,
      setup () {
        const form = ref({
          username: '',
          email: '',
          password: '',
        })
        const errors = ref<ValidateResult<typeof form>>({})

        function onSubmit () {
          errors.value = validateForm(form.value, schema)
          if (Object.keys(errors.value).length) return console.log('invalid')
          console.log('valid')
        }
        return { form, schema, errors, onSubmit }
      },
    }
  },
}
