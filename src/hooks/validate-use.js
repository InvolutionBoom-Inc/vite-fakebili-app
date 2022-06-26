//用户名验证规则
const nickNameValidate = (rule, value, callback) => {
  const regNickName = /^([a-zA-Z0-9_\u4e00-\u9fa5]{4,16})$/;
  if (value === "") {
    callback(new Error("Please input the account"));
  } else if (value !== "" && regNickName.test(value)) {
    callback();
  } else {
    callback(new Error("Length should be 4 to 16"));
  }
};
//账户验证规则
const accountValidate = (rule, value, callback) => {
  const regPhone = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  const regEmail = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
  if (value === "") {
    callback(new Error("Please input the account"));
  } else if ((value !== "" && regPhone.test(value)) || regEmail.test(value)) {
    callback();
  } else {
    callback(new Error("Please enter the correct email or phone.no format"));
  }
};
//密码验证规则
const passwordValidate = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    callback();
  }
};
//上传视频标题、简历规则
const validateTitle = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the Title"))
  } else {
    callback()
  }
}

const validateDirection = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the direction"))
  } else {
    callback()
  }
}

const resetForm = (formEI) => {
  if (!formEI) return
  formEI.resetFields()
}

export { nickNameValidate, accountValidate, passwordValidate,validateTitle,validateDirection,resetForm };
