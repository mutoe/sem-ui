import { h, ref } from 'vue'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Placeholder from 'src/components/placeholder/Placeholder.vue'
import Segment from 'src/components/segment/Segment.vue'
import { booleanProp, vNodeSlot } from 'src/stories/story-macro'

const meta = {
  component: Placeholder,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Placeholder.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    lines: {
      description: 'Indicate how many lines will be shown.\n\nIf pass in `true`, will be equivalent pass in `1`',
      control: 'number',
      table: {
        type: { summary: 'number | boolean' },
      },
    },
    paragraph: {
      description: 'Indicate how many lines will be shown. (This props will set the uneven to be `true` as default)\n\nIf pass in `true`, will be equivalent pass in `3`',
      control: 'number',
      table: {
        type: { summary: 'number | boolean' },
      },
    },
    image: {
      description: 'Display as a image placeholder.\n\nIf pass in number, will as the image aspect radio',
      control: 'boolean',
      table: {
        type: { summary: 'boolean | number' },
      },
    },
    uneven: {
      ...booleanProp,
    },
  },
  args: {},
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Placeholder.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    return {
      components: { Placeholder, Segment },
      props: Object.keys(argTypes),
      setup () {
        return { action, args }
      },
      template: `<Segment> 
          <Placeholder
            ref="modal"
            v-bind="args"
            ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
            ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
            ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
          >
          ${Object.entries(slots).map(([nameWithSlot, argTypes]) =>
        `<template v-if="args.${nameWithSlot}" #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
        </Placeholder>
      </Segment>`,
    }
  },
} satisfies Meta<typeof Placeholder>
export default meta

type Story = StoryObj<typeof meta>

export const Paragraph: Story = {
  args: { paragraph: true },
}

export const Lines: Story = {
  args: { lines: true },
}

export const Image: Story = {
  args: { image: true },
}
