<template>
  <div class="imageWeb rongqi">
    <!--{{type}}-->
    <!--{{id}}-->
    <!--{{images}}-->
    <img :src="images.picUrl"/>
  </div>
</template>
<script>
  import frontendGet from '@/api/frontendGet'

  export default {
    data(){
      return {
        images:'',
        type:1,
        id:localStorage.getItem('menuNum')?JSON.parse(localStorage.getItem('menuNum')).imageid:''
      }
    },
    created(){
      this.getImages();
    },
    watch:{
      '$route':'imageChange'
    },
    methods:{
      imageChange(){
        this.id=JSON.parse(localStorage.getItem('menuNum')).textid
        this.getImages();
      },
      getImages:function () {
        var that=this;
        frontendGet.get('/api/htmlType/get',{
          params:{
            htmlType:that.type,
            menuId:that.id
          }
        }).then(function (response) {
          console.log('images:',response.data);
          that.images=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      }
    }
  }
</script>
<style scoped>
  .imageWeb {
    padding: 10px 0;
  }
  .imageWeb img{
    display: block;width: 100%;
  }
</style>
