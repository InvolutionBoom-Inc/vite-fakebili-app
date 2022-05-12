<template>
  <DropBoxMain
    v-if="navItemName === '主站'"
    :navItemName="navItemName"
    :dropData="dropData"
  />
  <DropBoxRank
    v-else-if="navItemName === '排行' || navItemName === '投稿'"
    :navItemName="navItemName"
    :dropData="dropData"
  />
  <DropBoxPerson
    v-else-if="navItemName === '个人中心'"
    :navItemName="navItemName"
  />
  <DropBoxDirectSeeding
    v-else-if="navItemName === '直播'"
    :navItemName="navItemName"
    :dropData="dropData"
  />
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  navItemName: String,
});
const dropData = computed(() => store.state.dropData.get(props.navItemName));

</script>

<style></style>
