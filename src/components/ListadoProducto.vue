<template>
  <div class="container">
    <div class="row row-cols-1 g-3">
      <div v-for="producto in productos" :key="producto._id" class="col">
        <div class="card">
          <img :src="producto.images[0]" class="card-img-top" alt="..." style="">
          <div class="card-body">
            <h5 class="card-title">{{producto.name}}</h5>
            <p class="card-text">
              {{producto.description}}
            </p>
            <p class="card-text">
              {{producto.createdAt}}
            </p>
            <p class="card-text">
              {{producto.price}}
            </p>
            <p class="card-text">
              {{producto.user.city}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListadoProducto",
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    listar() {
      axios
        .get("http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products")
        .then((respose) => {
          this.productos = respose.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.listar();
  },
};
</script>

<style>
</style>