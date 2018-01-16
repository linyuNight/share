<template>
  <div class="withdrawals-record">
    <bg>
      <div class="empty-bg-bottom" v-if="isEmpty"></div>
    </bg>
    <div class="withdrawals-record-list" v-if="!isEmpty">
      <div class="withdrawals-record-item" v-for="item in recordList">
        <div class="withdrawals-record-item-top">
          <div class="withdrawals-record-item-top-left">
            <span class="withdrawals-record-item-top-text">提现金额：</span><span class="withdrawals-record-item-top-money">120</span><span class="withdrawals-record-item-top-moneytext">元</span>
          </div>
          <div class="withdrawals-record-item-top-right">待审核</div>
        </div>
        <div class="withdrawals-record-item-bottom">
          <div class="withdrawals-record-item-bottom-item"><span class="item-bottom-left">流水号：</span><span class="item-bottom-right">123456632144623</span></div>
          <div class="withdrawals-record-item-bottom-item"><span class="item-bottom-left">支付宝账户：</span><span class="item-bottom-right">10079612345@qq.com</span></div>
          <div class="withdrawals-record-item-bottom-item"><span class="item-bottom-left">收款人姓名：</span><span class="item-bottom-right">张三</span></div>
          <div class="withdrawals-record-item-bottom-item"><span class="item-bottom-left">提现时间：</span><span class="item-bottom-right">2017-12-25</span></div>
        </div>
      </div>
    </div>
    <div class="empty-page" v-if="isEmpty">
      <div class="empty-round"></div>
      <div class="empty-icon"></div>
      <div class="text-contain">        
        <p class="empty-text1">暂无相关记录</p>
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
        recordList: [1,1,1,1,1,1,1,1,1],
        isEmpty:true
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./withdrawals-record.styl"></style>