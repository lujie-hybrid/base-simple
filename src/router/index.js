import Vue from "vue";
import VueRouter from "vue-router";
import { importUrl, loadModule } from "./routerOperate";

Vue.use(VueRouter);

const moduleRouters = loadModule();

const routes = [
  {
    path: "/",
    name: "Home",
    component: importUrl("Home")
  },
  ...moduleRouters
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 路由导航
  next();
});

export default router;
