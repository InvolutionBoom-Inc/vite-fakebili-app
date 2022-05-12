<script setup>
import { some } from 'lodash'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const HomePageHot = computed(() => store.state.HomePage.get('热门'))
</script>

<template>
  <div class="HomePage_">
    <HomePagePopular :HomePageHot="HomePageHot" />
  </div>
</template>

<style lang="scss">

</style>
