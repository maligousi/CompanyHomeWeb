<template>
  <div class="importWeb">
    <div class="router_describe rongqi hidden-xs-only">
      <a href="/">首页></a>
      <a href="javascript:;">{{$route.params.whichOne?$route.params.whichOne:source}}></a>
      <a href="javascript:;">{{$route.params.thisOne?$route.params.thisOne:dang}}></a>
    </div>
    <div class="import_cont rongqi">
      <div class="big-title">
        <p class="big-title_h1">高姿，美白大事记</p>
        <p class="big-title_des">高姿，作为都市白领女性的护肤专家，30年来秉承着专业的态度。</p>
        <p class="big-title_des">不断创新美白理念，专注美白技术和成分的研究，提供消费者专业的美白全方案。</p>
      </div>
      <div class="rongqi">
        <div class="import_real smallShow">
          <div class="import_kuai">
            <div>
              <h2>2016</h2>
              <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
              <p>塑料袋发送到佛山的</p>
              <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
            </div>
            <img src="../../../assets/tup/shiji.jpg"/>
          </div>
          <div class="import_kuai">
            <div>
              <h2>2016</h2>
              <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
              <p>塑料袋发送到佛山的</p>
              <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
            </div>
            <img src="../../../assets/tup/shiji.jpg"/>
          </div>
          <div class="import_kuai">
            <div>
              <h2>2016</h2>
              <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
              <p>塑料袋发送到佛山的</p>
              <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
            </div>
            <img src="../../../assets/tup/shiji.jpg"/>
          </div>
          <div class="import_kuai">
            <div>
              <h2>2016</h2>
              <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
              <p>塑料袋发送到佛山的</p>
              <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
            </div>
            <img src="../../../assets/tup/shiji.jpg"/>
          </div>
          <div class="import_kuai">
            <div>
              <h2>2016</h2>
              <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
              <p>塑料袋发送到佛山的</p>
              <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
            </div>
            <img src="../../../assets/tup/shiji.jpg"/>
          </div>
        </div>
        <div class="import_real2 bigShow">
          <div class="real2_xian">
            <div class="odd">
              <div class="import_kuai">
                <div>
                  <h2>2016</h2>
                  <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
                  <p>塑料袋发送到佛山的</p>
                  <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
                </div>
                <img src="../../../assets/tup/shiji.jpg"/>
              </div>
            </div>
            <div class="even">
              <div class="import_kuai">
                <div>
                  <h2>2016</h2>
                  <div>塑料袋开发商对方搜地方水电费熟练度附近</div>
                  <p>塑料袋发送到佛山的</p>
                  <p>索拉卡打飞机殴打福建省老地方就是了佛山</p>
                </div>
                <img src="../../../assets/tup/shiji.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'

  export default {
    data(){
      return {
        source:'关于张太和',
        dang:'发展史',
        historys:[]
      }
    },
    methods:{
    }
  }
</script>
<style scoped>
  .importWeb {
    background-color: #f4f4f4;padding-bottom: 50px;
  }
  .big-title {
    text-align: center;
  }
  .big-title_h1 {
    font-size: 32px;letter-spacing: 2px;margin-bottom: 20px;
  }
  .big-title_des {
    font-size: 14px;margin-top: 5px;
  }
  .bigShow {
    display: none;
  }
  .smallShow {
    display: block;
  }
  @media only screen and (min-width: 1170px ){
    .bigShow {
      display: block;
    }
    .smallShow {
      display: none;
    }
  }
  .import_real {
    width: 88%;border-left: 3px solid #03a9f4;margin: 0 auto;
    padding:30px 0 30px 50px;
  }
  .import_kuai {
    background-color: white;padding: 15px;position: relative;
    padding-bottom: 36px;
    display: flex;flex-flow: row nowrap;justify-content: space-between;align-items: center;
  }
  .import_real .import_kuai::before {
    display: block;position: absolute;content: '';
    left: -8px;top:15px;
    width: 0;height: 0;
    border-top: 10px solid transparent;
    border-right: 12px solid white;
    border-bottom: 10px solid transparent;
  }
  .import_real>div:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .import_real>div:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .import_kuai h2 {
    font-size: 26px;
  }
  .import_kuai div {
    font-size: 18px;font-weight: bolder;margin-top: 15px;
  }
  .import_kuai p {
    color:#666;margin-top: 15px;font-size: 16px;
  }
  .import_real2 {
    width: 88%;margin: 0 auto;padding: 30px;
    /*position: relative;*/
  }
  .real2_xian {
    border-right: 3px solid #03a9f4;position: relative;width: 50%;
  }
  .real2_xian .odd {
    padding-right: 50px;position: relative;left:0;
  }
  .real2_xian .even {
    padding-left: 50px;position: relative;left:100%;
  }
  .import_real2 .import_kuai {
    /*position: absolute;*/
    width:100% ;border-radius: 5px;
  }
  .even .import_kuai::before {
    display: block;position: absolute;content: '';
    left: -8px;top:15px;
    width: 0;height: 0;
    border-top: 10px solid transparent;
    border-right: 12px solid white;
    border-bottom: 10px solid transparent;
  }
  .odd .import_kuai::before {
    display: block;position: absolute;content: '';
    right: -8px;top:15px;
    width: 0;height: 0;
    border-top: 10px solid transparent;
    border-left: 12px solid white;
    border-bottom: 10px solid transparent;
  }
  .even .import_kuai::after {
    display: block;content: '';
    width: 20px;height: 20px;border-radius: 50%;
    background-color: #ffa4ab;position: absolute;
    left: -58px;top:15px;
  }
  .odd .import_kuai::after {
    display: block;content: '';
    width: 20px;height: 20px;border-radius: 50%;
    background-color: #ffa4ab;position: absolute;
    right: -62px;top:15px;
  }
</style>
