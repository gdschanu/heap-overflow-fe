import { createApp } from 'vue'
import App from './App.vue'
import router from './shared/router'
import store from './shared/store'
import '@/shared/assets/css/tailwind.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
