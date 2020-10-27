// 操作路由的函数汇总
export const importUrl = url => () => import(`@/views/${url}.vue`);

export const loadModule = () => {
  const innerRouters = [];
  const requireModuleApi = require.context("@/router/module", false, /\.js$/);
  // const toFirstUpper = str => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };
  requireModuleApi.keys().forEach(filename => {
    const config = requireModuleApi(filename); //vue的实例
    // const apiName = toFirstUpper(
    //   filename.replace(/\.\//, "").replace(/\.\w+$/, "")
    // );
    // console.log(apiName, config.default);
    innerRouters.push(config.default);
  });
  return innerRouters;
};
