<template>
<div class="sp" :class="{yi:Moden}">
  <div class="meizu" v-show="!Moden" v-for="(item,index) in allInfo">
    <div class="special_pro">
      <img :src="item.prodOneImgUrl"/>
      <div class="special_pro-info">
        <p>{{item.prodOneName}}</p>
        <span>{{item.prodOneDesc}}</span>
        <a :href="item.referOneUrl">点击详情></a>
      </div>
    </div>
    <div class="special_pro">
      <img :src="item.prodTwoImgUrl"/>
      <div class="special_pro-info">
        <p>{{item.prodTwoName}}</p>
        <span>{{item.prodTwoDesc}}</span>
        <a :href="item.referTwoUrl">点击详情></a>
      </div>
    </div>
  </div>

  <div class="meizu" v-show="Moden" v-for="(item,index) in allInfo">
    <div class="special_pro h5_special_pro-info">
      <img :src="item.h5ProdOneImgUrl"/>
      <div class="special_pro-info">
        <p>{{item.prodOneName}}</p>
        <span>{{item.prodOneDesc}}</span>
        <a :href="item.referOneUrl">点击详情></a>
      </div>
    </div>
    <div class="special_pro h5_special_pro-info">
      <img :src="item.h5ProdTwoImgUrl"/>
      <div class="special_pro-info">
        <p>{{item.prodTwoName}}</p>
        <span>{{item.prodTwoDesc}}</span>
        <a :href="item.referTwoUrl">点击详情></a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'
  import { mapActions, mapState } from 'vuex'
  export default {
    data(){
      return {
        allInfo:[]
      }
    },
    computed:{
      Moden(){
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
      }
    },
    mounted() {
      this.getSpecial()
    },
    methods:{
      getSpecial:function () {
        var that=this;
        frontendGet.get('/api/indexRecommendProd/list').then(function (response) {
          console.log('special:',response.data.data);
          that.allInfo=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      }
    }
  }
</script>
<style scoped>
  .sp {
    margin-top: 50px;
  }
  .sp.yi {margin-top: 1rem;}
  .meizu {
    display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: center;
  }
  .meizu>div:nth-child(1) {
    border-right: 1px solid #afafaf;
  }
  .special_pro {
    width: 50%;padding-left: 30px;margin-bottom: 30px;
    display: flex;flex-flow: row nowrap;justify-content: center;align-items: center;
  }
  .special_pro-info {
    margin-left: 20px;
    display: flex;flex-flow: column;justify-content: flex-start;align-items: flex-start;
  }
  .special_pro-info span {
    display: block;margin: 15px 0;color:#8c8c8c;
  }

  .h5_special_pro-info {
    padding-left: 1rem;margin-bottom: 0;padding: .8rem 0 15px .8rem;
  }
  .h5_special_pro-info img {
    width: 40%;
  }
  .h5_special_pro-info .special_pro-info {
    margin-left: 1rem;
    font-size: .75rem;
  }
  .h5_special_pro-info span {
    display: block;margin: .5rem 0;color:#8c8c8c;
  }
</style>
