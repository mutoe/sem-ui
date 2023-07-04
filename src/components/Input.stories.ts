import { ref, watch } from 'vue'
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight, faBold,
  faCodeBranch, faEarth,
  faHeart,
  faPause, faSearch,
  faShoppingCart,
  faSignOut, faStrikethrough,
  faUnderline, faUser,
} from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from 'src/components/Button.vue'
import Input from 'src/components/Input.vue'
import omit from 'src/utils/omit'
import Icon from './Icon.vue'

const meta = {
  component: Input,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Input.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    'append': {
      table: {
        category: 'slots',
        type: { summary: 'VNode' },
      },
    },
    'prepend': {
      table: {
        category: 'slots',
        type: { summary: 'VNode' },
      },
    },
    'modelValue': {
      description: 'value',
      control: 'text',
      table: {
        category: 'props',
        type: { summary: 'string' },
      },
    },
    'maxLength': {
      description: 'max length',
      control: 'number',
      table: {
        category: 'props',
        type: { summary: 'number' },
      },
    },
    'placeholder': {
      control: 'text',
      description: 'Placeholder',
      table: {
        category: 'props',
        type: { summary: 'text' },
      },
    },
    'size': {
      description: 'The size of button<br>Also you can use `mini` `small` `large` `massive` prop directly',
      control: { type: 'inline-radio' },
      options: ['mini', 'small', 'middle', 'large', 'massive'],
      table: {
        category: 'props',
        type: { summary: 'enum' },
        defaultValue: { summary: 'middle' },
      },
    },
    'focus': {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    'disabled': {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    'loading': {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    'error': {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    'fluid': {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    'update:modelValue': {
      action: 'update:modelValue',
      table: {
        category: 'events',
      },
    },
  },
  args: {
    'modelValue': 'Hello',
    'update:modelValue': null,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Input.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    const { default: defaultSlot, ...otherSlots } = slots
    return {
      components: { Input },
      props: Object.keys(argTypes),
      setup (props) { return { action, args } },
      template: `<Input
        v-bind="args"
        ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
        ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
        ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
      >
      ${defaultSlot ? '{{args.default}}' : ''}
      ${Object.entries(otherSlots).map(([nameWithSlot, argTypes]) =>
        `<template #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
      </Input>`,
    }
  },
} satisfies Meta<typeof Input>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {},
}

export const Controlled: Story = {
  render: (args) => {
    return {
      components: { Input },
      setup () {
        const inputValue = ref('Hello')
        return { inputValue }
      },
      template: `
        <Input v-model:model-value="inputValue"></Input>
        <Input v-model:model-value="inputValue"></Input>
        Value: {{inputValue}}
      `,
    }
  },
}

export const Focus: Story = {
  render: () => {
    return {
      components: { Input, Button },
      setup () {
        const inputRef = ref<HTMLInputElement>()
        function handleFocus () {
          inputRef.value?.focus()
        }
        return { inputRef, handleFocus }
      },
      template: `
        <Input ref="inputRef"></Input>
        <Button @click="handleFocus">Focus to input component</Button>
      `,
    }
  },
}

/**
 * Input components can have different appearances to remind the user of the current state of the input box
 */
export const Status: Story = {
  render: args => ({
    components: { Input },
    template: `
      <Input focus placeholder="Focus"/>
      <Input disabled placeholder="Disabled"/>
      <Input error placeholder="Error"/>
    `,
  }),
}

/**
 * TypedInputs allows touchscreen devices to have a better interactive experience
 */
export const TypedInputs: Story = {
  render: (args) => {
    return {
      components: { Input },
      template: `
        <div>
          <Input :max-length="6" placeholder="Text (with max length 6)" />
          <Input email placeholder="Email" />
          <Input number placeholder="Number" />
          <Input tel placeholder="Telephone" />
          <Input url placeholder="URL" />
        </div> 
      `,
    }
  },
}

export const WithIcon: Story = {
  render: (args) => {
    return {
      components: { Input },
      setup: () => ({ faUser, faSearch }),
      template: `
        <div>
          <Input :icon="faUser" placeholder="Icon" />
          <Input loading :icon="faUser" placeholder="Loading" />
          <br/>
          <Input icon-position="right" :icon="faSearch" placeholder="Search..." />
          <Input icon-position="right" loading :icon="faUser" placeholder="Searching..." />
        </div>
      `,
    }
  },
}

export const PrependAppend: Story = {
  name: 'Prepend / Append Slots',
  render: (args) => {
    return {
      components: { Input, Icon },
      setup: () => ({ faEarth }),
      template: `
        <Input url>
        <template #prepend>https://</template>
        <template #append><Icon :icon="faEarth"/></template>
        </Input>
      `,
    }
  },
}

export const Fluid: Story = {
  render: args => ({
    components: { Input },
    template: `
      <Input fluid placeholder="Fluid"/>
    `,
  }),
}
