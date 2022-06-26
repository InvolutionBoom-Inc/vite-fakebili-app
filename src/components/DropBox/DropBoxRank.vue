<template>
  <div id="drop_box_ranking" v-if="isCanUse">
    <el-button size="large" v-for="dropItem in dropData" :key="dropItem.name">
      {{ dropItem.name }}
    </el-button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  navItemName: String,
  dropData: Array,
});

const CANUSENAME = ["排行", "投稿"];
const isCanUse = computed(() => {
  const flag =
    CANUSENAME.filter((item) => item === props.navItemName).length > 0 &&
    props.dropData
      ? true
      : false;
  return flag;
});



</script>

<style lang="scss">
#drop_box_ranking {
  max-height: 75vh;
  min-width: 75px;
  max-width: 75px;
  display: flex;
  flex-wrap: wrap;
  .el-button {
    position: relative;
    border: transparent;
    margin-left: 0;
    min-width: 75px;
    border-radius: 0;
    box-sizing: border-box;
    > span {
      font-size: 12px;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
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
    &:hover::before {
      width: 60%;
      left: 20%;
      right: 0;
    }
    &:focus,
    &:hover {
      color: var(--el-button-text-color);
      background-color: transparent;
      padding: 0;
    }
  }
}
</style>
