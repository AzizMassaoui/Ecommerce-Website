<script setup>
import { ref, onMounted } from "vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/Firebase";

// trending products
const popular = ref([]);
onMounted(async () => {
  // Create a query against the collection.
  const q = query(collection(db, "products"), where("popular", "==", true));
  const resp = await getDocs(q);
  popular.value = [];
  resp.forEach((doc) => {
    popular.value.push({
      key: doc.id,
      title: doc.data().name,
      price: doc.data().price,
      url: doc.data().url,
    });
  });
});

// Scroll
const ele = ref(null);
const scrollRight = () => {
  ele.value.style.scrollBehavior = "smooth";
  ele.value.scrollLeft += 700;
};
const scrollLeft = () => {
  ele.value.style.scrollBehavior = "smooth";
  ele.value.scrollLeft -= 700;
};
</script>

<template>
  <div class="wrapper">
    <div class="text">
      <h1>Most Popular</h1>
    </div>
    <div class="trend-products">
      <img
        src="../assets/arrow-left-circle.svg"
        class="back"
        @click="scrollLeft"
      />
      <div class="media-scroller" ref="ele">
        <!-- Back Arrow -->

        <!-- start -->
        <a
          v-for="(item, i) in popular"
          :key="i"
          href="/Products"
          class="media-element"
          style="text-decoration: none"
        >
          <img :src="item.url" class="card-img-top" alt="..." />
          <div class="card-body text-center" style="color: black">
            <h5 class="card-title mb-1">{{ item.title }}</h5>
            <p class="card-text">${{ item.price }}</p>
          </div>
        </a>
        <!-- end -->
      </div>
      <!-- Left Arrow -->
      <img
        src="../assets/arrow-right-circle-fill.svg"
        class="next"
        @click="scrollRight"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: #f3f3f3;
  padding-top: 60px;
  padding-bottom: 60px;
}
.text h1 {
  padding-bottom: 40px;
  text-align: center;
}
.trend-products {
  display: flex;
  justify-content: center;
  align-items: center;
}
.media-scroller {
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  grid-auto-columns: 31%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  padding: 0 20px 20px;
}
.media-scroller a:hover {
  transform: scale(1.04);
}
.media-scroller::-webkit-scrollbar {
  display: none;
}
.media-element {
  display: grid;
  gap: 20px;
  grid-template-rows: min-content;
  padding: 20px;
  background: white;
  border-radius: 5px;
}
.media-element > img {
  inline-size: 100%;
  aspect-ratio: 10 / 8;
  object-fit: cover;
}
.next,
.back {
  cursor: pointer;
  margin: 20px;
}
</style>
