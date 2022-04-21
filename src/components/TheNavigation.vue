<template>
  <div class="app_the_navigation">
    <el-row
      align="middle"
      class="navigation-content"
      justify="center"
      :gutter="0"
    >
      <el-col :span="5" class="nav_left">
        <el-row align="middle">
          <el-col :span="6">
            <img src="../assets/img/logo.png" class="logo" />
          </el-col>
          <el-col :span="3" v-for="itemL in naviItemLeft" :key="itemL">
            <el-dropdown class="item" trigger="click">
              <span class="el-dropdown-link">
                {{ itemL.name }}
              </span>
              <template #dropdown>
                <DropVue v-model:navItemName="itemL.name" />
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="6" :offset="1">
        <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="请输入喜欢的up主名字"
          :suffix-icon="Search"
        />
      </el-col>
      <el-col :span="1" v-for="itemR in naviItemRight" :key="itemR">
        {{ itemR.name }}
      </el-col>
      <el-col :span="1"> <el-button>投稿</el-button></el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import DropVue from "../components/Drop.vue";
import Drop from "./Drop.vue";
const naviItemLeft = ref([
  { name: "主站", done: "false" },
  { name: "排行", done: "false" },
  { name: "直播", done: "false" },
  { name: "会员购", done: "false" },
  { name: "漫画", done: "false" },
]);

const naviItemRight = ref([{ name: "个人中心", done: "false" }]);
const input = ref("");
</script>

<style lang="less">
.app_the_navigation {
  height: 50px;
  .navigation-content {
    height: 100%;
    .nav_left {
      cursor: pointer;
      width: 100%;
      .item {
        display: block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        transition: all 0.5s ease;
        &:hover {
          background-color: rgba(85, 85, 85, 0.1);
        }
      }
    }
  }
}
</style>
