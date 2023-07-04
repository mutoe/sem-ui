import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import DropdownPage from 'src/pages/dropdown-page.vue'
import MainPage from 'src/pages/main-page.vue'
import MenuPage from 'src/pages/menu-page.vue'
import TabsPage from 'src/pages/tabs-page.vue'

export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: MainPage },
  { name: 'Dropdown', path: '/dropdown', component: DropdownPage },
  { name: 'Menu', path: '/menu', component: MenuPage },
  { name: 'Tabs', path: '/tabs', component: TabsPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
