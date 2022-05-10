import axios from "axios";
import serverConfig from "./config";

const serverAxios = axios.create({
  baseURL: serverConfig.baseURL, //基础请求地址
  timeout: 10000, // 请求超时设置
});

serverAxios.interceptors.request.use(
  (config) => {
    // 请求头携带 token 的情况
    if (config.useTokenAuthorization) {
      const { token } = JSON.parse(localStorage.getItem("userInfo"));
      config.headers["satoken"] = token;
    }
    // 设置请求头
    if (!config.headers["content-type"]) {
      // 如果没有设置请求头
      if (config.method === "post") {
        config.headers["content-type"] = "application/json;charset=utf-8"; // 默认类型
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

serverAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

export default serverAxios;
