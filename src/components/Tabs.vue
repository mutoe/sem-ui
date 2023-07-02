<template>
  <div :id="id" class="sem-tabs">
    <Menu
      v-slot="{index, ...item}"
      :attached="attached"
      :tabbed="tabbed"
      :secondary="secondary"
      :indicator="indicator"
      class="sem-tablist"
      :list="list"
      :activated-item="activatedIndex"
      @click="onTabChange"
    >
      <slot name="title" v-bind="item" :index="index">{{ item.title }}</slot>
    </Menu>
    <Segment
      :attached="attached"
      :borderless="secondary"
      class="sem-panels"
    >
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
    </Segment>
  </div>
</template>

<script lang="ts" setup generic="T extends TabItem">
import { computed, ref } from 'vue'
import Segment from 'src/components/Segment.vue'
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
  gutter?: boolean
  tabbed?: boolean
  secondary?: boolean
  indicator?: boolean
}>()

const emit = defineEmits<{
  (e: 'change', index: number, key?: string): void
}>()

const attached = computed(() => !props.gutter)

const list = computed<T[]>(() => props.list.map<T>(item => typeof item === 'string' ? { title: item } as T : item))

const activatedIndex = ref<number>(0)

function onTabChange (index: number, key?: string) {
  activatedIndex.value = index
  emit('change', index, key)
}
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
