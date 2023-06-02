import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ListadoProducto from "./components/ListadoProducto.vue"
import VerProducto from "./components/DetallesProducto.vue"

const routes=[
    {path: "/listado", component: ListadoProducto},
    {path:"/producto/:id", component: VerProducto}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
