<template>
  <div class="card" style="height:300px;">
        <div class="row g-0 h-100">
            <div class="col-3 h-100">
                <img :src="review.user.photo" :alt="review.user.name+' profile photo'" style="width:100%; height:100%; object-fit:cover;" class="rounded-start">
            </div>
            <div class="col-9">
                    <div class="card w-100 h-100 rounded-start-0">
                    <div class="card-header d-flex justify-content-between">
                        <span>{{review.user.name}}</span>
                        <router-link :to="`/perfil/${review.user._id}`" class="text-secondary-emphasis">{{`ir al perfil de ${review.user.name}`}}</router-link>
                    </div>
                    <div class="card-text h-100 ps-2">{{review.review}}</div>
                    <div class="card-footer">{{review.updatedAt}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewComponent",
    props: ['review']
}
</script>

<style>

</style>