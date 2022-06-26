<template>
  <div class="home-page-switch">
    <div class="switch">
      <div>
        <span class="text">分区</span>
        <div
          class="list"
          v-for="HomePageSwichL in HomePageSwich"
          :key="HomePageSwichL"
        >
          <span class="text_">{{ HomePageSwichL.name }}</span>
        </div>
      </div>
      <el-button circle>
        <el-icon class="icon"><i-ep-Connection /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  HomePageSwich: Array,
})
</script>

<style lang="scss">
.home-page-switch {
  .switch {
    width: 1400px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    .text {
      font-size: 20px;
      font-weight: bold;
    }
    .text_ {
      font-size: 14px;
    }
    .list {
      display: inline;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
