<template>
  <div class="frontend">
    <!--<div class="frontend-logo">-->
      <!--<a :href="logo.referUrl"><img :src="logo.imgUrl" alt="logo"></a>-->
    <!--</div>-->
    <!--<div class="frontend-logo-h5">-->
      <!--<a :href="logo.referUrl"><img :src="logo.h5ImageUrl" alt="logo"></a>-->
    <!--</div>-->


    <webTop></webTop>
    <router-view></router-view>
    <webFooter></webFooter>
  </div>
</template>

<script>
  (function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth<768){
          docEl.style.fontSize =20*clientWidth/375 + 'px';
          return;
        }
        if(clientWidth>=768){
          docEl.style.fontSize =16 + 'px';
          return;
        }
      };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
  import webTop from './header/index'
  import webFooter from './footer/index'
  import { mapActions, mapState } from 'vuex'

export default {
  components: {
    webTop,webFooter
  },
  computed: mapState({
    logo: state => state.frontend.logo
  }),
  mounted() {
//    this.init()
  },
  methods: {
    ...mapActions(['getFrontendLogo', 'getFrontendMenus']),
    init() {
      const parentId = 0
      this.getFrontendLogo()
      this.getFrontendMenus(parentId)
    }
  }
}
</script>
<style>
  * {margin: 0;padding: 0;  box-sizing: border-box;  -moz-box-sizing: border-box;  -webkit-box-sizing: border-box;}
  a {text-decoration: none;display: block;text-align: center;cursor: pointer;}
  a, button, input, textarea,li {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
  input, textarea {-webkit-appearance:none;outline:none;border: none;}
  li {list-style: none;}
  img {border-style: none;}
  html {-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
  body {font-family:"Microsoft Yahei", "微软雅黑","Helvetica Neue", Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased;text-rendering: optimizeLegibility;}

  /*公用css*/
  .router_describe {
    display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: center;
    color:#333;font-size: 16px;
    padding: 20px 10px;
  }

  @media (min-width: 768px){
    .rongqi {
      width: 750px;
    }
  }
  @media (min-width: 992px){
    .rongqi {
      width: 970px;
    }
  }
  @media (min-width: 1200px){
    .rongqi {
      width: 1170px;
    }
  }
  .rongqi {
    margin: 0 auto;
  }
  .mo_title {
    margin: 40px 0;
    display: flex;flex-flow: row nowrap;justify-content: space-between;align-items: center;
  }
  .ph {width: 92%;margin: 1rem auto;}
  .ph>img {width: 20%;}
  .mo_title p {
    width: 40%;height:4px;
    background: url("../../assets/tup/title-line.jpg") no-repeat 100% 100%;
  }
  .slider-item div {width: 100%!important;height: 100%;}
  .sliderTu {width: 100%;height: 100%;}
  .sliderTu img {
    display: block;width: 100%;height: 100%;
  }
  .web_text-cont2 img {
    max-width: 100%;
  }
</style>
