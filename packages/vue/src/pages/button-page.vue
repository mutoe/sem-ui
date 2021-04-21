<template>
  <section>
    <h2>Types</h2>

    <div class="field">
      <h3>Button</h3>
      <p>A standard button</p>

      <Button>Follow</Button>
    </div>

    <div class="field">
      <h3>Emphasis</h3>
      <p>A button can be formatted to show different levels of emphasis</p>

      <div>
        <Button theme="primary">Save</Button>
        <Button theme="secondary">Okay</Button>
        <Button>Cancel</Button>
      </div>
    </div>

    <div class="field">
      <h3>Animated</h3>
      <p>A button can animate to show hidden content</p>

      <div>
        <Button animated>
          Next
          <template v-slot:animated>👉</template>
        </Button>
        <Button animated="vertical">
          🛒
          <template v-slot:animated>Shop</template>
        </Button>
        <Button animated="fade">
          Sign-up for a Pro account
          <template v-slot:animated>$12.99 a month</template>
        </Button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
</script>
