<script setup>
import artists from "../data/cards.json";
</script>

<template>
  <div class="container">
    <div class="row g-3">
      <div
        v-for="artist in artists"
        :key="artist.id"
        class="col-12 col-md-6 col-lg-3 my-card"
        style="cursor: pointer"
      >
        <RouterLink :to="`products/${artist.name}`" style="text-decoration: none;">
          <div class="card">
            <img :src="artist.img" class="card-img-top" alt="" />
            <div class="card-body bg-dark rounded-bottom">
              <a href="#" style="text-decoration: none; color: white">{{
                artist.name
              }}</a>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 72px);
}
.row {
  padding-top: 60px;
  padding-bottom: 60px;
}

.card {
  border-color: transparent;
}
.card-body {
  text-align: center;
}
.my-card:hover {
  filter: brightness(120%);
}
</style>
