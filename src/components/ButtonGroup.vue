<template>
  <div class="sui-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="stylus" scoped>
.sui-button-group {
  :deep(.sui-button) {
    margin-right 0
    border-radius 0

    &:first-child {
      border-bottom-left-radius $border-radius
      border-top-left-radius $border-radius
    }

    &:last-child {
      border-bottom-right-radius $border-radius
      border-top-right-radius $border-radius
    }
  }
}
</style>
