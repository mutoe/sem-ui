<template>
  <Teleport v-if="show" to="body">
    <div class="sui-modal">
      <div class="container" v-click-outside="onClickBackdrop">
        <Button v-if="displayCloseIcon" :icon="faTimes" basic class="close-icon" @click="onClickCloseIcon"></Button>
        <header class="header">
          <slot name="header">
            <h2>{{ props.title || 'Title' }}</h2>
          </slot>
        </header>
        <div class="content">
          <slot name="default">{{ props.content }}</slot>
        </div>
        <div class="actions">
          <slot name="actions">
            <Button @click="onCancel">Cancel</Button>
            <Button positive @click="emit('confirm')">OK</Button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Button from 'src/components/Button.vue'
import vClickOutside from 'src/directives/vClickOutside'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ref, watchEffect } from 'vue'

const defaultConfig: SemModalConfig = {
  closeIcon: false,
}
const modalConfig: SemModalConfig = Object.assign(defaultConfig, window.__SEM_CONFIG?.modal)

export interface ModalRef {
  open: () => void
  close: () => void
}

const props = defineProps<{
  title?: string
  content?: string

  dimmerInverted?: boolean
  dimmerBlurring?: boolean
  closeIcon?: boolean
}>()
const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'close', reason: 'backdrop' | 'closeIcon' | 'cancel'): void
}>()

const show = ref(false)

const displayCloseIcon = props.closeIcon ?? modalConfig.closeIcon

watchEffect(() => {
  if (show.value) {
    document.querySelector('[data-v-app]')?.classList.add('blurring', 'dimmed')
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
    document.querySelector('[data-v-app]')?.classList.remove('blurring', 'dimmed')
  }
})

const onClickBackdrop = () => {
  show.value = false
  emit('close', 'backdrop')
}
const onClickCloseIcon = () => {
  show .value= false
  emit('close', 'closeIcon')
}
const onCancel = () => {
  show .value= false
  emit('close', 'cancel')
}

defineExpose({
  open: () => void (show.value = true),
  close: () => void (show.value = false),
})
</script>

<style lang="stylus" scoped>
.sui-modal {
  position: fixed
  top 0
  left: 0
  width: 100%
  height: 100%
  padding: 1em
  background-color rgba(#000, 0.65)
  transition background-color .5s linear
  transform-origin center center
  z-index: 1000
  display: flex
  justify-content center
  align-items center


  .container {
    position: relative;
    width: max(850px, 88%)
    background-color #fff
    box-shadow 1px 3px 3px 0 rgba(#000, .2), 1px 3px 15px 2px rgba(#000, .2)
    border-radius (2 / 7) rem
    user-select text
    will-change top, left, margin, transform, opacity

    .close-icon {
      position: absolute;
      right: -2.5rem
      top -2.5rem
      width: 2.5rem
      height: 2.5rem
      color: #fff
      background-color transparent
      padding: 0.6rem
      margin: 0
      border none

      :deep(svg) {
        width: 1.5rem
        height: 1.5rem
      }
    }
  }

  .header {
    padding: 1rem
    border-bottom 1px solid rgba(34, 36, 38, .15)
    border-top-left-radius inherit
    border-top-right-radius inherit
  }

  .content {
    padding: 1rem
  }

  .actions {
    display flex
    justify-content flex-end
    padding: 1rem
    border-top: 1px solid rgba(34, 36, 38, .15)
    background-color #f9fafb
    border-bottom-left-radius inherit
    border-bottom-right-radius inherit
  }

}
</style>

<style lang="stylus">
.blurring
  filter blur(5px) grayscale(.7)
</style>
