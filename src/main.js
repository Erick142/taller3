import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ListadoProducto from "./components/ListadoProducto.vue"

const routes=[
    {path: "/listado", component: ListadoProducto}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
