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
        <Button basic blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
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
      <h3>Basic</h3>

      <div>
        <Button basic>Basic button</Button>
        <Button basic primary>Primary</Button>
        <Button basic secondary>Secondary</Button>
        <Button basic positive>Positive</Button>
        <Button basic negative>Negative</Button>
      </div>
      <br />
      <div>
        <Button basic :leftLabelIcon="faPause">Basic button</Button>
        <Button basic :leftLabelIcon="faPause" primary>Primary</Button>
        <Button basic :leftLabelIcon="faPause" secondary>Secondary</Button>
        <Button basic :leftLabelIcon="faPause" positive>Positive</Button>
        <Button basic :leftLabelIcon="faPause" negative>Negative</Button>
      </div>
      <br />
      <div>
        <Button basic :icon="faPause">
          <template v-slot:default>Basic button</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button basic :icon="faPause" primary>
          <template v-slot:default>Primary</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button basic :icon="faPause" secondary>
          <template v-slot:default>Secondary</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button basic :icon="faPause" positive>
          <template v-slot:default>Positive</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button basic :icon="faPause" negative>
          <template v-slot:default>Negative</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button basic red>Red</Button>
        <Button basic orange>Orange</Button>
        <Button basic yellow>Yellow</Button>
        <Button basic olive>Olive</Button>
        <Button basic green>Green</Button>
        <Button basic teal>Teal</Button>
        <Button basic blue>Blue</Button>
        <Button basic violet>Violet</Button>
        <Button basic purple>Purple</Button>
        <Button basic pink>Pink</Button>
        <Button basic brown>Brown</Button>
        <Button basic grey>Grey</Button>
        <Button basic black>Black</Button>
      </div>
    </div>

    <div class="field">
      <h3>Icon</h3>

      <div>
        <Button :icon="faShoppingCart" />
        <Button :icon="faShoppingCart" content="Shopping cart" />
      </div>
    </div>

    <div class="field">
      <h3>Labeled icon</h3>

      <div>
        <Button :leftLabelIcon="faArrowLeft" content="Prev" />
        <Button :leftLabelIcon="faPause" content="Pause" />
        <Button :rightLabelIcon="faArrowRight" content="Next" />
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
        <Button fluid basic large positive :icon="faPause">Fits to Container</Button>
        <Button fluid massive negative :icon="faPause">Fits to Container</Button>
      </div>
    </div>

    <div class="field">
      <h3>Size</h3>

      <div>
        <Button mini>Mini</Button>
        <Button mini orange :leftLabelIcon="faPause">Pause</Button>
        <Button mini loading></Button>
        <Button mini red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button mini basic blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button small>Small</Button>
        <Button small orange :leftLabelIcon="faPause">Pause</Button>
        <Button small loading></Button>
        <Button small red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button small basic blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button>Default</Button>
        <Button orange :leftLabelIcon="faPause">Pause</Button>
        <Button loading></Button>
        <Button red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button basic blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button large>Large</Button>
        <Button large orange :leftLabelIcon="faPause">Pause</Button>
        <Button large loading></Button>
        <Button large red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button large basic blue :icon="faCodeBranch">
          <template v-slot:default>Fork</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
      </div>
      <br />
      <div>
        <Button massive>Massive</Button>
        <Button massive orange :leftLabelIcon="faPause">Pause</Button>
        <Button massive loading></Button>
        <Button massive red :icon="faHeart">
          <template v-slot:default>Like</template>
          <template v-slot:rightLabel>12,325</template>
        </Button>
        <Button massive basic blue :icon="faCodeBranch">
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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from "src/components/Button.vue";
import ButtonGroup from "src/components/ButtonGroup.vue";
import { faCodeBranch, faHeart, faArrowRight, faArrowLeft, faShoppingCart, faPause } from "@fortawesome/free-solid-svg-icons";
</script>
