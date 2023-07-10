import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight, faBold,
  faCodeBranch,
  faHeart,
  faPause,
  faShoppingCart,
  faSignOut, faStrikethrough,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from 'src/components/button/Button.vue'
import ButtonGroup from 'src/components/button/ButtonGroup.vue'
import Icon from 'src/components/icon/Icon.vue'

const meta = {
  component: Button,
  parameters: {
    actions: {
      argTypesRegex: `^(${(Button.emits as string[])?.join('|')})$`,
    },
  },
  argTypes: {
    default: {
      description: 'The default slot',
      control: { type: 'text' },
      table: { type: { summary: 'node' } },
    },
    animated: {
      description: 'The slot of what is displayed when the cursor hovers',
      control: 'text',
      table: { type: { summary: 'node' } },
    },
    leftLabel: {
      description: 'The slot of what is displayed when the cursor hovers',
      control: { type: 'text' },
      table: { type: { summary: 'node' } },
    },
    rightLabel: {
      description: 'The slot of what is displayed when the cursor hovers',
      control: { type: 'text' },
      table: { type: { summary: 'node' } },
    },
    animation: {
      description: 'animation',
      control: 'inline-radio',
      options: ['horizontal', 'vertical', 'fade'],
      table: {
        category: 'props',
        type: { summary: 'enum' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    content: {
      control: 'text',
      description: 'If you only have plain text, you can using this prop',
      table: {
        category: 'props',
        type: { summary: 'text' },
      },
    },
    size: {
      description: 'The size of button<br>Also you can use `mini` `small` `large` `massive` prop directly',
      control: { type: 'inline-radio' },
      options: ['mini', 'small', 'middle', 'large', 'massive'],
      table: {
        category: 'props',
        type: { summary: 'enum' },
        defaultValue: { summary: 'middle' },
      },
    },
    active: {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      table: {
        category: 'props',
        defaultValue: { summary: 'false' },
      },
    },
    click: { action: 'clicked' },
  },
  args: {
    default: 'Button',
    click: null,
  },
  render: (args: Record<string, any>, { argTypes }) => {
    const attrs: Record<string, any> = {}
    const props: Record<string, any> = {}
    const slots: Record<string, any> = {}
    const events: Record<string, any> = {}
    for (const [k, argType] of Object.entries(argTypes) as any) {
      const v = args[k]
      if (k in Button.props) props[k] = v
      else if (argType.table?.category === 'slots') slots[k] = argType
      else if (argType.table?.category === 'events' && v) events[k] = v
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
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    default: 'Button',
  },
}

/**
 * Buttons can have the following states: `normal` `active` `disabled` and `loading`
 */
export const Status: Story = {
  render: (args) => {
    return {
      components: { Button },
      template: `
        <div> 
          <Button>Normal</Button>
          <Button active>Active</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div> 
        <br/> 
        <div> 
          <Button primary>Primary</Button>
          <Button primary active>Active</Button>
          <Button primary disabled>Disabled</Button>
          <Button primary loading>Loading</Button>
        </div> 
        <br/> 
        <div>
          <Button secondary>Secondary</Button>
          <Button secondary active>Active</Button>
          <Button secondary disabled>Disabled</Button>
          <Button secondary loading>Loading</Button> 
        </div>
      `,
    }
  },
}

export const IconStory: Story = {
  name: 'Icon',
  render: (args) => {
    return {
      components: { Button },
      setup () {
        return { faShoppingCart, faSignOut }
      },
      template: `
        <Button :left-icon="faShoppingCart" />
        <Button :left-icon="faShoppingCart" content="Shopping cart" />
        <Button :right-icon="faSignOut" content="Logout" />
        <Button loading :left-icon="faShoppingCart" />
        <Button loading :left-icon="faShoppingCart" content="Shopping cart" />
      `,
    }
  },
}

export const Circular: Story = {
  render: (args) => {
    return {
      components: { Button },
      setup () {
        return { faShoppingCart, faSignOut }
      },
      template: `
        <Button circular :left-icon="faShoppingCart" />
        <Button circular :left-icon="faShoppingCart" content="Shopping cart" />
        <Button circular :right-icon="faSignOut" content="Logout" />
        <Button loading circular :left-icon="faShoppingCart" />
        <Button loading circular :left-icon="faShoppingCart" content="Shopping cart" />
      `,
    }
  },
}

export const LabeledIcon: Story = {
  render: (args) => {
    return {
      components: { Button },
      setup () {
        return { faArrowLeft, faPause, faArrowRight, faAlignLeft, faAlignRight }
      },
      template: `
        <div> 
          <Button :left-label-icon="faArrowLeft" content="Prev" />
          <Button :left-label-icon="faPause" content="Pause" />
          <Button :right-label-icon="faArrowRight" content="Next" />
          <Button circular :left-label-icon="faAlignLeft" content="Left" />
          <Button circular :right-label-icon="faAlignRight" content="Right" />
        </div>
        <br/>
        <div> 
          <Button loading :left-label-icon="faArrowLeft" content="Prev" />
          <Button loading :right-label-icon="faArrowRight" content="Next" />
          <Button loading circular :left-label-icon="faAlignLeft" content="Prev" />
          <Button loading circular :right-label-icon="faArrowRight" content="Next" />
        </div>
      `,
    }
  },
}

export const LabeledButton: Story = {
  render: (args) => {
    return {
      components: { Button },
      setup () {
        return { faHeart, faCodeBranch }
      },
      template: `
        <div>
          <Button red :left-icon="faHeart">
            <template #default>Like</template>
            <template #rightLabel>12,325</template>
          </Button>
          <Button active red :left-icon="faHeart">
            <template #default>Like</template>
            <template #rightLabel>12,325</template>
          </Button>
          <Button disabled red :left-icon="faHeart">
            <template #default>Like</template>
            <template #rightLabel>12,325</template>
          </Button>
          <Button loading red :left-icon="faHeart">
            <template #default>Like</template>
            <template #rightLabel>12,325</template>
          </Button>
          <br/>
          <Button red :left-icon="faHeart">
            <template #default>Like</template>
            <template #leftLabel>12,325</template>
          </Button>
          <Button active red :left-icon="faHeart">
            <template #default>Like</template>
            <template #leftLabel>12,325</template>
          </Button>
          <Button disabled red :left-icon="faHeart">
            <template #default>Like</template>
            <template #leftLabel>12,325</template>
          </Button>
          <Button loading red :left-icon="faHeart">
            <template #default>Like</template>
            <template #leftLabel>12,325</template>
          </Button>
        </div>
        <br/>
        <div>
          <Button ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #rightLabel>12,325</template>
          </Button>
          <Button active ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #rightLabel>12,325</template>
          </Button>
          <Button disabled ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #rightLabel>12,325</template>
          </Button>
          <Button loading ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #rightLabel>12,325</template>
          </Button>
          <br/>
          <Button ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #leftLabel>12,325</template>
          </Button>
          <Button active ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #leftLabel>12,325</template>
          </Button>
          <Button disabled ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #leftLabel>12,325</template>
          </Button>
          <Button loading ghost blue :left-icon="faCodeBranch">
            <template #default>Fork</template>
            <template #leftLabel>12,325</template>
          </Button>
        </div>
      `,
    }
  },
}

export const Colored: Story = {
  render: args => ({
    components: { Button },
    setup: () => ({ faPause }),
    template: `
      <div>
        <Button>Basic button</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button positive>Positive</Button>
        <Button negative>Negative</Button>
        <Button color="grey">Grey</Button>
        <Button color="teal">Teal</Button>
        <Button color="violet">Violet</Button>
        <Button color="olive">Olive</Button>
        <Button color="orange">Orange</Button>
        <Button color="brown">Brown</Button>
        <Button color="pink">Pink</Button>
        <Button color="purple">Purple</Button>
        <Button color="yellow">Yellow</Button>
      </div>
      <br/>
      <div>
        <Button disabled>Disabled button</Button>
        <Button disabled primary>Primary</Button>
        <Button disabled secondary>Secondary</Button>
        <Button disabled positive>Positive</Button>
        <Button disabled negative>Negative</Button>
        <Button disabled color="grey">Grey</Button>
        <Button disabled color="teal">Teal</Button>
        <Button disabled color="violet">Violet</Button>
        <Button disabled color="olive">Olive</Button>
        <Button disabled color="orange">Orange</Button>
        <Button disabled color="brown">Brown</Button>
        <Button disabled color="pink">Pink</Button>
        <Button disabled color="purple">Purple</Button>
        <Button disabled color="yellow">Yellow</Button>
      </div>
      <br/>
      <div>
        <Button :left-label-icon="faPause">Basic button</Button>
        <Button :left-label-icon="faPause" primary>Primary</Button>
        <Button :left-label-icon="faPause" secondary>Secondary</Button>
        <Button :left-label-icon="faPause" positive>Positive</Button>
        <Button :left-label-icon="faPause" negative>Negative</Button>
        <Button :left-label-icon="faPause" positive disabled>Positive</Button>
        <Button :left-label-icon="faPause" negative disabled>Negative</Button>
      </div>
      <br/>
      <div>
        <Button :left-icon="faPause">
          <template #default>Basic button</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button :left-icon="faPause" primary>
          <template #default>Primary</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button :left-icon="faPause" secondary>
          <template #default>Secondary</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button :left-icon="faPause" positive>
          <template #default>Positive</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button :left-icon="faPause" negative>
          <template #default>Negative</template>
          <template #rightLabel>12,325</template>
        </Button>
      </div>
      <br/>
      <div>
        <Button red>Red</Button>
        <Button orange>Orange</Button>
        <Button yellow>Yellow</Button>
        <Button olive>Olive</Button>
        <Button green>Green</Button>
        <Button teal>Teal</Button>
        <Button blue>Blue</Button>
        <Button violet>Violet</Button>
        <Button purple>Purple</Button>
        <Button pink>Pink</Button>
        <Button brown>Brown</Button>
        <Button grey>Grey</Button>
        <Button black>Black</Button>
      </div>
    `,
  }),
}

export const Ghost: Story = {
  render: args => ({
    components: { Button },
    setup: () => ({ faPause }),
    template: `
      <div class="dark">
      <div>
        <Button ghost>Ghost button</Button>
        <Button ghost primary>Primary</Button>
        <Button ghost secondary>Secondary</Button>
        <Button ghost positive>Positive</Button>
        <Button ghost negative>Negative</Button>
      </div>
      <br/>
      <div>
        <Button ghost :left-label-icon="faPause">Ghost button</Button>
        <Button ghost :left-label-icon="faPause" primary>Primary</Button>
        <Button ghost :left-label-icon="faPause" secondary>Secondary</Button>
        <Button ghost :left-label-icon="faPause" positive>Positive</Button>
        <Button ghost :left-label-icon="faPause" negative>Negative</Button>
      </div>
      <br/>
      <div>
        <Button ghost :left-icon="faPause">
          <template #default>Ghost button</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button ghost :left-icon="faPause" primary>
          <template #default>Primary</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button ghost :left-icon="faPause" secondary>
          <template #default>Secondary</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button ghost :left-icon="faPause" positive>
          <template #default>Positive</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button ghost :left-icon="faPause" negative>
          <template #default>Negative</template>
          <template #rightLabel>12,325</template>
        </Button>
      </div>
      <br/>
      <div>
        <Button ghost red>Red</Button>
        <Button ghost orange>Orange</Button>
        <Button ghost yellow>Yellow</Button>
        <Button ghost olive>Olive</Button>
        <Button ghost green>Green</Button>
        <Button ghost teal>Teal</Button>
        <Button ghost blue>Blue</Button>
        <Button ghost violet>Violet</Button>
        <Button ghost purple>Purple</Button>
        <Button ghost pink>Pink</Button>
        <Button ghost brown>Brown</Button>
        <Button ghost grey>Grey</Button>
        <Button ghost black>Black</Button>
      </div>
      </div>
    `,
  }),
}

export const Animated: Story = {
  render: args => ({
    components: { Button, Icon },
    setup: () => ({ faArrowRight, faShoppingCart }),
    template: `
      <Button animation>
        Next
        <template #animated>
          <Icon :icon="faArrowRight" />
        </template>
      </Button>
      <Button animated="vertical">
        <Icon :icon="faShoppingCart" />
        <template #animated>Shop</template>
      </Button>
      <Button animated="fade">
        Sign-up for a Pro account
        <template #animated>$12.99 a month</template>
      </Button>
    `,
  }),
}

export const Fluid: Story = {
  render: () => ({
    components: { Button },
    setup: () => ({ faPause }),
    template: ` 
      <Button fluid mini>Fits to Container</Button>
      <Button fluid small primary>Fits to Container</Button>
      <Button fluid secondary>Fits to Container</Button>
      <Button fluid ghost large positive :left-icon="faPause">Fits to Container</Button>
      <Button fluid massive negative :left-icon="faPause">Fits to Container</Button>
    `,
  }),
}

export const Size: Story = {
  render: () => ({
    components: { Button },
    setup: () => ({ faPause, faHeart, faCodeBranch, faShoppingCart }),
    template: `
      <div>
        <Button mini>Mini</Button>
        <Button mini positive ghost>Mini</Button>
        <Button mini orange :left-label-icon="faPause">Pause</Button>
        <Button mini loading />
        <Button mini red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button mini ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button mini :left-icon="faShoppingCart" />
        <Button mini ghost :left-icon="faShoppingCart" />
        <Button mini circular :left-icon="faShoppingCart" />
        <Button mini circular ghost :left-icon="faShoppingCart" />
      </div>
      <br/>
      <div>
        <Button small>Small</Button>
        <Button small positive ghost>Small</Button>
        <Button small orange :left-label-icon="faPause">Pause</Button>
        <Button small loading />
        <Button small red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button small ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button small :left-icon="faShoppingCart" />
        <Button small ghost :left-icon="faShoppingCart" />
        <Button small circular :left-icon="faShoppingCart" />
        <Button small circular ghost :left-icon="faShoppingCart" />
      </div>
      <br/>
      <div>
        <Button>Default</Button>
        <Button ghost positive>Default</Button>
        <Button orange :left-label-icon="faPause">Pause</Button>
        <Button loading />
        <Button red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button :left-icon="faShoppingCart" />
        <Button ghost :left-icon="faShoppingCart" />
        <Button circular :left-icon="faShoppingCart" />
        <Button circular ghost :left-icon="faShoppingCart" />
      </div>
      <br/>
      <div>
        <Button large>Large</Button>
        <Button ghost large positive>Large</Button>
        <Button large orange :left-label-icon="faPause">Pause</Button>
        <Button large loading />
        <Button large red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button large ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button large :left-icon="faShoppingCart" />
        <Button large ghost :left-icon="faShoppingCart" />
        <Button large circular :left-icon="faShoppingCart" />
        <Button large circular ghost :left-icon="faShoppingCart" />
      </div>
      <br/>
      <div>
        <Button massive>Massive</Button>
        <Button massive ghost positive>Massive</Button>
        <Button massive orange :left-label-icon="faPause">Pause</Button>
        <Button massive loading />
        <Button massive red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button massive ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button massive :left-icon="faShoppingCart" />
        <Button massive ghost :left-icon="faShoppingCart" />
        <Button massive circular :left-icon="faShoppingCart" />
        <Button massive circular ghost :left-icon="faShoppingCart" />
      </div>
    `,
  }),
}

export const ButtonGroupStory: Story = {
  name: 'ButtonGroup',
  render: () => ({
    components: { Button, ButtonGroup },
    setup: () => ({
      faAlignCenter,
      faAlignJustify,
      faAlignLeft,
      faAlignRight,
      faArrowRight,
      faArrowLeft,
      faBold,
      faUnderline,
      faStrikethrough,
    }),
    template: `
      <div>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button>One</Button>
        <Button>Two</Button>
        <Button :right-label-icon="faArrowRight">Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button active :left-icon="faAlignLeft" />
        <Button :left-icon="faAlignCenter" />
        <Button :left-icon="faAlignRight" />
        <Button :left-icon="faAlignJustify" />
      </ButtonGroup>
      <ButtonGroup>
        <Button active :left-icon="faBold" />
        <Button :left-icon="faUnderline" />
        <Button :left-icon="faStrikethrough" />
      </ButtonGroup>
      <ButtonGroup size="large">
        <Button :left-icon="faArrowLeft" />
        <Button>2/10</Button>
        <Button :left-icon="faArrowRight" />
      </ButtonGroup>
      </div>
    `,
  }),
}
