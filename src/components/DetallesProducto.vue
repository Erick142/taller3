<template>
    <div class="container">
        <div class="row">

            <div class="col-8">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="imagen" v-for="imagen in producto.images" :key="imagen"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ producto.name }}</h5>
                        <p class="card-text">{{ producto.description }}</p>
                    </div>
                    <ul class="list-group list-group-flush">

                    </ul>
                    <div class="card-body">
                        {{ producto.price }}
                    </div>
                </div>
            </div>



            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="user.photo" alt="Card image cap" id="usuario">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="text-secondary card-text">{{ user.city }}</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="btn btn-primary">Perfil</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "DetalleProducto",
    data() {
        return {
            producto: "",
            reviews: "",
            user: "",
            id: "",
        };
    },

    methods: {

        obtenerDetalle() {
            axios
                .get("http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/products/" + this.id + "/reviews")
                .then((response) => {
                    this.producto = response.data.product;
                    this.reviews = response.data.reviews;
                    this.user = this.producto.user;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
    mounted() {

        this.id = this.$route.params.id;
        this.obtenerDetalle();
    },
};
</script>
  
<style>

#usuario {
  border-radius: 50%;
}

</style>