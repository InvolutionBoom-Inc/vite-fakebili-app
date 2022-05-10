//账户验证规则
const accountValidate = (rule, value, callback) => {
  const regPhone = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  const regEmail = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
  if (value === "") {
    callback(new Error("Please input the account"));
  } else if ((value !== "" && regPhone.test(value)) || regEmail.test(value)) {
    callback();
  } else {
    callback(new Error("Please enter the correct account format"));
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
export { accountValidate, passwordValidate };
