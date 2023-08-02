import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Content from './components/Content.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/content', component: Content },
  ]
})

createApp(App).use(router).mount('#app')
