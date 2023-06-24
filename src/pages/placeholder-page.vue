<template>
  <section>
    <h2>Placeholder</h2>

    <div class="fields">
      <Segment>
        <Placeholder lines />
      </Segment>

      <Segment>
        <Placeholder :lines="3" />
      </Segment>

      <Segment>
        <Placeholder paragraph />
      </Segment>

      <Segment>
        <Placeholder :paragraph="5" />
      </Segment>

      <Segment>
        <Placeholder image />
      </Segment>
    </div>
  </section>
</template>

<script setup lang="ts">
import Placeholder from 'src/components/Placeholder.vue'
import Segment from 'src/components/Segment.vue'
</script>

<style scoped lang="stylus">

</style>
