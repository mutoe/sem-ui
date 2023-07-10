import { h, ref } from 'vue'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Placeholder from 'src/components/placeholder/Placeholder.vue'
import Segment from 'src/components/segment/Segment.vue'
import { text } from 'src/stories/fixture'
import { booleanProp, vNodeSlot } from 'src/stories/story-macro'

const meta = {
  component: Segment,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Segment.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    default: {
      ...vNodeSlot,
    },
    disabled: {
      ...booleanProp,
      description: 'Any interaction events in the Segment are disabled',
    },
    loading: {
      ...booleanProp,
      description: 'Show loading indicator and any interaction events in the Segment are disabled',
    },
    raised: { ...booleanProp },
    stacked: { ...booleanProp },
    tallStacked: { ...booleanProp },
    piled: { ...booleanProp },
    attached: { ...booleanProp },
    borderless: {
      description: 'Do not add border to Segment',
      ...booleanProp,
    },
  },
  args: {
    default: text,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Segment.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    return {
      components: { Segment },
      props: Object.keys(argTypes),
      setup () {
        return { action, args }
      },
      template: `<Segment
          ref="modal"
          v-bind="args"
          ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
          ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
          ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
        >
        ${Object.entries(slots).map(([nameWithSlot, argTypes]) =>
        `<template v-if="args.${nameWithSlot}" #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
      </Segment>`,
    }
  },
} satisfies Meta<typeof Segment>
export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Borderless: Story = {
  args: {
    borderless: true,
  },
}

export const WithPlaceholder: Story = {
  render: () => ({
    components: { Segment, Placeholder },
    template: ` 
      <Segment>
        <Placeholder paragraph />
      </Segment>
      
      <Segment borderless>
        <h3>Borderless</h3>
        <Placeholder paragraph />
      </Segment>
    `,
  }),
}

export const Raised: Story = {
  args: {
    raised: true,
  },
}

export const Stacked: Story = {
  args: {
    stacked: true,
  },
}

export const TallStacked: Story = {
  args: {
    tallStacked: true,
  },
}

export const Piled: Story = {
  args: {
    piled: true,
  },
}

export const Colored: Story = {
  render: () => ({
    components: { Segment },
    template: `
      <Segment red>Red</Segment>
      <Segment green>Green</Segment>
      <Segment blue>Blue</Segment>
      <Segment color="grey">Grey</Segment> 
    `,
  }),
}

export const Attached: Story = {
  render: () => ({
    components: { Segment },
    setup: () => ({ text }),
    template: `
      <div> 
        <Segment attached>Top</Segment>
        <Segment attached>Middle</Segment>
        <Segment attached pink>Pink</Segment>
        <Segment attached orange>Orange</Segment>
        <Segment attached color="olive">Olive</Segment>
        <Segment attached color="violet">Violet</Segment>
      </div>
      <div>
        <h3>Raised</h3>
        <Segment attached raised>{{ text }}</Segment>
        <Segment attached raised>{{ text }}</Segment> 
      </div>
      <div>
        <h3>Stacked</h3>
        <Segment attached stacked>{{ text }}</Segment>
        <Segment attached stacked>{{ text }}</Segment>
      </div>
      <div>
        <h3>Tall Stacked</h3>
        <Segment attached tall-stacked>{{ text }}</Segment>
        <Segment attached tall-stacked>{{ text }}</Segment>
      </div> 
    `,
  }),
}

export const Nested: Story = {
  render: () => ({
    components: { Segment },
    template: `
      <Segment attached>
        <span>Top</span>
        <Segment attached>Nested top</Segment>
        <Segment attached>Nested bottom</Segment>
      </Segment>
      <Segment attached>
        <Segment attached>Nested top</Segment>
        <Segment attached>Nested bottom</Segment>
        <span>Bottom</span>
      </Segment>
    `,
  }),
}
