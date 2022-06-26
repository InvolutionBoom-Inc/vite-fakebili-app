<template>
  <div class="home-index">
    <el-container>
      <el-main>
        <div class="activity-popular">
          <HomePageActivity />
          <HomePagePopular :HomePageHot="HomePageHot" />
        </div>
        <div class="dynamic-column">
          <HomePageDynamics />
          <HomePageColumn />
        </div>
        <div class="switch-content">
          <div class="switch-content-nav">
            <HomePageSwitch :HomePageSwich="HomePageSwich" />
          </div>
          <div class="switch-content-main">
            <div class="dynamic-schedule">
              <div><HomePageNewDynamic /></div>
              <div><HomePageTimeTab /></div>
              <div><HomePageSchedule :HomePageSch="HomePageSch" /></div>
            </div>
            <div class="switch-content-rank"><HomePageRank /></div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
/* 引入依赖 */
import { computed, watch } from "vue";
import { useStore } from "vuex";

// 热门模块:(目前只涉及视图层展示，也就是简单的一些响应式数据展示在页面上，所以目前不需要拆分)
const store = useStore();
const useHomePageHot = () => {
  const HomePageHot = computed(() => store.state.HomePage.get("热门"));
  return { HomePageHot };
};

const useHomePageSwich = () => {
  const HomePageSwich = computed(() => store.state.HomePage.get("分区"));
  return { HomePageSwich };
};

const useHomePageSch = () => {
  const HomePageSch = computed(() => store.state.HomePage.get("番剧"));
  return { HomePageSch };
};

/* 代码规范描述

   目的:加强可读性和复用性

   v0.1解决方法:按照设计模式(components视图层展示 -> view处理交互 -> hook处理数据)来规范代码

   案例:Home.vue

// */

// 使用热门模块
const { HomePageHot } = useHomePageHot();
const { HomePageSwich } = useHomePageSwich();
const { HomePageSch } = useHomePageSch();
</script>

<!-- 使用scss预处理器 -->
<style lang="scss">
.home-index {
  width: 1420px;
  height: auto;
  margin: 10px auto;
  .el-main {
    width: 1380px;
    height: 100%;
    margin: 0 auto;
    .activity-popular,
    .dynamic-column {
      width: 100%;
      display: flex;
    }
    .switch-content {
      .switch-content-main {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
