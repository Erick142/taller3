<template>


<div class="row align-items-center">
    <div class="col">
    </div>
    <div class="col">

    <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="foto" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{usuario.name}}</h5>
    <p class="text-secondary card-text">{{ ciudad }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{usuario.bio}}</li>
  </ul>
  
</div>
    
    <div class="col">
    </div>
  </div>

  <div class="row align-items-center">
    <div class="col"></div>
    <div class="col">
        <div v-for="review in reviews" :key="review.id">
    <div class="card" style="width: 18rem;" id="review">
  <img :src="review.product.images[0]" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{review.product.name}}</h5>
    <p class="card-text">{{review.review }}</p>
  </div>
</div> 
</div>
    </div>
    <div class="col"></div>
  </div>

</div>   

</template>

<script>
import axios from "axios";

export default {
  name: "detalleUsuario",
  data(){
    return{
        usuario:"",
        nombre: "",
      ciudad:"",
      foto: "",
      reviews:"",
    };
  },

  methods: {

  obtenerUser(){
    //let BASE_URL = "http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/users/"+this.id+"/reviews";
    axios.get("http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/users/"+this.id+"/reviews").then((response)=>{
        this.usuario=response.data.user;
        console.log(this.usuario);
        this.nombre= response.data.user.name;
        this.ciudad= response.data.user.city;
        this.foto=response.data.user.photo;
        this.reviews = response.data.reviews;


    });
  },
  },
  mounted() {
    
    this.id=this.$route.params.id;
    this.obtenerUser();
  },
};
</script>

<style>

#review {
  flex-direction: row;
}
.card img {
  width: 30%;
}


</style>


<!--
    .card {
  flex-direction: row;
}
.card img {
  width: 30%;
}
    -->



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

