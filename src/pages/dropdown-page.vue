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
          <Button :left-label-icon="faLanguage">Select Language</Button>
        </Dropdown>

        <Dropdown text="File" :options="fileOptions" :tabindex="-1" @change="onSingleChange">
          <Button basic :right-icon="faCaretDown">Select Language</Button>
        </Dropdown>
      </div>
    </div>

    <div class="field">
      <h3>Compat</h3>

      <div>
        <p>The user is come from <Dropdown compat text="China" :options="countryOptions" /></p>
      </div>
    </div>

    <!--    <div class="field"> -->
    <!--      <h3>Fluid</h3> -->

    <!--      <div> -->
    <!--        <Dropdown fluid :options="options"/> -->
    <!--      </div> -->
    <!--    </div> -->
  </section>
</template>

<script lang="ts" setup>
import { faCaretDown, faFolder, faLanguage, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'src/components/Button.vue'
import Dropdown from 'src/components/Dropdown.vue'

const fileOptions: Sem.Option[] = [
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

const countryOptions: Sem.Option[] = [
  { value: 'America', text: 'America' },
  { value: 'China', text: 'China' },
  { value: 'Russia', text: 'Russia' },
  { value: 'Singapore', text: 'Singapore' },
]

const onSingleChange = (option: Sem.Option) => {
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
