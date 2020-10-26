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
  }
];

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject);
//   return originalPush.call(this, location).catch(err => err);
// };

const createRouter = () =>
  new VueRouter({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes: [...constantRoutes, ...moduleRouters]
  });
const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
