import Vue from "vue";

//element-ui
import "element-ui/lib/theme-chalk/index.css";
import "./utils/elementui";

//全局组件
import GlobalComponent from "./components";
Vue.use(GlobalComponent);

//路由
import router from "./router";
//状态机制
import store from "./store";
// 权限
import "./permission";

// import App from "./App.vue";
import App from "./App";

import server from "@/api";
Vue.use(server);

Vue.prototype.$env = process.env; //环境变量
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
