<template>
  <div class="container">
    <div class="row row-cols-1 g-3">
        {{producto.name}}
    </div>
    <div>
        {{producto.createdAt}}
    </div>
    <img :src="imagen" v-for="imagen in producto.images" :key="imagen">
    <div>
        {{producto.price}}
    </div>
    <img :src="user.photo" alt="">
    <div>
        {{user.name}}
    </div>
    <div>
        {{user.city}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListadoProducto",
  data() {
    return {
      producto: "",
      reviews:"",
      user: "",
      id:"",
    };
  },
  methods: {
    listar() {
      axios
        .get("http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products/"+this.id+"/reviews")
        .then((respose) => {
          this.producto = respose.data.product;
          this.reviews = respose.data.reviews;
          this.user=this.producto.user;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    
    this.id=this.$route.params.id;
    this.listar();
  },
};
</script>

<style>
</style>