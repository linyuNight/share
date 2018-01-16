<template>
  <div class="introduction">
    <bg></bg>
    <div class="introduction-list">
      <div class="introduction-item">
        <div class="introduction-item-top">
          <span class="introduction-item-top-left">1.</span><span class="introduction-item-top-right">什么是海带宝推广平台？</span>
        </div>
        <div class="introduction-item-bottom">海带宝为了推广日本代购商城，专门成立一个推广平台，加入的成员只需分享商品内容至微信朋友圈，当好友通过分享链接进入商城并购买，即可获得订单总额3-8%的返利。只需一个分享就能让你躺着把钱赚。</div>
      </div>
      <div class="introduction-item">
        <div class="introduction-item-top">
          <span class="introduction-item-top-left">2.</span><span class="introduction-item-top-right">如何躺着赚钱？</span>
        </div>
        <div class="introduction-item-bottom">
          <div class="step-list">
            <div class="step-item clear">
              <div class="step-item-left">
                <div class="step-item-left-text">第1步</div>
              </div>
              <div class="step-item-right">
                <div>关注以下微信公众号加入海带宝推广平台关注即送20元现金红包哦~</div>
                <img class="erweima" src="../../common/image/rule/erweima.png">
                <div>长按并识别图中二维码，关注公众号</div>
              </div>
            </div>
            <div class="step-item clear">
              <div class="step-item-left">
                <div class="step-item-left-text">第2步</div>
              </div>
              <div class="step-item-right">
                <div>进入推广平台公众号点击分享内容</div>
                <img class="erweima" src="../../common/image/rule/erweima.png">
              </div>
            </div>
            <div class="step-item clear">
              <div class="step-item-left">
                <div class="step-item-left-text">第3步</div>
              </div>
              <div class="step-item-right">
                <div>将分享模块的内容分享至朋友圈，即可坐等收益(每天都可分享)</div>
                <img class="erweima" src="../../common/image/rule/erweima.png">
              </div>
            </div>
            <div class="step-item clear">
              <div class="step-item-left">
                <div class="step-item-left-text">第4步</div>
              </div>
              <div class="step-item-right">
                <div>当你的好友通过你分享的商品链接购买商城的任何商品，你都可以获得3-8%的返利</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="introduction-item">
        <div class="introduction-item-top">
          <span class="introduction-item-top-left">3.</span><span class="introduction-item-top-right">担心好友买到假货？</span>
        </div>
        <div class="introduction-item-bottom">海带宝与日本大阪当地大型连锁药妆店达成战略合作，线下商城所有商品都由合作门店提供，且由海带宝承运。日本当地线下采购，日本直邮，100%保真，假一赔十。</div>
      </div>
    </div>
    <div class="bottom-btn">了解海带宝采购动态</div>
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./introduction.styl"></style>