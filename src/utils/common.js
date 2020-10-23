// 常用的函数

export const setStorage = (key, content) => {
  const msg = typeof content === "string" ? content : JSON.stringify(content);
  localStorage.setItem(key, msg);
};

export const getStorage = key => {
  const content = localStorage.getItem(key);
  if (!content) return null;
  return JSON.parse(content);
};
