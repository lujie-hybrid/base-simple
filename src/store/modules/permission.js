import { constantRoutes } from "@/router";

const state = {
  routes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = [...routes, ...constantRoutes];
  }
};

const actions = {
  generateRoutes({ commit }, routers) {
    commit("SET_ROUTES", routers);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
