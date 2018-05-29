<template>
  <div class="dashi">
    <!--<div class="router_describe rongqi hidden-xs-only">-->
      <!--<a href="/">首页></a>-->
      <!--<a href="javascript:;">{{$route.params.whichOne?$route.params.whichOne:source}}></a>-->
      <!--<a href="javascript:;">{{$route.params.thisOne?$route.params.thisOne:dang}}></a>-->
    <!--</div>-->
    <div class="rongqi dashi_cont">
      <div class="dashi_real">
        <div v-for="(item,index) in historys" class="dashi_kuai" :class="{dashibg:(index+1)%2!=0}">
          <h2>{{item.happenYear}}</h2>
          <p>{{item.happenContent}}</p>
        </div>

        <!--<div class="dashi_kuai dashibg">-->
          <!--<h2>1986</h2>-->
          <!--<p>登陆中国，率先入驻大陆市场的外资化妆品品牌</p>-->
        <!--</div>-->
        <!--<div class="dashi_kuai">-->
          <!--<h2>1986</h2>-->
          <!--<p>登陆中国，率先入驻大陆市场的外资化妆品品牌</p>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'

  export default {
    data(){
      return {
        source:'关于高姿',
        dang:'品牌发展史',
        historys:[]
      }
    },
    created(){
      this.getHistory();
    },
    methods:{
      getHistory:function () {
        var that=this;
        frontendGet.get('/api/htmlHistoryDevelopment/list').then(function (response) {
          console.log('his:',response.data.data);
          that.historys=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      }
    }
  }
</script>
<style scoped>
  .dashi {
    background-color: #f4f4f4;padding-bottom: 50px;
  }
  .dashi_cont {
    padding-left: 25px;padding-top: 50px;
  }
  .dashi_real {
    border-left: 3px solid #03a9f4;padding:20px;
  }
  .dashi_kuai {
    padding: 20px 30px;width: 86%;
    position: relative;
  }
  .dashi_kuai:not(:nth-child(1)) {
    margin-top: 20px;
  }
  .dashi_kuai::before {
    display: block;content: '';
    width: 30px;height: 30px;border-radius: 50%;background-color: #ffa4ab;
    position: absolute;left: -37px;top: 50%;
  }
  .dashi_kuai h2 {font-size: 28px;}
  .dashi_kuai p {margin-top: 10px;font-size: 15px;}
  .dashi_kuai.dashibg {
    background-color: white;border-radius: 3px;
  }
</style>
