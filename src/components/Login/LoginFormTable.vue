<template>
  <el-form
    ref="refruleFormPassCode"
    :model="ruleFormPassCode"
    status-icon
    :rules="formRules"
    class="demo-ruleForm"
    label-width="20px"
  >
    <el-form-item prop="identify">
      <el-input
        v-model="ruleFormPassCode.identify"
        type="text"
        autocomplete="off"
        placeholder="你的手机号/邮箱"
        size="large"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="ruleFormPassCode.password"
        type="password"
        autocomplete="off"
        placeholder="密码"
        size="large"
      />
    </el-form-item>
    <el-form-item class="form_box_back">
      <el-checkbox
        name="reading"
        v-model="ruleFormPassCode.remember"
        label="记住我"
      />
      <div class="btn_box_back">
        <el-button type="text">无法验证</el-button>
        <el-button type="text">忘记密码</el-button>
      </div>
    </el-form-item>
    <el-form-item class="form_box_login">
      <el-button
        type="primary"
        size="large"
        class="btn"
        @click="submitForm(refruleFormPassCode)"
        >登录</el-button
      >
      <el-button size="large" class="btn">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
/* 登录表单组件 */
import { accountValidate, passwordValidate } from "../../hooks/validate-use.js";
import { ref, reactive } from "vue";
import { toLogin } from "../../view/user/index.js";

const userLogin = () => {
  // 密码表单对象
  const ruleFormPassCode = reactive({
    identify: "19147930303",
    password: "z123456",
    remember: false,
  });

  // 密码表单实例
  const refruleFormPassCode = ref(null);
  // 密码表单规则
  const formRules = {
    identify: [{ validator: accountValidate, trigger: "change" }],
    password: [{ validator: passwordValidate, trigger: "change" }],
  };

  //提交表单
  const submitForm = (formEl) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        toLogin({ ...ruleFormPassCode });
      } else {
        return false;
      }
    });
  };

  return { ruleFormPassCode, refruleFormPassCode, formRules, submitForm };
};
let { ruleFormPassCode, refruleFormPassCode, formRules, submitForm } =
  userLogin();
</script>

<style lang="scss">
.demo-ruleForm {
  .form_box_back {
    .el-form-item__content {
      justify-content: space-between;
    }
  }
  .form_box_login {
    .el-form-item__content {
      justify-content: space-between;
      .btn {
        width: 45%;
      }
    }
  }
}
</style>
