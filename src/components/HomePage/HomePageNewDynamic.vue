<template>
  <div class="box_">
    <div class="new">有新动态</div>
    <div class="New-Dynamic">
      <div class="box-item">
        <img :src="src" alt="" class="img">
        <div>
          <img :src="src" alt="" class="img_">
          <img :src="src" alt="" class="img_">
          <img :src="src" alt="" class="img_">
          <img :src="src" alt="" class="img_">
          <div class="btn_">
            <div class="btn">
              <el-button type="primary" round><el-icon><i-ep-CaretRight /></el-icon>播放</el-button>
              <el-button round>name</el-button>
            </div>
            <el-button round><el-icon><i-ep-Clock /></el-icon></el-button>
            <div class="text">
              <div>彩蛋是顺手做出来的</div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttom">
        <div>【前方核能】 一口气吃完所以汉堡🍔</div>
        <div>
          <el-button round><el-icon><i-ep-RefreshLeft /></el-icon></el-button>
          <el-button round><el-icon><i-ep-DArrowLeft /></el-icon></el-button>
          <el-button round><el-icon><i-ep-DArrowRight /></el-icon></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const src = ref("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png")
</script>

<style lang="scss">
.box_{
  width: 940px;
  height: 300px;
  margin: 0 auto;
  .new{
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
  }
  .new::before{
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00a0d8;
    vertical-align: middle;
    margin-right: 5px;
  }
  .New-Dynamic{
    width: 940px;
    height: 266px;
    border-radius: 12px;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 8%);
    color: black;
  }
  .img{
    width: 285px;
    height: 183px;
    border-radius: 10px;
  }
  .img_{
    width: 125px;
    height: 98px;
    margin-right: 10px;
    border-radius: 12px;
  }
  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn_{
    display: flex;
    flex-direction: row;
  }
  .el-button{
    margin: 5px 5px;
  }
  .text{
    display: flex;
    justify-content: center;
    align-items:flex-start;
    margin-left:15px;
    margin-top: 10px;
  }
  .box-item{
    display: flex;
    justify-content: space-around;
    width: 940px;
    height: 222px;
    align-items: center;
  }
  .buttom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 25px;
  }
}
</style>