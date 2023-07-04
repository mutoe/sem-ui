import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Menu from 'src/components/Menu.vue'
import Segment from 'src/components/Segment.vue'
import { menuList } from 'src/stories/fixture'
import { booleanProp, vNodeSlot } from 'src/stories/story-macro'

const meta = {
  component: Menu,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Menu.emits as string[])?.join('|')})$`,
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
    list: menuList,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Menu.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    return {
      components: { Menu, Segment },
      props: Object.keys(argTypes),
      setup () {
        return { action, args }
      },
      template: `<Menu
            ref="modal"
            v-bind="args"
            ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
            ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
            ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
          >
          ${Object.entries(slots).map(([nameWithSlot, argTypes]) =>
        `<template v-if="args.${nameWithSlot}" #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
        </Menu>`,
    }
  },
} satisfies Meta<typeof Menu>
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
  render: () => ({
    components: { Menu, Segment },
    setup: () => ({ list: menuList }),
    template: `
      <Menu id="tabbed-menu" tabbed :list="list" activated-item="tab1" />
      <Segment attached>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci commodi delectus dolores, dolorum eius est fugiat, labore mollitia omnis qui ratione sapiente tempora temporibus vitae. Ad aspernatur eaque minima.
      </Segment> 
    `,
  }),
}
