<template>
  <div id="app" class="app-wrapper">
    <router-view v-if="notLayoutViews.includes(this.$route.path)" />
    <layout v-if="!notLayoutViews.includes(this.$route.path)"></layout>
  </div>
</template>

<script>
import Layout from "@/layout";
export default {
  data() {
    return {
      notLayoutViews: ["/login"]
    };
  },
  components: {
    Layout
  },
  created() {
    console.log(this.$route, "app routes");
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
@import "@/assets/scss/elementui.scss";
.app-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}
</style>
