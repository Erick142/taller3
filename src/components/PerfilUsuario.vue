<template>
    <div class="row align-items-center">
        <div class="col-md-5">
        </div>

        <div class="col">
            <div class="card m-3 border-0 text-center" style="width: 18rem;">
                <img class="card-img-top" :src="foto" alt="Foto usuario" id="fotoUsuario">
                <div class="card-body">
                    <h5 class="card-title">{{ usuario.name }}</h5>
                    <p class="text-secondary card-text">{{ ciudad }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ usuario.bio }}</li>
                </ul>
            </div>
        </div>

        <div class="col-md-5">
        </div>
    </div>

    <div>
        <h1 class="pt-3 pb-3">Reseñas Creadas por {{ usuario.name }} ({{ reviews.length }})</h1>
    </div>

    <div class="row align-items-center">
        <div class="col-md-2">
        </div>

        <div class="col-md-8">
            <div v-for="review in reviews" :key="review.id">
                <div class="pb-3">
                    <div class="card w-100 p-4 border-0" style="width: 18rem;" id="review">
                        <img :src="review.product.images[0]" class="card-img-top" alt="..." id="fotoProd">
                        <div class="card-body">
                            <h5 class="card-title">{{ review.product.name }}</h5>
                            <p class="card-text">{{ review.review }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-2"></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "DetalleUsuario",
    data() {
        return {
            usuario: "",
            nombre: "",
            ciudad: "",
            foto: "",
            reviews: "",
        };
    },

    methods: {
        obtenerUser() {
            const BASE_URL = "http://ec2-54-163-208-73.compute-1.amazonaws.com:8080/users/";
            axios.get(BASE_URL + this.id + "/reviews").then((response) => {
                this.usuario = response.data.user;
                this.nombre = response.data.user.name;
                this.ciudad = response.data.user.city;
                this.foto = response.data.user.photo;
                this.reviews = response.data.reviews;


            });
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.obtenerUser();
    },
};
</script>

<style>
#review {
    flex-direction: row;
    background-color: rgb(238, 237, 237);
    border-radius: 2em;
}

h1 {
    text-align: center;
}

#review img {
    width: 40%;
}

#fotoProd,
#fotoUsuario {
    border-radius: 50%;
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