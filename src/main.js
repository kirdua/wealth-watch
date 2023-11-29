import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import router from './router'

const store = createPinia()
const app = createApp(App)

loadFonts()

app.use(router).use(store).use(vuetify).mount('#app')
