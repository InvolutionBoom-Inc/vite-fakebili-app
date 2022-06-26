<template>
  <div class="video-details">
    <div class="user-detail">
      <div class="user-detail-img">
        <a href=""><img :src="scx" alt="" /></a>
      </div>
      <div class="user-detail-msg">
        <div class="detail-msg-top">
          <H1>尚硅谷</H1>
          <el-icon><i-ep-Comment /></el-icon>
          <span>发消息</span>
        </div>
        <div class="detail-msg-center">
          <p>就业规划、简历模板、毕业设计</p>
        </div>
        <div class="detail-msg-bottom">
          <el-button class="charge">为TA充电</el-button>
          <el-button class="focus" @click="focusOn">
            <el-icon><i-ep-Plus /></el-icon>{{ focusText }}</el-button
          >
        </div>
      </div>
    </div>
    <div class="barrage-list">
      <el-collapse>
        <el-collapse-item name="1">
          <template #title>
            <span class="barrages">弹幕列表</span>
            <el-icon class="more"><i-ep-MoreFilled /></el-icon>
          </template>
          <ul class="ullist">
            <el-scrollbar height="340px">
              <li>
                <span class="time">时间</span
                ><span class="content">弹幕内容</span
                ><span class="send">发送时间</span>
              </li>
              <li v-for="barrage in VideoPageBarrage" :key="barrage.send">
                <span class="time">{{ barrage.time }}</span
                ><span class="content">{{ barrage.content }}</span
                ><span class="send">{{ barrage.send }}</span>
              </li>
              <li>查看历史弹幕</li>
            </el-scrollbar>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="video-collection">
      <div class="head-col">
        <div class="head-left">
          <span>视频选集</span>
          <span>({{currIndex}}/{{ videoCount }})</span>
          <el-icon><i-ep-Fold /></el-icon>
        </div>
        <div class="head-right">
          <span>自动连播</span>
          <el-switch v-model="autoPlay" />
        </div>
      </div>
      <div class="col-list">
        <ul>
          <li
            v-for="video in VideoPageVideo"
            :key="video.episodes"
            @click.stop.prevent="clickWrapper"
            :ref="getLis"
          >
            <a href="###">
              <div class="col-left">
                <img :src="gif" alt="" />
                <span class="p1">{{ video.episodes }}</span>
                <span>{{ video.title }}</span>
              </div>
              <div class="col-right">{{ video.time }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
const props = defineProps({
  VideoPageBarrage: Array,
  VideoPageVideo: Array,
});

//控制播放集数
let liList = [];
let getLis = (el) => {
  liList.push(el);
};
let activeDom = ref(null);
let currIndex = ref(1)
const clickWrapper = (e) => {
  if (activeDom.value != null) {
    activeDom.value.classList.remove("on");
  }
  activeDom.value = e.currentTarget;
  e.currentTarget.classList.add("on");
  liList.forEach((li, index) => {
    if (li.className == "on") {
      currIndex.value = (index + 1)
    }    
  });
  liList = [] //点击事件更改dom时li会重新遍历，导致数组添加多组li
};
onMounted(() => {
  //默认播放第一个
  liList[0].classList.add("on");
  activeDom.value = liList[0];
});

let focusText = ref("关注 107.1万");
let focus = true;
const focusOn = () => {
  let target = event.currentTarget;
  if (focus) {
    focusText.value = "已关注 107.1万";
    target.classList.add("cancel");
    focus = !focus;
  } else {
    focusText.value = "关注 107.1万";
    target.classList.remove("cancel");
    focus = !focus;
  }
};

const videoCount = ref(props.VideoPageVideo.length);

const autoPlay = ref(true);

let scx =
  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png";

let gif = "https://s1.hdslb.com/bfs/static/jinkela/video/asserts/playing.gif";
</script>

<style lang="scss">
.video-details {
  width: 320px;
  .user-detail {
    width: 320px;
    height: 96px;
    display: flex;
    .user-detail-img {
      width: 48px;
      height: 48px;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-detail-msg {
      width: 256px;
      height: 96px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 5px;
      .detail-msg-top {
        display: flex;
        height: 20px;
        h1 {
          font-size: 14px;
          color: #fb7299;
          font-weight: 500;
          margin-right: 15px;
        }
        .el-icon {
          font-size: 14px;
          margin-right: 5px;
        }
        span {
          color: #505050;
          font-size: 12px;
        }
      }
    }
    .detail-msg-center {
      margin-bottom: 5px;
      p {
        color: #505050;
      }
    }
    .detail-msg-bottom {
      .charge {
        border-color: #fb7299;
        span {
          color: #fb7299;
        }
        &:hover {
          background-color: #fb7299;
          span {
            color: #fff;
            // background: #00b5e5;
          }
        }
      }
      .focus {
        background-color: #00a1d6;
        border-color: #00a1d6;
        .el-icon {
          font-size: 14px;
          font-weight: bold;
        }
        span {
          color: #fff;
        }
        &:hover {
          background: #00b5e5;
        }
      }
      .cancel {
        background-color: #e7e7e7;
        border-color: #e7e7e7;
        span {
          color: #999999;
        }
        &:hover {
          background-color: #e7e7e7;
        }
      }
    }
  }
  .barrage-list {
    width: 100%;
    .el-collapse {
      border: 0;
      .el-collapse-item {
        .el-collapse-item__header {
          background-color: #f4f4f4;
          padding-left: 10px;
          border: 0;
          .barrages {
            font-size: 16px;
          }
          .more {
            margin-left: 10px;
            transform: rotate(90deg);
          }
        }

        .ullist {
          width: 320px;
          max-height: 340px;
          li {
            display: flex;
            padding-left: 11px;
            justify-content: space-between;
            span:first-child {
              width: 60px;
              text-align: left;
            }
            span:nth-child(2) {
              width: 170px;
              text-align: left;
            }
            span:last-child {
              width: 78px;
              text-align: left;
            }
          }
          li:last-child {
            width: 100%;
            height: 31px;
            line-height: 31px;
            margin-top: 8px;
            color: #505050;
            background-color: #f4f4f4;
            text-align: center;
            display: block;
            padding-left: 0px;
          }
        }
      }
    }
  }
  .video-collection {
    margin-top: 10px;
    width: 100%;
    background-color: #f4f4f4;
    .head-col {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .head-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 11px;
        span {
          font-size: 16px;
          margin-right: 10px;
        }
        span:nth-child(2) {
          font-size: 12px;
          margin-right: 10px;
        }
        .el-icon {
          font-size: 16px;
        }
      }
      .head-right {
        padding: 11px;
        .el-switch {
          width: 30px;
          margin-left: 10px;
        }
      }
    }
    .col-list {
      width: 100%;
      transition: all 0.3s;
      ul {
        max-height: 340px;
        padding: 0 6px;
        overflow: auto;
        cursor: pointer;
        li {
          display: block;
          height: 30px;
          line-height: 30px;
          margin: 5px;
          border-radius: 3px;
          white-space: nowrap;
          overflow: hidden;
          padding: 0 10px 0 6px;
          transition: all 0.3s;
          a {
            display: flex;
            justify-content: space-between;
          }
          .col-left {
            height: 30px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #212121;
            font-size: 13px;
            img {
              display: none;
            }
            .p1 {
              display: block;
              margin-right: 5px;
            }
            span:last-child {
              height: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              flex-shrink: 1;
            }
          }
          &.on {
            background: #fff;
            padding: 0 10px 0 6px;
            .col-left {
              img {
                display: block;
                width: 14px;
                height: 14px;
                font-size: 14px;
                margin-right: 5px;
              }
              span {
                color: #00a1d6;
              }
            }
          }
          &:hover {
            background: #fff;
          }
        }
      }
    }
  }
}
</style>