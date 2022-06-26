<template>
  <VideoDetail :VideoPageBarrage="VideoPageBarrage" :VideoPageVideo="VideoPageVideo" />
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

const useVideoPageDetail = () => {
  const VideoPageBarrage = computed(() => store.state.VideoPage.get("弹幕"));
  const VideoPageVideo = computed(() => store.state.VideoPage.get("视频"));
  return { VideoPageBarrage, VideoPageVideo };
};
const { VideoPageBarrage, VideoPageVideo } = useVideoPageDetail();
</script>

<style>
</style>