<template>
  <div
    role="listbox"
    :class="classes"
    :aria-expanded="showList"
    :tabindex="tabindex ?? 0"
    @click.capture="showList = !showList"
    @keydown.space.prevent
    @keyup.space="showList = !showList"
    @focusout="!debug && (showList = false)"
    v-click-outside="() => showList = false"
  >
    <div class="content">
      <slot name="default">
        <div
          role="alert"
          aria-atomic="true"
          aria-live="polite"
          v-text="text"
        />
        <Icon class="icon" :icon="faCaretDown" />
      </slot>
    </div>

    <div
      v-show="showList"
      :class="['list', { upward }]"
      :aria-hidden="!showList"
    >
      <template
        v-for="(option, index) in options"
        :key="option.value ?? index"
      >
        <div
          role="option"
          class="item"
          :value="option.value"
          @click="onChange(option)"
        >
          <Icon v-if="option.icon" class="icon" :icon="option.icon" />
          <span class="text">{{ option.text }}</span>
          <span v-if="option.description" class="description">{{ option.description }}</span>
        </div>

        <hr v-if="option.divider" class="divider" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, watch } from 'vue'
import pick from 'src/utils/pick'
import vClickOutside from 'src/directives/vClickOutside'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const dropdownConfig: SemDropdownConfig = Object.assign({}, window.__SEM_CONFIG?.common, window.__SEM_CONFIG?.dropdown)

// TODO: accessibility

const props = defineProps<{
  value?: SemOption['value']
  values?: SemOption['value'][]
  options: SemOption[]
  search?: boolean
  fetching?: boolean
  multiple?: boolean
  placeholder?: string
  fluid?: boolean
  // TODO: implement auto upward when scroll to bottom of screen
  upward?: boolean
  text?: string
  tabindex?: number | string
  debug?: boolean
}>()

const emit = defineEmits<{
  (e: 'change', value: SemOption): void
}>()

const slots = useSlots()

const debug = props.debug ?? dropdownConfig.debug

let showList = $ref(false)
let localValue = $ref(props.value)

let classes = $computed(() => [
  'sem-dropdown',
  pick(props, ['fluid']),

  { expanded: showList, outline: !slots.default },
])


const onChange = (option: SemOption) => {
  showList = false
  localValue = option.value
  emit('change', option)
}
</script>

<style lang="stylus" scoped>
$horizontal-padding = .78571429rem

.sem-dropdown {
  position relative
  display inline-flex
  align-items center
  cursor pointer
  transition box-shadow .1s ease, width .1s ease
  margin-right .5em
  vertical-align bottom

  &.selection {
    word-wrap break-word
    color #000000de
    white-space normal
    min-height 2.71428571em;
    min-width 14em
    border 1px solid #22242626
    border-radius $border-radius
    padding 0.78571429em 2.1em .78571429em 1em;
  }

  &::selection {
    background-color #cce2ff
  }

  &.fluid {
    display flex
    width 100%
  }

  &:not([tabindex="-1"]):focus-within {
    outline solid 3px $color-primary
    border-radius $border-radius
  }

  :slotted(.sui-button) {
    margin-right 0
  }

  .content {
    display inline-flex
    align-items center

    > .icon {
      margin-left: 1em
    }

    > :slotted(.sem-button) {
      margin-right: 0
    }
  }

  .list {
    position absolute
    top calc(100% + 0.5em)
    left 0
    right 0
    min-width max-content
    border 1px solid #22242626
    border-radius $border-radius
    background-color #fff
    z-index: 11
    box-shadow 0 2px 3px 0 #22242626
    transition opacity .1s ease
    // TODO: How to work for this property?
    will-change transform, opacity

    &.upward {
      bottom calc(100% + 0.5em)
      top unset
    }

    .item {
      position relative
      display flex
      padding $horizontal-padding (8 / 7rem);
      line-height 1em

      &:hover {
        background-color #0000000d
        color #000000f2
      }

      .icon {
        margin-right $horizontal-padding
      }

      .text {
        margin-right auto
      }

      .description {
        margin-left 1em
        color #0006
      }
    }

    .divider {
      border none
      height 1px
      background-color #2224261a
      margin .5em 0
    }
  }
}

</style>
