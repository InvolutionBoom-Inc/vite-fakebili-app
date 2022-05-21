<template>
  <div id="app">
    <el-container>
      <el-header class="header"> <TheNavigation /></el-header>
      <el-main class="main"><router-view></router-view></el-main>
      <el-footer class="footer"> @fakebili</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => {
  const userStatus = JSON.parse(localStorage.getItem("userInfo"));
  if (userStatus != null) {
    router.push("/Home");
  } else {
    router.push("/");
  }
});
</script>

<style lang="scss">
html {
  font-size: 10px;
}
#app {
  font-family: "等线";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1900px;
  margin: auto;
  .el-container {
    width: 100%;
    > .header {
      padding: 0;
      height: 50px;
      font-size: 10pt;
      width: 100%;
    }
    > .main {
      padding: 0;
      width: 100%;
      min-height: 500px;
    }
    > .footer {
      width: 100%;
      font-size: 25px;
      line-height: 100px;
      height: 100px;
      background-color: #f6f9fa;
      padding: 0;
      color: #999;
    }
  }
  .el-main {
    overflow: hidden;
  }
}
</style>
