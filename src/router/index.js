import { createRouter, createWebHistory } from "vue-router";
import Dasboard from "../views/DashboardViews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Dasboard,
    },
  ],
});

export default router;
