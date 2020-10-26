import router from "./router";
// import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getStorage } from "@/utils/common"; // get token from cookie
import store from "@/store";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = to.meta.title;

  // determine whether the user has logged in
  const hasToken = getStorage("token");

  if (hasToken) {
    console.log(to, "666 to");
    if (to.path === "/login") {
      console.log("login router");
      next();
    } else {
      console.log("setMunu wrap start");
      store.dispatch("app/setMenu").then(() => {
        next();
      });
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
