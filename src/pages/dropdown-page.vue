<template>
  <section>
    <h2>Dropdown</h2>

    <div class="field">
      <h3>Menu dropdown</h3>
      <div>
        <Dropdown text="File" :options="fileOptions" @change="onSingleChange" />
        <Dropdown upward text="File (upward)" :options="fileOptions" @change="onSingleChange" />
      </div>
    </div>

    <div class="field">
      <h3>Debug dropdown (will not close dropdown list when focus out document)</h3>
      <div>
        <Dropdown debug text="with debug" :options="fileOptions" @change="onSingleChange" />
        <Dropdown text="without debug" :options="fileOptions" @change="onSingleChange" />
      </div>
    </div>

    <div class="field">
      <h3>Slotted dropdown</h3>
      <div>
        <Dropdown text="File" :options="fileOptions" tabindex="-1" @change="onSingleChange">
          <Button :leftLabelIcon="faLanguage">Select Language</Button>
        </Dropdown>

        <Dropdown text="File" :options="fileOptions" :tabindex="-1" @change="onSingleChange">
          <Button basic>Select Language <Icon :icon="faCaretDown"></Icon></Button>
        </Dropdown>
      </div>
    </div>

    <div class="field">
      <h3>Inline</h3>

      <div>
        <p>Show me posts by <Dropdown text="File" :options="fileOptions" /></p>
      </div>
    </div>

    <!--    <div class="field">-->
    <!--      <h3>Fluid</h3>-->

    <!--      <div>-->
    <!--        <Dropdown fluid :options="options"/>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script lang="ts" setup>
import Dropdown from 'src/components/Dropdown.vue'
import Button from 'src/components/Button.vue'
import { faFolder, faTrash, faLanguage, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const fileOptions: SemOption[] = [
  { value: '', text: 'New' },
  { value: '', text: 'Open...', description: 'ctrl + o' },
  { value: '', text: 'Save as...', description: 'ctrl + s' },
  { value: '', text: 'Rename', description: 'ctrl + r' },
  { value: '', text: 'Make a copy' },
  { value: '', text: 'Move to folder', icon: faFolder },
  { value: '', text: 'Move to trash', icon: faTrash, divider: true },
  { value: '', text: 'Download As...' },
  { value: '', text: 'Publish to Web' },
  { value: '', text: 'Email collaborators' },
]

const onSingleChange = (option: SemOption) => {
  console.log('onSingleChange', option)
}

// const options: SemOption[] = [
//   { value: 'Jenny Hess', text: 'Jenny Hess' },
//   { value: 'Elliot Fu', text: 'Elliot Fu' },
//   { value: 'Stevie Feliciano', text: 'Stevie Feliciano' },
//   { value: 'Christian', text: 'Christian' },
// ]
</script>

<style lang="stylus" scoped>

</style>
