import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import UnoCSS
import 'uno.css'

const app = createApp(App)

app.use(router)

app.mount('#app')