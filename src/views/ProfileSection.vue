<script setup>
import Report from "../components/ReportComp.vue";
import Profile from "../components/ProfileComp.vue";
import Setting from "../components/SettingComp.vue";
import { auth } from "../firebase/Firebase";
import { doc, getDoc } from "@firebase/firestore";
import db from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
const showComponent = ref("profile");
const activeEl = ref(1);
const profileComponent = () => {
  return Profile;
};
const settingsComponent = () => {
  return Setting;
};
const ReportComponent = () => {
  return Report;
};
const activate = (i) => {
  activeEl.value = i;
};

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
</script>

<template>
  <div class="page d-flex">
    <div class="sidebar bg-dark position-relative">
      <h3 class="position-relative text-center mt-0">{{ UserName }}</h3>
      <ul>
        <li>
          <a
            class="d-flex align-items-center text-light"
            @click="
              showComponent = 'profile';
              activate(1);
            "
            :class="{ active: activeEl == 1 }"
          >
            <img src="../assets/person.svg" alt="" />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a
            class="d-flex align-items-center text-light"
            @click="
              showComponent = 'settings';
              activate(2);
            "
            :class="{ active: activeEl == 2 }"
          >
            <img src="../assets/gear.svg" alt="" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a
            class="d-flex align-items-center text-light"
            @click="
              showComponent = 'Report';
              activate(3);
            "
            :class="{ active: activeEl == 3 }"
          >
            <img src="../assets/chat-right-fill.svg" alt="" />
            <span>Report</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content" style="background-color: #f1f5f9">
      <Profile v-if="showComponent === 'profile'" :is="profileComponent" />
      <Setting v-if="showComponent === 'settings'" :is="settingsComponent" />
      <Report v-if="showComponent === 'Report'" :is="ReportComponent" />
    </div>
  </div>
</template>
<style scoped>
.page {
  min-height: 100vh;
}
.content {
  width: 100%;
}
a {
  text-decoration: none;
}
.sidebar {
  padding: 30px;
  width: 250px;
  box-shadow: 0 0 10px rgb(33, 37, 41);
  clip-path: inset(0px -10px 0px 0px);
}
.sidebar > h3 {
  color: white;
}

.sidebar > h3::after,
.sidebar > h3::before {
  content: "";
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.sidebar > h3::before {
  width: 80px;
  height: 2px;

  bottom: -20px;
}
.sidebar > h3::after {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  bottom: -26px;
  border: 3px solid rgb(33, 37, 41);
}
.sidebar ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  gap: 20px;
}

.sidebar ul li a {
  transition: 0.3s;
  font-size: 14px;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
}
.sidebar ul li a:hover,
.sidebar ul li a.active {
  background-color: #08766c;
}
.sidebar ul li a span {
  font-size: 14px;
  margin-left: 10px;
}
@media (max-width: 767px) {
  .sidebar {
    width: 57px;
    padding: 10px;
  }
  .sidebar > h3 {
    font-size: 13px;
  }
  .sidebar > h3::before,
  .sidebar > h3::after {
    display: none;
  }

  .sidebar ul li a span {
    display: none;
  }
}
</style>
