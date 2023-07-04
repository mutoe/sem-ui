<template>
  <div :class="['sem-menu', pick($props, 'tabbed', 'secondary', 'indicator', 'attached')]">
    <div role="tablist" :class="['sem-menu-tabs']">
      <button
        v-for="(item, index) in list"
        :id="id && `${id}-tab-${item.key || index}`"
        ref="buttonRefs"
        :key="item.key || index"
        :class="['sem-tab', {active: isActive(index)}]"
        role="tab"
        :disabled="item.disabled"
        :tabindex="isActive(index) || (activatedItem === undefined && index === 0) ? undefined : -1"
        :aria-selected="isActive(index)"
        :aria-controls="`tabpanel-${item.key ||index}`"
        @click="emit('click', index, item.key)"
      >
        <slot v-bind="item" :index="index">
          {{ item.title }}
        </slot>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T extends MenuItem">
import { computed } from 'vue'
import pick from 'src/utils/pick'

// TODO: ARIA shortcuts https://www.w3.org/WAI/ARIA/apg/patterns/menubar/

// TODO: replace it to Sem.Option
export interface MenuItem {
  title: string
  key?: string
  disabled?: boolean
}

const props = defineProps<{
  list: string[] | T[]
  id?: string
  activatedItem?: string | number
  secondary?: boolean
  indicator?: boolean
  tabbed?: boolean
  attached?: boolean
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
  width 100%
  border 1px solid $color-border
  border-radius $border-radius
  box-shadow 0 1px 2px 0 $color-light
  overflow-x auto
  overflow-y hidden
  scrollbar-width none

  &::-webkit-scrollbar {
    display none
  }

  .sem-menu-tabs {
    display flex
    min-height rigor(20 / 7em)
    flex-direction row
    flex-shrink 0
  }

  .sem-tab {
    position relative
    display flex
    align-items center
    padding (6.5 / 7em) (11 / 7em)
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

      ^[0]:not(.secondary,.tabbed).indicator ^[1..-2].active::after {
        position absolute
        bottom 0
        left 50%
        width 8px
        height 8px
        border-right 1px solid $color-border
        border-bottom 1px solid $color-border
        background #f2f2f2
        content ""
        transform translate(-4px, 4px) rotate(45deg)
      }
    }
  }

  &.secondary {
    border none
    box-shadow none

    .sem-tab {
      border-radius $border-radius
      border-right none
      margin-right rigor(4/7em)
      margin-bottom rigor(4/7em)
    }

    &.indicator {
      position relative

      &::before {
        position absolute
        right 0
        bottom 0
        left 0
        height 2px
        background-color $color-border
        content ''
      }

      .sem-tab {
        border-radius 0
        border-bottom 2px solid transparent
        margin 0

        &:hover {
          background none
        }

        &:active
        &.active {
          border-bottom-color $color-placeholder
          background none
        }

        &.active {
          border-bottom-color $color-text
          font-weight bold
        }
      }
    }
  }

  &.tabbed {
    position relative
    border none
    box-shadow none

    &::before {
      position absolute
      right 0
      bottom 0
      left 0
      height 1px
      background-color $color-border
      content ''
    }

    .sem-tab {
      border none
      background none
      border-top-left-radius $border-radius
      border-top-right-radius $border-radius

      &.active {
        border 1px solid $color-border
        border-bottom-color #fff
      }
    }
  }

  &.attached {
    &:not(:first-of-type) {
      border-top-left-radius 0
      border-top-right-radius 0
    }

    &:not(:last-of-type) {
      border-bottom-left-radius 0
      border-bottom-right-radius 0
    }
  }
}

:global(.sem-menu + .sem-segment.attached) {
  border-top none
}
</style>
