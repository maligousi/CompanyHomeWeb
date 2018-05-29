<template>
  <div class="xilie_cont" >
    <!--<div class="router_describe rongqi hidden-xs-only">-->
      <!--<a href="javascript:;">首页></a>-->
      <!--<a href="javascript:;">护肤家族></a>-->
      <!--<a href="javascript:;">匀净萃白系列></a>-->
    <!--</div>-->
    <div class="xilie-img rongqi" :class="{ch:Moden}">
      <img :src="showImage" />
      <!--<img src="../../../assets/tup/xielie_img2.jpg" />-->
    </div>
    <div class="yidongSele" v-show="Moden">
      <template>
        <el-select v-model="value" placeholder="请选择" @change="seleChange">
          <el-option
            v-for="item in xilies"
            :key="item.id"
            :label="item.categoryName"
            :value="item.id">
          </el-option>
        </el-select>
      </template>
    </div>
    <div class="xilie_select rongqi" :class="{ch:Moden}">
      <div class="select_left zhuanHuan">
        <p>产品系列</p>
        <ul>
          <li v-for="(item,index) in xilies" @click="changeIds(item.id)"
              :class="{xuanZhong:item.id==xid}">
            {{item.categoryName}}
          </li>
          <!--<li class="xuanZhong">匀净萃白系列</li>-->
        </ul>
      </div>
      <div class="select_right">
        <div v-for="(item,index) in prods" class="xilie_mokuai">
          <div class="xilie_mokuai-topimg">
            <img :src="item.prodPic" />
          </div>
          <div class="xilie_mokuai-info">
            <div>
              <p>{{item.prodName}}</p>
              <p>{{item.prodDesc}}</p>
            </div>
            <p>{{item.prodPrice}}<span>元</span></p>
          </div>
          <a :href="item.referUrl">+查看详情</a>
        </div>
        <!--<div class="xilie_mokuai">-->
          <!--<div class="xilie_mokuai-topimg">-->
            <!--<img src="../../../assets/tup/xiliezhanshi.jpg" />-->
          <!--</div>-->
          <!--<div class="xilie_mokuai-info">-->
            <!--<div>-->
              <!--<p>高姿匀净淡斑精华液</p>-->
              <!--<p>COGI Even Dark Spot Corrector Essence</p>-->
            <!--</div>-->
            <!--<p>199.00<span>元</span></p>-->
          <!--</div>-->
          <!--<a href="javascript:;">+查看详情</a>-->
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
        xilies:[],
        showImage:'',
        prods:[],
        xid:localStorage.getItem('menuNum')?JSON.parse(localStorage.getItem('menuNum')).xilieid:'',
        value:''
      }
    },
    created(){
      this.getXilies();
      this.getProduct(this.xid);
    },
    watch:{
      '$route':'daoChange'
    },
    computed:{
      Moden(){
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
      }
    },
    methods:{
      daoChange(){
        this.changeIds(JSON.parse(localStorage.getItem('menuNum')).xilieid);
      },
      changeIm:function (x) {
        for(let i=0;i<this.xilies.length;i++){
          if(this.xilies[i].id==x){
            return this.showImage=this.xilies[i].categoryPic;
          }
        }
      },
      getXilies:function () {
        var that=this;
        frontendGet.get('/api/htmlProductCategory/list',{
        }).then(function (response) {
          console.log('xilies:',response.data.data);
          var z=response.data.data;
          that.xilies=response.data.data;
          for(let i=0;i<z.length;i++){
            if(z[i].id==that.xid){
              that.showImage=z[i].categoryPic
            }
          }
          console.log(that.showImage);
        }).catch(function (data) {
          console.log(data);
        })
      },
      getProduct:function (x) {
        var that=this;
        frontendGet.get('/api/htmlProduct/list/'+x,{
        }).then(function (response) {
          console.log('pros:',response.data.data);
          that.prods=response.data.data;
        }).catch(function (data) {
          console.log(data);
        })
      },
      changeIds:function (x) {
        x=x?x:this.$route.params.thisOne;
        this.getProduct(x);
        this.xid=x;
        this.value=x;
        this.changeIm(x);
        localStorage.setItem('menuNum',JSON.stringify({xilieid:x}));
      },
      seleChange:function () {
        this.changeIds(this.value)
      }
    }
  }
</script>
<style scoped>
  .xilie-img {padding-top: 20px;}
  .xilie-img.ch {padding: 0;}
  .xilie-img img {
    width: 100%;display: block;height: 400px;
  }
  .xilie-img.ch img {height: 10rem;}
  .yidongSele {
    width: 30%;margin: .6rem auto;
    border: 1px solid #3c763d;border-radius: 5px;
  }
  .xilie_select {
    margin-top: 36px;padding-bottom: 50px;
    display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: flex-start;
  }
  .xilie_select.ch {margin-top: 0;border-top: 1px solid #afafaf;}
  .select_left {
    width: 20%;font-size: 17px;padding-left: 15px;display: none;
    flex-shrink: 1;
  }
  .select_left p,.xuanZhong {
    color:#E56F91;
    /*font-weight: bolder;*/
    font-size: 18px;
  }
  .select_left ul {
    padding-left: 20px;margin-top: 15px;
  }
  .select_left li {
    padding: 15px 0;cursor: pointer;
  }
  .select_right {
    width: 90%;margin: 0 5%;
    display: flex;flex-flow: row wrap;justify-content: flex-start;align-items: flex-start;
  }
  .xilie_mokuai {
    width:32%;margin-bottom: 15px;margin-right: 1%;
    padding: 5px 5% 5px 5px;
  }
  .ch .xilie_mokuai {
    width:49%;margin-top: 1rem;
  }
  .xilie_mokuai-topimg {
    height: 200px;width: 200px;border: 1px solid #dfdfdf;
  }
  .ch .xilie_mokuai-topimg {
    border: 1px solid #dfdfdf;width: 100%;height: 8rem;
  }
  .xilie_mokuai-topimg img {
    width: 100%;height: 100%;
  }
  .xilie_mokuai-info {
    width: 90%;
    font-size: 12px;margin-top: 15px;
    display: flex;flex-flow: row wrap;justify-content: space-between;align-items: flex-start;
  }
  .xilie_mokuai-info>div {width: 50%;}
  .xilie_mokuai-info p {line-height: 1.5;}
  .xilie_mokuai-info>p {
    color:#F93C5F;
  }
  .xilie_mokuai>a {
    margin-top: 25px;border-bottom: 1px solid #dfdfdf;width: 100%;
    text-align: left;font-size: 13px;padding: 10px 0;
  }
  @media (min-width: 992px) {
    .select_left {
      display: block;
    }
    .select_right {
      width: 80%;
    }
  }
</style>
