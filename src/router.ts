import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from 'src/pages/main-page.vue'

export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: MainPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
