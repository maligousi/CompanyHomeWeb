<template>
  <div class="web_text rongqi">
    <!--{{type}}-->
    <!--{{id}}-->
    <p>{{texts.menuName}}</p>
    <div class="web_text-cont" v-html="texts.htmlContent"></div>

  </div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'

  export default {
    data(){
      return {
        texts:'',
        type:2,
        id:localStorage.getItem('menuNum')?JSON.parse(localStorage.getItem('menuNum')).textid:''
      }
    },
    created(){
      this.getTexts();
    },
    methods:{
      getTexts:function () {
        var that=this;
        frontendGet.get('/api/htmlType/get',{
          params:{
            htmlType:that.type,
            menuId:that.id
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
  .web_text-cont {
    padding-top: 15px;line-height: 1.4;
    text-align: center;
  }
</style>
