import { createApp } from 'vue'
import App from './App.vue'
import Icon from './components/Icon.vue'

import 'src/css/keyframes.styl'
import 'src/css/reset.styl'

const app = createApp(App)

app.component('Icon', Icon)

app.mount('#app')
