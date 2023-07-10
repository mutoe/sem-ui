import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Tabs from 'src/components/tabs/Tabs.vue'
import { menuList, tabList } from 'src/stories/fixture'

const meta = {
  component: Tabs,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Tabs.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    list: {
      control: 'array',
      table: {
        type: { summary: 'MenuItem[]' },
      },
    },
    activatedItem: {
      description: 'Indicate current activated item key(`string`) or index(`number`).',
      control: 'object',
      table: {
        type: { summary: 'number|string' },
      },
    },
    id: {
      description: 'Document `id` attribute',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    list: tabList,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Tabs.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    return {
      components: { Tabs },
      props: Object.keys(argTypes),
      setup () {
        return { action, args }
      },
      template: `<Tabs
            ref="modal"
            v-bind="args"
            ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
            ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
            ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
          >
          ${Object.entries(slots).map(([nameWithSlot, argTypes]) =>
        `<template v-if="args.${nameWithSlot}" #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
        </Tabs>`,
    }
  },
} satisfies Meta<typeof Tabs>
export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: { activatedItem: 'tab1' },
}

export const Secondary: Story = {
  args: { activatedItem: 'tab1', secondary: true },
}

export const Indicator: Story = {
  args: { activatedItem: 'tab1', secondary: true, indicator: true },
}

export const Tabbed: Story = {
  args: { activatedItem: 'tab1', tabbed: true },
}

export const Gutter: Story = {
  render: () => ({
    components: { Tabs },
    setup: () => ({ list: tabList }),
    template: `
      <h3>Normal gutter</h3>
      <Tabs indicator gutter :list="list" />
      
      <h3>Secondary gutter</h3>
      <Tabs secondary gutter :list="list" />
      
      <h3>Indicator gutter</h3>
      <Tabs secondary gutter indicator :list="list" /> 
    `,
  }),
}
