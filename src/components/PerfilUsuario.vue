<template>
    <div class="row align-items-center">
        <div class="col">
        </div>

        <div class="col">

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="foto" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ usuario.name }}</h5>
                    <p class="text-secondary card-text">{{ ciudad }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ usuario.bio }}</li>
                </ul>

            </div>

        </div>

        <div class="col">
        </div>
    </div>

    <h1 class="pt-3 pb-3">Reseñas Creadas por {{ usuario.name }}</h1>

    <div class="row align-items-center">
        <div class="col">
        </div>

        <div class="col">
            <div v-for="review in reviews" :key="review.id">
                <div class="card" style="width: 18rem;" id="review">
                    <img :src="review.product.images[0]" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ review.product.name }}</h5>
                        <p class="card-text">{{ review.review }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col"></div>
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
}

#review img {
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