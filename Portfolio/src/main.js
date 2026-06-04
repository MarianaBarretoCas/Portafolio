import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router' //Para que funcione el router, se importa el router

createApp(App).use(router).mount('#app') //use.router para que funcione el router, y se monta la app en el div con id app
