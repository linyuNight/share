<template>
  <div class="profit-list">
    <bg></bg>
    <img class="profit-list-top" src="../../common/image/prifit-list/background2.png">
    <div class="prifit-list-contain">
      <div class="prifit-list-header">
        <div class="prifit-list-header-left">排名</div>
        <div class="prifit-list-header-center">用户名</div>
        <div class="prifit-list-header-right">月收益(元)</div>
      </div>
      <div class="prifit-list-content">
        <div class="prifit-item" v-for="(prifitItem,index) in prifitList">
          <div class="prifit-item-left">{{index | isPic}}</div>
          <div class="prifit-item-center">sdf是胜多负的</div>
          <div class="prifit-item-right">1260</div>
        </div>
      </div>
      <div class="prifit-list-footer">
        <div class="prifit-list-footer-left">
          <span class="prifit-list-footer-text">当月收益：</span><span class="prifit-list-money">260.9</span><span class="prifit-list-footer-moneytext">元</span>
        </div>
        <div class="prifit-list-footer-right">
          <span class="prifit-list-footer-text">累积收益：</span><span class="prifit-list-money">260.9</span><span class="prifit-list-footer-moneytext">元</span>
        </div>
      </div>
      <div class="prifit-list-detail-link"><span class="prifit-list-detail-link-text">点击了解收益规则</span><div class="prifit-list-detail-link-pic"></div></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Bg from 'base/bg/bg'
  import $ from 'jquery'

  export default {
    data() {
      return {
        prifitList:[1,2,3,4,5,6,7,8]
      }
    },
    created(){

    },
    methods:{
      
    },
    filters:{
      isPic(index){
        if(index > 2){
          return index+1
        }else{
          return ""
        }
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./profit-list.styl"></style>