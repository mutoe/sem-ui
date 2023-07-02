<template>
  <section>
    <h2>Menu</h2>

    <div class="field">
      <h3>Basic menu</h3>

      <div>
        <Menu id="basic-menu" activated-item="tab1" :list="list" />
        <br>
        <Menu id="basic-indicator-menu" indicator activated-item="tab1" :list="list" />
      </div>
    </div>

    <div class="field">
      <h3>Secondary menu</h3>

      <div>
        <Menu id="secondary-menu" secondary :activated-item="0" :list="list" />
        <br>
        <Menu id="secondary-indicator-menu" indicator secondary activated-item="tab1" :list="list" />
      </div>
    </div>

    <div class="field">
      <h3>Tabbed menu</h3>

      <div>
        <Menu id="tabbed-menu" tabbed :list="list" activated-item="tab1" />
        <Segment attached>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci commodi delectus dolores, dolorum eius est fugiat, labore mollitia omnis qui ratione sapiente tempora temporibus vitae. Ad aspernatur eaque minima.
        </Segment>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Menu from 'src/components/Menu.vue'
import Segment from 'src/components/Segment.vue'

const list = [
  { title: 'Tab1', key: 'tab1' },
  { title: 'Tab2', key: 'tab2' },
]
</script>
