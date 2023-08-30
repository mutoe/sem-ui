import type { VNode } from 'vue'

type Slot = (...args: any[]) => VNode[]

export function isEmptySlot (slot?: Slot): boolean {
  return !slot?.().some((it: VNode) => it.children)
}

export function hasDeclaredSlot (slot?: Slot): boolean {
  return slot !== undefined
}

export function hasDeclaredEmptySlot (slot?: Slot): boolean {
  return hasDeclaredSlot(slot) && isEmptySlot(slot)
}
