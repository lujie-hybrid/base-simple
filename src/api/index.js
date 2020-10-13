// api module的自动注入

import myserver from "@/utils/server";

const requireModuleApi = require.context("./module", false, /\.js$/);

function toFirstUpper(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const install = Vue => {
  requireModuleApi.keys().forEach(filename => {
    const config = requireModuleApi(filename); //vue的实例
    const apiName = toFirstUpper(
      filename.replace(/\.\//, "").replace(/\.\w+$/, "")
    );
    myserver.parseRouter(apiName, config.default);
  });
  Vue.prototype.$server = myserver;
};

export default {
  install
};
