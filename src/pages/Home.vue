<template>
  <!-- 退出登录块 -->
  <HomePageLogout />

  <!-- 热门模块 -->
  <HomePagePopular :HomePageHot="HomePageHot" />
</template>

<script setup>
/* 引入依赖 */
import { computed } from "vue";
import { useStore } from "vuex";

/* 代码规范描述

   目的:加强可读性和复用性

   v0.1解决方法:按照设计模式(components视图层展示 -> view处理交互 -> hook处理数据)来规范代码

   案例:Home.vue
*/

// 热门模块:(目前只涉及视图层展示，也就是简单的一些响应式数据展示在页面上，所以目前不需要拆分)
const useHomePageHot = () => {
  const store = useStore();

  const HomePageHot = computed(() => store.state.HomePage.get("热门"));

  return { HomePageHot };
};

// 使用热门模块
const { HomePageHot } = useHomePageHot();
</script>

<!-- 使用scss预处理器 -->
<style lang="scss"></style>
