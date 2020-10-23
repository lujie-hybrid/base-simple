<template>
  <div v-if="!item.meta.hidden">
    <template v-if="item.children && item.children.length > 0">
      <el-submenu :index="path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="`${item.path}/${child.path}`"
          :item="child"
          :path="`${item.path}/${child.path}`"
        />
      </el-submenu>
    </template>
    <template v-else>
      <router-link :title="path" :style="{ display: 'block' }" :to="path">
        <el-menu-item :index="path">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    path: String
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    return {};
  },
  methods: {}
};
</script>
