<template>
  <el-form
    ref="refruleForm"
    :model="ruleForm"
    status-icon
    :rules="formRules"
    class="demo-ruleForm"
    label-width="20px"
  >
    <!-- 密码登录 -->
    <div v-if="name === 'password'">
      <el-form-item prop="identify">
        <el-input
          v-model="ruleForm.identify"
          type="text"
          autocomplete="off"
          placeholder="你的手机号/邮箱"
          size="large"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="密码"
          size="large"
        />
      </el-form-item>
    </div>

    <!-- 验证码登录 -->
    <div v-if="name === 'passcode'">
      <el-form-item prop="identify">
        <el-input
          v-model="ruleForm.identify"
          placeholder="请输入手机/邮箱"
          class="input-with-select"
          size="large"
        >
          <template #prepend>
            <el-select
              v-model="selectCity"
              placeholder="Select"
              style="width: 115px"
            >
              <el-option label="中国" value="China" />
              <el-option label="美国" value="US" />
              <el-option label="日本" value="Japan" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="密码"
          size="large"
        />
      </el-form-item>
    </div>

    <!-- 注册 -->
    <div v-if="name === 'register'">
      <el-form-item prop="nickname">
        <el-input
          v-model="ruleForm.nickname"
          placeholder="请输入用户名"
          class="input-with-select"
          size="large"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input
          v-model="ruleForm.tel"
          placeholder="请输入手机/邮箱"
          class="input-with-select"
          size="large"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="密码"
          size="large"
        />
      </el-form-item>
    </div>

    <el-form-item class="form_box_back">
      <el-checkbox name="reading" v-model="ruleForm.remember" label="记住我" />
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
        @click="submitForm(refruleForm, name)"
        >{{ buttonName }}</el-button
      >
      <el-button size="large" class="btn" @click="resetForm(refruleForm, name)"
        >重新输入</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
/* 登录表单组件 */
import {
  nickNameValidate,
  accountValidate,
  passwordValidate,
} from "../../hooks/validate-use.js";
import { ref, computed } from "vue";
import { toLogin } from "../../view/user/index.js";

const props = defineProps({
  name: String,
  ruleForm: Object,
});

const emits = defineEmits(["resetForm"]);

const userLogin = () => {
  // 密码表单实例
  const refruleForm = ref(null);
  // 密码表单规则
  const formRules = {
    identify: [{ validator: accountValidate, trigger: "change" }],
    tel: [{ validator: accountValidate, trigger: "change" }],
    password: [{ validator: passwordValidate, trigger: "change" }],
    nickname: [{ validator: nickNameValidate, trigger: "change" }],
  };

  //提交表单
  const submitForm = (formEl, type) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        toLogin({ ...props.ruleForm }, type);
      } else {
        return false;
      }
    });
  };
  // //重置表单
  const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
    emits("resetForm", props.name);
  };

  const buttonName = computed(() =>
    props.name === "password"
      ? "登录"
      : props.name === "register"
      ? "注册"
      : "未使用"
  );
  return {
    refruleForm,
    formRules,
    submitForm,
    resetForm,
    buttonName,
  };
};

let { refruleForm, formRules, submitForm, resetForm, buttonName } = userLogin();
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
