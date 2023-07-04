import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import DropdownPage from 'src/pages/dropdown-page.vue'
import MainPage from 'src/pages/main-page.vue'
import MenuPage from 'src/pages/menu-page.vue'
import ModalPage from 'src/pages/modal-page.vue'
import PlaceholderPage from 'src/pages/placeholder-page.vue'
import SegmentPage from 'src/pages/segment-page.vue'
import TabsPage from 'src/pages/tabs-page.vue'

export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: MainPage },
  { name: 'Dropdown', path: '/dropdown', component: DropdownPage },
  { name: 'Modal', path: '/modal', component: ModalPage },
  { name: 'Segment', path: '/segment', component: SegmentPage },
  { name: 'Placeholder', path: '/placeholder', component: PlaceholderPage },
  { name: 'Menu', path: '/menu', component: MenuPage },
  { name: 'Tabs', path: '/tabs', component: TabsPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
