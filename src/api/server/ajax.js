import axios from "axios";
// import Vue from "vue";
const env =
  process.env.NODE_ENV === "development" ? "" : "http://10.168.1.186:22011";
const instance = axios.create({
  baseURL: env,
  timeout: 60000
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    const res = response.data;
    if (res.status === 1) {
      return res;
    } else {
      // Vue.prototype.$message({
      //   message: res.msg,
      //   type: "error"
      // });
      return Promise.reject();
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
