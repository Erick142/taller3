<template>
    <div class="container">
        <div class="row">

            <div class="col-9">
                <div class="card w-100">
                    <div class="row  row-cols-lg-3 row-cols-1 row-cols-md-2 g-4">
                        <div class="col" v-for="imagen in producto.images" :key="imagen">
                            <img class="card-img-top border h-100" :src="imagen" alt="Card image cap">
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ producto.name }}</h5>
                        <p class="card-text">{{ producto.description }}</p>
                    </div>
                    <ul class="list-group list-group-flush">

                    </ul>
                    <div class="card-body">
                        Precio: ${{ producto.price }}
                    </div>
                </div>
            </div>



            <div class="col-3">
                <div class="card w-100">
                    <img class="card-img-top" :src="user.photo" alt="Card image cap" id="usuario">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="text-secondary card-text">{{ user.city }}</p>
                    </div>
                    <div class="card-body">
                        <router-link :to="`../perfil/${user._id}`" class="btn btn-primary">Perfil</router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="container">
        <h2 class="text-center my-4">Reseñas <span v-if="reviews.length!=0">{{`(${reviews.length})`}}</span></h2>
        <div class="row" v-if="reviews.length==0">
            <div class="col-12 text-center fs-4">Este producto no tiene reseñas :(</div>
        </div>
        <div class="row g-3" v-else>
            <div v-for="review in reviews" :key="review._id" class="col-12">
                <review-component :review="review"></review-component>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import ReviewComponent from "./ReviewComponent.vue"

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
    components:{
        ReviewComponent
    }
};
</script>
  
<style>

#usuario {
  border-radius: 50%;
}

</style>