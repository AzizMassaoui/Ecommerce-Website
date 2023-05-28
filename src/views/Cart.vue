<script setup>
import { ref } from "vue";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  
} from "firebase/firestore";
// the firestore instance
import db from "../firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Myproducts = ref([]);

let total = ref(0);
onSnapshot(collection(db, `Cart ${localStorage.getItem("uid")}`), (query) => {
  total.value = 0;
  query.forEach((doc) => {
    total.value += doc.data().totalPrice;
  });
});

onSnapshot(collection(db, `Cart ${localStorage.getItem("uid")}`), (query) => {
  Myproducts.value = [];
  query.forEach((doc) => {
    Myproducts.value.push({
      key: doc.id,
      price: doc.data().price,
      url: doc.data().url,
      title: doc.data().title,
      qty: doc.data().qty,
      totalPrice: doc.data().totalPrice,
    });
  });
});

let product;
const productInc = async (docKey) => {
  const cartProduct = await getDoc(
    doc(db, `Cart ${localStorage.getItem("uid")}`, docKey)
  );
  product = cartProduct.data();
  product.qty = product.qty + 1;
  product.totalPrice = product.qty * product.price;

  // update database
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDoc(
        doc(db, `Cart ${localStorage.getItem("uid")}`, cartProduct.id),
        product
      );
    }
  });
};

const productDec = async (docKey) => {
  const cartProduct = await getDoc(
    doc(db, `Cart ${localStorage.getItem("uid")}`, docKey)
  );
  product = cartProduct.data();
  if (product.qty > 1) {
    product.qty = product.qty - 1;
    product.totalPrice = product.qty * product.price;

    // update database
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user && localStorage.getItem("uid")) {
        setDoc(
          doc(db, `Cart ${localStorage.getItem("uid")}`, cartProduct.id),
          product
        );
      }
    });
  }
};

const removeProduct = async (docKey) => {
  deleteDoc(doc(db, `Cart ${localStorage.getItem("uid")}`, docKey));
};
</script>
<template>
  <div class="My-Products">
    <div class="container">
      <div class="row g-3" style="padding-bottom: 60px">
        <div
          v-for="(item, i) in Myproducts"
          :key="i"
          class="col-12 col-md-6 col-lg-3 my-card"
          style="cursor: pointer"
        >
          <div class="card">
            <img :src="item.url" class="card-img-top" alt="" />
            <div class="card-body rounded-bottom">
              <p style="font-weight: bold; min-height: 48px">
                {{ item.title }}
              </p>
              <div>
                <p>${{ item.price }}</p>
                <p>Quantity</p>
                <!-- Start minus/plus -->
                <div class="input-group" style="padding-bottom: 10px">
                  <span class="input-group-prepend">
                    <button
                      @click="productDec(item.key)"
                      type="button"
                      class="btn btn-outline-secondary btn-number"
                    >
                      <span class="fa fa-minus"></span>
                    </button>
                  </span>
                  <input
                    readonly
                    type="text"
                    class="form-control input-number"
                    style="text-align: center; box-shadow: none"
                    :value="item.qty"
                    min="1"
                    max="99"
                  />
                  <span class="input-group-append">
                    <button
                      @click="productInc(item.key)"
                      type="button"
                      class="btn btn-outline-secondary btn-number"
                    >
                      <span class="fa fa-plus"></span>
                    </button>
                  </span>
                </div>
                <!-- End minus/plus -->
                <p style="color: red; font-size: 18px; font-weight: bold">
                  ${{ item.totalPrice }}
                </p>
              </div>
              <a
                @click="removeProduct(item.key)"
                class="btn btn-danger"
                style="filter: brightness(100%) !important"
                >Remove</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="summary">
        <div class="summary-box">
          <div class="text" style="padding-top: 50px">
            <h5 style="font-size: 30px">Cart Summary</h5>

            <p style="font-weight: bold">
              Total :
              <span style="color: red; font-size: 20px">${{ total }}</span>
            </p>
          </div>

          <button
            class="btn btn-success"
            style="margin: 20px 0 20px; font-size: 22px"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container .summary {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  text-align: center;
}
.summary .summary-box {
  width: 45%;
  border: 1px solid rgb(119 119 119 / 33%);
}
.My-Products {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.My-Products {
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
