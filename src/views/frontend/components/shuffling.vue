<template>
  <div>
    <div class="hidden-xs-only lunbo_height">
      <slider ref="slider" :pages="pages" :sliderinit="sliderinit"></slider>
      <p @click="slidePre" class="leftLun"></p>
      <p @click="slideNext" class="rightLun"></p>
    </div>
    <div class="hidden-sm-and-up" style="width:100%;height: 150px;position: relative;">
      <slider ref="sliderTwo" :pages="pagesTwo" :sliderinit="sliderinitTwo"></slider>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import slider from 'vue-concise-slider'
  import frontendGet from '@/api/frontendGet'

  export default {
    components:{
      slider
    },
    data(){
      return {
        Moden:/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
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
            html: '<div class="slider1"></div>',
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
            html: '<div class="slider1"></div>',
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
        ]
      }
    },
    computed:{
    },
    mounted() {
      this.getShuff();
    },
    created(){
//      this.getShuff();
    },
    methods:{
      ...mapActions(['getFrontendLunbo']),
      slideNext () {
        this.$refs.slider.$emit('slideNext')
      },
      slidePre () {
        this.$refs.slider.$emit('slidePre')
      },
      getShuff:function () {
        var that=this;
        frontendGet.get('/api/index/broadcast/list').then(function (response) {
          console.log('shuffling:',response.data.data);
          var picOri=response.data.data;
          var cunz=[],cunzTwo=[];
          for(let i=0;i<picOri.length;i++){
            cunz.push({
              html:'<a class="sliderTu" href="'+picOri[i].referUrl+
              '"><img src="'+picOri[i].picUrl+'"/></a>',
              style:{
//                'background':'url("'+picOri[i].picUrl+'") no-repeat 100%'
              }
            })
            cunzTwo.push({
              html:'<a class="sliderTu" href="'+picOri[i].referUrl+
              '"><img onclick="window.location.href('+picOri[i].referUrl+')" src="'+picOri[i].h5PicUrl+'"/></a>',
              style:{
//                'background':'url("'+picOri[i].picUrl+'") no-repeat 100%'
              }
            })
          }
          that.pages=cunz;
          that.pagesTwo=cunzTwo;
        }).catch(function (data) {
          console.log(data);
        })
      }
    }
  }
</script>
<style scoped>
  .lunbo_height {
    width:100%;position: relative;
    /*height: 500px;*/
  }

  /*@media (min-width: 768px){*/
    /*.lunbo_height {*/
      /*height: 550px;*/
    /*}*/
  /*}*/

  .leftLun {
    position: absolute;left: 10px;top: 50%;width: 30px;height: 30px;
    border-bottom: 2px solid white;border-right:2px solid white;z-index: 5;
    transform: rotate(135deg) translate(-50%);
    transform-origin:50% 50%;cursor: pointer;
  }
  .rightLun {
    position: absolute;right: 10px;top: 50%;width: 30px;height: 30px;
    border-bottom: 2px solid white;border-left:2px solid white;z-index: 5;
    transform: rotate(-135deg) translate(50%);
    transform-origin:50% 50%;cursor: pointer;
  }
</style>
