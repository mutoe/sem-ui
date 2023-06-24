<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import pick from 'src/utils/pick'
import { computed } from 'vue'

const props = defineProps<{
  raised?: boolean
  stacked?: boolean
  'tallStacked'?: boolean
}>()

const classes = computed(() => [
  'sem-segment',
  pick(props, 'raised', 'stacked'),
  { 'tall-stacked': props.tallStacked },
])

</script>

<style scoped lang="stylus">
.sem-segment {
  position relative
  padding 1em 1em
  border 1px solid rgba(34,36,38,0.15)
  border-radius rigor(2 / 7rem)
  margin 1rem 0
  background #fff
  box-shadow 0 1px 2px 0 rgba(34,36,38,0.15)
  font-size 1rem

  &.raised {
    box-shadow 0 2px 4px 0 $color-light, 0 2px 10px 0 $color-light
  }

  stack-line() {
    position absolute
    left 0
    width 100%
    height 6px
    border-top 1px solid $color-light
    background rgba(0,0,0,0.03)
    content ""
  }

  &.stacked
  &.tall-stacked {
    padding-bottom 1.4em

    &::after {
      stack-line()
      bottom -3px
    }
  }

  &.tall-stacked::before {
    stack-line()
    bottom 0
  }
}

</style>
