<template>
<div class="webTop">
  <div class="webTop_pc hidden-xs-only">
    <img :src="logos.imgUrl"/>
    <!--<div class="webTop_search hidden-sm-and-down">-->
      <!--<input type="text" placeholder="张太和网站"/><span class="el-icon-search"></span>-->
    <!--</div>-->
  </div>
  <div class="webTop_nav hidden-xs-only">
    <div>
      <ul class="z_con">
        <li><a href="/">首页</a></li>
        <li v-for="(menu,subindex) in menus" @mouseover="movein(subindex)" @mouseout="moveout">
          <a href="javascript:;">{{menu.menuName}}</a>
          <ul v-if="menu.childMenus.length>0" class="show_me"
              :class="{manyPro:menu.menuType==5,chulai:ling===subindex}">
            <template v-if="menu.menuType==5">
              <li v-for="(item,index) in menu.childMenus">
                <a @click="jumpTo(item.menuType,menu.menuName,item.menuName,item.id)"
                   @mouseover="changeListChild(index)" href="javascript:;">{{item.menuName}}</a>
              </li>
              <li class="childImgCont">
                <img v-for="(item,index) in menu.childMenus"
                     :class="listChild==index?'sT':''"
                     :src="item.imgUrl"/>
              </li>
            </template>
            <template v-else>
              <li v-for="(item,index) in menu.childMenus">
                <a @click="jumpTo(item.menuType,menu.menuName,item.menuName,item.id)"
                   href="javascript:;">{{item.menuName}}</a>
              </li>
            </template>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="webTop_mb hidden-sm-and-up">
    <div class="webTop_mb-side">
      <div @click="navToggle" class="biao_one">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!--<div @click="tabNav" class="imgBtn">-->
        <!--<img :src="logo.mo" />-->
      <!--</div>-->
    </div>
    <img :src="logos.h5ImageUrl"/>
  </div>
  <transition name="leftMove">
    <div v-show="navShow" class="webTop_mb-nav hidden-sm-and-up">
      <el-row v-show="navShowTab">
        <el-col style="width: 100%" :span="12">
          <el-menu default-active="2" class="el-menu-vertical-demo"
                   @open="handleOpen" @close="handleClose"
                   background-color="#333132" text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="1" @click="jumpTo(0)">
              <template>
                <span slot="title">首页</span>
              </template>
            </el-menu-item>
            <el-submenu v-for="(tr,index) in menus" :key="tr.id" :index="''+(index+2)">
              <template slot="title">
                <span>{{tr.menuName}}</span>
              </template>
              <template v-if="tr.childMenus.length">
                <el-menu-item v-for="(it,subindex) in tr.childMenus" :key="it.id" :index="''+index+'-'+subindex"
                @click="jumpTo(it.menuType,it.menuName,it.menuName,it.id)" >
                  {{it.menuName}}</el-menu-item>
              </template>
            </el-submenu>
            <!--<el-submenu index="5">-->
              <!--<template slot="title">-->
                <!--<span>张太和产品</span>-->
              <!--</template>-->
              <!--<el-menu-item index="5-1">品牌理念</el-menu-item>-->
              <!--<el-menu-item index="5-2">品牌大事记</el-menu-item>-->
              <!--<el-menu-item index="5-3">品牌印记</el-menu-item>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="6">-->
              <!--<span slot="title">张太和学院</span>-->
            <!--</el-menu-item>-->
          </el-menu>
        </el-col>
      </el-row>
      <div class="xilie" v-show="!navShowTab">
        <ul>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
          <li><a href="javascript:;">张太和系列</a></li>
        </ul>
      </div>
    </div>
  </transition>
</div>
</template>
<script>
//  import logo1 from '@/assets/tup/logo.png'
//  import logo2 from '@/assets/tup/logo2.png'
  import logo3 from '@/assets/tup/logo3.png'
  import { mapActions, mapState } from 'vuex'
  import frontendGet from '@/api/frontendGet'

  export default {
    data() {
      return {
        logo: {
          pc: '',
          mb: '',
          mo: logo3
        },
        navShow:false,
        navShowTab:true,
        listChild:0,
        ling:'',
        menus:[],
        logos:[]
      }
    },
    computed:{
//      ...mapState({
//        menus:state=>state.frontend.menu,
//        logos:state=>state.frontend.logo
//      })
    },
    mounted() {
      this.getFrontendLogo();
      this.getFrontendMenus();
    },
    methods: {
//      ...mapActions(['getFrontendMenus','getFrontendLogo']),
      getFrontendLogo:function () {
        var that=this;
        frontendGet.get('/api/index/topLogo/get').then(function (response) {
          console.log('logos:',response.data.data);
          that.logos=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      },
      getFrontendMenus:function () {
        var that=this;
        frontendGet.get('/api/menu/get').then(function (response) {
          console.log('menus:',response.data.data);
          that.menus=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      },
      navToggle(){
        if(!this.navShow){
          this.navShow=true;
          this.navShowTab=true;
        }else{
          if(this.navShowTab){
            this.navShow=false;
          }else{
            this.navShowTab=true;
          }
        }
      },
      tabNav(){
        if(!this.navShow){
          this.navShow=true;
          this.navShowTab=false;
        }else{
          if(!this.navShowTab){
            this.navShow=false;
          }else{
            this.navShowTab=false;
          }
        }
      },
      handleOpen(key,keyPath){
        console.log(key,keyPath)
      },
      handleClose(key,keyPath){
        console.log(key,keyPath)
      },
      changeListChild:function(x){
        this.listChild=x;
      },
      jumpTo:function (x,y,z,w) {
//        console.log(x,y,z);
        switch(x){
          case 1 :
//            localStorage.setItem('menuNum',JSON.stringify({imageid:w}));
            this.$router.push({path:`/images/${w}`});
            break;
          case 2 :
//            localStorage.setItem('menuNum',JSON.stringify({textid:w}));
            this.$router.push({path:`/text/${w}`});
            break;
          case 3 :
            this.$router.push({name:'news',params:{whichOne:y,thisOne:z}});
            break;
          case 4 :
            this.$router.push({name:'history',params:{whichOne:y,thisOne:z}});
            break;
          case 5 :
//            localStorage.setItem('menuNum',JSON.stringify({xilieid:w}));
            this.$router.push({path:`/xilie/${w}`});
            break;
          default:
            this.$router.push({path:'/'});
        }
        this.navShow=false;
        this.ling='';
      },
      movein:function (x) {
        this.ling=x;
      },
      moveout:function () {
        this.ling='';
      }
    }
  }
</script>
<style scoped>
  .webTop img {display: block;margin: 6px auto;}
  .webTop_pc {
    width:100%;position: relative;
    /*background-color: #666;*/
  }
  .webTop_search {
    position: absolute;right: 9%;bottom: 20px;
  }
  .webTop_search input {
    width: 150px;font-size: 15px;padding:3px 6px;
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0 1px 2px #dfdfdf;
  }
  .webTop_search span {
    border: 1px solid #1e6abc;border-radius: 3px;padding:1px 3px;margin-left: 5px;
  }
  .webTop_mb {
    border-top:2px solid #FE6A7A;width: 100%;
    background-color: #0d0d0d;height: 50px;
    display: flex;justify-content: flex-start;align-items: center;flex-flow: row nowrap;
  }
  .webTop_mb>img {
    width: 36%;height: 20px;margin: 12px 0;
  }
  .webTop_mb-side {
    width: 32%;
    display: flex;justify-content: flex-start;align-items: center;flex-flow: row nowrap;
  }
  .imgBtn {
    padding: 9px 10px;
  }
  .imgBtn img {
    width: 22px;height: 20px;
  }
  .biao_one {
    border-radius: 3px;background-color: #333;
    margin-left: 15px;padding: 9px 10px;
  }
  .biao_one span {
    width: 22px;height: 2px;display: block;background-color: white;
  }
  .biao_one span:not(:first-child) {
    margin-top: 4px;
  }
  .webTop_nav {
    border-top:2px solid #FE6A7A;background-color: #0d0d0d;
  }
  .z_con {
    width: 88%;margin: 0 auto;
    display: flex;justify-content: center;flex-flow:row nowrap;align-items: center;
  }
  @media (min-width: 992px){
    .z_con {
      width: 90%;
    }
  }
  @media (min-width: 1200px){
    .z_con {
      width: 88%;
    }
  }
  @media (min-width: 1300px){
    .z_con {
      width: 80%;
    }
  }
  .z_con>li {width: 15%;cursor: pointer;position: relative;}
  .show_me {
    display:none;background-color: white;
    position: absolute;top: 100%;left: 0;width: 100%;
    box-shadow: 0 2px 3px #afafaf;
    border-top:2px solid #ed7091;
  }
  /*.z_con>li:hover .show_me {*/
    /*z-index: 5;display: block;*/
  /*}*/
  .chulai.show_me {
    z-index: 5;display: block;
  }
  /*.z_con>li:hover .show_me.manyPro {*/
    /*z-index: 5;display: flex;*/
  /*}*/
  .show_me a {
    padding: 15px;
  }
  .show_me.manyPro a {
    border-right: 1px solid #afafaf;width: 100px;padding: 0 6px;text-align: left;
  }
  .show_me a:hover {
    color:#FE6AA3;
  }
  /*.manyPro {display: none;}*/
  .manyPro.chulai {
    width: 600px!important;padding: 10px;z-index: 5;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: center;
  }
  .manyPro li {padding:8px 0;}
  .childImgCont {width: 100%;}
  .childImgCont img {
    display: none;width: 100%;height: 220px;
  }
  .childImgCont img.sT {
    display:block;
  }
  .z_con>li>a {
    width: 100%;font-size: 17px;
    /*font-weight: bolder;*/
    line-height: 20px;
    padding: 15px 15px;
    color:white;text-align: center;
  }
  .z_con>li:not(:first-child)>a {
    background: url("../../../assets/tup/menu_dash.png") no-repeat left center;
  }
  .webTop_mb-nav {
    width: 60%;border-right: 1px solid white;background-color: #333132;
    position: absolute;bottom: 0;top: 50px;left: 0;overflow: auto;
    z-index: 10;
  }
  .xilie li {
    height: 56px;padding-left: 20px;
  }
  .xilie li>a {
    font-weight: bolder;color:white;text-align: left;line-height: 56px;
  }
  .el-submenu__title span,.el-menu-item span {
    font-weight: bolder;
  }
  .el-submenu__title i {
    width: 20px!important;
  }
  .leftMove-enter-active, .leftMove-leave-active {
    transition: left .5s;
  }
  .leftMove-enter, .leftMove-leave-to {
    left: -60%;
  }
</style>
