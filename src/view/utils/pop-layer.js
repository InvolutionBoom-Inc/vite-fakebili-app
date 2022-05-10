//信息提示
const openElMessage = (message, tpye) => {
  ElMessage({
    message: message,
    type: tpye,
  });
};

export { openElMessage };
