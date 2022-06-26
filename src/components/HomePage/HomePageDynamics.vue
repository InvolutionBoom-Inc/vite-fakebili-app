<template>
  <div class="homepage-dynamics">
    <div class="header">
      <div class="group">
        <div class="dynamics-title">动态</div>
        <div class="dynamics-nav">
          <el-button>视频</el-button>
          <el-button>番剧</el-button>
          <!-- <div class="nav-name">视频</div>
          <div class="nav-name">番剧</div> -->
        </div>
      </div>

      <div class="dynamics-icon">
        <el-button circle>
          <el-icon><i-ep-avatar /></el-icon>
        </el-button>
        <el-button circle>
          <el-icon><i-ep-refresh-right /></el-icon>
        </el-button>
        <el-button circle>
          <el-icon><i-ep-arrow-left-bold /></el-icon>
        </el-button>
        <el-button circle>
          <el-icon><i-ep-arrow-right-bold /></el-icon>
        </el-button>
        <el-button round>
          <el-icon><i-ep-bell /></el-icon>
          全部动态
        </el-button>
      </div>
    </div>
    <div class="box">
      <div class="dynamics-area">空空如也哦 =￣ω￣=</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.homepage-dynamics {
  width: 980px;
  height: 320px;
  margin: 15px auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .group {
      display: flex;
      align-items: center;
    }
    .dynamics-title {
      font-size: 20px;
      font-weight: bold;
      margin-right: 40px;
    }
    .dynamics-nav {
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      .el-button {
        position: relative;
        border: transparent;
        margin-left: 0;
        min-width: 75px;
        border-radius: 0;
        box-sizing: border-box;
        &::before {
          content: "";
          position: absolute;
          left: 40%;
          bottom: 1px;
          width: 0;
          height: 2px;
          background: #4285f4;
          transition: all 0.5s ease-in-out;
        }
        &:focus::before {
          width: 60%;
          left: 20%;
          right: 0;
        }
        &:focus,
        &:hover{
          color: var(--el-button-text-color);
          background-color: transparent;
          padding: 0;
        }
      }
    }
  }
  .box {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px rgb(185, 185, 185) dashed;
    border-radius: 12px;
    .dynamics-area {
      font-size: 16px;
    }
  }
}
</style>