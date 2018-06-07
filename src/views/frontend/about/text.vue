<template>
  <div class="web_text rongqi">
    <!--{{type}}-->
    <!--{{id}}-->
    <p>{{texts.menuName}}</p>
    <div class="web_text-cont1 hidden-xs-only" v-html="texts.htmlContent"></div>
    <div class="web_text-cont2 hidden-sm-and-up" v-html="texts.htmlContent"></div>

  </div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'

  export default {
    data(){
      return {
        texts:'',
        type:2,
      }
    },
    created(){
      this.getTexts();
    },
    watch:{
      '$route':'textChange'
    },
    methods:{
      textChange(){
        this.id=JSON.parse(localStorage.getItem('menuNum')).textid
        this.getTexts();
      },
      getTexts:function () {
        var that=this;
        frontendGet.get('/api/htmlType/get',{
          params:{
            htmlType:that.type,
            menuId:that.$route.params.name
          }
        }).then(function (response) {
          console.log('texts:',response.data);
          that.texts=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      }
    }
  }
</script>
<style scoped>
  .web_text {
    padding: 20px 0;
  }
  .web_text p {
    text-align: center;font-weight: bolder;font-size: 20px;
  }
  .web_text-cont1 {
    width: 70%;margin: 0 auto;
    padding-top: 15px;line-height: 1.4;
  }
  .web_text-cont2 {
    padding-top: 15px;line-height: 1.4;
  }
</style>
