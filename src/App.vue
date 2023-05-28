<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Nav-bar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div class="wrapper">
    <header>
      {{ name }}
      <Navbar />
    </header>
    <RouterView />

    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
