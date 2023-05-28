<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "@firebase/auth";
import router from "../router";
import { doc, getDoc } from "@firebase/firestore";
import db from "../firebase/Firebase";

let UserName = ref(null);
const user = ref(null);
onAuthStateChanged(auth, (userAuth) => {
  if (userAuth) {
    user.value = user;
    const docRef = doc(db, "users", userAuth.uid);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        UserName.value = docSnap.data().UserName;
      }
    });
  } else {
    UserName.value = null;
    user.value = null;
  }
});

const singOut = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("uid");
    router.push({ name: "Home" });
  });
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-dark" id="headerNav">
    <div class="container">
      <a class="navbar-brand d-block d-lg-none" href="#"> Melodic Store </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <RouterLink class="nav-link mx-2 active" aria-current="page" to="/"
              >Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/products"
              >Products</RouterLink
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link mx-2 dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              New Arrivals
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <RouterLink class="dropdown-item" to="/tshirts"
                  >T-shirts</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/sweaters"
                  >Sweaters</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/music">Music</RouterLink>
              </li>
            </ul>
          </li>
          <!-- Cart -->
          <li class="nav-item Cart" v-if="user">
            <RouterLink class="nav-link mx-2" to="/cart"
              ><img src="../assets/cart-fill.svg" alt=""
            /></RouterLink>
          </li>
          <!-- Sign in -->
          <li class="nav-item sign-in" v-if="user == null">
            <RouterLink class="nav-link mx-2" aria-current="page" to="/sign">
              Sign in
            </RouterLink>
          </li>
          <!-- Logout -->

          <div class="nav-item logout-bar" v-if="user">
            <a
              class="nav-link mx-2 dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="../assets/person.svg" alt="" />
            </a>
            <div
              class="dropdown-menu profile-dropdown"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <h4 class="displayName" style="user-select: none">
                {{ UserName }}
              </h4>
              <div class="dropdown-divider"></div>
              <RouterLink class="dropdown-item" href="#" to="/profile"
                >Profile</RouterLink
              >

              <a
                style="cursor: pointer"
                @click="singOut"
                class="dropdown-item"
                aria-current="page"
              >
                Logout
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav-item a {
  font-weight: 600;
}
.dropdown-item:hover {
  background-color: #009688;
  border-radius: 5px;
  color: white;
}
@media (min-width: 992px) {
  .collapse {
    position: relative;
  }
  .nav-item.sign-in {
    position: absolute;
    right: 10px;
  }
  .nav-item.sign-in a {
    border: 1px solid #bdbdbd;
    border-radius: 10px;
  }
  .nav-item.logout-bar {
    position: absolute;
    right: -10px;
  }
  .nav-item.Cart {
    position: absolute;
    right: -50px;
  }

  .nav-item.logout-bar .profile-dropdown {
    position: absolute;
    left: -60px;
  }
}
.nav-item.Cart a {
  color: #f48278;
}
.displayName {
  text-align: center;
  letter-spacing: 1.5px;
  color: #777;
}
</style>
