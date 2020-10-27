import { importUrl } from "@/router/routerOperate";
// 常用的函数
export const setStorage = (key, content) => {
  const msg = typeof content === "string" ? content : JSON.stringify(content);
  localStorage.setItem(key, msg);
};

export const getStorage = key => {
  const content = localStorage.getItem(key);
  if (!content) return null;
  return typeof content === "string" ? content : JSON.parse(content);
};

export const transRouters = list => {
  list.forEach(ele => {
    ele.component = importUrl(ele.component);
    if (ele.children && ele.children.length > 0) {
      transRouters(ele.children);
    }
  });
};
