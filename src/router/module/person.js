// 个人中心模块
import { importUrl } from "@/router/routerOperate";
export default {
  path: "/person",
  name: "person",
  component: importUrl("person/Layout"),
  children: [
    {
      path: "info",
      name: "person-info",
      component: importUrl("person/Info")
    }
  ]
};
