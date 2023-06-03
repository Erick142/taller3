<template>
 <nav class="navbar navbar-expand-md bg-body-tertiary mb-4 shadow" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="navbar-brand">Taller 3</div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav me-3">
          <router-link class="nav-link active" aria-current="page" :to="`/`">Listado</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "NavBar"

}
</script>

<style>

</style>