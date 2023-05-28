import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products-Main.vue";
import Cart from "../views/Cart.vue";
import Sweaters from "../views/Sweaters.vue";
import Music from "../views/Music.vue";
import Tshirts from "../views/Tshirts.vue";
import Sign from "../views/Sign.vue";
import ArtistProducts from "../components/Products.vue";
import Profile from "../views/ProfileSection.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/sweaters",
      name: "Sweaters",
      component: Sweaters,
    },
    {
      path: "/music",
      name: "Music",
      component: Music,
    },
    {
      path: "/tshirts",
      name: "Tshirts",
      component: Tshirts,
    },
    {
      path: "/sign",
      name: "Sign",
      component: Sign,
    },
    {
      path: "/products/:id",
      name: "ArtistProducts",
      component: ArtistProducts,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
});

export default router;
