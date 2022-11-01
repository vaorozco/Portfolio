import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { transition: "slide-left" },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { transition: "slide-left" },
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillView.vue"),
      meta: { transition: "slide-left" },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectView.vue"),
      meta: { transition: "slide-left" },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: { transition: "slide-left" },
    },
  ],
});

export default router;
