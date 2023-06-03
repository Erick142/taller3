<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col d-flex justify-content-center">
        <h1 class="text-decoration-underline">Listado</h1>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-3">
      <div v-for="producto in productos" :key="producto._id" class="col">
        <router-link :to="`producto/${producto._id}`" class="no_style">
          <div class="card h-100" style="">
            <h5 class="card-header text-decoration-underline">{{ producto.name }}</h5>
            <div class="row">
              <div class="col-4">
                <img :src="producto.images[0]" class="img-fluid" alt="..." />
              </div>
              <div class="col-8">
                <div class="card-body">
                <h5 class="card-title">{{ producto.price }}</h5>
                <p class="card-text">
                  {{ producto.description }}
                </p>
              </div>
              </div>
            </div>
            <div class="card-footer text-body-secondary d-flex justify-content-between h-100">
              <span>{{ producto.createdAt }}</span>
              <span>{{ producto.user.city }}</span>
            </div>
          </div>
        </router-link>
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
.no_style {
  text-decoration: none;
}
</style>