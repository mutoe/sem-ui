<template>
  <div role="tablist" class="sem-menu">
    <button
      v-for="(item, index) in list"
      :id="id && `${id}-tab-${item.key || index}`"
      :key="item.key || index"
      :class="['sem-tab', {active: isActive(index)}]"
      role="tab"
      :disabled="item.disabled"
      :tabindex="isActive(index) || (activatedItem === undefined && index === 0) ? undefined : -1"
      :aria-selected="isActive(index)"
      :aria-controls="`tabpanel-${item.key ||index}`"
      @click="emit('click', index, item.key)"
    >
      <slot :name="`item-${item.key || index}`" v-bind="item" :index="index">
        <slot v-bind="item" :index="index">
          {{ item.title }}
        </slot>
      </slot>
    </button>
  </div>
</template>

<script lang="ts" setup generic="T extends MenuItem">
import { computed } from 'vue'

// TODO: ARIA shortcuts https://www.w3.org/WAI/ARIA/apg/patterns/menubar/

export interface MenuItem {
  title: string
  key?: string
  disabled?: boolean
}

type KeyOrIndex = T['key'] extends string ? string : number

const props = defineProps<{
  list: string[] | T[]
  id?: string
  activatedItem?: KeyOrIndex
}>()

const emit = defineEmits<{
  (e: 'click', index: number, key?: string): void
}>()

const list = computed(() => props.list.map(item => typeof item === 'string' ? { title: item } : item) as T[])

const activatedIndex = computed<number>(() => {
  if (props.activatedItem === undefined) return -1
  if (typeof props.activatedItem === 'number') return props.activatedItem
  return list.value.findIndex(it => it.key === props.activatedItem)
})

function isActive (currentIndex: number) {
  return currentIndex === activatedIndex.value
}
</script>

<style lang="stylus" scoped>
.sem-menu {
  display flex
  width 100%
  min-height rigor(20/7em)
  flex-direction row
  border 1px solid $color-border
  border-radius $border-radius
  box-shadow 0 1px 2px 0 $color-light

  .sem-tab {
    padding (6.5/7em) (11/7em)
    border none
    border-right 1px solid $color-border
    background transparent
    cursor pointer

    &:hover {
      background $color-hover
    }

    &:active
    &.active {
      background $color-active
    }
  }
}
</style>
