import './assets/style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app').use(Toast)

const app = createApp(App)
app.use(Toast)
app.mount('#app')
