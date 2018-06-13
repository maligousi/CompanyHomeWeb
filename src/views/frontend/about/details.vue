<template>
  <div class="rongqi">
    <div class="detail-web hidden-xs-only">
      <div class="detial-top">
        <div class="detial-top_img" @click="showBigPic">
          <img :src="detailData.prodPic"/>
          <p>点击查看大图</p>
        </div>
        <div class="detial-top_des">
          <h3>{{detailData.prodName}}</h3>
          <p>{{detailData.prodDesc}}</p>
          <div class="detial-top_desDiv">
            <p>价格：<span>{{detailData.prodPrice}}</span><span>元</span></p>
            <p class="wenziDes">{{detailData.prodIntroduce}}</p>
            <p>*价格为建议零售价</p>
          </div>
        </div>
      </div>
      <div class="detail-use">
        <img src="../../../assets/tup/how-to-use.png">
        <div>
          <p>使用方法</p>
          <span>{{detailData.prodUserMethod}}</span>
        </div>
      </div>
      <div class="detail-recom">
        <div class="detail-recom_top"><img src="../../../assets/tup/how-to-use.png"/><p>同类产品推荐</p></div>
        <div class="detail-recom_lie">
          <div v-for="item in detailData.recommendeds">
            <div class="recom_dan" @click="otherDetails(item.referUrl)">
              <img :src="item.recommendedProdUrl"/>
              <p>{{item.recommendedProdName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="show_bigpic" v-show="showBig" @click="closeBigpic">
        <img :src="detailData.prodPic"/>
      </div>
    </div>
    <div class="detail-webH5 hidden-sm-and-up">
      <div class="detial-toph5" @click="showBigPich5">
        <img :src="detailData.prodH5Pic" />
        <p>点击查看大图</p>
      </div>
      <div class="detailName">{{detailData.prodName}}</div>
      <div class="detailH5info">
        <p class="price">建议零售价：<span>{{detailData.prodPrice}}</span><span>元</span></p>
        <div class="detail-kuai">
          <img src="../../../assets/tup/how-to-use.png"/>
          <div>
            <p>概要详情</p>
            <span>{{detailData.prodIntroduce}}</span>
          </div>
        </div>
        <div class="detail-kuai">
          <img src="../../../assets/tup/how-to-use.png"/>
          <div>
            <p>使用方法</p>
            <span>{{detailData.prodUserMethod}}</span>
          </div>
        </div>
        <div class="detail-kuai">
          <img src="../../../assets/tup/how-to-use.png"/>
          <div>
            <p>同类产品推荐</p>
          </div>
        </div>
        <div class="h5recom">
          <div class="h5recom_kuai" v-for="item in detailData.recommendeds" @click="otherDetails(item.referUrl)">
            <img :src="item.recommendedProdH5Url"/>
            <p>{{item.recommendedProdName}}</p>
          </div>
        </div>
      </div>
      <div class="showh5_bigpic" v-show="showBigh5" @click="closeBigpich5">
        <img :src="detailData.prodH5Pic"/>
      </div>
    </div>
  </div>
</template>
<script>
    import frontendGet from '@/api/frontendGet'

    export default {
      data () {
        return {
          showBig:false,
          showBigh5:false,
          detailData:{}
        }
      },
      watch:{
        '$route':'detailChange'
      },
      created(){
        this.getDetails();
      },
      methods:{
        getDetails:function () {
          var that=this;
          frontendGet.get('/api/htmlProduct/info/'+that.$route.params.name).then(function (data) {
            console.log('details:',data.data.data);
            if(data.data.code==0){
              that.detailData=data.data.data
            }else{
              that.detailData={}
            }
          }).catch(function (data) {
            console.log(data);
          })
        },
        showBigPic:function () {
          this.showBig=true
        },
        showBigPich5:function () {
          this.showBigh5=true
        },
        closeBigpic:function () {
          this.showBig=false
        },
        closeBigpich5:function () {
          this.showBigh5=false
        },
        otherDetails:function (x) {
          window.location.href=x;
        },
        detailChange:function () {
          var that=this;
          frontendGet.get('/api/htmlProduct/info/'+that.$route.params.name).then(function (data) {
            console.log('details:',data.data.data);
            if(data.data.code==0){
              that.detailData=data.data.data
            }else{
              that.detailData={}
            }
          }).catch(function (data) {
            console.log(data);
          })
        }
      }
    }
</script>
<style scoped>
  .detail-webH5 {padding: .6rem 0 2rem;width: 96%;margin: 0 auto;}
  .detial-toph5 {border: 1px solid #dfdfdf;position: relative;}
  .detial-toph5 p {position: absolute;font-size: .7rem;left: 2%;bottom: .6rem;}
  .detial-toph5 img {
    width: 80%;display: block;margin: 0 auto;
  }
  .detailName {font-size: 1rem;padding: 1rem 0;border-bottom: 1px solid #dfdfdf;}
  .price {text-align: right;font-size: .85rem;margin-top: 1rem;}
  .price span{color:#ED7091;font-size: 1rem;}
  .detail-kuai {
    margin-bottom: 2rem;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: flex-start;
  }
  .detail-kuai img {
    width: 10%;
  }
  .detail-kuai>div {width: 90%;padding-left: 4%;}
  .detail-kuai>div>p {font-size: 1rem;font-weight: bolder;margin: .5rem 0;}
  .detail-kuai>div span {color:#909090;font-size: .85rem;}
  .h5recom {margin-top: 2rem;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: flex-start;}
  .h5recom_kuai {width: 49%;border: 1px solid #999;position: relative;height: 8rem;}
  .h5recom_kuai img {display: block;width: 80%;margin:0 auto;}
  .h5recom_kuai p {width: 100%;text-align: center;font-size: .7rem;position: absolute;bottom: .5rem;}

 .detail-web {padding-top:20px; padding-left: 20px;}
 .detial-top {
   display: flex;flex-flow: row wrap;justify-content: space-between;align-items: flex-start;
 }
  .detial-top_img {
    position: relative;
    width: 35%;padding:3% 2%;border: 1px solid #dfdfdf;
  }
  .detial-top_img p {
    position: absolute;left: 10px;bottom: 10px;font-size: 14px;color:#666;
  }
 .detial-top_img img {
   width: 100%;
 }
  .detial-top_des {
    width: 50%;
  }
 .detial-top_des>h3 {
   display: block;font-size: 24px;font-weight: bolder;
   padding: 10px 0;border-bottom: 1px solid #999;
 }
 .detial-top_des>p {
   padding: 10px 0;font-size: 17px;
 }
 .detial-top_desDiv {
   margin-top: 10px;font-size: 15px;
 }
  .detial-top_desDiv span {
    color:#ED7091;
  }
   .detial-top_desDiv p {
     color:#666;
   }
  .wenziDes {
    margin: 20px 0;line-height: 1.5;
  }
  .detail-use {
    margin-top: 25px;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: flex-start;
  }
 .detail-use img {margin-right: 15px;}
  .detail-use p {
    font-size: 17px;font-weight: bolder;padding: 15px 0;
  }
 .detail-use span {
   font-size: 15px;color:#666;
 }
  .detail-recom_top {
    margin-top: 40px;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: center;
  }
  .detail-recom_top img {margin-right: 15px;}
  .detail-recom_top p {font-size: 17px;font-weight: bolder;}
  .detail-recom_lie {
    margin-top: 20px;padding-bottom: 60px;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: center;
  }
 .detail-recom_lie>div {
   width: 25%;height: 210px;
 }
 .detail-recom_lie>div>div {
   width: 80%;height: 100%;position: relative;
   border: 1px solid #dfdfdf;
 }
  .recom_dan img {
    width: 80%;display: block;margin: 0 auto;
  }
 .recom_dan p {
   position: absolute;left: 0;bottom: 15px;width: 100%;
   text-align: center;font-size: 15px;
 }
  .show_bigpic,.showh5_bigpic {
    position: fixed;left: 0;right: 0;top: 0;bottom: 0;
    background-color: rgba(0,0,0,.7);
  }
  .show_bigpic img {
    width: 40%;position: absolute;left: 30%;
    top: 50%;transform: translateY(-50%);
  }
  .showh5_bigpic img {
    width: 100%;position: absolute;
    top: 50%;transform: translateY(-50%);
  }
</style>
