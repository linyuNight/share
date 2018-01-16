<template>
  <div class="rule">
    <bg></bg>
    <header class="rule-header">
      <div class="rule-top">
        <span class="rule-top-text">当前会员等级：</span><img class="rule-top-vip" src="../../common/image/user-center/vip1.png">
      </div>
      <div class="rule-bottom">
        <span class="rule-bottom-text">好友购物订单总额：</span><span class="rule-bottom-money">126.8</span><span class="rule-bottom-moneytext">元</span>
      </div>
    </header>
    <div class="banner"></div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <td class="td1">会员等级</td>
            <td class="td2">会员条件</td>
            <td class="td3">点击返现</td>
            <td class="td4">返现比例</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img class="vip-pic" src="../../common/image/rule/vip1.png"></td>
            <td><div class="td2-text">关注推广平台<br/>公众号</div></td>
            <td>无</td>
            <td><span class="table-num">3</span><span class="table-numtext">%</span></td>
          </tr>
          <tr>
            <td><img class="vip-pic" src="../../common/image/rule/vip2.png"></td>
            <td><div class="td2-text">所有好友订单<br/>总额>=200元</div></td>
            <td>0.1元/次</td>
            <td><span class="table-num">5</span><span class="table-numtext">%</span></td>
          </tr>
          <tr>
            <td><img class="vip-pic" src="../../common/image/rule/vip3.png"></td>
            <td><div class="td2-text">所有好友订单<br/>总额>=10000元</div></td>
            <td>0.2元/次</td>
            <td><span class="table-num">6</span><span class="table-numtext">%</span></td>
          </tr>
          <tr>
            <td><img class="vip-pic" src="../../common/image/rule/vip4.png"></td>
            <td><div class="td2-text">所有好友订单<br/>总额>=100000元</div></td>
            <td>0.5元/次</td>
            <td><span class="table-num">8</span><span class="table-numtext">%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="rule-footer">注：会员分享内容的点击返现累计金额不能超过当前好友购物订单返现累计总额</footer>
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./rule.styl"></style>