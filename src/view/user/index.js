/* 交互处理层 */
import {
  loginPassWordLogic,
  registerLogic,
  logOutLogic,
} from "../../hooks/user/index.js";
import { openElMessage } from "../utils/pop-layer";
import router from "../../router/index.js";

// 是否在登录中，做节流处理
let isLogining = false;
// 去登录或者注册
const toLogin = async (data, type) => {
  let typeMessage = "";
  if (isLogining) {
    return;
  }
  isLogining = true;

  let loginResCode = null;
  if (type === "password") {
    typeMessage = "登录";
    loginResCode = await loginPassWordLogic({
      ...data,
    });
  } else if (type === "register") {
    typeMessage = "注册";
    loginResCode = await registerLogic({
      ...data,
    });
  }

  //做状态码判断
  if (loginResCode === 0) {
    openElMessage(`${typeMessage}成功，欢迎您！`, "success");
    router.push("/Home");
  } else {
    openElMessage(`${typeMessage}失败！`, "error");
  }

  isLogining = false;
};

//去退出登录
const toLogOut = async () => {
  const logOutCode = await logOutLogic();
  console.log(logOutCode);
  if (logOutCode == 0) {
    openElMessage("退出成功");
    router.push("/");
  } else {
    openElMessage("退出失败，请重试！");
  }
};

export { toLogin, toLogOut };
