<template>
  <div class="app_the_navigation">
    <el-row
      align="middle"
      class="navigation_content"
      justify="center"
      :gutter="0"
    >
      <el-col :span="5" class="nav" :pull="3">
        <el-row align="middle" justify="center">
          <el-col :span="3">
            <img src="../assets/img/logo.png" class="logo" />
          </el-col>
          <el-col :span="3" v-for="itemL in naviItemLeft" :key="itemL">
            <el-dropdown class="item">
              <span class="el_dropdown_link">
                {{ itemL.name }}
              </span>
              <template #dropdown>
                <DropBox v-model:navItemName="itemL.name" />
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="6" class="nav_center_input">
        <el-input
          :autofocus="true"
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="搜索"
          :suffix-icon="Search"
          show-word-limit
        />
      </el-col>

      <el-col :span="2" :push="3" class="nav"
        ><el-row align="middle"
          ><el-col :span="12" v-for="itemR in naviItemRight" :key="itemR">
            <el-dropdown class="item_person" v-if="itemR.name === '个人中心'">
              <div class="avatar">
                <el-avatar :size="30" :src="getAssetsFile('person.jpg')" />
              </div>
              <template #dropdown>
                <DropBox v-model:navItemName="itemR.name" class="dropbox" />
              </template>
            </el-dropdown>

            <el-dropdown class="item" v-else-if="itemR.name === '投稿'">
              <div>
                <span class="bilifont bili-icon_dingdao_wenzhangtougao"></span>
                <span class="el-dropdown-link">
                  {{ itemR.name }}
                </span>
              </div>
              <template #dropdown>
                <DropBox v-model:navItemName="itemR.name" />
              </template>
            </el-dropdown>
          </el-col> </el-row
      ></el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { getAssetsFile } from "../utils/pub-use";

const naviItemLeft = ref([
  { name: "主站", done: "false" },
  { name: "排行", done: "false" },
  { name: "直播", done: "false" },
  { name: "会员购", done: "false" },
  { name: "漫画", done: "false" },
]);

const naviItemRight = ref([
  { name: "个人中心", done: "false" },
  { name: "投稿", done: "false" },
]);
const input = ref("");
</script>

<style lang="scss">
.app_the_navigation {
  height: 50px;
  width: 100%;
  .navigation_content {
    height: 100%;
    .nav {
      cursor: pointer;
      width: 100%;
      .logo {
        width: 50px;
      }
      // 公用样式提取待优化
      // 待实现:当dropdown下拉后头像保持放大，也就是子级元素hover时父级的transform: translate(0, 15px) scale(2);仍然保持
      // 待实现:当dropdown下拉后头像保持放大，avatar的图层高于dropdown
      .item_person {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 50px;
        transition: all 0.5s ease;
        z-index: 2;
        &:hover .el-avatar {
          background-color: rgba(85, 85, 85, 0.1);
          transform: translate(0, 15px) scale(2);
        }
        .avatar {
          .el-avatar {
            vertical-align: middle;
            transition: all 0.2s ease-in-out;
          }
        }
      }
      .item {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 50px;
        transition: all 0.5s ease;
        z-index: 2;
        &:hover {
          background-color: rgba(85, 85, 85, 0.1);
        }
      }
    }
    .nav_center_input {
      .el-input__wrapper {
        border-radius: 10px;
        border: none;
        opacity: 0.5;
        transition: all 0.2s ease-in-out;
        box-shadow: none;
        background-color: rgba(136, 136, 136, 0.1);
      }
      .el-input__wrapper.is-focus {
        background-color: rgba(136, 136, 136, 0.2);
      }
    }
  }
}
</style>
