const openElMessage = (message, tpye) => {
  ElMessage({
    message: message,
    type: tpye,
  });
};

export { openElMessage };
