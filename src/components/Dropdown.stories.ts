import { ref, watch } from 'vue'
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight, faBold,
  faCodeBranch, faEarth,
  faHeart, faLanguage,
  faPause, faSearch,
  faShoppingCart,
  faSignOut, faStrikethrough,
  faUnderline, faUser,
} from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from 'src/components/Button.vue'
import Dropdown from 'src/components/Dropdown.vue'
import { countryOptions, fileOptions } from 'src/stories/fixture'
import omit from 'src/utils/omit'
import Icon from './Icon.vue'

const meta = {
  component: Dropdown,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Dropdown.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    default: {
      table: {
        category: 'slots',
        type: { summary: 'VNode' },
      },
    },
    value: {
      description: 'Current selected value',
      control: 'text',
      table: {
        category: 'props',
        type: { summary: 'string' },
      },
    },
    values: {
      description: 'Current selected value (when multiple is enabled)',
      control: 'array',
      table: {
        category: 'props',
        type: { summary: 'string[]' },
      },
    },
    options: {
      control: 'array',
      table: {
        type: {
          summary: 'Sem.Option[]', detail: `type Sem.Option<V = string | number> {
  value: V
  onClick?: (event: Event, value: V) => void
  text?: string
  description?: string
  hidden?: boolean
  disabled?: boolean
  divider?: boolean
  icon?: IconDefinition
}`,
        },
      },
    },
    change: {
      action: 'changed',
      table: {
        category: 'events',
      },
    },
  },
  args: {
    value: 'China',
    options: countryOptions,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Dropdown.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    return {
      components: { Dropdown },
      props: Object.keys(argTypes),
      setup: () => ({ action, args }),
      template: `<Dropdown
        v-bind="args"
        ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
        ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
        ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
      > 
      ${Object.entries(slots).map(([nameWithSlot, argTypes]) =>
        `<template #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
      </Dropdown>`,
    }
  },
} satisfies Meta<typeof Dropdown>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  decorators: [() => ({ template: `<div style="margin-bottom: 10em"><story/></div>` })],
  args: {
    text: 'File',
  },
}

export const Upward: Story = {
  decorators: [() => ({ template: `<div style="margin-top: 10em"><story/></div>` })],
  args: {
    text: 'File',
    upward: true,
  },
}

/**
 * Debug mode will not close dropdown list when focusout document.
 * (For example, when you want to debug the element style of the dropdown list)
 */
export const DebugMode: Story = {
  decorators: [() => ({ template: `<div style="margin-bottom: 10em"><story/></div>` })],
  args: {
    text: 'File',
    debug: true,
  },
}

export const Slotted: Story = {
  decorators: [() => ({ template: `<div style="margin-bottom: 15em"><story/></div>` })],
  render: () => ({
    components: { Dropdown, Button },
    setup: () => {
      const country = ref('')
      function onChange (option?: Sem.Option<string>) {
        country.value = option?.text || ''
      }
      return { countryOptions, faLanguage, onChange, country }
    },
    template: `
      <Dropdown text="File" :options="countryOptions" tabindex="-1" @change="onChange">
        <Button :left-label-icon="faLanguage">{{country || 'Select Language'}}</Button>
      </Dropdown> 
    `,
  }),
}

export const Compat: Story = {
  decorators: [() => ({
    template: `<div style="margin-bottom: 7em">
<p>The user is come from <story/></p></div>
`,
  })],
  args: {
    compat: true,
    text: 'China',
    options: countryOptions,
  },
}
