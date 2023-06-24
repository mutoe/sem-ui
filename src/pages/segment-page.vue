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

      <Segment>
        <Placeholder paragraph />
      </Segment>
    </div>

    <div class="fields">
      <h3>Raise</h3>

      <Segment raised>{{ text }}</Segment>
    </div>
    <div>
      <Segment attached raised>{{ text }}</Segment>
      <Segment attached raised>{{ text }}</Segment>
    </div>

    <div class="fields">
      <h3>Stacked</h3>
      <Segment stacked>{{ text }}</Segment>
    </div>
    <div>
      <Segment attached stacked>{{ text }}</Segment>
      <Segment attached stacked>{{ text }}</Segment>
    </div>

    <div>
      <h3>Tall stacked</h3>
      <Segment tall-stacked>{{ text }}</Segment>
    </div>
    <div>
      <Segment attached tall-stacked>{{ text }}</Segment>
      <Segment attached tall-stacked>{{ text }}</Segment>
    </div>

    <div class="fields">
      <h3>Piled</h3>

      <Segment piled>{{ text }}</Segment>
    </div>

    <div class="fields">
      <h3>Colored</h3>

      <Segment red>Red</Segment>
      <Segment green>Green</Segment>
      <Segment blue>Blue</Segment>
      <Segment color="grey">Grey</Segment>
    </div>

    <div class="fields">
      <h3>Attached</h3>

      <Segment attached>Top</Segment>
      <Segment attached>Middle</Segment>
      <Segment attached pink>Pink</Segment>
      <Segment attached orange>Orange</Segment>
      <Segment attached color="olive">Olive</Segment>
      <Segment attached color="violet">Violet</Segment>
    </div>

    <div class="fields">
      <h3>Nested segments</h3>

      <Segment attached>
        <span>Top</span>
        <Segment attached>Nested top</Segment>
        <Segment attached>Nested bottom</Segment>
      </Segment>
      <Segment attached>
        <Segment attached>Nested top</Segment>
        <Segment attached>Nested bottom</Segment>
        <span>Bottom</span>
      </Segment>
    </div>
  </section>
</template>

<script setup lang="ts">
import Placeholder from 'src/components/Placeholder.vue'
import Segment from 'src/components/Segment.vue'

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum debitis eius et ex illo in maiores molestias mollitia non odit porro possimus provident ratione sed sunt veniam, vero voluptatem.'

</script>

<style scoped lang="stylus">

</style>
