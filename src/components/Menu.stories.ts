import type { Meta, StoryObj } from '@storybook/vue3'
import Menu from './Menu.vue'

const meta = {
  component: Menu,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Menu.emits as string[])?.join('|')})$`,
    },
  },
  args: {
    list: ['Hello', 'World'],
  },
  argTypes: {
    list: {},
  },
} satisfies Meta<typeof Menu>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {},
}
