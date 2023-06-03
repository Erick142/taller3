import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ListadoProducto from "./components/ListadoProducto.vue";
import DetalleUsuario from "./components/PerfilUsuario.vue"
import DetalleProducto from "./components/DetallesProducto.vue"

const routes=[
    {path: "", component: ListadoProducto},
    {path: "/perfil/:id", component: DetalleUsuario},
    {path:"/producto/:id", component: DetalleProducto}
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
