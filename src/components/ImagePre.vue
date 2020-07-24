<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="display-flex">
      <!-- 注意如果是一个动态数组，key值一定要用一个唯一值，不要用索引 -->
      <div 
        class="list-item" 
        v-for="item in list" 
        :key="item.id" 
        v-imagePreview
      >
        <img class="img" :src="item.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imagePreview',
  props: {
    msg: String
  },
  data() {
    return {
      list: [
        {
          id: 124,
          src: "http://img.juimg.com/tuku/yulantu/140703/330740-140F302500629.jpg" //require("../assets/123.png")
        },
        {
          id: 123,
          src: "http://pic3.pocoimg.cn/image/poco/works/05/2020/0721/18/15953265147113913_200213811.jpg?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .list-item {
    position: relative;
    width: 300px;
    height: 240px;
    margin: 60px 0 0 30px;
    border-radius: 10px;
    overflow: hidden;
  }

  .img {
    width: 300px;
    height: 240px;
    object-fit: cover;
  }
</style>

<style>
  .display-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    transform: translate(-50%, -50%);
  }
</style>
