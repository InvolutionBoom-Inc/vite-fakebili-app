<template>
  <div id="drop_box_person" v-if="isCanUse">
    <div class="text">欢迎来到fakebili</div>
    <div class="btn">
      <el-button>注册</el-button> <el-button>登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  navItemName: String,
});

const CANUSENAME = ["个人中心"];
const isCanUse = computed(() => {
  const flag =
    CANUSENAME.filter((item) => item === props.navItemName).length > 0
      ? true
      : false;
  return flag;
});
</script>

<style lang="scss">
#drop_box_person {
  max-height: 75vh;
  min-height: 120px;
  min-width: 242px;
  max-width: 75px;
  display: flex;
  flex-direction: column;
  text-align: center;
  .text {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
  }
  .btn {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 5px;
    height: 80px;
    .el-button {
      height: 36px;
      margin: 0;
      flex: 1;
      border: transparent;
    }
    .el-button:nth-child(1) {
      margin-bottom: 5px;
      background-color: rgba(231, 228, 228, 0.3);
      color: black;
      &:hover {
        background-color: rgba(231, 228, 228, 1);
      }
    }
    .el-button:nth-child(2) {
      background-color: #00a0d8;
      color: white !important;
      &:hover {
        background: rgba(0, 160, 216, 0.9);
      }
    }
  }
}
</style>
