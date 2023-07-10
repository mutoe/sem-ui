<template>
  <div
    v-click-outside="() => popupShown = false"
    :class="classes"
    role="combobox"
    :aria-activedescendant="popupShown ? `${id}-popup` : undefined"
    :aria-controls="`${id}-popup`"
    :aria-expanded="popupShown"
    aria-autocomplete="list"
    aria-haspopup="listbox"
    :tabindex="tabindex ?? 0"
    @click.capture="popupShown = !popupShown"
    @keydown="onKeyDown"
    @focusout="!debug && (popupShown = false)"
  >
    <div :id="id" class="content">
      <slot v-if="hasSlot(slots.default)" />
      <template v-else>
        <div
          role="alert"
          aria-atomic="true"
          aria-live="polite"
          v-text="text"
        />
        <Icon class="icon" :icon="faCaretDown" />
      </template>
    </div>

    <ul
      v-show="popupShown"
      :id="`${id}-popup`"
      ref="popupRef"
      :class="['list', { upward }]"
      role="listbox"
      aria-label="Popup"
      :aria-hidden="!popupShown"
    >
      <template
        v-for="(option, index) in options"
        :key="option.value ?? index"
      >
        <li
          role="option"
          :class="['item', {active: index === activeIndex}]"
          :value="option.value"
          :index="index"
          :aria-selected="activeIndex === index"
          @click="onChange(option)"
          @mouseover="activeIndex = index"
        >
          <Icon v-if="option.icon" class="icon" :icon="option.icon" />
          <span class="text">{{ option.text }}</span>
          <span v-if="option.description" class="description">{{ option.description }}</span>
        </li>

        <hr v-if="option.divider" class="divider">
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { VNode } from 'vue'
import { computed, nextTick, ref, watch } from 'vue'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Icon from 'src/components/icon/Icon.vue'
import useId from 'src/composables/use-id'
import vClickOutside from 'src/directives/vClickOutside'
import { hasSlot } from 'src/utils/has-slot'
import pick from 'src/utils/pick'

const dropdownConfig: Sem.DropdownConfig = Object.assign({}, window.__SEM_CONFIG?.common, window.__SEM_CONFIG?.dropdown)

const props = defineProps<{
  id?: string
  value?: Sem.Option['value']
  values?: Sem.Option['value'][]
  options: Sem.Option[]
  search?: boolean
  fetching?: boolean
  multiple?: boolean
  placeholder?: string
  fluid?: boolean
  upward?: boolean
  text?: string
  tabindex?: number | string
  debug?: boolean
  compat?: boolean
}>()

const emit = defineEmits<{
  (e: 'change', value?: Sem.Option): void
}>()

const slots = defineSlots<{
  default: (props: object) => VNode[]
}>()

const debug = computed(() => props.debug || dropdownConfig.debug)
const compat = computed(() => props.compat || dropdownConfig.compat)
const id = computed(() => props.id || useId())

const popupRef = ref<HTMLUListElement | null>(null)
const popupShown = ref(false)
const popupTranslateY = ref('0')
const popupHeight = ref('unset')

watch(popupShown, async () => {
  if (!popupShown.value) {
    popupTranslateY.value = '0'
    popupHeight.value = 'unset'
    return
  }
  await nextTick()
  if (!popupRef.value) return
  if (popupRef.value.getBoundingClientRect().height > window.innerHeight) {
    popupHeight.value = `${window.innerHeight}px`
    await nextTick()
    popupTranslateY.value = `${-popupRef.value.getBoundingClientRect().top}px`
    return
  }
  if (props.upward && popupRef.value.getBoundingClientRect().top < 0) {
    popupTranslateY.value = `${-popupRef.value.getBoundingClientRect().top}px`
  } else if (!props.upward && popupRef.value.getBoundingClientRect().bottom > window.innerHeight) {
    popupTranslateY.value = `${window.innerHeight - popupRef.value.getBoundingClientRect().bottom}px`
  }
})

const activeIndex = ref<number>(-1)
const localValue = ref(props.value)

enum SelectAction { First, Last, Prev, Next }
function onKeyDown (event: KeyboardEvent) {
  const { key, altKey } = event
  if (popupShown.value) {
    switch (key) {
      case ' ':
      case 'Enter': {
        event.preventDefault()
        onChange(props.options[activeIndex.value])
        break }
      case 'Escape': {
        popupShown.value = false
        break }
      case 'ArrowDown': {
        event.preventDefault()
        if (altKey) break
        else selectAction(SelectAction.Next)
        break }
      case 'ArrowUp': {
        event.preventDefault()
        if (altKey) popupShown.value = false
        else selectAction(SelectAction.Prev)
        break }
      case 'Home': {
        event.preventDefault()
        selectAction(SelectAction.First)
        break }
      case 'End': {
        event.preventDefault()
        selectAction(SelectAction.Last)
        break }
    }
  } else {
    switch (key) {
      case ' ':
      case 'Enter': {
        event.preventDefault()
        popupShown.value = true
        break }
      case 'Escape': {
        onChange()
        break }
      case 'ArrowDown': {
        event.preventDefault()
        if (altKey) popupShown.value = true
        else selectAction(SelectAction.First)
        break
      }
      case 'ArrowUp': {
        event.preventDefault()
        if (altKey) popupShown.value = false
        else selectAction(SelectAction.Last)
        break
      }
    }
  }
}

function selectAction (action: SelectAction) {
  popupShown.value = true
  switch (action) {
    case SelectAction.First: {
      activeIndex.value = 0
      nextTick(() => {
        const activeItemEl = popupRef.value?.querySelector('.active')
        if ((activeItemEl?.getBoundingClientRect().top ?? 0) < 0) activeItemEl?.scrollIntoView(true)
      })
      break }
    case SelectAction.Prev:{
      activeIndex.value = Math.max(0, activeIndex.value - 1)
      nextTick(() => {
        const activeItemEl = popupRef.value?.querySelector('.active')
        if ((activeItemEl?.getBoundingClientRect().top ?? 0) < 0) activeItemEl?.scrollIntoView(true)
      })
      break }
    case SelectAction.Last:{
      activeIndex.value = props.options.length - 1
      nextTick(() => {
        const activeItemEl = popupRef.value?.querySelector('.active')
        if ((activeItemEl?.getBoundingClientRect().bottom ?? 0) > window.innerHeight) activeItemEl?.scrollIntoView(false)
      })
      break }
    case SelectAction.Next:{
      activeIndex.value = Math.min(props.options.length - 1, activeIndex.value + 1)
      nextTick(() => {
        const activeItemEl = popupRef.value?.querySelector('.active')
        if ((activeItemEl?.getBoundingClientRect().bottom ?? 0) > window.innerHeight) activeItemEl?.scrollIntoView(false)
      })
      break }
  }
}

const classes = computed(() => [
  'sem-dropdown',
  pick(props, ['fluid']),
  {
    expanded: popupShown.value,
    outline: !hasSlot(slots.default),
    compat: compat.value,
  },
])

const onChange = (option?: Sem.Option) => {
  emit('change', option)
  popupShown.value = false
  localValue.value = option?.value
}
</script>

<style lang="stylus" scoped>
$horizontal-padding = 0.78571429rem

.sem-dropdown {
  position relative
  display inline-flex
  align-items center
  margin-right 0.5em
  cursor pointer
  transition box-shadow 0.1s ease, width 0.1s ease
  vertical-align bottom

  &.selection {
    min-width 14em
    min-height 2.71428571em
    padding 0.78571429em 2.1em 0.78571429em 1em
    border 1px solid #22242626
    border-radius $border-radius
    color #000000de
    white-space normal
    word-wrap break-word
  }

  &::selection {
    background-color #cce2ff
  }

  &.fluid {
    display flex
    width 100%
  }

  &:not([tabindex="-1"]):focus-within {
    border-radius $border-radius
    outline solid 3px $color-primary
  }

  :slotted(.sui-button) {
    margin-right 0
  }

  .content {
    display inline-flex
    align-items center

    > .icon {
      margin-left rigor(3 / 7)em

      ^[0].compat ^[1..-1] {
        margin-left rigor(1 / 7)em
      }
    }

    > :slotted(.sem-button) {
      margin-right 0
    }
  }

  .list {
    position absolute
    z-index 11
    top calc(100% + 0.5em)
    right 0
    left 0
    overflow auto
    min-width max-content
    height v-bind(popupHeight)
    padding-left 0
    border 1px solid #22242626
    border-radius $border-radius
    margin 0
    background-color #fff
    box-shadow 0 2px 3px 0 #22242626
    transform translateY(v-bind(popupTranslateY))
    transition opacity 0.1s ease
    // TODO: How to work for this property?
    will-change transform, opacity

    &:focus {
      background red
    }

    &.upward {
      top unset
      bottom calc(100% + 0.5em)
    }

    .item {
      position relative
      display flex
      padding $horizontal-padding rigor(8 / 7rem)
      line-height 1em

      ^[0].compat ^[2..-1] {
        padding ($horizontal-padding / 2) rigor(8 / 14rem)
      }

      &.active {
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
      height 1px
      border none
      margin 0.5em 0
      background-color #2224261a
    }
  }
}

</style>
