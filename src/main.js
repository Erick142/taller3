import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'

const routes=[
    {path: "/", component:""}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).mount('#app')
