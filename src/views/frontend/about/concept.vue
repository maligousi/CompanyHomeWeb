<template>
  <div>
    <div class="router_describe rongqi hidden-xs-only">
      <a href="/">首页></a>
      <a href="javascript:;">{{$route.params.whichOne?$route.params.whichOne:source}}></a>
      <a href="javascript:;">{{$route.params.thisOne?$route.params.thisOne:dang}}></a>
    </div>
    <div class="rongqi linian_cont">
      <div class="linian_cont-one">
        <div class="linian_one">
          <span>品牌精神</span>
          <div>
            <p>为了让你的透白更耀眼，</p>
            <p>高姿不断的探索美白科技及成分，</p>
            <p>为肌肤实现一次又一次透白闪耀的光彩。</p>
          </div>
          <p>是为了让你白的透亮，白的彻底，耀眼夺目。</p>
        </div>
        <img src="../../../assets/tup/hongang.jpg"/>
      </div>
      <div class="linian_cont-two">
        <div class="linian_two">
          <span>品牌精神</span>
          <div>
            <p>为了让你的透白更耀眼，</p>
            <p>高姿不断的探索美白科技及成分，</p>
            <p><span>以对美白的透彻理解，</span></p>
            <p><span>带给肌肤安全有效的美白护肤全方案</span></p>
          </div>
        </div>
      </div>
      <div class="linian_cont-three">
        <div class="linian_three">
          <span>品牌定位</span>
          <div>
            <p><span>高姿，专注科技美白</span></p>
            <p>更深刻了解中国女性对专业美白的需求，以强大的国际科研能力，30年不断探索更新的美白成分和配方，科学萃取，更深入研究</p>
            <p>东方人皮肤组织结构，以国际水准的科技和专业，研究皮肤吸收通道，让护肤品能深入皮肤底层。</p>
            <p>从根源开始提供专业美白解决方案，带来一个个创新卓越的护肤产品，值得你信赖</p>
            <p><span>更科技 更专业 更安全 更有效 更彻底</span></p>
          </div>
        </div>
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
        dang:'品牌新闻',
        news:[]
      }
    },
    created(){

    },
    methods:{

    }
  }
</script>
<style scoped>
  .linian_cont {
    background: url("../../../assets/tup/bg-Idea.jpg") no-repeat center 0;
    padding-top: 400px;
    padding-bottom: 100px;
    position: relative;
  }
  .linian_cont-one {
    width: 56%;margin-left: 38%;padding-top: 10px;
    display: flex;justify-content: space-between;flex-flow: row nowrap;align-items: center;
  }
  .linian_one {
    width: 36%;
  }
  .linian_two>span,.linian_one>span,.linian_three>span {
    color:white;font-size: 18px;
    font-weight: bolder;padding: 10px 25px;background-color: #000;text-align: center;
  }
  .linian_one>div {
    font-size: 14px;margin-top: 20px;padding-left: 15px;
  }
  .linian_two>div>p,.linian_one>div>p {margin-top: 15px;}
  .linian_one>p:last-child {
    color:#ff7494;font-size: 18px;font-weight: bolder;margin-top: 15px;line-height: 1.5;
  }
  .linian_cont-two {
    margin-top: 200px;margin-left: 59%;
    width: 41%;
  }
  .linian_two {
    width: 70%;
  }
  .linian_two>div {
    font-size: 14px;margin-top: 20px;
  }
  .linian_two>div>p>span {
    color:#ff7494;font-size: 18px;font-weight: bolder;
  }
  .linian_cont-three {
    margin-top: 100px;
  }
  .linian_three {
    display: flex;justify-content: flex-start;flex-flow: column;align-items: center;
  }
  .linian_three>div {
    margin-top: 50px;
  }
  .linian_three>div>p {
    text-align: center;margin-top: 15px;
  }
  .linian_three>div>p span {
    color:#ff7494;font-size: 18px;font-weight: bolder;
  }
</style>
