<template>
  <div class="homepage-dynamics">
    <div class="header">
      <div class="dynamics-title">动态</div>

      <div class="group">
        <el-tabs v-model="activeName">
          <el-tab-pane label="视频" name="first">
            <HomePageDynCard name="video" :countData="countData" />
          </el-tab-pane>
          <el-tab-pane label="番剧" name="second">
            <HomePageDynCard name="drama" :countData="countData" />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="dynamics-icon">
        <el-tooltip
          class="box-item"
          effect="light"
          content="在线列表"
          placement="top-start"
          show-after="500"
          ><el-button circle>
            <el-icon><i-ep-avatar /></el-icon> </el-button
        ></el-tooltip>
        <el-tooltip
          class="box-item"
          effect="light"
          content="刷新"
          placement="top-start"
          show-after="500"
        >
          <el-button circle @click="refreshPage">
            <el-icon><i-ep-refresh-right /></el-icon>
          </el-button>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="light"
          content="上一页"
          placement="top-start"
          show-after="500"
          ><el-button circle @click="prevPage">
            <el-icon><i-ep-arrow-left-bold /></el-icon> </el-button
        ></el-tooltip>
        <el-tooltip
          class="box-item"
          effect="light"
          content="下一页"
          placement="top-start"
          show-after="500"
          ><el-button circle @click="nextPage(HomePageDyn, prev, next, count)">
            <el-icon><i-ep-arrow-right-bold /></el-icon> </el-button
        ></el-tooltip>
        <el-button round>
          <el-icon><i-ep-bell /></el-icon>
          全部动态
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"
// import { nextPage, prevPage, refreshPage, sliceData } from "../../hooks/Pagination.js"

const activeName = ref("first")

//获取动态视频数据
const useHomePageDynamics = () => {
  const store = useStore()
  const HomePageDyn = computed(() => store.state.HomePage.get("动态视频"))
  return { HomePageDyn }
}
const { HomePageDyn } = useHomePageDynamics()

let prev = ref(0)
let next = ref(4)
let count = 4
let data = []
let newData = []
for (let value of HomePageDyn.value) {
  data.push(value)
}
let countData = computed(() => {
  if (HomePageDyn.value.length > 4) {
    //逻辑：判断数组的长度 >4进行切片
    newData = data.slice(prev.value, next.value)
    // console.log(prev.value, next.value);
    console.log(newData)
    return newData
  } else {
    return data
  }
})

console.log(HomePageDyn)
//通过索引来控制渲染数组
function nextPage() {
  if (HomePageDyn.value.length > next.value) {
    prev.value += count
    next.value += count
  }
}
function prevPage() {
  if (newData[0] !== data[0]) {
    prev.value -= count
    next.value -= count
  }
}
function refreshPage() {
  console.log(newData[0])
  if (newData[0] !== data[data.length - count]) {
    //判断渲染数组的第一个是否等于原数组倒数第四个
    prev.value = data.length - count
    next.value = data.length
    console.log(data.length)
  }
}
</script>

<style lang="scss">
.homepage-dynamics {
  width: 960px;
  height: 320px;
  margin: 15px auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    .group {
      display: flex;
      align-items: center;
    }
    .dynamics-title {
      font-size: 22px;
      font-weight: bold;
      margin-right: 40px;
      align-self: flex-end;
    }
    .group {
      position: absolute;
      top: 0;
      left: 80px;
      .el-tabs__content {
        overflow: hidden;
        position: relative;
        margin-left: -75px;
      }
    }
    .el-tabs {
      .el-tabs__header {
        margin: 0;
      }
      .el-tabs__item {
        color: #000;
        font-size: 16px;
        font-weight: bold;
      }
      .el-tabs__nav-wrap::after {
        width: 0;
      }
    }
  }
}
</style>
