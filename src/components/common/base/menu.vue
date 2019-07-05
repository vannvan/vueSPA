<template lang="html">
  <div>
    <el-row :gutter="24">
      <el-col :span=leftWidth>
        <div class="spa-logo-box">
           <img src="@/assets/images/github.png" alt="" :style="{height:logoSize}">
           <h2 v-show="!isCollapse">啊哈</h2>
         </div>
      </el-col>
      <el-col :span=rightWidth>
        <div class="spa-content-top" :style="{width:contentWidth}">
             <el-col :span="2">
               <i class="el-icon-menu spa-coll-btn" @click="collapse()" :style="iconStyle"></i>
             </el-col>
             <el-col :span="2" :offset="18">
               <div class="spa-user-box">
                 <i class="el-icon-user"></i>
                 vannvan
               </div>
             </el-col>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="">
      <el-col :span=leftWidth>
           <el-menu
             default-active="0"
             class="el-menu-vertical-demo spa-left-menu"
             :style="{height:calHeight}"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
             <el-menu-item index="0">
               <i class="el-icon-s-home"></i>
               <span slot="title">首页</span>
             </el-menu-item>
             <template v-for="(item, index) in menuList">
               <el-submenu :index="item.index">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>{{item.name}}</span>
                 </template>
                 <template v-for="(subItem, index) in item.children">
                   <el-menu-item :index="subItem.index" @click="loadPage(subItem.path)">{{subItem.name}}</el-menu-item>
                 </template>
               </el-submenu>
             </template>
           </el-menu>
         </el-col>
         <el-col :span="20">
               <router-view></router-view>
         </el-col>
      </el-row>

  </div>
</template>

<script>
import MENULIST from '@/assets/json/menuList'
export default {
    data(){
      return {
          isCollapse: false,
          leftWidth:4,
          rightWidth:20,
          logoSize:"50%",
          contentWidth:'',
          menuList:MENULIST
      }
    },
    computed:{
      calHeight(){
        return document.documentElement.clientHeight + 'px'
      },
      iconStyle(){
        return  this.isCollapse?"color:#42E5D3;transform:rotate(45deg)":''
      }
    },
    mounted() {
      //do something after mounting vue instance
      // this.contentWidth = document.getElementsByClassName("spa-main-box")[0].clientWidth

      console.log(document.getElementsByClassName("spa-content-box")[0].clientWidth)
    },
    methods: {
     handleOpen(key, keyPath) {
       // console.log(key, keyPath);
     },
     handleClose(key, keyPath) {
       // console.log(key, keyPath);
     },
     collapse(){
       return false
       this.isCollapse = !this.isCollapse
       this.leftWidth == 2?this.leftWidth=4:this.leftWidth=2
       this.rightWidth = 24 - this.leftWidth
       let _this = this
       setTimeout(function() {
         let  calContentWidth = document.getElementsByClassName("spa-main-box")[0].clientWidth
         _this.contentWidth  = calContentWidth + 'px'
       },1);
     },
   }
}
</script>

<style lang="scss">

</style>
