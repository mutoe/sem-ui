<template>
  <section>
    <h2>Input</h2>

    <div class="field">
      <h3>Text input</h3>

      <div>
        <Input placeholder="Text"/>
        <Input email placeholder="Email"/>
        <Input number placeholder="Number"/>
        <Input tel placeholder="Telephone"/>
        <Input url placeholder="URL"/>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import Input from 'src/components/Input.vue'
</script>
