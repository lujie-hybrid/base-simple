// 全局组件的自动注入

const requireComponents = require.context("./common", false, /\.vue$/);

function toFirstUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const install = Vue => {
  // requireComponents.keys()----["./MyButton.vue"]
  requireComponents.keys().forEach(filename => {
    const config = requireComponents(filename); //vue的实例
    // filename ---- ./MyButton.vue
    // 进行转化得到 MyButton,另外防止有小写，进行首字母转化
    const componentName = toFirstUpper(
      filename.replace(/\.\//, "").replace(/\.\w+$/, "")
    );
    // 全局注册组件
    Vue.component(componentName, config.default || config);
  });
};

export default {
  install
};
