import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabase";
// import Login2View from "../views/Login2View.vue";
// import SignInView from "../views/SignInView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  console.log("to: ", to);
  const userAuth = await supabase.auth.getUser();
  console.log("getUser: ", userAuth);
  const isLoggedIn = userAuth.data.user !== null;

  if (!isLoggedIn && to.name === "dashboard") {
    return "/";
  }
});

export default router;
