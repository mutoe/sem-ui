import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from 'src/components/button/Button.vue'
import Modal from 'src/components/modal/Modal.vue'

const meta = {
  component: Modal,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Modal.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    default: {
      description: 'Dialog main content',
      control: { type: 'text' },
      table: {
        type: { summary: 'VNode' },
        defaultValue: { summary: 'props.content' },
      },
    },
    header: {
      description: 'Dialog header',
      control: 'text',
      table: {
        type: { summary: 'VNode' },
        defaultValue: { summary: 'props.header', detail: '<h2>{{props.header}}</h2>' },
      },
    },
    actions: {
      description: 'The slot of what is displayed when the cursor hovers',
      control: { type: 'text' },
      table: {
        type: { summary: 'VNode' },
        defaultValue: { summary: 'Cancel and OK buttons', detail: '<Button>Cancel</Button>\n<Button primary>OK</Button>' },
      },
    },
    closeIcon: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
    confirm: {
      action: 'confirmed',
      table: {
        type: { summary: '() => void' },
      },
    },
    close: {
      action: 'closed',
      table: {
        type: {
          summary: `(reason) => void`,
          detail: '`reason` indicates how modal is turned off. It may have the following values:\n'
            + '  `backdrop`: When click backdrop\n'
            + '  `closeIcon`: When click close icon\n'
            + '  `cancel`: When click cancel button\n'
            + '  `call`: When call `ref.close` method from outside',
        },
      },
    },
  },
  args: {
    title: 'Archive Old Messages',
    content: 'Your inbox is getting full, would you like us to enable automatic archiving of old messages?',
    confirm: null,
    close: null,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Modal.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
      else if (v) attrs[k] = v
    }
    return {
      components: { Modal, Button },
      props: Object.keys(argTypes),
      setup () {
        const modal = ref<Sem.ModalRef>()
        return { action, args, modal }
      },
      template: `
        <Button @click="modal?.open()">Open modal</Button>
        <Modal
          ref="modal"
          v-bind="args"
          ${Object.keys(props).map(prop => args[prop] ? `:${prop}="args.${prop}"` : '').join('\n')}
          ${Object.keys(attrs).map(attr => args[attr] ? `:${attr}="args.${attr}"` : '').join('\n')}
          ${Object.keys(events).map(event => `@${event}="action('${event}')"`).join('\n')}
        >
        ${Object.entries(slots).map(([nameWithSlot, argTypes]) =>
        `<template v-if="args.${nameWithSlot}" #${argTypes.name}>{{args.${nameWithSlot}}}</template>`).join('\n')}
        </Modal>`,
    }
  },
} satisfies Meta<typeof Modal>
export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
