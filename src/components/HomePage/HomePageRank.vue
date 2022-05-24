<template>
  <div class="home-page-rank">
    <h1 class="title">排行榜</h1>
    <div class="type1">
      <div class="title-box"><p>《爷爷拯救不完了》</p></div>
      <div class="box1">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        />
        <div class="up-info">
          <div>UP 远古黑金</div>
          <div>HOT NO.226</div>
        </div>
      </div>
    </div>
    <div class="type2">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
      <div class="box1">
        <p class="title">521 三 人 全 破 防</p>
        <div class="main">
          <p>星有野</p>
          <p>Hot 202.4万 Play 152.5万</p>
        </div>
      </div>
    </div>
    <div class="type3">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
      <div class="box1">
        <p class="title">二本学校出来的人，后来怎么样了？</p>
        <div class="main">
          <p>林白努力写稿中</p>
          <p>Hot 202.4万 Play 152.5万</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.home-page-rank {
  width: 380px;
  margin: 0 auto;

  > .title {
    text-align: left;
  }
  > .title::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00a0d8;
    // CSS 的属性 vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。
    vertical-align: middle;
    margin-right: 5px;
  }

  //重构：type相关的都需要拆分合并
  .type1 {
    width: 100%;
    position: relative;

    .title-box {
      margin-top: 10px;
      width: 100%;
      height: 100px;
      border: 1px solid var(--el-card-border-color);
      box-shadow: var(--el-box-shadow-light);
      border-radius: 15px;
      transition: 0.2s all ease;
      text-align: left;

      p {
        font-weight: bold;
        font-size: 15px;
        position: relative;
        top: 15px;
        left: 10px;
      }
      &:hover {
        color: #00a0d8;
      }
    }
    .box1 {
      transition: 0.5s all ease;
      transform: scale(0.95);
      &:hover {
        transform: scale(1);
      }
      img {
        width: 350px;
        height: 225px;
        border-radius: 15px;
        position: relative;
        top: -50px;
      }

      > .up-info {
        margin: auto;
        width: 340px;
        position: relative;
        top: -85px;
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          width: 100px;
          height: 25px;
          background-color: rgba(0, 0, 0, 0.53333);
          color: white;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
      }
    }
  }
  .type2 {
    width: 95%;
    display: flex;
    position: relative;
    top: -30px;
    img {
      width: 168px;
      height: 110px;
      border-radius: 10px;
      position: relative;
      left: 30px;
      top: -15px;
    }

    .box1 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;
      line-height: 20px;
      width: 230px;
      height: 110px;
      border: 1px solid var(--el-card-border-color);
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
      border: 1px solid rgba(136, 136, 136, 0.13333);
      border-radius: 10px;

      p {
        position: relative;
        left: 40px;
        width: 80%;
        font-size: 13px;
      }

      > .title {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .type3 {
    width: 95%;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    top: 10px;

    img {
      width: 168px;
      height: 110px;
      border-radius: 10px;
      position: relative;
      top: -15px;
    }

    .box1 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      left: 30px;
      width: 230px;
      height: 110px;
      border: 1px solid var(--el-card-border-color);
      box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
      border: 1px solid rgba(136, 136, 136, 0.13333);
      border-radius: 10px;
      text-align: left;
      line-height: 20px;

      p {
        position: relative;
        width: 80%;
        font-size: 13px;
        left: 13px;
      }

      > .title {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
