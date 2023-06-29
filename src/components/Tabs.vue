<template>
  <div :id="id" class="sem-tabs">
    <Menu
      v-slot="{index, ...item}"
      class="sem-tablist"
      :list="list"
      @click="(i: number) => (activatedIndex = i)"
    >
      <slot name="title" v-bind="item" :index="index">{{ item.title }}</slot>
    </Menu>
    <div
      v-for="(item, index) in list"
      v-show="activatedIndex === index"
      :id="id && `${id}-tabpanel-${item.key || index}`"
      :key="item.key || index"
      class="sem-tabpanel"
      role="tabpanel"
      :aria-labelledby="`tab-${item.key || index}`"
    >
      <slot :name="`panel-${item.key || index}`" v-bind="item" :index="index">
        <slot name="panel" v-bind="item" :index="index">
          {{ item.content }}
        </slot>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T extends TabItem">
import { computed, ref } from 'vue'
import Menu from './Menu.vue'

// TODO: ARIA shortcuts https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

export interface TabItem {
  title: string
  key?: string
  content?: string
  disabled?: boolean
}

const props = defineProps<{
  list: string[] | T[]
  id?: string
}>()

const list = computed<T[]>(() => props.list.map<T>(item => typeof item === 'string' ? { title: item } as T : item))

const activatedIndex = ref<number>(0)
</script>

<style lang="stylus" scoped>
.sem-tabs {
  display flex
  width 100%
  flex-direction column

  .sem-tablist {
    display flex
    width 100%
    flex-direction row
  }
}
</style>
