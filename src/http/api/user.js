import serverAxios from "../index"

const login = (data) => {
  return serverAxios({
    url: "/user/login",
    method: "post",
    data,
  })
}

const logOut = () => {
  return serverAxios({
    url: "/user/logout",
    method: "post",
    data: "",
    useTokenAuthorization: true,
  })
}

const register = (data) => {
  return serverAxios({
    url: "/user/register",
    method: "post",
    data,
  })
}

const info = (data) => {
  return serverAxios({
    url: "/video/info",
    method: "post",
    data,
    useTokenAuthorization: true,
  })
}

const upload = (data) => {
  return serverAxios({
    url: "/platform/upload/video",
    method: "post",
    data,
    useTokenAuthorization: true,
    type: "video",
  })
}

export { login, register, logOut, info, upload }
