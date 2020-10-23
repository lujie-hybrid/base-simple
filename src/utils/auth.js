import store from "@/store";

// 验证token是否有效
export const validateToken = async token => {
  console.log(token);
  const res = await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        hasToken: true,
        routes: []
      });
    }, 1000);
  });
  store.dispatch("permission/generateRoutes", res.routes);
  return res.hasToken;
};
