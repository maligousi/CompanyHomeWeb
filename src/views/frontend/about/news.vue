<template>
  <div class="web_news">
    <!--<div class="router_describe rongqi hidden-xs-only">-->
      <!--<a href="/">首页></a>-->
      <!--<a href="javascript:;">{{$route.params.whichOne?$route.params.whichOne:source}}></a>-->
      <!--<a href="javascript:;">{{$route.params.thisOne?$route.params.thisOne:dang}}></a>-->
    <!--</div>-->
    <div class="web_news-cont">
      <p class="rongqi news_title">品牌新闻</p>
      <div>
        <div v-for="(item,index) in newDatas.list" :class="{newsbg:(index+1)%2!=0}">
          <div class="rongqi news_kuai">
            <img :src="item.picUrl"/>
            <div class="news_kuai-cont">
              <p>{{item.newsTitle}}</p>
              <p>{{item.createDate | formatDate}}</p>
              <div>{{item.newsDesc}}</div>
              <a @click="toMoreView(item.newsContent)">+ 阅读详情</a>
            </div>
          </div>
        </div>
        <!--<div class="newsbg">-->
          <!--<div class="rongqi news_kuai">-->
            <!--<img src="../../../assets/tup/lunbo_1.jpg"/>-->
            <!--<div class="news_kuai-cont">-->
              <!--<p>重磅 | 高姿开年首秀，2018营销战役全面打响！</p>-->
              <!--<p>2018-02-26 15:09</p>-->
              <!--<div>2018年2月25日（农历正月初十），狗年新春后的首个休息日。高姿马不停蹄，于上海佘山索菲特酒店隆重举行“科技白、赢未来”2018高姿第一季度代理商工作会议，数百位高姿代理商合作伙伴与业务精英齐聚一堂，共商2018年销售大计。高姿董事长陈丹霞、总经理陈展雄以及多位高姿领导共同出席。</div>-->
              <!--<p>+ 阅读详情</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="new_footer">
        <p class="pre" @click="prepage"></p>
        <p v-for="(item,index) in tatalPage" :class="{current:pageIndex==(index+1)}"
           @click="getMoreNews(index+1)">{{index+1}}</p>
        <p class="next" @click="nextpage"></p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import { formatDate } from '@/utils/date'
  import frontendGet from '@/api/frontendGet'

  export default {
    data(){
      return {
        source:'关于高姿',
        dang:'品牌新闻',
        newDatas:[],
        tatalPage:[],
        pageIndex:1,
        pageGetNum:5
      }
    },
    created(){
      this.getNews();
    },
    methods:{
      ...mapActions(['AchangeNewsCont']),
      prepage(){
        if(this.pageIndex>1){
          this.pageIndex--;
          this.getMoreNews(this.pageIndex);
        }else{
          this.pageIndex=1
        }
      },
      nextpage(){
        if(this.pageIndex<this.tatalPage.length){
          this.pageIndex++;
          this.getMoreNews(this.pageIndex);
        }else{
          this.pageIndex=this.tatalPage.length
        }
      },
      getNews:function () {
        var that=this;
        frontendGet.get('/api/htmlTypeNews/list',{
          params:{
            page:1,
            limit:that.pageGetNum
          }
        }).then(function (response) {
          console.log('news:',response.data.data);
          that.newDatas=response.data.data;
          var pn=Math.ceil(response.data.data.totalCount/that.pageGetNum);
          for(let i=0;i<pn;i++){
            that.tatalPage.push(i+1);
          }
        }).catch(function (data) {
          console.log(data);
        })
      },
      getMoreNews:function (x) {
        var that=this;
        frontendGet.get('/api/htmlTypeNews/list',{
          params:{
            page:x,
            limit:that.pageGetNum
          }
        }).then(function (response) {
          console.log(2,response.data.data);
          that.newDatas=response.data.data;
          that.pageIndex=x;
        }).catch(function (data) {
          console.log(data);
        })
      },
      toMoreView(x){
        this.AchangeNewsCont(x);
        this.$router.push({name:'newMore'});
      }
    },
    filters:{
      formatDate(time){
        var date = new Date(time/1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    }
  }
</script>
<style scoped>
  .news_title {padding: 10px 0;}
  .news_title {padding-left:15px; font-size: 24px;color:#ed7091;font-weight: bolder;}
  .news_kuai {
    padding: 40px 15px;
    display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: flex-start;
  }
  .news_kuai img {
    width: 25%;
  }
  .news_kuai-cont {
    margin-left: 15px;
    display: flex;flex-flow:column;justify-content: flex-start;align-items: flex-start;
  }
  .news_kuai-cont>p:nth-child(1) {
    font-size: 24px;font-weight: 500;
  }
  .news_kuai-cont>p:nth-child(2) {
    font-size: 14px;color:#333;padding: 8px 0 12px;
  }
  .news_kuai-cont>div {line-height: 1.2;font-size: 15px;}
  .news_kuai-cont>a {
    margin-top: 5px;
  }
  .newsbg {
    background-color: #fafafa;
  }
  .new_footer {
    display: flex;flex-flow: row nowrap;justify-content: center;align-items: center;
    padding: 25px 0;
  }
  .new_footer p {
    width: 30px;height: 30px;line-height: 30px;text-align: center;
    color:#03a9f4;position: relative;margin-right: 6px;
  }
  .new_footer p.current {
    background-color: #1e6abc;color:white;
  }
  .pre,.next {border:1px solid red;}
  .pre::before {
    display: block;content: '';
    position: absolute;top: 50%;left: 60%;
    width: 10px;height: 10px;
    border-left: 1px solid #1e6abc;
    border-bottom: 1px solid #1e6abc;
    transform-origin: 50% 50%;
    transform:translate(-50%,-50%) rotate(45deg);
  }
  .next::before {
    display: block;content: '';
    position: absolute;top: 50%;left: 40%;
    width: 10px;height: 10px;
    border-right: 1px solid #1e6abc;
    border-bottom: 1px solid #1e6abc;
    transform-origin: 50% 50%;
    transform:translate(-50%,-50%) rotate(-45deg);
  }
</style>
