<template>
  <div id="app-login">
    <el-row>
      <el-col :span="24" class="banner">
        <img src="../assets/img/banner.png" alt="banner" class="banner_img" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="title-line">
          <span class="tit">登录</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="main" justify="center">
      <el-col :span="6"> <el-empty description="目前这里不放东西" /></el-col>
      <div class="line"></div>
      <el-col :span="6" class="login_box">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="密码登录" name="first">
            <FormTable
              name="password"
              :ruleForm="ruleFormPassCode"
              @resetForm="resetForm"
            />
          </el-tab-pane>
          <el-tab-pane label="用户注册" name="second">
            <FormTable name="register" :ruleForm="ruleFormRegister" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import user from "../test/index.js";

const activeName = ref("first");
const handleClick = (tab, event) => {
  console.log(tab, event);
};

// 密码表单对象
let ruleFormPassCode = reactive({
  identify: "",
  password: "",
  remember: false,
});
// 密码表单对象
let ruleFormRegister = reactive({
  nickname: "",
  tel: "",
  password: "",
  remember: false,
});
// 重置表单函数
const resetForm = (name) => {
  if (name === "passcode") {
    ruleFormPassCode = { ...ruleFormPassCode };
  } else if (name === "register") {
    ruleFormRegister = { ...ruleFormRegister };
  }
};

// 测试
ruleFormPassCode.identify = user.identify;
ruleFormPassCode.password = user.password;
</script>

<style lang="scss">
#app-login {
  width: 100%;
  .banner {
    background-color: #00a0d8;
    height: 86px;
    img {
      width: 980px;
    }
  }
  .title-line {
    width: 980px;
    height: 28px;
    margin: 40px auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 28px;
    text-align: center;
    .tit {
      height: 56px;
      line-height: 56px;
      margin: 20px auto;
      padding: 0 20px;
      font-size: 38px;
      background: #fff;
      text-align: center;
    }
  }
  .main {
    .login_box {
      height: 100%;
      .demo-tabs {
        margin: 40px;
        > .el-tabs__content {
          padding: 32px 32px 32px 0px;
          color: #6b778c;
          font-size: 32px;
          font-weight: 600;
        }
      }
    }
    .line {
      border-right: 1px solid #ddd;
      height: 300px;
      margin-top: 28px;
    }
  }
}
</style>
