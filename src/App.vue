<template>
  <div class="">
    <navbar-app></navbar-app>
    <hero-app></hero-app>
    <features-app></features-app>
    <product-app></product-app>
    <join-app></join-app>
    <review-app></review-app>
    <contact-app></contact-app>
    <footer-app></footer-app>
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'
import HeroApp from './components/HeroApp.vue'
import FeaturesApp from './components/FeaturesApp.vue'
import ProductApp from './components/ProductApp.vue'
import JoinApp from './components/JoinApp.vue'
import ReviewApp from './components/ReviewApp.vue'
import ContactApp from './components/ContactApp.vue'
import FooterApp from './components/FooterApp.vue'
export default {
  components: {
    NavbarApp, HeroApp, FeaturesApp, ProductApp, JoinApp, ReviewApp, ContactApp, FooterApp
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