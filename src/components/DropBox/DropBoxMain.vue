<template>
  <div id="drop_box_main" v-if="dropData && navItemName === '主站'">
    <el-button v-for="dropItem in dropData" :key="dropItem.name" size="large">
      <span class="bilifont" :class="dropItem.icon"></span>
      {{ dropItem.name }}
      <div>{{ dropItem.num }}</div>
    </el-button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  navItemName: String,
  dropData: Array,
});
</script>

<style lang="scss">
#drop_box_main {
  max-height: 75vh;
  min-width: 150px;
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  .el-button {
    border: transparent;
    margin-left: 0;
    min-width: 150px;
    overflow: hidden;
    > span {
      font-size: 12px;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    &:focus,
    &:hover {
      color: var(--el-button-text-color);
      background-color: rgba(85, 85, 85, 0.1);
    }
  }
}
</style>
