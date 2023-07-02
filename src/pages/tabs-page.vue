<template>
  <section>
    <h2>Tabs</h2>

    <div class="field">
      <h3>Basic tabs</h3>

      <div>
        <Tabs :list="list" />
      </div>
    </div>

    <div class="field">
      <h3>Tabbed tabs</h3>

      <div>
        <Tabs tabbed :list="list" />
      </div>
    </div>

    <div class="field">
      <h3>Secondary tabs</h3>

      <div>
        <Tabs secondary :list="list" />
      </div>
    </div>

    <div class="field">
      <h3>Tab manu with indicator</h3>

      <div>
        <Tabs indicator :list="list" />
        <br>
        <Tabs secondary indicator :list="[...list, ...list, ...list]" />
      </div>
    </div>

    <div class="field">
      <h3>Tablist and panels have gutter</h3>

      <div>
        <Tabs secondary gutter :list="list" />
        <br>
        <Tabs indicator gutter :list="list" />
        <br>
        <Tabs secondary gutter indicator :list="list" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Tabs from 'src/components/Tabs.vue'

const list = [
  { title: 'Tab1', content: 'Tab1 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolores ipsa ipsum iusto, maiores obcaecati odit saepe sapiente sed? Animi deleniti excepturi incidunt magnam similique temporibus unde vitae voluptate!' },
  { title: 'Tab2 with a looooong name', content: 'Tab2 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolores ipsa ipsum iusto, maiores obcaecati odit saepe sapiente sed? Animi deleniti excepturi incidunt magnam similique temporibus unde vitae voluptate!' },
]
</script>
