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
      <h3>Focus</h3>

      <div>
        <Input ref="focusRef" placeholder="Focus action" /> <Button @click="focusRef?.focus()">Focus</Button>
      </div>
    </div>

    <div class="field">
      <h3>Typed inputs</h3>

      <div>
        <Input :maxLength="6" placeholder="Text (with max length 6)" />
        <Input email placeholder="Email" />
        <Input number placeholder="Number" />
        <Input tel placeholder="Telephone" />
        <Input url placeholder="URL" />
      </div>
    </div>

    <div class="field">
      <h3>Status</h3>

      <div>
        <Input focus placeholder="Focus" />
        <Input disabled placeholder="Disabled" />
        <Input error placeholder="Error" />
        <br>
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

    <div class="field">
      <h3>Fluid</h3>

      <div>
        <Input fluid placeholder="Fluid" />
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import Input from 'src/components/Input.vue'
import Button from 'src/components/Button.vue'
import { faUser } from '@fortawesome/free-solid-svg-icons'

let input1 = $ref('Hello')
let focusRef = $ref<{ focus: () => void } | null>(null)
</script>
