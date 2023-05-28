<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import router from "../router";
import {
  collection,
  query,
  where,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
// the firestore instance
import db from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/Firebase";

const route = useRoute().params.id;
const products = ref([]);

//Get the current artist products

onMounted(async () => {
  // Create a query against the collection.
  const q = query(
    collection(db, "products"),
    where("artist", "==", route.toLowerCase())
  );
  const resp = await getDocs(q);
  products.value = [];
  resp.forEach((doc) => {
    products.value.push({
      key: doc.id,
      name: doc.data().name,
      price: doc.data().price,
      url: doc.data().url,
    });
  });
});

const localData = localStorage.getItem("uid");
const qty = ref(1);
const add = (prod) => {
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth && localStorage.getItem("uid") !== null) {
      setDoc(doc(db, `Cart ${localData}`, prod.key), {
        ID: prod.key,
        totalPrice: prod.price,
        price: prod.price,
        qty: qty.value++,
        title: prod.name,
        url: prod.url,
      });
    } else {
      router.push({ name: "Sign" });
    }
  });
};
</script>

<template>
  <div class="Products">
    <div class="container">
      <div class="row g-3">
        <div
          v-for="(item, i) in products"
          :key="i"
          class="col-12 col-md-6 col-lg-4 my-card"
          style="cursor: pointer"
        >
          <div class="card">
            <img :src="item.url" class="card-img-top" alt="" />
            <div class="card-body rounded-bottom">
              <a
                href="#"
                style="text-decoration: none; color: black; font-weight: bold ;"
                >{{ item.name.toUpperCase() }}</a
              >
              <p>${{ item.price }}</p>
              <button
                @click="add(item)"
                href="#"
                class="btn btn-dark add-cart"
                style="filter: brightness(100%) !important"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Products {
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
