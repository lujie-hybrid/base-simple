<template>
  <div class="home">
    <p :style="{ height: '3000px' }">首页</p>
    <el-button type="primary" @click="initData">发送请求</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    initData() {
      this.$server(this.$api.login.toLogin);
    }
  }
};
</script>
