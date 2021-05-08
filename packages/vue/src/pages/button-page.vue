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

      <br>

      <div>
        <Button primary>Follow</Button>
        <Button primary active>Active</Button>
        <Button primary disabled>Disabled</Button>
        <Button primary loading>Loading</Button>
      </div>

      <br>

      <div>
        <Button secondary>Follow</Button>
        <Button secondary active>Active</Button>
        <Button secondary disabled>Disabled</Button>
        <Button secondary loading>Loading</Button>
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
        <br>
        <br>

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
        <br>
        <br>

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
        <Button fluid>Fits to Container</Button>
      </div>
    </div>

    <div class="field">
      <h3>Size</h3>

      <div>
        <Button mini>Mini</Button>
        <Button small>Small</Button>
        <Button>Default</Button>
        <Button large>Large</Button>
        <Button massive>Massive</Button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
import { faArrowRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
</script>
