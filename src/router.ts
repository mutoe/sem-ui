import { createRouter, createWebHashHistory, RouteMeta, RouteRecord, RouteRecordRaw } from 'vue-router'

import MainPage from 'src/pages/main-page.vue'
import ButtonPage from 'src/pages/button-page.vue'
import InputPage from 'src/pages/input-page.vue'
import ModalPage from 'src/pages/modal-page.vue'

export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: MainPage },
  { name: 'Button', path: '/button', component: ButtonPage },
  { name: 'Input', path: '/input', component: InputPage },
  { name: 'Modal', path: '/modal', component: ModalPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
