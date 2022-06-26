<template>
  <div>
    <!-- 导航栏 -->
  </div>
  <div>
    <div>
      <!-- 左边导航 -->
    </div>
    <div>
      <!-- main -->
      <div>
        <div class="upload_main">
          <div class="dashed">
            <el-upload
              class="upload-demo"
              :multiple="false"
              :limit="1"
              :action="actionUrl"
              :auto-upload="false"
              :on-change="videoU"
            >
              <el-button type="primary">Click to upload</el-button>
              <template #tip>
                <div class="el-upload__tip">
                  MP3/MP4 files with a size less than 200M
                </div>
              </template>
            </el-upload>
          </div>
          <div class="form">
            <el-form
              :model="ruleForm"
              label-width="40px"
              ref="ruleFormRef"
              status-icon
              :rules="rules"
            >
              <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title" />
              </el-form-item>
              <el-form-item label="简介" prop="direction">
                <el-input v-model="ruleForm.direction" />
              </el-form-item>
              <el-button @click="resetForm(ruleFormRef)">reset</el-button>
            </el-form>
            <el-upload
              class="avatar-uploader"
              :action="actionUrl"
              :auto-upload="false"
              :limit="1"
              :on-change="imageU"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon">
                <i-ep-Plus />
              </el-icon>
              <template #tip>
                <div class="el-upload__tip">
                  Please upload a picture jpg/png
                </div>
              </template>
            </el-upload>
          </div>
        </div>

        <el-button type="primary" @click="sendUpload">立即投稿</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import {
  validateTitle,
  validateDirection,
  resetForm,
} from "../../hooks/validate-use.js"
import { logUpload } from "../../hooks/user/video.js"

const imageUrl = ref("")
const ruleFormRef = ref(null)
const actionUrl = "http://175.178.148.132:2333/platform/upload/video"

const ruleForm = reactive({
  title: "",
  direction: "",
  pic: {},
  video: {},
})

const rules = reactive({
  title: [{ validator: validateTitle, trigger: "blur" }],
  direction: [{ validator: validateDirection, trigger: "blur" }],
})

const videoU = (file) => {
  console.log(file)
  ruleForm.video = file
}

const imageU = (file) => {
  console.log(file)
  ruleForm.pic = file
}

const sendUpload = async () => {
  try {
    const send = await logUpload(
      ruleForm
    )
    console.log({ ...ruleForm })
  } catch (error) {
    console.log(error)
  }

}
</script>

<style lang="scss">
.upload_main {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  .dashed {
    width: 830px;
    height: 248px;
    border: dashed 1px #999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
  }
  .form {
    width: 830px;
    height: 400px;
    margin: 5px 0px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .el-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 10px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #8c939d;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: aqua;
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
  .avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
