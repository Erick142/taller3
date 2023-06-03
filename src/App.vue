<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FooterVue></FooterVue>
</template>

<script>
import NavBar from "./components/Navbar.vue"
import FooterVue from "./components/FooterVue.vue"
export default {
  components:{
    NavBar,
    FooterVue
  }
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>