const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.tagsView.visitedViews,
  addRouters: state => state.app.addRouters,
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // roles: state => state.user.roles,
  permission_routes: state => state.app.menu
  // errorLogs: state => state.errorLog.logs
};
export default getters;
