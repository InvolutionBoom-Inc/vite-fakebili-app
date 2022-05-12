<template>
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="Success Tip" sub-title="欢迎来到首页">
        <template #extra>
          <el-button type="primary" @click="toLogOut">退出登录</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup>
import { toLogOut } from "../../view/user/index.js";
</script>

<style lang="scss">
.el-row {
  justify-content: center;
}
</style>
