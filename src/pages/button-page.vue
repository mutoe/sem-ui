<template>
  <section>
    <h2>Button</h2>

    <div class="field">
      <h3>Basic button</h3>
      <p>A standard button</p>

      <div>
        <Button>Follow</Button>
        <Button active>Active</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>

      <br />

      <div>
        <Button primary>Follow</Button>
        <Button primary active>Active</Button>
        <Button primary disabled>Disabled</Button>
        <Button primary loading>Loading</Button>
      </div>

      <br />

      <div>
        <Button secondary>Follow</Button>
        <Button secondary active>Active</Button>
        <Button secondary disabled>Disabled</Button>
        <Button secondary loading>Loading</Button>
      </div>
    </div>

    <div class="field">
      <h3>Labeled button</h3>

      <div>
        <Button red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button active red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button disabled red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button loading red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
        <Button active red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
        <Button disabled red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
        <Button loading red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
      </div>
      <br>
      <div>
        <Button ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button active ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button disabled ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button loading ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
        <Button active ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
        <Button disabled ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
        <Button loading ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:leftLabel>12,325</template>
        </Button>
      </div>
    </div>

    <div class="field">
      <h3>Colored</h3>
      <p>A button can have different containers.</p>

      <div>
        <Button>Basic button</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button positive>Positive</Button>
        <Button negative>Negative</Button>
      </div>
      <br />
      <div>
        <Button :leftLabelIcon="faPause">Basic button</Button>
        <Button :leftLabelIcon="faPause" primary>Primary</Button>
        <Button :leftLabelIcon="faPause" secondary>Secondary</Button>
        <Button :leftLabelIcon="faPause" positive>Positive</Button>
        <Button :leftLabelIcon="faPause" negative>Negative</Button>
      </div>
      <br />
      <div>
        <Button :icon="faPause">
          <template v-slot:default>Basic button</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button :icon="faPause" primary>
          <template v-slot:default>Primary</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button :icon="faPause" secondary>
          <template v-slot:default>Secondary</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button :icon="faPause" positive>
          <template v-slot:default>Positive</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button :icon="faPause" negative>
          <template v-slot:default>Negative</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
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
        <Button ghost :icon="faCodeBranch" />
        <Button ghost circular :icon="faCodeBranch" />
        <Button ghost circular orange :icon="faUser">Follow</Button>
      </div>
      <br />
      <div>
        <Button ghost :leftLabelIcon="faPause">Ghost button</Button>
        <Button ghost :leftLabelIcon="faPause" primary>Primary</Button>
        <Button ghost :leftLabelIcon="faPause" secondary>Secondary</Button>
        <Button ghost :leftLabelIcon="faPause" positive>Positive</Button>
        <Button ghost :leftLabelIcon="faPause" negative>Negative</Button>
      </div>
      <br />
      <div>
        <Button ghost :icon="faPause">
          <template v-slot:default>Ghost button</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button ghost :icon="faPause" primary>
          <template v-slot:default>Primary</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button ghost :icon="faPause" secondary>
          <template v-slot:default>Secondary</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button ghost :icon="faPause" positive>
          <template v-slot:default>Positive</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button ghost :icon="faPause" negative>
          <template v-slot:default>Negative</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
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
        <br />
        <div>
          <Button ghost :leftLabelIcon="faPause">Ghost button</Button>
          <Button ghost :leftLabelIcon="faPause" primary>Primary</Button>
          <Button ghost :leftLabelIcon="faPause" secondary>Secondary</Button>
          <Button ghost :leftLabelIcon="faPause" positive>Positive</Button>
          <Button ghost :leftLabelIcon="faPause" negative>Negative</Button>
        </div>
        <br />
        <div>
          <Button ghost :icon="faPause">
            <template v-slot:default>Ghost button</template>
            <template v-slot:rightLabel>12,325</template>
          </Button>
          <Button ghost :icon="faPause" primary>
            <template v-slot:default>Primary</template>
            <template v-slot:rightLabel>12,325</template>
          </Button>
          <Button ghost :icon="faPause" secondary>
            <template v-slot:default>Secondary</template>
            <template v-slot:rightLabel>12,325</template>
          </Button>
          <Button ghost :icon="faPause" positive>
            <template v-slot:default>Positive</template>
            <template v-slot:rightLabel>12,325</template>
          </Button>
          <Button ghost :icon="faPause" negative>
            <template v-slot:default>Negative</template>
            <template v-slot:rightLabel>12,325</template>
          </Button>
        </div>
        <br />
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
      <p>A button can animate to show hidden content</p>

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
      <p>A button can take the width of its container.</p>

      <div>
        <Button fluid mini>Fits to Container</Button>
        <Button fluid small primary>Fits to Container</Button>
        <Button fluid secondary>Fits to Container</Button>
        <Button fluid ghost large positive :icon="faPause">Fits to Container</Button>
        <Button fluid massive negative :icon="faPause">Fits to Container</Button>
      </div>
    </div>

    <div class="field">
      <h3>Size</h3>

      <div>
        <Button mini>Mini</Button>
        <Button mini positive ghost>Mini</Button>
        <Button mini orange :leftLabelIcon="faPause">Pause</Button>
        <Button mini loading></Button>
        <Button mini red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button mini ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button small>Small</Button>
        <Button small positive ghost>Small</Button>
        <Button small orange :leftLabelIcon="faPause">Pause</Button>
        <Button small loading></Button>
        <Button small red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button small ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button>Default</Button>
        <Button ghost positive>Default</Button>
        <Button orange :leftLabelIcon="faPause">Pause</Button>
        <Button loading></Button>
        <Button red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button large>Large</Button>
        <Button ghost large positive>Large</Button>
        <Button large orange :leftLabelIcon="faPause">Pause</Button>
        <Button large loading></Button>
        <Button large red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button large ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button massive>Massive</Button>
        <Button massive ghost positive>Massive</Button>
        <Button massive orange :leftLabelIcon="faPause">Pause</Button>
        <Button massive loading></Button>
        <Button massive red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button massive ghost blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
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
          <Button :rightLabelIcon="faArrowRight">Three</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button active :icon="faAlignLeft"></Button>
          <Button :icon="faAlignCenter"></Button>
          <Button :icon="faAlignRight"></Button>
          <Button :icon="faAlignJustify"></Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button active :icon="faBold"></Button>
          <Button :icon="faUnderline"></Button>
          <Button :icon="faStrikethrough"></Button>
        </ButtonGroup>
        <ButtonGroup size="large">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
import ButtonGroup from 'src/components/ButtonGroup.vue'
import {
  faAlignLeft,
  faAlignRight,
  faAlignCenter,
  faAlignJustify,
  faBold,
  faUnderline,
  faStrikethrough,
  faCodeBranch,
  faHeart,
  faArrowRight,
  faArrowLeft,
  faShoppingCart,
  faPause,
} from '@fortawesome/free-solid-svg-icons'
</script>

<style lang="stylus" scoped>
.dark {
  padding 1em
  background $color-night
}
</style>
