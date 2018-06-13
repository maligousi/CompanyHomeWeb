<template>
<div>
  <!--1-->
  <div>
    <div class="mo_title" :class="{ph:Moden}">
      <p></p>
      <img :src="aboutData.labelUrl"/>
      <p></p>
    </div>
    <div class="abouts-cont" :class="{ph:Moden}">
      <div class="duilian">
        <img :src="Moden?aboutData.indexModelTypeTwo.h5ImageUrlOne:aboutData.indexModelTypeTwo.imageUrlOne" />
        <p>{{aboutData.indexModelTypeTwo.typeHeaderOne}}</p>
        <a :href="aboutData.indexModelTypeTwo.referUrlOne">
          {{aboutData.indexModelTypeTwo.typeHeaderDescOne}}
        </a>
      </div>
      <div class="shipin">
        <video controls="controls" :src="aboutData.indexModelTypeTwo.typeVideoUrl">
          <!--<source :src="aboutData.indexModelTypeTwo.typeVideoUrl">-->
          <!--<img rel="nofollow" src="../../../assets/tup/vediots.jpg"/>-->
        </video>
        <p>{{aboutData.indexModelTypeTwo.typeVideoDesc}}</p>
      </div>
      <div class="duilian">
        <img :src="Moden?aboutData.indexModelTypeTwo.h5ImageUrlTwo:aboutData.indexModelTypeTwo.imageUrlTwo" />
        <p>{{aboutData.indexModelTypeTwo.typeHeaderTwo}}</p>
        <a :href="aboutData.indexModelTypeTwo.referUrlOne">
          {{aboutData.indexModelTypeTwo.typeHeaderDescTwo}}
        </a>
      </div>
    </div>
  </div>
  <!--2-->
  <div>
    <div class="mo_title" :class="{ph:Moden}">
      <p></p>
      <img :src="hallData.labelUrl"/>
      <p></p>
    </div>
    <div class="diantang_cont" :class="{ph:Moden}">
      <div>
        <a :href="hallData.indexModelTypeOne[0].h5ReferUrlOne">
          <img :src="Moden?hallData.indexModelTypeOne[0].h5ImageOne:hallData.indexModelTypeOne[0].imageOne"/>
        </a>
        <a :href="hallData.indexModelTypeOne[1].h5ReferUrlOne">
          <img :src="Moden?hallData.indexModelTypeOne[1].h5ImageOne:hallData.indexModelTypeOne[1].imageOne"/>
        </a>
      </div>
      <div>
        <a :href="hallData.indexModelTypeOne[2].h5ReferUrlOne">
          <img :src="Moden?hallData.indexModelTypeOne[2].h5ImageOne:hallData.indexModelTypeOne[2].imageOne"/>
        </a>
      </div>
    </div>
  </div>
  <!--3-->
  <div class="chanpins">
    <div class="mo_title" :class="{ph:Moden}">
      <p></p>
      <img :src="productData.labelUrl"/>
      <p></p>
    </div>
    <div class="chanpin_cont" v-show="!Moden">
      <div class="chanpin_side_left chanpin_side">
        <img :src="productData.indexModelTypeThree.typeModelLabelImageOne"/>
        <div class="paihang">
          <p>NO.<span>1</span></p>
          <div class="jie">
            <img :src="productData.indexModelTypeThree.prodImageUrlOne"/>
            <div>
              <p>{{productData.indexModelTypeThree.prodDescOne}}</p>
              <a :href="productData.indexModelTypeThree.typeModelLabelImageOneReferUrl">点击详情></a>
            </div>
          </div>
        </div>
        <div class="paihang">
          <p>NO.<span>2</span></p>
          <div class="jie">
            <img :src="productData.indexModelTypeThree.prodImageUrlTwo" />
            <div>
              <p>{{productData.indexModelTypeThree.prodDescTwo}}</p>
              <a :href="productData.indexModelTypeThree.typeModelLabelImageTwoReferUrl">点击详情></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mid_lunbo">
        <slider ref="slider" :pages="pages" :sliderinit="sliderinit"></slider>
      </div>
      <div class="chanpin_sidd_right chanpin_side">
        <div class="dejiang">
          <img :src="productData.indexModelTypeThree.typeModelLabelImageThree"/>
          <div class="jie">
            <img :src="productData.indexModelTypeThree.prodImageUrlThree"/>
            <div>
              <p>{{productData.indexModelTypeThree.prodDescThree}}</p>
              <a :href="productData.indexModelTypeThree.typeModelLabelImageThreeReferUrl">点击详情></a>
            </div>
          </div>
        </div>
        <div class="gifs">
          <img :src="productData.indexModelTypeThree.typeModelLabelImageFour"/>
          <div>
            <img class="gifs_img" :src="productData.indexModelTypeThree.prodImageUrlFour"/>
            <a :href="productData.indexModelTypeThree.typeModelLabelImageFourReferUrl">点击详情></a>
          </div>
        </div>
      </div>
    </div>
    <div class="chanpin_conth5" v-show="Moden">
      <div class="mid_lunboh5">
        <slider ref="slider" :pages="pagesTwo" :sliderinit="sliderinitTwo"></slider>
      </div>
      <div class="chanpin_side_lefth5 chanpin_sideh5">
        <img :src="productData.indexModelTypeThree.typeModelLabelImageOne"/>
        <div class="phoneMo">
          <div class="paihangh5">
            <p>NO.<span>1</span></p>
            <div class="jieh5">
              <img :src="productData.indexModelTypeThree.h5TypeModelLabelImageOne"/>
              <div>
                <p>{{productData.indexModelTypeThree.prodDescOne}}</p>
                <a :href="productData.indexModelTypeThree.typeModelLabelImageOneReferUrl">点击查看</a>
              </div>
            </div>
          </div>
          <div class="paihangh5">
            <p>NO.<span>2</span></p>
            <div class="jieh5">
              <img :src="productData.indexModelTypeThree.h5TypeModelLabelImageTwo" />
              <div>
                <p>{{productData.indexModelTypeThree.prodDescTwo}}</p>
                <a :href="productData.indexModelTypeThree.typeModelLabelImageTwoReferUrl">点击查看</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chanpin_sidd_righth5 chanpin_sideh5">
        <div class="dejiangh5">
          <img :src="productData.indexModelTypeThree.typeModelLabelImageThree"/>
          <div class="jieh5">
            <img :src="productData.indexModelTypeThree.h5TypeModelLabelImageThree"/>
            <div>
              <p>{{productData.indexModelTypeThree.prodDescThree}}</p>
              <a :href="productData.indexModelTypeThree.typeModelLabelImageThreeReferUrl">点击查看</a>
            </div>
          </div>
        </div>
        <div class="gifsh5">
          <img :src="productData.indexModelTypeThree.typeModelLabelImageFour"/>
          <div>
            <img class="gifs_imgh5" :src="productData.indexModelTypeThree.h5TypeModelLabelImageFour"/>
            <a :href="productData.indexModelTypeThree.typeModelLabelImageFourReferUrl">点击查看</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'
  import slider from 'vue-concise-slider'

  export default {
    components:{ slider },
    data(){
      return {
        sliderinit: {
          currentPage: 0,
          tracking: false,
          thresholdDistance: 100,
          thresholdTime: 300,
          loop: true,
          autoplay:3000
        },
        sliderinitTwo: {
          currentPage: 0,
          tracking: false,
          thresholdDistance: 100,
          thresholdTime: 300,
          loop: true,
          autoplay:3000
        },
        pages:[
          {
            html: '<div class="slider1">slider1</div>',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: '<div class="slider2">slider2</div>',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: '<div class="slider3">slider3</div>',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        pagesTwo:[
          {
            html: '<div class="slider1">slider1</div>',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: '<div class="slider2">slider2</div>',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: '<div class="slider3">slider3</div>',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        aboutData:{indexModelTypeTwo:''},
        hallData:{indexModelTypeOne:['','','']},
        productData:{indexModelTypeThree:''},
      }
    },
    created() {
      this.getModule();
    },
    computed:{
      Moden(){
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
      }
    },
    methods:{
      getModule:function () {
        var that=this;
        frontendGet.get('/api/indexModel/list').then(function (response) {
          var originData=response.data.data;
          console.log('model:',originData);
          for(let i=0;i<originData.length;i++){
            if(originData[i].modelType==1){
              that.hallData=originData[i];
            }
            if(originData[i].modelType==2){
              that.aboutData=originData[i];
            }
            if(originData[i].modelType==3){
              that.productData=originData[i];
            }
          }
          that.pages=[
            {
              html:'<div class="sliderTu"><img src="'+
              that.productData.indexModelTypeThree.typeModelBroadcastImageOne+'"/></div>',
              style:{
//                'background':'url("'+that.productData.indexModelTypeThree.typeModelBroadcastImageOne+'") no-repeat 100% 100%'
              }
            },
            {
              html:'<div class="sliderTu"><img src="'+
              that.productData.indexModelTypeThree.typeModelBroadcastImageTwo+'"/></div>',
              style:{
//                'background':'url("'+that.productData.indexModelTypeThree.typeModelBroadcastImageTwo+'") no-repeat 100% 100%'
              }
            },
            {
              html:'<div class="sliderTu"><img src="'+
              that.productData.indexModelTypeThree.typeModelBroadcastImageThree+'"/></div>',
              style:{
//                'background':'url("'+that.productData.indexModelTypeThree.typeModelBroadcastImageThree+'") no-repeat 100% 100%'
              }
            }
          ];
          that.pagesTwo=[
            {
              html:'<div class="sliderTu"><img src="'+
              that.productData.indexModelTypeThree.h5TypeModelBroadcastImageOne+'"/></div>',
              style:{
//                'background':'url("'+that.productData.indexModelTypeThree.typeModelBroadcastImageOne+'") no-repeat 100% 100%'
              }
            },
            {
              html:'<div class="sliderTu"><img src="'+
              that.productData.indexModelTypeThree.h5TypeModelBroadcastImageTwo+'"/></div>',
              style:{
//                'background':'url("'+that.productData.indexModelTypeThree.typeModelBroadcastImageTwo+'") no-repeat 100% 100%'
              }
            },
            {
              html:'<div class="sliderTu"><img src="'+
              that.productData.indexModelTypeThree.h5TypeModelBroadcastImageThree+'"/></div>',
              style:{
//                'background':'url("'+that.productData.indexModelTypeThree.typeModelBroadcastImageThree+'") no-repeat 100% 100%'
              }
            }
          ];
        }).catch(function (data) {
          console.log(data);
        })
      }
    }
  }
</script>
<style scoped>
  .abouts-cont {
    display: flex;justify-content: space-between;align-items: center;flex-flow:row nowrap;
    padding-bottom: 30px;
  }
  .abouts-cont.ph {
    display: flex;justify-content: flex-start;align-items: center;flex-flow:column;
  }
  .duilian {
    width: 25%;
  }
  .ph .duilian {width: 100%;}
  .duilian img {
    width: 100%;
  }
  .ph .duilian img {width: 100%;max-height: 10rem;}
  .duilian a {line-height: 1.4;text-align: left;}
  .ph .duilian a {font-size: .75rem;}
  .duilian p {
    color:#ed7091;margin: 15px 0;font-size: 24px;font-weight: bolder;
  }
  .ph .duilian p {font-size: 1rem;margin: .6rem 0;}
  .shipin {width: 46%;}
  .ph .shipin {margin: .8rem 0;width: 100%;}
  .shipin video {width: 100%;}
  .shipin p {
    background-color: #D0CECB;
    padding: 15px;
    font-size: 18px;
    color: #FFF;
    margin-top: -10px;
  }

  .diantang_cont {
    display: flex;justify-content: space-between;align-items: center;flex-flow:row nowrap;
    padding-bottom: 30px;
  }
  .diantang_cont>div {width: 49%;}
  .diantang_cont>div img {width: 100%;}

  .chanpins {padding-bottom: 50px;}
  .chanpin_cont {
    height: 460px;
    display: flex;flex-flow: row nowrap;justify-content: space-between;align-items: flex-start;
  }
  .chanpin_side {width: 25%;}
  .chanpin_sideh5 {width: 92%;margin: 0 auto;}
  .chanpin_side_left{
    border: 1px solid #dfdfdf;position: relative;
  }
  .chanpin_side_lefth5 {
    border: 1px solid #dfdfdf;position: relative;margin-top:1.2rem;
  }
  .chanpin_side_left>img {
    position: absolute;width: 50%;left: 25%;top: -30px;
  }
  .chanpin_side_lefth5>img {
    position: absolute;width: 30%;left: 35%;top: -1.2rem;
  }
  .phoneMo {
    display: flex;flex-flow: row nowrap;justify-content: space-between;align-items: flex-start;
  }
  .phoneMo>div:first-child {border-right: 1px solid #afafaf;}
  .chanpin_side_left>div {width: 90%;margin: 0 auto;padding:20px 5px 30px 15px;height: 230px}
  .chanpin_side_left>div:not(:last-child) {
    border-bottom: 1px solid #dfdfdf;
  }
  .jie {
    margin-top: 10px;
    display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: center;
  }
  .jieh5 {
    margin-top: 10px;
    display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: center;
  }
  .jie img {margin: 0 20px;}
  .jieh5 img {width: 25%;margin-right: .8rem;}
  .paihang>p {color:#D84B5B;font-size: 14px;}
  .paihangh5 {width: 50%;padding-left: 1rem;margin-top: 1rem;}
  .paihangh5>p {color:#D84B5B;font-size: .8rem;}
  .jie>div {flex-grow: 1;}
  .jieh5>div {flex-grow: 1;}
  .jie p {font-size: 18px;line-height: 1.5;}
  .jieh5 p {font-size: .8rem;line-height: 1.5;}
  .jie a {font-size: 13px;text-align: left;margin-top: 30px;}
  .jieh5 a {
    font-size: .6rem;text-align: center;margin-top: 1.2rem;
    background-color: #EC7291;border-color: #ccc;
    color: #fff;padding: .5rem 0;
    width: 4rem;border-radius: 4px;
  }
  .chanpin_sidd_right>div {
    position: relative;
    border: 1px solid #dfdfdf;
  }
  .chanpin_sidd_righth5 {
    margin-top: 1.5rem;
    display: flex;flex-flow: row nowrap;justify-content: space-between;align-items: flex-start;
  }
  .chanpin_sidd_righth5>div {
    position: relative;width: 49%;
    border: 1px solid #dfdfdf;
  }
  .gifs {margin-top: 30px;padding: 20px;height: 230px;}
  .dejiang {padding:20px;height: 200px;}
  .dejiangh5 {padding:20px;}
  .dejiang>img {
    position: absolute;width: 50%;left: 25%;top: -30px;
  }
  .dejiangh5>img {
    position: absolute;width: 50%;left: 25%;top: -1.1rem;
  }
  .gifs>img {
    position: absolute;width: 50%;left: 25%;top: -24px;
  }
  .gifsh5 {
    padding-bottom: .5rem;
  }
  .gifsh5>img {
    position: absolute;width: 50%;left: 25%;top: -1rem;
  }
  .gifs a {
    margin-top: 20px;  font-size: 13px;
  }
  .gifsh5 a {
    margin: 1rem auto 0;
    font-size: .6rem;text-align: center;
    background-color: #EC7291;border-color: #ccc;
    color: #fff;padding: .5rem 0;
    width: 4rem;border-radius: 4px;
  }
  .gifs_img {
    display: block;width: 76%;margin: 0 auto;height: 150px;
  }
  .gifs_imgh5 {
    display: block;width: 50%;margin: 1rem auto .6rem;
  }
  .mid_lunbo {
    width: 48%;position: relative;height: 100%;
  }
  .mid_lunboh5 {
    width: 92%;margin: 0 auto;height: 15rem;
  }
</style>
