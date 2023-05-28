<script setup>
import router from "../router";
import { reactive, ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
// the firestore instance
import db from "../firebase/Firebase";

const userInfo = reactive({
  UserName: "",
  email: "",
  password: "",
  uid: "",
});
const user = reactive({ email: "", password: "" });

// Error msg if login wrong
const signerrMsg = ref("");
const errMsg = ref("");
//Check if user Logged in
const isLoggedIn = ref(false);
//show login forum
const showLogin = ref(true);
const loginUser = () => {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userData) => {
      localStorage.setItem("uid", userData.user.uid);
      router.push({ name: "Home" });
    })
    .catch(() => {
      errMsg.value = "INCORRECT EMAIL OR PASSWORD.";
    });
};

const registerUser = () => {
  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then((userData) => {
      localStorage.setItem("uid", userData.user.uid);
      setDoc(doc(db, "users", userData.user.uid), {
        UserName: userInfo.UserName,
        email: userInfo.email,
        uid: userData.user.uid,
      }).then(() => {
        setTimeout(() => {
          router.push({ name: "Home" });
        }, 250);
      });
    })
    .catch((error) => {
      signerrMsg.value = error.message.substring(10);
    });
};
</script>

<template>
  <div class="container-fluid">
    <div v-if="!isLoggedIn">
      <!-- Sign in -->
      <template v-if="showLogin">
        <form @submit.prevent="loginUser" class="mx-auto">
          <h4 class="text-center text-uppercase">CUSTOMER LOGIN</h4>
          <div class="mb-3 mt-5">
            <label for="InputEmail" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              v-model="user.email"
            />
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              v-model="user.password"
            />
          </div>
          <div
            class="alert text-uppercase fw-bold text-danger"
            role="alert"
            v-if="errMsg"
          >
            {{ errMsg }}
          </div>
          <button type="submit" class="btn btn-dark text-uppercase mt-3">
            Sign In
          </button>
          <div class="text-center text-uppercase mt-3">
            <a
              @click="showLogin = false"
              class="text-dark fw-bold"
              style="cursor: pointer"
            >
              Or Create An Account
            </a>
          </div>
        </form>
      </template>
      <!-- Sign up -->

      <template v-else>
        <form @submit.prevent="registerUser" class="mx-auto">
          <h4 class="text-center text-uppercase">Create Account</h4>
          <div class="mb-3 mt-5">
            <label for="InputText" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="InputText"
              aria-describedby="emailHelp"
              v-model="userInfo.UserName"
            />
          </div>
          <div class="mb-3">
            <label for="InputEmail" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              v-model="userInfo.email"
            />
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              v-model="userInfo.password"
            />
          </div>
          <div
            class="alert text-uppercase fw-bold text-danger"
            role="alert"
            v-if="signerrMsg"
          >
            {{ signerrMsg }}
          </div>

          <button
            type="submit"
            href="#"
            class="btn btn-dark text-uppercase mt-3"
          >
            Create
          </button>
          <div class="text-center text-uppercase mt-3">
            <a
              @click="showLogin = true"
              class="text-dark fw-bold"
              style="cursor: pointer"
            >
              Or Sign in
            </a>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>
<style scoped>
.container-fluid {
  min-height: calc(100vh - 72px);
}
form {
  width: 24%;
  padding: 50px;
  border-radius: 20px;
  margin-top: 150px;
  border: 1px solid #bdbdbd;
}
.btn-dark {
  width: 100%;
  border: none;
  border-radius: 50px;
}
.form-control {
  color: rgba(0, 0, 0, 0.87);
  border-bottom-color: rgba(0, 0, 0, 0.42);
  box-shadow: none !important;
  border: 1px solid;
}

@media only screen and (max-width: 600px) {
  form {
    width: 100% !important;
  }
}
</style>
