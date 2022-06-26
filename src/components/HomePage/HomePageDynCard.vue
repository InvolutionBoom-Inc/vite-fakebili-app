<template>
  <div v-if="name === 'video'">
    <div class="box" v-if="countData">
      <el-row>
        <el-col class="dyn-d">
          <el-card
            :body-style="{ padding: '0px' }"
            v-for="DynamicItem in countData"
            :key="DynamicItem.title"
          >
            <img :src="scx" class="image" />
            <div class="details">
              <h1>{{ DynamicItem.title }}</h1>
              <div class="bottom">
                <el-button class="button" round>
                  <el-icon><i-ep-Avatar /></el-icon>
                  {{ DynamicItem.name }}</el-button
                >
              </div>
              <div class="dynamic-data">
                <div class="data-left">
                  <el-icon><i-ep-VideoPlay /></el-icon>
                  <span>{{ DynamicItem.watch }}</span>
                </div>
                <div class="data-center">
                  <el-icon><i-ep-ChatLineSquare /></el-icon>
                  <span>{{ DynamicItem.bulletChat }}</span>
                </div>
                <div class="data-right">
                  <el-icon><i-ep-Star /></el-icon>
                  <span>{{ DynamicItem.praise }}</span>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="box-else" v-else>
      <div class="dynamics-area">空空如也哦 =￣ω￣=</div>
    </div>
  </div>
  <div v-if="name === 'drama'">
    <div class="box-else">
      <div class="dynamics-area">空空如也哦 =￣ω￣=</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  countData: Array,
  name: String,
});

let scx =
  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png";
</script>

<style lang="scss">
.box-else {
  width: 960px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px rgb(185, 185, 185) dashed;
  border-radius: 12px;
  margin-top: 15px;
  .dynamics-area {
    font-size: 16px;
  }
}
.box {
  width: 960px;
  margin-top: 10px;
  .dyn-d {
    display: flex;
    justify-content: flex-start;
  }
  .el-card {
    width: 200px;
    height: 250px;
    margin-right: 30px;
    border-radius: 15px;

    .image {
      width: 200px;
      height: 125px;
    }
    h1 {
      font-size: 14px;
      line-height: 1.5;
      font-weight: 600;
      text-align: justify;
      // white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 170px;
      height: 42px;
    }
    .details {
      // width: 100%;
      height: 105px;
      padding: 10px;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: space-between;
      margin-left: 10px;
      
      .dynamic-data {
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-around;
        margin-left: -10px;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>