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
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";

import DropBoxMain from "./DropBoxMain.vue";
import DropBoxRank from "./DropBoxRank.vue";
import DropBoxPerson from "./DropBoxPerson.vue";

const store = useStore();
const props = defineProps({
  navItemName: String,
});
const dropData = computed(() => store.state.dropData.get(props.navItemName));
</script>

<style></style>
