<template>
  <section>
    <h2>Input</h2>

    <div class="field">
      <h3>Controlled input</h3>

      <div>
        <Input v-model="input1" placeholder="Text" /> <span>{{ input1 }}</span>
      </div>
    </div>

    <div class="field">
      <h3>Typed inputs</h3>

      <div>
        <Input placeholder="Text" />
        <Input email placeholder="Email" />
        <Input number placeholder="Number" />
        <Input tel placeholder="Telephone" />
        <Input url placeholder="URL" />
      </div>
    </div>

    <div class="field">
      <h3>Status</h3>

      <div>
        <Input disabled placeholder="Disabled"/>
        <Input :icon="faUser" placeholder="Icon" />
        <Input loading :icon="faUser" placeholder="Loading" />
      </div>
    </div>

    <div class="field">
      <h3>Prepend / Append</h3>

      <div>
        <Input url>
          <template v-slot:prepend>https://</template>
          <template v-slot:append>.com</template>
        </Input>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import Input from 'src/components/Input.vue'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

ref: input1 = ref('Hello')
</script>
