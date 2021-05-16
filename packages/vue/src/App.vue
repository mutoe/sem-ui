<template>
  <main>
    <InputPage />
    <ButtonPage />
    <ModalPage />
  </main>
</template>

<script lang="ts" setup>
import ButtonPage from './pages/button-page.vue'
import InputPage from './pages/input-page.vue'
import ModalPage from './pages/modal-page.vue'
</script>

<style lang="stylus" scoped>
main {
  padding 2rem
}
</style>
