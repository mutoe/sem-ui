<template>
  <section>
    <h2>Segment</h2>

    <div class="fields">
      <h3>Basic</h3>

      <Segment>
        <p>{{ text }}</p>
        <p>
          Beatae consequatur dolorum esse est sit. Alias aliquid autem corporis exercitationem fuga iure iusto libero nam, nesciunt placeat qui reprehenderit soluta tenetur velit voluptates? Accusamus
          blanditiis distinctio ea eligendi exercitationem, labore laborum modi molestias optio, placeat quos, saepe. Dolores ducimus et facere incidunt sapiente sunt, velit voluptatum! Et expedita
          harum laboriosam quo sapiente tempore veniam! Assumenda consequuntur dolore iusto minima non? Aliquam, aspernatur atque blanditiis eius est fugiat in ipsam itaque
          iure minus nisi obcaecati optio perferendis porro, possimus praesentium provident quam qui sit soluta unde vero voluptatum? Deserunt itaque maiores, necessitatibus nisi qui repudiandae sint
          veritatis. Beatae commodi, corporis cumque dicta distinctio dolor dolorum eligendi harum nemo nostrum nulla officiis quod sint vitae!
        </p>
      </Segment>

      <!--      <Segment> -->
      <!--        <Placeholder paragraph /> -->
      <!--      </Segment> -->
    </div>

    <div class="fields">
      <h3>Raise</h3>

      <Segment raised>{{ text }}</Segment>
    </div>

    <div class="fields">
      <h3>Stacked</h3>

      <Segment stacked>{{ text }}</Segment>

      <Segment tall-stacked>{{ text }}</Segment>
    </div>
  </section>
</template>

<script setup lang="ts">
// import Placeholder from 'src/components/Placeholder.vue'
import Segment from 'src/components/Segment.vue'

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum debitis eius et ex illo in maiores molestias mollitia non odit porro possimus provident ratione sed sunt veniam, vero voluptatem.'

</script>

<style scoped lang="stylus">

</style>
