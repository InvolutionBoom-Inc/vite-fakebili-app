<template>
  <div class="home-box-activity">
    <header>
      <h1>活动</h1>
      <el-button size="large" round auto-insert-space="true"
        ><el-icon><i-ep-more-filled /></el-icon>
        <div>更多</div></el-button
      >
    </header>
    <main>
      <el-row @mousemove="timeStop" @mouseleave="timeStart">
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
            <div
              class="detail-box"
              ref="detailBox"
              :style="{ width: detailBoxWidth, left: detailBoxPosition }"
            >
              <div
                class="detail"
                v-for="item in PHOTODATA"
                :key="item"
                ref="detail"
              >
                <img :src="item.src" class="image" />
                <div
                  style="font-size: 16px; margin-top: 5px; font-weight: bold"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>

            <div style="padding: 10px" class="dot-box">
              <ul>
                <li
                  v-for="item in PHOTODATA.length"
                  :class="{ active: isActiveIndex === item }"
                  @click="handerDot(item)"
                ></li>
              </ul>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

let isActiveIndex = ref(1);
const handerDot = (item) => {
  isActiveIndex.value = item;
};

const PHOTODATA = [
  {
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Uzi来b站直播啦！",
  },
  {
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Uzi来d站直播啦！",
  },
  {
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Uzi来e站直播啦！",
  },
];

const detailBox = ref(null);
const detail = ref(null);
const detailBoxWidth = computed(() => {
  return PHOTODATA.length * 380 + "px";
});
const detailBoxPosition = computed(() => {
  return (isActiveIndex.value-1) * -380 + "px";
});

const auto = () => {
  detailBox.value.style.transition = "0.5s all ease";
  isActiveIndex.value++;

  if (isActiveIndex.value == PHOTODATA.length + 1) {
    detail.value[0].style.position = "relative";
    detail.value[0].style.left = `${PHOTODATA.length * 380}px`;
    // console.log(detail.value[0])
    setTimeout(() => {
      detail.value[0].style.position = "static";
      detail.value[0].style.left = "0px";
      // detailBox.value.style.transition = "none";
      isActiveIndex.value = 1;
    }, 0);
  }
};

let time = null;
const timeStop = () => {
  if (time) {
    clearInterval(time);
    time = null;
  }
};
const timeStart = () => {
  time = setInterval(auto, 1500);
};

onMounted(() => {
  timeStart();
});
onUnmounted(() => {
  timeStop();
});
</script>

<style lang="scss">
.home-box-activity {
  width: 352px;
  margin: 0 auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    h1 {
      font-size: 20px;
    }
  }

  main {
    margin-top: 15px;
    background-color: white;

    .el-card {
      border-radius: 15px;
      overflow: hidden;
    }

    .detail-box {
      display: flex;
      position: relative;
      transition: 0.5s all ease;

      .detail {
        width: 100%;
        img {
          width: 100%;
          max-height: 200px;
        }
      }
    }

    .dot-box {
      ul {
        display: flex;
        justify-content: center;
        // margin-top: 10px;

        .active {
          background-color: #00a0d8;
          width: 40px;
          opacity: 1;
        }

        li {
          margin-left: 5px;
          margin-right: 5px;
          width: 25px;
          height: 10px;
          border-radius: 20px;
          background-color: #888;
          opacity: 0.5;
          transition: 0.3s all ease-in;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
