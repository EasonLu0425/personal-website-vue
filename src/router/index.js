import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("../views/Skills"),
  },
  {
    path: "/careers",
    name: "careers",
    component: () => import("../views/Careers"),
  },
  {
    path: "/academic",
    name: "academic",
    component: () => import("../views/Academic"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects"),
  },
  {
    path: "*",
    name: "not-fond",
    component: () => import("../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
