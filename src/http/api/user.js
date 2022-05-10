import serverAxios from "../index";

const login = (data) => {
  delete data.remember;
  return serverAxios({
    url: "/user/login",
    method: "post",
    data,
  });
};

const logOut = () => {
  return serverAxios({
    url: "/user/logout",
    method: "post",
    data: "",
    useTokenAuthorization: true,
  });
};

const register = (data) => {};

export { login, register, logOut };
