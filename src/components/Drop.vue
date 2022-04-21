<template>
  <div id="drop_box" v-if="dropData">
    <el-button v-for="dropItem in dropData" key="dropItem.name" size="large">
      <span class="bilifont bili-food"></span>{{ dropItem.name }}
      {{ dropItem.num }}
    </el-button>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, defineEmits } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  navItemName: String,
});
const dropData = computed(() => store.state.dropData.get(props.navItemName));
console.log(dropData);
</script>

<style lang="less">
#drop_box {
  // width: 500px;
  // height: 500px;
  // background: white;
  display: flex;
  flex-direction: column;
  .el-button {
    border: transparent;
    margin-left: 0;
    &:focus,
    &:hover {
      color: var(--el-button-text-color);
      background-color: rgba(85, 85, 85, 0.1);
    }
  }
}
</style>
