import { createRouter, createWebHistory } from "vue-router";
import FisicaView from "../views/FisicaView.vue";
import HomeViewVue from "../views/HomeView.vue";
import MathView from "../views/MathView.vue";
import QuimicaView from "../views/QuimicaView.vue";
import FaqView from "../views/FaqView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/fisica",
      name: "fisica",
      component: FisicaView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeViewVue,
    },
    {
      path: "/math",
      name: "math",
      component: MathView,
    },
    {
      path: "/quimica",
      name: "quimica",
      component: QuimicaView,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
  ],
});

export default router;
