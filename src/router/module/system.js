// 个人中心模块
import { importUrl } from "@/router/routerOperate";
export default {
  path: "/system",
  name: "system",
  component: importUrl("system/layout"),
  meta: {
    title: "系统管理",
    icon: "el-icon-setting",
    parent: true
  },
  children: [
    {
      path: "user",
      name: "system-user",
      component: importUrl("system/user"),
      meta: {
        title: "用户管理",
        icon: "el-icon-user"
      }
    },
    {
      path: "role",
      name: "system-role",
      component: importUrl("system/role"),
      meta: {
        title: "角色管理",
        icon: "el-icon-coordinate"
      }
    },
    {
      path: "menu",
      name: "system-menu",
      component: importUrl("system/menu"),
      meta: {
        title: "菜单管理",
        icon: "el-icon-menu"
      }
    },
    {
      path: "department",
      name: "system-department",
      component: importUrl("system/department"),
      meta: {
        title: "部门管理",
        icon: "el-icon-school"
      }
    },
    {
      path: "station",
      name: "system-station",
      component: importUrl("system/station"),
      meta: {
        title: "岗位管理",
        icon: "el-icon-notebook-1"
      }
    },

    {
      path: "station1",
      name: "system-station1",
      component: importUrl("system/station"),
      meta: {
        title:
          "岗位管理岗位管理岗位管理岗位管理岗位管理岗位管理岗位管理岗位管理岗位管理岗位管理1",
        icon: "el-icon-notebook-1"
      }
    },
    {
      path: "menu1",
      name: "system-menu1",
      component: importUrl("system/menu"),
      meta: {
        title:
          "菜单管理菜单管理菜单管理菜单管理菜单管理菜单管理菜单管理菜单管理4326542624642642",
        icon: "el-icon-menu"
      }
    },
    {
      path: "department1",
      name: "system-department1",
      component: importUrl("system/department"),
      meta: {
        title:
          "部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理部门管理344555",
        icon: "el-icon-school"
      }
    }
  ]
};
