import serverAxios from "../index";

const login = (data) => {
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

const register = (data) => {
  return serverAxios({
    url: "/user/register",
    method: "post",
    data,
  });
};

export { login, register, logOut };
