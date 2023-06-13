<template>
  <nav class="navigation">
    <RouterLink v-for="route in routes" :key="route.name" active-class="active" :to="route.path">{{ route.name }}</RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { routes } from 'src/router'
</script>

<style lang="stylus" scoped>
.navigation {
  padding 2rem
  font-size 1.5rem

  > a {
    margin-right 1em
    color $color-grey

    &.active {
      color $color-primary
    }
  }
}

</style>
