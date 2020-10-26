// import Vue from "vue";
import { getStorage, transRouters } from "@/utils/common";
import { server } from "@/api";
import { constantRoutes } from "@/router";

const state = {
  sidebar: {
    opened: true
  },
  menu: [],
  userMsg: {}
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
  },
  CLOSE_SIDEBAR: state => {
    state.sidebar.opened = false;
  },
  SET_MENU: (state, menus) => {
    state.menu = [...constantRoutes, ...menus];
  },
  SET_USER_MSG: (state, userMsg) => {
    state.userMsg = userMsg;
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }) {
    commit("CLOSE_SIDEBAR");
  },
  setMenu({ commit }) {
    console.log("setMunu start");
    return new Promise(resolve => {
      console.log(getStorage("token"), "setMunu inner start");
      server.login.getMenu({
        headers: {
          access_token: getStorage("token")
        },
        success(res) {
          console.log("setMunu success start");
          transRouters(res.list);
          commit("SET_MENU", res.list);
          resolve();
        },
        fail() {
          console.log("失败了");
        }
      });
      console.log("结束");
    });
  },
  login({ commit }, { username, password }) {
    console.log(server);
    return new Promise(resolve => {
      server.login.toLogin({
        type: "post",
        useFormData: true,
        data: {
          username,
          password
        },
        success(res) {
          commit("SET_USER_MSG", res);
          resolve(res);
        }
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
