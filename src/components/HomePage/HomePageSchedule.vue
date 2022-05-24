<template>
  <div class="schedule">
    <div class="schedule-title">时间表</div>

    <div class="schedule-box">
      <div class="schedule-box-time">
        <div class="time-image">
          <img src="../../assets/img/time-img-logo1.png" alt="" />
        </div>
        <div>
          <div class="time-month-day">5-20</div>
          <div class="time-week">周五</div>
        </div>
      </div>
      <div class="schedule-box-mian">
        <a href="#">
          <div class="image">
            <img src="../../assets/img/time-img-item1.png" alt="" />
          </div>
          <div class="box-main-group">
            <div class="box-main-title">夏日重现</div>
            <div class="box-main-group-bottom">
              <el-button
                ><el-icon><i-ep-timer /></el-icon>12:00</el-button
              >
              <div>第4话</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="image">
            <img src="../../assets/img/time-img-item2.png" alt="" />
          </div>
          <div class="box-main-group">
            <div class="box-main-title">上班族想被治愈</div>
            <div class="box-main-group-bottom">
              <el-button
                ><el-icon><i-ep-timer /></el-icon>21:30</el-button
              >
              <div>第4话</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="image">
            <img src="../../assets/img/time-img-item3.png" alt="" />
          </div>
          <div class="box-main-group">
            <div class="box-main-title">骸骨骑士大人奇幻世界冒险中</div>
            <div class="box-main-group-bottom">
              <el-button
                ><el-icon><i-ep-timer /></el-icon>23:00</el-button
              >
              <div>第4话</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomePageTimeTab from "./HomePageTimeTab.vue";
</script>

<style lang="scss">
.schedule {
  $width: 940px;
  $position: calc(48 / 36);
  width: $width;
  height: auto;
  margin: 15px auto;
  .schedule-title {
    width: 940px;
    height: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &:before {
      content: "";
      width: 12px;
      height: 12px;
      background: #00a0d8;
      border-radius: 50%;
      position: relative;
      left: -10px;
    }
  }
  .schedule-box {
    width: $width;
    height: 66px;
    display: flex;
    justify-content: space-between;
    margin-left: -15px;

    .schedule-box-time {
      width: 100px;
      height: 66px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time-image {
        width: 60px;
        height: 58px;
        > img {
          width: 60px;
          height: 58px;
        }
      }
      .time-month-day {
        font-size: 12px;
        margin: 0 0 5px -5px;
      }
      .time-week {
        font-weight: 600;
        font-size: 16px;
      }
    }
    .schedule-box-mian {
      width: 822px;
      height: 66px;
      display: flex;
      justify-content: space-between;
      > a {
        width: 250px;
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        border-right: 2px solid #cdd0d6;

        &:hover {
          .box-main-title {
            color: #409eff;
          }
          img {
            transform: scale(1.1);
          }
        }
        .image {
          width: 50px;
          height: 50px;
          display: block;
          overflow: hidden;
          border-radius: 12px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
            transition: all 0.3s ease;
          }
        }
        .box-main-group {
          margin-left: 15px;
          .box-main-title {
            display: flex;
            justify-content: flex-start;
            font-weight: 600;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 10px;
          }
          .box-main-group-bottom {
            display: flex;
            align-items: center;
            .el-button {
              border-radius: 6px;
              width: 59px;
              height: 21px;
              font-size: 12px;
              color: #000;
              font-weight: 600;
              margin-right: 15px;
              &:hover {
                background: transparent;
                border-color: var(--el-button-border-color);
                color: var(--el-button-text-color);
              }
              .el-icon {
                margin-right: 3px;
              }
            }
            > div {
              color: var(--el-button-text-color);
            }
          }
        }
      }
    }
  }
}
</style>