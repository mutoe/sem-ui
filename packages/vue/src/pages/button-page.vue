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

  </section>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
</script>
