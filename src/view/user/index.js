/* 交互处理层 */
import { loginLogic, logOutLogic } from "../../hooks/user/index.js";
import { openElMessage } from "../utils/pop-layer";
import router from "../../router/index.js";

// 是否在登录中，做节流处理
let isLogining = false;
// 登录
const toLogin = async (data) => {
  if (isLogining) {
    return;
  }
  isLogining = true;

  const loginResCode = await loginLogic({
    ...data,
  });
  if (loginResCode === 0) {
    openElMessage("登录成功，欢迎您！", "success");
    router.push("/Home");
  } else {
    openElMessage("登录失败！", "error");
  }

  setTimeout(() => {
    isLogining = false;
  }, 3000);
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
