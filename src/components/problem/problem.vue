<template>
  <div class="problem">
    <bg></bg>
    <div class="question-list">
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q1：</span><span class="question-item-top-right">什么是海带宝推广平台？</span>
        </div>
        <div class="question-item-bottom">海带宝推广平台是海带宝股份全新打造的分享购物平台，平台推手可以随时随地将海带宝日本代购商城的商品和文章分享到朋友圈，好友通过您的分享链接购买商品，即可从中获得返现奖励。分享购物，分享赚钱！期待您的加入！</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q2：</span><span class="question-item-top-right">什么是推手会员等级体系？如何升级？</span>
        </div>
        <div class="question-item-bottom">海带宝推广平台的会员主要分为4个等级：V1会员、V2会员、V3会员、V4会员。会员等级是根据好友购物的订单总额为计算标准，好友购物的订单金额累计越多，会员等级越高，而会员等级越高奖励比例也越高。</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q3：</span><span class="question-item-top-right">如何进行分享？</span>
        </div>
        <div class="question-item-bottom">进入海带宝推广平台公众号，点击“分享内容”查看最新最热分享内容，点击立即分享将商品或文章分享至微信朋友圈，即可坐等返现奖励。</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q4：</span><span class="question-item-top-right">好友下单如何与自己关联？</span>
        </div>
        <div class="question-item-bottom">在分享商品或文章之后，好友点击查看分享内容，就会形成关联，且是永久关联。无论好友在何时购买商城任何商品，推手都可以获得订单返现奖励。如果您的好友已经和其他推手建立过关联关系，则不会再与您关联，也无法获得订单返现奖励。</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q5：</span><span class="question-item-top-right">订单返现奖励比例是多少？一般多久到账？</span>
        </div>
        <div class="question-item-bottom">订单返现奖励是根据会员等级不同所获得的奖励比例也不同，可点击个人中心的会员规则查看。一般情况，好友的购物订单在发货之后，订单返现奖励到账。</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q6：</span><span class="question-item-top-right">为什么实际收益会比预计收益少，甚至显示已失效？</span>
        </div>
        <div class="question-item-bottom">由于海淘购物的特殊性，订单有可能因商品缺货而部分退款或全单退款，那么订单返现奖励的实际收益将被减少，甚至奖励被取消而失效。</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q7：</span><span class="question-item-top-right">推手可以自买省钱吗？</span>
        </div>
        <div class="question-item-bottom">目前不支持平台推手自买省钱。</div>
      </div>
      <div class="question-item">
        <div class="question-item-top">
          <span class="question-item-top-left">Q8：</span><span class="question-item-top-right">海带宝是一家怎样的公司？</span>
        </div>
        <div class="question-item-bottom">2013年，海带宝诞生于广东深圳，致力于为海淘消费者及跨境电商企业提供一站式的进口物流服务，并于2017年8月成功在新三板挂牌上市。海带宝在2017年开始致力于为海淘用户打造优质便捷的一条龙代购服务，实现海外当地门店代买，国际物流转运、清关、派送。</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Bg from 'base/bg/bg'

  export default {
    data() {
      return {
        
      }
    },
    created(){

    },
    methods:{
      
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./problem.styl"></style>