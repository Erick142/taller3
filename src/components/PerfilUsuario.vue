<template>
    <div v-for="usuario in lista" :key="usuario.id">
    <h3>{{usuario.name}}</h3>
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  name: "ListaUsuarios",
  data(){
    return{
      lista:[],
    };
  },

  async created(){
    let BASE_URL = 'http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/';
    await axios.get(BASE_URL).then((response)=>(this.lista = response));
  },



};
</script>

<style>

</style>



<!--

<template>
  <div id="App">
    <h1>
      

      <input type="text" v-model="id" placeholder="">
      <button @click="sendValue">Enviar consulta</button>

    </h1>

    <div>
      El usuario es:
      <ListaUsuarios/>
    </div>
  </div>
</template>




<script>
import ListaUsuarios from "./components/PerfilUsuario.vue";
//const expNum = /^[0-9]/;
export default {
  name:"App",
  components: {ListaUsuarios}
};

</script>

<style scoped>
</style>

-->

<!--
Consultar API
      
      <button @click="buscar(1)">Consultar</button>
      -->

