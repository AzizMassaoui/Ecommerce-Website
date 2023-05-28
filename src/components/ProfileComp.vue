<script setup>
import { auth } from "../firebase/Firebase";
import { doc, getDoc } from "@firebase/firestore";
import db from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
let UserName = ref(null);
let firstName = ref(null);
let lastName = ref(null);
let gender = ref(null);
let country = ref(null);
let email = ref(null);
let phone = ref(null);
let state = ref(null);
let address = ref(null);

const user = ref(null);
onAuthStateChanged(auth, (userAuth) => {
  if (userAuth) {
    const docRef = doc(db, "users", userAuth.uid);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        UserName.value = docSnap.data().UserName;
        firstName.value = docSnap.data().firstName;
        lastName.value = docSnap.data().lastName;
        gender.value = docSnap.data().gender;
        country.value = docSnap.data().country;
        email.value = docSnap.data().email;
        phone.value = docSnap.data().phone;
        state.value = docSnap.data().state;
        address.value = docSnap.data().address;
      }
    });
  } else {
    UserName.value = null;
  }
});
</script>

<template>
  <div class="profile-page">
    <h1>Profile</h1>
    <div class="overview">
      <!-- Profile Pic -->
      <div class="avatar-box">
        <div class="image">
          <img class="user-img" src="../assets/user.png" alt="" />
          <button class="change">Change</button>
        </div>

        <h3 class="full-name">{{ UserName }}</h3>
        <p class="user-level">Level 20</p>
        <div class="level">
          <span style="width: 70%"></span>
        </div>
        <div class="stars">
          <img src="../assets/star-fill.svg" />
          <img src="../assets/star-fill.svg" />
          <img src="../assets/star-fill.svg" />
          <img src="../assets/star-fill.svg" />
          <img src="../assets/star-fill.svg" />
        </div>
        <p class="score">9.8 Rating</p>
      </div>
      <!-- /////// -->

      <div class="info-box">
        <!-- Start Information Row -->
        <div class="box">
          <h4 class="m-0 w-100" style="font-size: 18px; color: #888">
            General Information
          </h4>
          <div style="font-size: 16px">
            <span style="color: #888">Full Name: </span>
            <span>{{ firstName }} {{ lastName }}</span>
          </div>
          <div style="font-size: 16px">
            <span style="color: #888">Gender: </span>
            <span>{{ gender }}</span>
          </div>
          <div style="font-size: 16px">
            <span style="color: #888">Country: </span>
            <span>{{ country }}</span>
          </div>
        </div>
        <!-- End Information Row -->
        <!-- Start Information Row -->
        <div class="box">
          <h4 class="w-100 m-0" style="font-size: 18px; color: #888">
            Personal Information
          </h4>
          <div style="font-size: 16px">
            <span style="color: #888">Email: </span>
            <span>{{ email }}</span>
          </div>
          <div style="font-size: 16px">
            <span style="color: #888">Phone: </span>
            <span>{{ phone }}</span>
          </div>

          <div style="font-size: 16px">
            <span style="color: #888">State: </span>
            <span>{{ state }}</span>
          </div>
        </div>
        <!-- End Information Row -->
        <!-- Start Information Row -->
        <div class="box">
          <h4 class="w-100 m-0" style="font-size: 18px; color: #888">
            Shipping Address
          </h4>
          <div style="font-size: 16px">
            <span style="color: #888">Address: </span>
            <span max>{{ address }}</span>
          </div>
        </div>

        <!-- End Information Row -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  margin: 20px;
}
.overview {
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 40px 0px 40px 0;
}
.avatar-box {
  text-align: center;
  padding: 20px;
}
.user-img {
  border-radius: 50%;
  margin-bottom: 10px;
}
.avatar-box .change {
  color: white;
  font-size: 16px;
  border: none;
  background: none;
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.full-name {
  margin: 0;
}
.user-level {
  color: #888;
  margin-top: 10px;
}
.level {
  border-radius: 6px;
  background-color: #eee;
  position: relative;
}
.stars {
  margin-top: 10px;
  margin-bottom: 10px;
}
.score {
  color: #888;
  margin: 0;
  font-size: 13px;
}
.profile-page h1 {
  user-select: none;
}
/***********************************/
@media (max-width: 767px) {
  .profile-page .overview {
    flex-direction: column;
  }
  h1 {
    text-align: center;
  }
}
.profile-page .avatar-box {
  width: 300px;
  position: relative;
}
@media (min-width: 768px) {
  .profile-page .avatar-box {
    border-right: 1px solid #eee;
  }
}
.profile-page .avatar-box .image > img {
  width: 120px;
  height: 120px;
}
.avatar-box .image:hover .user-img {
  filter: brightness(0.75);
}
.avatar-box .image:hover .change {
  display: block;
}

.profile-page .avatar-box .level {
  height: 6px;
  overflow: hidden;
  margin: auto;
  width: 70%;
}
.profile-page .avatar-box .level span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: blue;
  border-radius: 6px;
}

.profile-page .info-box .box {
  flex-wrap: wrap;
  transition: 0.3s;
  padding: 20px;
  display: flex;
  align-items: center;
}
.profile-page .info-box .box:not(:last-child) {
  border-bottom: 1px solid #eee;
}

.profile-page .info-box .box:hover {
  background-color: #f9f9f9;
}
.profile-page .info-box .box > div {
  min-width: 250px;
  padding: 10px 0 0;
}
.profile-page .info-box h4 {
  font-weight: normal;
}
</style>
