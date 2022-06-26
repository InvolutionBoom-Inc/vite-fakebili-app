import { info, upload } from "../../http/api/user.js"

const logInfo = async (data) => {
  try {
    const res = await info(data)
    return res.data.pic
  } catch (error) {
    console.log(error)
  }
}

const logUpload = async (data) => {
  try {
    const rex = await upload(data)
    console.log(data)
    return rex
  } catch (error) {
    console.log(error)
  }
}

export { logInfo, logUpload }
