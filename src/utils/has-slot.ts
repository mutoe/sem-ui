import type { VNode } from 'vue'

export function hasSlot (slot?: () => VNode[]): boolean {
  return Boolean(slot?.().some((it: VNode) => it.children))
}
