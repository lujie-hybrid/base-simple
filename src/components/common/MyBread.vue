<!--
 * @author: lujie
 * @Date: 2020-07-20 10:09:34
 * @LastEditTime: 2020-07-20 10:23:56
 * @FilePath: \official_website\src\components\common\MyBread.vue
 * @descripttion: [desc]
 * @editor: [lj]
-->
<template>
  <ul class="fx bread">
    <li class="f12" v-for="(item, i) in bread" :key="i">
      <i class="el-icon-s-home" v-if="i === 0"></i>
      <i class="el-icon-caret-right" v-if="i !== 0"></i>
      <span :class="['ml10', { 'bread-active': i === bread.length - 1 }]">{{
        item
      }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    bread: Array
  }
};
</script>

<style lang="scss" scoped>
.bread {
  color: $txt-4;
  i {
    color: $txt-6;
  }
  > li {
    margin-left: 10px;
  }
  > li:first-child {
    margin-left: 0;
  }
  &-active {
    color: $txt-2;
    font-weight: bold;
  }
}
</style>
