import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

loadFonts()

app.use(router).use(pinia).use(vuetify).mount('#app')
