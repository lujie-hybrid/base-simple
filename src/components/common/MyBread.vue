<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="item in levelList" :key="item.path">
      <a v-if="!item.meta.parent" @click.prevent="handleLink(item)">{{
        item.meta.title
      }}</a>
      <span v-if="item.meta.parent">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
// import pathToRegexp from "path-to-regexp";

export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      console.log(this.$route, "this.$route");
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
      console.log(this.levelList);
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase();
    },
    // pathCompile(path) {
    //   // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    //   const { params } = this.$route;
    //   var toPath = pathToRegexp.compile(path);
    //   return toPath(params);
    // },
    handleLink(item) {
      const { path } = item;
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>
