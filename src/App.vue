<template>
  <div class="">
    <navbar-app></navbar-app>
    <hero-app></hero-app>
    <features-app></features-app>
    <product-app></product-app>
    <join-app></join-app>
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import HeroApp from './components/HeroApp.vue'
import FeaturesApp from './components/FeaturesApp.vue'
import ProductApp from './components/ProductApp.vue'
import JoinApp from './components/JoinApp.vue'
export default {
  components: {
    NavbarApp, HeroApp, FeaturesApp, ProductApp, JoinApp
  }
}

</script>

<style>
#app {
  font-family: Nunito Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>