// ajax的封装
import server from "./ajax";
import qs from "qs";

class MyServer {
  constructor(server) {
    this.server = server;
  }
  /**
   * 注册接口
   * @param {模块名 /api/module下的文件名} moduleName
   * @param {当前模块导出的数据 export default} interfaceModuleMsg
   */
  parseRouter(moduleName, interfaceModuleMsg) {
    this[moduleName] = {};
    Object.keys(interfaceModuleMsg).forEach(key => {
      this[moduleName][key] = this.sendInferface.bind(
        this,
        moduleName,
        key,
        interfaceModuleMsg[key]
      );
      this[moduleName][key].state = "ready";
    });
  }
  /**
   * 发送接口
   * @param {模块名 /api/module下的文件名} moduleName
   * @param {当前模块名下每个接口的key} key
   * @param {当前模块名下的key对应的url值} url
   * @param {页面使用时候请求的配置} config
   */
  sendInferface(moduleName, key, url, config = {}) {
    let innerConfig = {
      type: config.type || "get",
      data: config.data || {},
      success: config.success || (() => {}),
      fail: config.fail || (() => {}),
      multi: config.multi || false,
      headers: config.headers || {},
      url: config.url || url,
      urlId: config.urlId || "",
      useFormData: config.useFormData || false
    };
    const callback = res => {
      const wrapData = res.data;
      this[moduleName][key].state = "ready";
      return wrapData;
    };
    const fail = () => {
      this[moduleName][key].state = "ready";
      innerConfig.fail();
    };
    innerConfig.urlId &&
      (innerConfig.url = innerConfig.url + innerConfig.urlId);
    let method = {
      get: () => {
        const qsUrl = innerConfig.data
          ? `${innerConfig.url}?${qs.stringify(innerConfig.data)}`
          : innerConfig.url;
        this.server
          .get(qsUrl, { headers: innerConfig.headers })
          .then(callback)
          .then(innerConfig.success)
          .catch(fail);
      },
      post: () => {
        let fm = null;
        if (innerConfig.useFormData) {
          fm = new FormData();
          Object.keys(innerConfig.data).forEach(k => {
            fm.append(k, innerConfig.data[k]);
          });
        } else {
          fm = innerConfig.data;
        }
        this.server
          .post(innerConfig.url, fm, {
            headers: innerConfig.headers
          })
          .then(callback)
          .then(innerConfig.success)
          .catch(fail);
      }
    };
    if (this[moduleName][key].state === "ready") {
      !innerConfig.multi && (this[moduleName][key].state = "pending");
      method[innerConfig.type]();
    }
  }
}

export default new MyServer(server);
