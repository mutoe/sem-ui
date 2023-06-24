<template>
  <div :class="classes">
    <div
      v-for="i in rows"
      :key="i"
      class="item"
      :style="{height: imageRadio ? `${10/imageRadio}em` : undefined, width: uneven ? `${(1+Math.random())*50}%` : undefined}"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  lines?: number | boolean
  paragraph?: number | boolean
  image?: number | boolean
  uneven?: boolean
}>()

const imageRadio: number = typeof props.image === 'number' && props.image > 0 ? props.image : props.image ? 1 : 0
const linesProp: number = typeof props.lines === 'number' && props.lines > 0 ? props.lines : props.lines ? 1 : 0
const paragraphProp: number = typeof props.paragraph === 'number' && props.paragraph > 0 ? props.paragraph : props.paragraph ? 3 : 0
const rows: number = linesProp || paragraphProp || imageRadio

const uneven: boolean = props.uneven || paragraphProp > 0
const slim: boolean = paragraphProp > 0

const classes = computed(() => [
  'sem-placeholder',
  { image: imageRadio > 0, uneven, slim },
])
</script>

<style scoped lang="stylus">
.sem-placeholder {
  &.image {
    .item {
      width 10em
    }
  }

  .item {
    position relative
    overflow hidden
    height 1em
    border-radius 4px
    background #ddd

    &::after {
      position absolute
      top 0
      left 0
      width 400%
      height 100%
      animation skeleton 1.5s infinite
      background linear-gradient(120deg, #ddd, #eee, #ddd)
      content ''
    }

    + .item {
      margin-top rigor(3 / 7em)
    }
  }
}
</style>
