import { createApp } from 'vue'
import router from 'src/router'
import App from 'src/App.vue'
import Icon from 'src/components/Icon.vue'

import 'src/css/keyframes.styl'
import 'src/css/reset.styl'

const app = createApp(App)

app.use(router)

app.component('Icon', Icon)

app.mount('#app')
