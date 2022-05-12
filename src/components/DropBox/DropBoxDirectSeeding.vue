<script setup>
import { reactive } from "@vue/reactivity"

const props = defineProps({
  navItemName:String,
  dropData:Array,
})

const url = reactive({
  url:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
})

</script>

<template>
<div class="drop_box_direct">
  <div class="box1">
    <span class="text">热门直播:</span>
    <div v-for="url in url" :key="url" class="avatar">
      <div class="box_avater">
        <el-avatar size="large" :src="url"/>
        <el-avatar size="large" :src="url"/>
        <el-avatar size="large" :src="url"/>
        <div class="text_" v-for="dropItem in dropData" :key="dropItem.name">
          <span>{{dropItem.name}}</span>
        </div>
      </div>
      <div class="box_avater">
        <el-avatar size="large" :src="url"/>
        <el-avatar size="large" :src="url"/>
        <el-avatar size="large" :src="url"/>
        <div class="text_" v-for="dropItem in dropData" :key="dropItem.name">
          <span>{{dropItem.name}}</span>
        </div>
      </div>
    </div>
  </div>
  <el-divider direction="vertical" />
  <div class="box2">
    <span class="text">热门活动:</span>
    <div class="box_image">
      <img src="../../assets/img/broadcast.png">
    </div>
    <div class="box_image">
      <img src="../../assets/img/broadcast_.png">
    </div>
  </div>
</div>
</template>

<style lang="scss">
.drop_box_direct{
  min-height: 230px;
  max-width: 400px;
  background-color: #fff;
  display: flex;
  .text{
    font-size: 14px;
    display: block;
    margin-left: 10px;
  }
  .box1{
    padding-top: 15px;
    margin-left: 7px;
    margin-right: 3px;
    width: 190px;
  }
  .box2{
    padding-top: 15px;
    width: 193px;
  }
  .el-avatar{
    margin-right: 5px;
    margin-left: 2px;
  }
  .box_avater{
    margin-top: 5px;
  }
  .el-divider--vertical{
    margin:0;
  }
  .el-divider{
    height: 150px;
    margin-top: 50px;
  }
  fieldset, img{
    width: 170px;
    border-radius: 5px;
  }
  .box_image{
    display: flex;
    flex-wrap:wrap ;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    cursor: pointer;
  }
  .box_image:hover{
    background-color: #d5d5d5;
  }
  .text_{
    display: inline;
    margin: 0px 20px;
  }
}
</style>