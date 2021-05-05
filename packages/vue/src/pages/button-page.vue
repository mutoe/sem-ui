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
        <Button red>red</Button>
        <Button orange>orange</Button>
        <Button yellow>yellow</Button>
        <Button olive>olive</Button>
        <Button green>green</Button>
        <Button teal>teal</Button>
        <Button blue>blue</Button>
        <Button violet>violet</Button>
        <Button purple>purple</Button>
        <Button pink>pink</Button>
        <Button brown>brown</Button>
        <Button grey>grey</Button>
        <Button black>black</Button>
      </div>
    </div>

    <div class="field">
      <h3>Animated</h3>
      <p>A button can animate to show hidden content</p>

      <div>
        <Button animated>
          Next
          <template #animated>👉</template>
        </Button>
        <Button animated="vertical">
          🛒
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
  </section>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
</script>
