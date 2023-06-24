<template>
  <section>
    <h2>Button</h2>

    <div class="field">
      <h3>Basic button</h3>
      <p>A standard button</p>

      <div>
        <Button>Basic</Button>
        <Button active>Active</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>

      <br>

      <div>
        <Button primary>Primary</Button>
        <Button primary active>Active</Button>
        <Button primary disabled>Disabled</Button>
        <Button primary loading>Loading</Button>
      </div>

      <br>

      <div>
        <Button secondary>Secondary</Button>
        <Button secondary active>Active</Button>
        <Button secondary disabled>Disabled</Button>
        <Button secondary loading>Loading</Button>
      </div>
    </div>

    <div class="field">
      <h3>Icon</h3>

      <div>
        <Button :left-icon="faShoppingCart" />
        <Button :left-icon="faShoppingCart" content="Shopping cart" />
        <Button :right-icon="faSignOut" content="Logout" />
        <Button loading :left-icon="faShoppingCart" />
        <Button loading :left-icon="faShoppingCart" content="Shopping cart" />
      </div>
    </div>

    <div class="field">
      <h3>Circular</h3>

      <div>
        <Button circular :left-icon="faShoppingCart" />
        <Button circular :left-icon="faShoppingCart" content="Shopping cart" />
        <Button circular :right-icon="faSignOut" content="Logout" />
        <Button loading circular :left-icon="faShoppingCart" />
        <Button loading circular :left-icon="faShoppingCart" content="Shopping cart" />
      </div>
    </div>

    <div class="field">
      <h3>Labeled icon</h3>

      <div>
        <Button :left-label-icon="faArrowLeft" content="Prev" />
        <Button :left-label-icon="faPause" content="Pause" />
        <Button :right-label-icon="faArrowRight" content="Next" />
        <Button circular :left-label-icon="faAlignLeft" content="Prev" />
        <Button circular :right-label-icon="faArrowRight" content="Next" />
        <Button loading :left-label-icon="faArrowLeft" content="Prev" />
        <Button loading :right-label-icon="faArrowRight" content="Next" />
        <Button loading circular :left-label-icon="faAlignLeft" content="Prev" />
        <Button loading circular :right-label-icon="faArrowRight" content="Next" />
      </div>
    </div>

    <div class="field">
      <h3>Labeled button</h3>

      <div>
        <Button red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button active red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button loading red :left-icon="faHeart">
          <template #default>Like</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button red :left-icon="faHeart">
          <template #default>Like</template>
          <template #leftLabel>12,325</template>
        </Button>
        <Button active red :left-icon="faHeart">
          <template #default>Like</template>
          <template #leftLabel>12,325</template>
        </Button>
        <Button loading red :left-icon="faHeart">
          <template #default>Like</template>
          <template #leftLabel>12,325</template>
        </Button>
      </div>
      <br>
      <div>
        <Button ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button active ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button loading ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #rightLabel>12,325</template>
        </Button>
        <Button ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #leftLabel>12,325</template>
        </Button>
        <Button active ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #leftLabel>12,325</template>
        </Button>
        <Button loading ghost blue :left-icon="faCodeBranch">
          <template #default>Fork</template>
          <template #leftLabel>12,325</template>
        </Button>
      </div>
    </div>

    <div class="field">
      <h3>Colored</h3>

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
      <br>
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
      <br>
      <div>
        <Button :left-label-icon="faPause">Basic button</Button>
        <Button :left-label-icon="faPause" primary>Primary</Button>
        <Button :left-label-icon="faPause" secondary>Secondary</Button>
        <Button :left-label-icon="faPause" positive>Positive</Button>
        <Button :left-label-icon="faPause" negative>Negative</Button>
        <Button :left-label-icon="faPause" positive disabled>Positive</Button>
        <Button :left-label-icon="faPause" negative disabled>Negative</Button>
      </div>
      <br>
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
      <br>
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
    </div>

    <div class="field">
      <h3>Ghost</h3>

      <div>
        <Button ghost>Ghost button</Button>
        <Button ghost primary>Primary</Button>
        <Button ghost secondary>Secondary</Button>
        <Button ghost positive>Positive</Button>
        <Button ghost negative>Negative</Button>
        <Button ghost :left-icon="faCodeBranch" />
        <Button ghost circular :left-icon="faCodeBranch" />
        <Button ghost circular orange :left-icon="faUser">Follow</Button>
      </div>
      <br>
      <div>
        <Button ghost :left-label-icon="faPause">Ghost button</Button>
        <Button ghost :left-label-icon="faPause" primary>Primary</Button>
        <Button ghost :left-label-icon="faPause" secondary>Secondary</Button>
        <Button ghost :left-label-icon="faPause" positive>Positive</Button>
        <Button ghost :left-label-icon="faPause" negative>Negative</Button>
      </div>
      <br>
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
      <br>
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

    <div class="field">
      <h3>Ghost</h3>

      <div class="dark">
        <div>
          <Button ghost>Ghost button</Button>
          <Button ghost primary>Primary</Button>
          <Button ghost secondary>Secondary</Button>
          <Button ghost positive>Positive</Button>
          <Button ghost negative>Negative</Button>
        </div>
        <br>
        <div>
          <Button ghost :left-label-icon="faPause">Ghost button</Button>
          <Button ghost :left-label-icon="faPause" primary>Primary</Button>
          <Button ghost :left-label-icon="faPause" secondary>Secondary</Button>
          <Button ghost :left-label-icon="faPause" positive>Positive</Button>
          <Button ghost :left-label-icon="faPause" negative>Negative</Button>
        </div>
        <br>
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
        <br>
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
    </div>

    <div class="field">
      <h3>Animated</h3>

      <div>
        <Button animated>
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
      </div>
    </div>

    <div class="field">
      <h3>Fluid</h3>

      <div>
        <Button fluid mini>Fits to Container</Button>
        <Button fluid small primary>Fits to Container</Button>
        <Button fluid secondary>Fits to Container</Button>
        <Button fluid ghost large positive :left-icon="faPause">Fits to Container</Button>
        <Button fluid massive negative :left-icon="faPause">Fits to Container</Button>
      </div>
    </div>

    <div class="field">
      <h3>Size</h3>

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
      <br>
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
      <br>
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
      <br>
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
      <br>
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
    </div>

    <div class="field">
      <h3>Button group</h3>

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
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight,
  faBold,
  faCodeBranch,
  faHeart,
  faPause,
  faShoppingCart, faSignOut,
  faStrikethrough,
  faUnderline,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import Button from 'src/components/Button.vue'
import ButtonGroup from 'src/components/ButtonGroup.vue'

</script>

<style lang="stylus" scoped>
.dark {
  padding 1em
  background $color-night
}
</style>
