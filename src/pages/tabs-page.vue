<template>
  <section>
    <h2>Tabs</h2>

    <div class="field">
      <h3>Basic tabs</h3>

      <div>
        <Tabs :list="list" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Tabs from 'src/components/Tabs.vue'

const list = [
  { title: 'Tab1', content: 'Tab1 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolores ipsa ipsum iusto, maiores obcaecati odit saepe sapiente sed? Animi deleniti excepturi incidunt magnam similique temporibus unde vitae voluptate!' },
  { title: 'Tab2', content: 'Tab2 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolores ipsa ipsum iusto, maiores obcaecati odit saepe sapiente sed? Animi deleniti excepturi incidunt magnam similique temporibus unde vitae voluptate!' },
]
</script>
