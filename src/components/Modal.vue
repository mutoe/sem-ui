<template>
  <Teleport v-if="show" to="body">
    <div class="sui-modal">
      <div v-click-outside="onClickBackdrop" class="container">
        <Button v-if="displayCloseIcon" :icon="faTimes" basic class="close-icon" @click="onClickCloseIcon" />
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
import { ref, watchEffect } from 'vue'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from 'src/components/Button.vue'
import vClickOutside from 'src/directives/vClickOutside'

const defaultConfig: Sem.ModalConfig = {
  closeIcon: false,
}
const modalConfig: Sem.ModalConfig = Object.assign(defaultConfig, window.__SEM_CONFIG?.modal)

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
  show.value = false
  emit('close', 'closeIcon')
}
const onCancel = () => {
  show.value = false
  emit('close', 'cancel')
}

defineExpose({
  open: () => void (show.value = true),
  close: () => void (show.value = false),
})
</script>

<style lang="stylus">
.blurring {
  filter blur(5px) grayscale(0.7)
}
</style>

<style lang="stylus" scoped>
.sui-modal {
  position fixed
  z-index 1000
  top 0
  left 0
  display flex
  width 100%
  height 100%
  align-items center
  justify-content center
  padding 1em
  background-color rgba(#000, 0.65)
  transform-origin center center
  transition background-color 0.5s linear

  .container {
    position relative
    width max(850px, 88%)
    border-radius rigor(2 / 7) rem
    background-color #fff
    box-shadow 1px 3px 3px 0 rgba(#000, 0.2), 1px 3px 15px 2px rgba(#000, 0.2)
    user-select text
    will-change top, left, margin, transform, opacity

    .close-icon {
      position absolute
      top -2.5rem
      right -2.5rem
      width 2.5rem
      height 2.5rem
      padding 0.6rem
      border none
      margin 0
      background-color transparent
      color #fff

      :deep(svg) {
        width 1.5rem
        height 1.5rem
      }
    }
  }

  .header {
    padding 1rem
    border-bottom 1px solid rgba(34, 36, 38, 0.15)
    border-top-left-radius inherit
    border-top-right-radius inherit
  }

  .content {
    padding 1rem
  }

  .actions {
    display flex
    justify-content flex-end
    padding 1rem
    border-top 1px solid rgba(34, 36, 38, 0.15)
    background-color #f9fafb
    border-bottom-left-radius inherit
    border-bottom-right-radius inherit
  }
}
</style>
