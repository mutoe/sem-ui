import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import ButtonPage from 'src/pages/button-page.vue'
import DropdownPage from 'src/pages/dropdown-page.vue'
import InputPage from 'src/pages/input-page.vue'
import MainPage from 'src/pages/main-page.vue'
import ModalPage from 'src/pages/modal-page.vue'
// import PlaceholderPage from 'src/pages/placeholder-page.vue'
import SegmentPage from 'src/pages/segment-page.vue'

export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: MainPage },
  { name: 'Button', path: '/button', component: ButtonPage },
  { name: 'Input', path: '/input', component: InputPage },
  { name: 'Dropdown', path: '/dropdown', component: DropdownPage },
  { name: 'Modal', path: '/modal', component: ModalPage },
  { name: 'Segment', path: '/segment', component: SegmentPage },
  // { name: 'Placeholder', path: '/placeholder', component: PlaceholderPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
