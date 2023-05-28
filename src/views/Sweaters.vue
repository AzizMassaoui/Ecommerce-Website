<script setup>
import { ref, onMounted } from "vue";
import { collection, query, where, getDocs } from "firebase/firestore";
// the firestore instance
import db from "../firebase/Firebase";

const tshirts = ref([]);
onMounted(async () => {
  // Create a query against the collection.
  const q = query(
    collection(db, "NewArrival"),
    where("type", "==", "sweaters")
  );
  const resp = await getDocs(q);
  tshirts.value = [];
  resp.forEach((doc) => {
    tshirts.value.push({
      key: doc.id,
      title: doc.data().title,
      price: doc.data().price,
      url: doc.data().url,
    });
  });
});
</script>
<template>
  <div class="tshirts">
    <div class="container">
      <div class="row g-3">
        <div
          v-for="(item, i) in tshirts"
          class="col-12 col-md-6 col-lg-4 my-card"
          style="cursor: pointer"
        >
          <div class="card">
            <img :src="item.url" class="card-img-top" alt="" />
            <div class="card-body rounded-bottom">
              <a
                href="#"
                style="text-decoration: none; color: black; font-weight: bold"
                >{{ item.title }}</a
              >
              <p>${{ item.price }}</p>
              <button type="button" disabled>Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tshirts {
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
  filter: brightness(90%);
}
</style>
