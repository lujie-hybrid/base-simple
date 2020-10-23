import Vue from "vue";
import VueRouter from "vue-router";
import { importUrl, loadModule } from "./routerOperate";

Vue.use(VueRouter);

const moduleRouters = loadModule();

export const constantRoutes = [
  {
    path: "/",
    name: "home",
    component: importUrl("home"),
    meta: {
      title: "首页",
      icon: "el-icon-house"
    }
  },
  {
    path: "/login",
    name: "login",
    component: importUrl("login"),
    meta: {
      hidden: true,
      title: "登录",
      icon: "el-icon-house"
    }
  },
  ...moduleRouters
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
});

export default router;
