<template>
  <div class="home">
    <p>首页</p>
    <el-button type="primary" @click="initData">发送请求</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    initData() {
      this.$server.login.toLogin();
    }
  }
};
</script>
