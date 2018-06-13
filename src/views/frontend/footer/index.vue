<template>
<div class="footer_div" :class="{xiao:ModenType}">
  <div class="footer_div-top wd">
    <div class="foot-logo hidden-xs-only"><img :src="pic.one"/></div>
    <div class="footer-go" v-show="!ModenType">
      <!--<a>-->
        <!--<img :src="pic.two"/>-->
        <!--<p>专柜查询</p>-->
        <!--<span>寻找您身边的尸体专柜</span>-->
      <!--</a>-->
      <a @click="showPic(3)">
        <img :src="pic.three"/>
        <p>官方公众号</p>
        <span>关注公众号了解最新产品</span>
      </a>
      <a :href="Toweibo">
        <img :src="pic.four"/>
        <p>官方微博</p>
        <span>关注微博账号了解最近活动</span>
      </a>
      <a>
        <img :src="pic.five"/>
        <p>加入我们</p>
        <span>51job|智联招聘</span>
      </a>
      <a>
        <img :src="pic.six"/>
        <p>0571-87310210</p>
        <span>联系我们</span>
      </a>
    </div>
    <div class="footer-goh5" v-show="ModenType">
      <div>
        <!--<a>-->
          <!--<img :src="pic.two"/>-->
          <!--<p>专柜查询</p>-->
          <!--<span>寻找您身边的尸体专柜</span>-->
        <!--</a>-->
        <a @click="showPic(3)">
          <img :src="pic.three"/>
          <p>官方公众号</p>
          <span>关注公众号了解最新产品</span>
        </a>
        <a :href="Toweibo">
          <img :src="pic.four"/>
          <p>官方微博</p>
          <span>关注微博账号了解最近活动</span>
        </a>
      </div>
      <div>
        <a>
          <img :src="pic.five"/>
          <p>加入我们</p>
          <span>51job|智联招聘</span>
        </a>
        <a>
          <img :src="pic.six"/>
          <p>0571-87310210</p>
          <span>联系我们</span>
        </a>
      </div>
    </div>
  </div>
  <div class="footer_div-bottom wd2">
    <p>地址：浙江省杭州市西湖区转塘街道云梦路2号澹海金座3号楼北</p>
    <p>总机：0571-87310210</p>
    <p>周一至周日 8:30-12:00 13:30-18:00 （节假日除外）</p>
    <p class="beif">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602008931">
        <img class="gongan1" :src="pic.serven"/>
        <span>浙公网安备 33010602008931号</span>
      </a>
      <a target="_blank" href="http://www.miibeian.gov.cn/">
        <img class="gongan2" :src="pic.eight"/>
        <span>浙ICP备17055660号</span>
      </a>
    </p>
  </div>
  <div class="toast" v-show="gzh" @click.self="tomiss">
    <div class="animated toast-cont" :class="{fadeInDownBig:donghua==1,fadeOutUpBig:donghua==2}">
      <img v-if="!ModenType" src="../../../assets/tup/gzh.jpeg"/>
      <img v-else src="../../../assets/tup/gzhh5.jpeg"/>
    </div>
  </div>
</div>
</template>
<script>
  import logo1 from '@/assets/tup/logo_footer.png'
  import logo2 from '@/assets/tup/counter.png'
  import logo3 from '@/assets/tup/wechat.png'
  import logo4 from '@/assets/tup/weibo.png'
  import logo5 from '@/assets/tup/51job.png'
  import logo6 from '@/assets/tup/phone.png'
  import logo7 from '@/assets/tup/beian.png'
  import logo8 from '@/assets/tup/beian2.jpg'

  export default {
    data(){
      return {
        pic:{
          one:logo1,
          two:logo2,
          three:logo3,
          four:logo4,
          five:logo5,
          six:logo6,
          serven:logo7,
          eight:logo8,
        },
        Toweibo:'https://weibo.com/p/1005052203564452/home?from=page_100505&mod=TAB&is_hot=1#place',
        gzh:false,
        donghua:1
      }
    },
    computed:{
      ModenType(){
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
      }
    },
    methods: {
      showPic:function(x){
        this.gzh=true;
        this.donghua=1;
      },
      tomiss:function () {
        this.donghua=2;
        var that=this;
        setTimeout(function () {
          that.gzh=false;
        },400)
      }
    }
  }
</script>
<style scoped>
  .footer_div {
    background-color: #e5e5e5;padding: 60px 0 25px;
  }
  .footer_div.xiao {
    padding: .2rem 0 1rem;
  }
  .wd {width: 70%;margin: 0 auto;}
  .wd2 {width: 90%;margin: 0 auto;}
  .footer_div-top {
    padding: 6px 0;
    display: flex;justify-content: flex-start;align-items: center;flex-flow: row nowrap;
  }
  .footer-go {
    flex-grow: 1;
    display: flex;justify-content: space-between;flex-flow: row wrap;  align-items: center;
  }
  .foot-logo {
    margin:0 20px;padding-right: 40px;
    background: url("../../../assets/tup/footer_dash.jpg") no-repeat right center;
  }
  .footer-go>a {
    font-size: 12px;margin-right: 30px;
    display: flex;justify-content: center;align-items: center;flex-flow: column;
  }
  .footer-goh5 a {
    font-size: .6rem;margin-right: 1rem;width: 33%;
    display: flex;justify-content: center;align-items: center;flex-flow: column;
  }
  .footer-goh5>div {
    margin-top: .6rem;
    display: flex;justify-content: space-between;flex-flow: row nowrap;  align-items: center;
  }
  .footer_div-bottom {
    margin-top: 20px;border-top:1px solid #d2d2d2;
    padding-top: 20px;
  }
  .footer-go p,.footer-goh5 p {
    margin: 6px;
  }
  .footer-go span,.footer-goh5 span {
    color:#878787;
  }
  .footer_div-bottom p {
    text-align: center;
    font-size: .6rem;margin: 5px 0;
    color:#adadad;
  }
  .beif {
    display: flex;justify-content: center;align-items: center;flex-flow: row wrap;
  }
  .beif>a {
    display: flex;justify-content: center;align-items: center;flex-flow: row wrap;
  }
  .beif span {color:#939393;}
  .beif .gongan1 {width: .9rem;margin-right: 3px;}
  .beif .gongan2 {width: .9rem;margin: 0 3px;}

  .toast {
    position: fixed;width: 100%;height: 100%;left: 0;top: 0;bottom: 0;right: 0;
    background-color: rgba(0,0,0,.7);z-index: 99;
  }
  .toast-cont {
    position: absolute;width: 40%;left: 30%;
    height: 40%;top: 30%;
  }
  .toast-cont img {width: 100%;height: 100%;}
  .animated {
    animation-duration: .8s;
    animation-fill-mode: both;
  }
  @keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDownBig {
    animation-name: fadeInDownBig;
  }
  @keyframes fadeOutUpBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .fadeOutUpBig {
    animation-name: fadeOutUpBig;
  }
</style>
