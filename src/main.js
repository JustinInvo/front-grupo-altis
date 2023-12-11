// import './assets/scss/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
// import 'jquery/dist/jquery.js'
// import 'popper.js/dist/popper.js'
// import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
