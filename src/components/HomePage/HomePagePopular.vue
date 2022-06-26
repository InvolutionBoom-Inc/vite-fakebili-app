<template>
  <div class="home-box-popular">
    <div class="hot-top">
      <span class="text">热门</span>
      <div>
        <el-button circle>
          <el-icon><i-ep-refresh-left /></el-icon>
        </el-button>
        <el-button circle>
          <el-icon><i-ep-arrow-left-bold /></el-icon>
        </el-button>
        <el-button circle>
          <el-icon><i-ep-arrow-right-bold /></el-icon>
        </el-button>
      </div>
    </div>
    <div class="hot-box">
      <el-row>
        <el-col class="hot-t">
          <el-card
            :body-style="{ padding: '0px', textAlign: 'left' }"
            v-for="HomePageHotItem in arr"
            :key="arr.name"
          >
            <div class="image">
              <img :src="scx" />
            </div>
            <div style="padding: 14px">
              <span class="text_">{{ HomePageHotItem.title }}</span>
              <div class="bottom">
                <el-button round size="small">
                  <el-icon><i-ep-Upload /></el-icon>
                  {{ HomePageHotItem.name }}
                </el-button>
              </div>
              <div class="hot-t ic">
                <div class="hot-left">
                  <el-icon><i-ep-view /></el-icon>
                  <span>{{ HomePageHotItem.watch }}</span>
                </div>
                <div>
                  <el-icon><i-ep-pointer /></el-icon>
                  <span>{{ HomePageHotItem.praise }}</span>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { logInfo } from "../../hooks/user/video.js"

const props = defineProps({
  HomePageHot: Array,
})

const info = logInfo({ avid: "12" })

console.log(info)

let arr = []

props.HomePageHot.forEach((element) => {
  if (arr.length < 5) {
    arr.push(element)
  } else {
    return
  }
})

let scx =
  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
</script>

<style lang="scss">
.home-box-popular {
  width: 1000px;
  height: 320px;
  // margin: 15px auto;
  .text {
    font-size: 24px;
  }
  .text_ {
    font-size: 10px;
    font-weight: bold;
  }
  .hot-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    margin: 0px 15px;
  }
  .hot-box {
    height: 270px;
  }
  .hot-t {
    display: flex;
    justify-content: flex-start;
  }
  .clearfix::before,
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  .image {
    width: 180px;
    height: 140px;
    display: block;
  }
  .image img {
    width: 100%;
    height: 100%;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: flex-start;
  }
  .button {
    padding: 0;
    min-height: auto;
  }
  .el-card {
    width: 180px;
    height: 260px;
    margin: 5px 15px;
    border-radius: 15px;
  }
  .ic {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .hot-left {
    margin-right: 10px;
  }
}
</style>
