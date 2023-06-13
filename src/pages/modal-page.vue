<template>
  <section>
    <h2>Modal</h2>

    <div class="field">
      <h3>Modal</h3>

      <div>
        <Button @click="modal1?.open()">Show Modal</Button>
        <Modal ref="modal1" closeIcon
               title="Archive Old Messages"
               content="Your inbox is getting full, would you like us to enable automatic archiving of old messages?" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ModalRef } from 'src/components/Modal.vue'
import Modal from 'src/components/Modal.vue'
import Button from 'src/components/Button.vue'
import { ref } from 'vue'

const modal1 = ref<ModalRef | null>(null)
</script>
