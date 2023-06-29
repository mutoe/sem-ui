<template>
  <section>
    <h2>Menu</h2>

    <div class="field">
      <h3>Basic menu</h3>

      <div>
        <Menu id="basic-menu" :list="list" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Menu from 'src/components/Menu.vue'

const list = [
  { title: 'Tab1', key: 'tab1' },
  { title: 'Tab2', key: 'tab2' },
]
</script>
