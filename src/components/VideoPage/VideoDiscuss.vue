<template>
  <div class="discuss">
    <ul class="discuss_topU">
      <li class="discuss_top">
        <span>评论</span>
        <span class="text">553</span>
      </li>
      <li class="discuss_right">
        <span class="text_">最热</span>
        <span class="g">|</span>
        <span>最新</span>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss">
.discuss {
  width: 1157px;
  height: 36px;
  margin: 10px auto;
  .discuss_topU {
    height: 36px;
    display: flex;
    align-items: center;
    list-style: none;
  }
  .discuss_top {
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-right: 25px;
  }
  .text {
    font-size: 14px;
    color: rgb(192, 192, 192);
  }
  .text_ {
    font-size: 14px;
    color: #333;
  }
  .g {
    margin: 0px 5px;
  }
  .discuss_right{
    cursor: pointer;
  }
}
</style>
