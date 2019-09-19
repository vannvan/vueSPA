<template lang="html">
  <div class="spa-content-box">
    <div class="iconBox">
      <div class="iconItem" v-for="(item, index) in iconList" >
        <w-icon :class="item"  :style="{color:RandomColor()}"></w-icon>
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import iconList from '@/assets/js/icon.json'
export default {
  name:'Icon',
  data() {
    return {
      iconList:iconList
    }
  },
  mounted() {
    //do something after mounting vue instance
    // this.getDownLoads()
  },
  methods: {

  }
}
</script>

<style lang="scss">
.iconBox{
  width: 100%;
  // height: 1200px;
  .iconItem{
    height: 64px;
    width: 100px;
    padding: 10px;
    margin:5px;
    float: left;
    i{
      font-size: 24px;
    }
    p{
      font-size: 10px;
    }
  }
  .iconItem + .iconItem { margin-left:10px; }
    // .flex img { min-width:100px; }
}
</style>
