<template>
  <section>
    <h2>Types</h2>

    <div class="field">
      <h3>Button</h3>
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
  </section>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
</script>
