<template>
  <div class="navigation">
    <Menu
      secondary
      :style="{flexWrap: 'wrap'}"
      :list="menuList"
      :activated-item="routeName"
      @click="(index: number, name?: string) => router.push({name})"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import type { MenuItem } from 'src/components/Menu.vue'
import Menu from 'src/components/Menu.vue'
import { routes } from 'src/router'

const route = useRoute()
const routeName = typeof route.name === 'string' ? route.name : ''
const router = useRouter()

const menuList = routes.map((item) => {
  const routeName = typeof item.name === 'string' ? item.name : ''
  return {
    title: routeName,
    key: routeName,
  } satisfies MenuItem
})
</script>

<style lang="stylus" scoped>
.navigation {
  padding 2rem
  padding-bottom 0
}

</style>
