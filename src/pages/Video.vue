<template>
  <div class="videoBox">
    <div class="videoPlay">
      <VideoPlaybackPage />
      <VideoDetail
        :VideoPageBarrage="VideoPageBarrage"
        :VideoPageVideo="VideoPageVideo"
      />
    </div>
    <VideoDiscuss />
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"
import { useStore } from "vuex"

const store = useStore()

const useVideoPageDetail = () => {
  const VideoPageBarrage = computed(() => store.state.VideoPage.get("弹幕"))
  const VideoPageVideo = computed(() => store.state.VideoPage.get("视频"))
  return { VideoPageBarrage, VideoPageVideo }
}

const { VideoPageBarrage, VideoPageVideo } = useVideoPageDetail()
</script>

<style lang="scss">
.videoBox {
  width: 1477px;
  margin: 0 auto;
  .videoPlay {
    display: flex;
    justify-content: center;
  }
}
</style>
