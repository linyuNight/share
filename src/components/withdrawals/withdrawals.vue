<template>
  <div class="withdrawals">
    <bg></bg>
    <div class="withdrawals-top">
      <span class="withdrawals-top-text">我的零钱：</span><span class="withdrawals-top-money">160.3</span><span class="withdrawals-top-moneytext">元</span>
    </div>
    <div class="withdrawals-note">注：提现金额至少为100元</div>
    <div class="withdrawals-input-list">
      <div class="withdrawals-input-item">
        <div class="withdrawals-input-item-left">提现金额(元)</div><input class="withdrawals-input-item-right" type="text" placeholder="请输入提现金额">
      </div>
      <div class="withdrawals-input-item">
        <div class="withdrawals-input-item-left">支付宝账号</div><input class="withdrawals-input-item-right" type="text" placeholder="请输入收款账号">
      </div>
      <div class="withdrawals-input-item">
        <div class="withdrawals-input-item-left">收款人姓名</div><input class="withdrawals-input-item-right" type="text" placeholder="请输入收款人姓名">
      </div>
    </div>
    <div class="bottom-btn">申请提现</div>
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./withdrawals.styl"></style>