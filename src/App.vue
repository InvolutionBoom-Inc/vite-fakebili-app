<template>
  <div id="app">
    <el-container>
      <el-header class="header"> <TheNavigation /></el-header>
      <el-main class="main"><router-view></router-view></el-main>
      <el-footer class="footer"> @fackbilibili</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<style lang="less">
html {
  font-size: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el-container {
    .header {
      padding: 0;
      height: 50px;
      font-size: 10pt;
    }
    .main {
      padding: 0;
    }
    .footer {
      font-size: 25px;
      line-height: 100px;
      height: 100px;
      background-color: #f6f9fa;
      padding: 0;
      color: #999;
    }
  }
}
</style>
