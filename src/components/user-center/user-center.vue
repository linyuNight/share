<template>
  <div class="user-center">
    <bg></bg>
    <div class="user-center-top">
      <div class="user-avator-bg">
        <img class="user-avator-pic" src="../../common/image/share/img40.png">
        <img class="user-avator-vip vip1" v-if="vip==1" src="../../common/image/user-center/vip1.png">
        <img class="user-avator-vip vip2" v-if="vip==2" src="../../common/image/user-center/vip2.png">
        <img class="user-avator-vip vip3" v-if="vip==3" src="../../common/image/user-center/vip3.png">
        <img class="user-avator-vip vip4" v-if="vip==4" src="../../common/image/user-center/vip4.png">
      </div>
      <p class="user-name">吃花椒的王昭君~</p>
      <div class="user-center-top-bottom">
        <div class="user-center-top-bottom-left"><span class="user-center-top-bottom-left-text">我的零钱：</span><span class="user-center-top-bottom-money">126.8</span><span class="user-center-top-bottom-left-text">元</span></div>
        <router-link tag="div" class="user-center-top-bottom-right" to="/withdrawals"><span class="more-text">提现</span><div class="more-pic"></div></router-link>
      </div>
    </div>
    <div class="user-center-list">
      <router-link tag="div" class="user-center-item" to="/myShare">
        <div class="user-center-item-left">
          <div class="user-center-item-left-pic pic1"></div>
          <span class="user-center-item-left-text">我的分享</span>
        </div>
        <div class="user-center-item-right"></div>
      </router-link>
      <router-link tag="div" class="user-center-item" to="/profitRecord">
        <div class="user-center-item-left">
          <div class="user-center-item-left-pic pic2"></div>
          <span class="user-center-item-left-text">收益记录</span>
        </div>
        <div class="user-center-item-right"></div>
      </router-link>
      <router-link tag="div" class="user-center-item" to="/withdrawalsRecord">
        <div class="user-center-item-left">
          <div class="user-center-item-left-pic pic3"></div>
          <span class="user-center-item-left-text">提现记录</span>
        </div>
        <div class="user-center-item-right"></div>
      </router-link>
    </div>
    <div class="user-center-list">
      <router-link tag="div" class="user-center-item" to="/rule">
        <div class="user-center-item-left">
          <div class="user-center-item-left-pic pic4"></div>
          <span class="user-center-item-left-text">会员规则</span>
        </div>
        <div class="user-center-item-right"></div>
      </router-link>
      <router-link tag="div" class="user-center-item" to="/problem">
        <div class="user-center-item-left">
          <div class="user-center-item-left-pic pic5"></div>
          <span class="user-center-item-left-text">常见问题</span>
        </div>
        <div class="user-center-item-right"></div>
      </router-link>
      <router-link tag="div" class="user-center-item" to="/Introduction">
        <div class="user-center-item-left">
          <div class="user-center-item-left-pic pic6"></div>
          <span class="user-center-item-left-text">推广平台介绍</span>
        </div>
        <div class="user-center-item-right"></div>
      </router-link>
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
        select: 1,
        vip:1
      }
    },
    created(){

    },
    methods:{
      show(i){
        this.select = i
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./user-center.styl"></style>