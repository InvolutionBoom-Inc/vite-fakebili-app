/* 用户数据处理层 */
import { login, logOut } from "../../http/api/user.js";
import store from "../../store/index.js";

//保存用户数据
const toSaveUserInfo = (userInfo) => {
  store.commit("addUserInfo", userInfo);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

//删除用户数据
const toDeleteUserInfo = () => {
  store.commit("deleteUserInfo");
  localStorage.removeItem("userInfo");
};

/* 登录 */
const loginLogic = async (data) => {
  try {
    delete data.remember;
    const res = await login({
      ...data,
    });
    //存在漏洞情况:响应数据的状态码多样
    if (res.code === 0) {
      toSaveUserInfo({
        ...data,
        token: res.data.token,
        code: 0,
      });
      return res.code;
    } else {
      throw -1;
    }
  } catch (error) {
    return error;
  }
};

/* 退出登录 */
//存在漏洞情况:更多错误代码情况有待考虑
const logOutLogic = async () => {
  try {
    const res = await logOut();
    console.log(res.code);
    if (res.code == 0) {
      toDeleteUserInfo();
      return res.code;
    } else {
      throw -1;
    }
  } catch (error) {
    return error;
  }
};

export { loginLogic, logOutLogic };
