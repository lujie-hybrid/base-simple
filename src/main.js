import Vue from "vue";

//element-ui
import "element-ui/lib/theme-chalk/index.css";
import "./utils/elementui";

//全局组件
import GlobalComponent from "./components";
Vue.use(GlobalComponent);

// api接口ajax配置
import server from "@/api";
Vue.use(server);

//路由
import router from "./router";
//状态机制
import store from "./store";

import App from "./App.vue";

Vue.prototype.$env = process.env; //环境变量
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
