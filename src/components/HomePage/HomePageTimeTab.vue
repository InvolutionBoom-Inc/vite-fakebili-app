<template>
  <div class="home-page-timetab">
    <div class="schedule-title">时间表</div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.home-page-timetab {
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
}
</style>