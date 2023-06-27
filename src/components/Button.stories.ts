import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  component: Button,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Button.emits as string[])?.join('|')})$`,
    },
  },
  args: {
    default: 'Button',
    click: null,
  },
  argTypes: {
    size: {
      control: { type: 'text' },
      table: { category: 'props' },
    },
    default: {
      description: 'The default slot',
      control: { type: 'text' },
      table: { category: 'slots', type: { summary: 'html' } },
    },
    animated: {
      description: 'animation',
      control: { type: 'boolean', defaultValue: false },
      table: { category: 'props' },
    },
    animatedSlot: {
      name: 'animated',
      description: 'The slot of what is displayed when the cursor hovers',
      control: { type: 'text' },
      table: { category: 'slots', type: { summary: 'html' } },
    },
    leftLabel: {
      description: 'The slot of what is displayed when the cursor hovers',
      control: { type: 'text' },
      table: { type: { summary: 'html' } },
    },
    rightLabel: {
      description: 'The slot of what is displayed when the cursor hovers',
      control: { type: 'text' },
      table: { type: { summary: 'html' } },
    },
    click: { action: 'clicked' },
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (k in Button.props) props[k] = v
      else if (v) attrs[k] = v
    }
    const { default: defaultSlot, ...otherSlots } = slots
    return {
      components: { Button },
      props: Object.keys(argTypes),
      setup () { return { action, args } },
      template: `<Button
        v-bind="args"
        ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
        ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
        ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
      >
      ${defaultSlot ? '{{args.default}}' : ''}
      ${Object.entries(otherSlots).map(([nameWithSlot, argTypes]) =>
        `<template #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
      </Button>`,
    }
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export default meta

export const Basic: Story = {
  args: {
    default: 'Basic button',
  },
}

export const Animated: Story = {
  args: {
    default: 'Hover me',
    animated: true,
    animatedSlot: 'Animated',
  },
}
