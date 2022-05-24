<template>
  <div class="home-box-column">
    <div class="column-top">
      <span>栏目</span>
    </div>
    <div class="column-box">
      <el-row>
        <el-col>
          <el-card :body-style="{ padding: '0px' }">
            <a class="card-top">
              <div class="card-top-img">
                <img src="../../assets/img/ColumnImage.jpg" alt="" />
              </div>
              <div class="card-top-area">专栏</div>
            </a>
            <div class="card-bottom">
              <a href="">
                <el-icon color="skyblue"><i-ep-video-camera-filled /></el-icon
                ><span>直播</span></a
              >
              <a href=""
                ><el-icon color="green"><i-ep-chat-line-round /></el-icon
                ><span>专题</span></a
              >
              <a href=""
                ><el-icon color="orange"><i-ep-trophy /></el-icon
                ><span>小黑屋</span></a
              >
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
$font-size: 20px;
$font-weight: bold;

.home-box-column {
  width: 370px;
  height: 320px;
  margin: 15px auto;
  .column-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    position: relative;
    span {
      font-size: $font-size;
      font-weight: $font-weight;
      line-height: 28px;
    }
  }
  .column-box {
    width: 100%;
    height: 270px;
    border-radius: 12px;
    .el-card {
      border-radius: 12px;
      .card-top {
        width: 100%;
        height: 202px;
        img {
          width: 100%;
          height: 202px;
        }
        .card-top-area {
          font-size: $font-size;
          font-weight: $font-weight;
          position: absolute;
          bottom: 65px;
          left: 20px;
        }
      }
      .card-bottom {
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        a {
          width: 110px;
          height: 34px;
          font-size: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover{
              background-color: rgb(231, 231, 231);
              border-radius: 5px;
          }
          > span {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>