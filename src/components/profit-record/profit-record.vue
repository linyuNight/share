<template>
  <div class="profit-record">
    <bg>
      <div class="empty-bg-bottom" v-show="isShow"></div>
    </bg>
    <div class="profit-record-top">
      <div class="profit-record-top-left">
        <div class="profit-record-top-left-money">108.6</div>
        <div class="profit-record-top-left-text">实际收益(元)</div>
      </div>
      <div class="profit-record-top-right">
        <div class="profit-record-top-right-money">260.6</div>
        <div class="profit-record-top-right-text">预计收益(元)</div>
      </div>
    </div>
    <div class="profit-record-tab">
      <div class="profit-record-tab-item" :class="{'profit-record-tab-item-active':select==0}" @click="setSelect(0)">
        <div class="profit-record-tab-item-text">订单返现</div>
      </div>
      <div class="profit-record-tab-item" :class="{'profit-record-tab-item-active':select==1}" @click="setSelect(1)">
        <div class="profit-record-tab-item-text">点击返现</div>
      </div>
      <div class="profit-record-tab-item" :class="{'profit-record-tab-item-active':select==2}" @click="setSelect(2)">
        <div class="profit-record-tab-item-text">系统奖励</div>
      </div>
    </div>
    <div class="order-refrun-list" v-show="select==0" v-if="!isEmpty[0]">
      <div class="order-refrun-item">
        <div class="order-refrun-item-top">
          <div class="order-refrun-item-top-left">好友购物返现</div>
          <div class="order-refrun-item-top-right">未结算</div>
        </div>
        <div class="order-refrun-item-bottom">
          <div class="order-refrun-item-bottom-top">
            <div class="order-refrun-item-bottom-top-left">
              <span class="order-text">订单金额</span><span class="order-money">1623</span><span class="order-moneytext">元</span>
            </div>
            <div class="order-refrun-item-bottom-top-right">
              <span class="order-text">下单时间</span><span class="order-time">2017-12-25</span>
            </div>
          </div>
          <div class="order-refrun-item-bottom-bottom">
            <div class="order-refrun-item-bottom-bottom-left">
              <span class="order-text">预计收益(5%)</span><span class="order-money">62</span><span class="order-moneytext">元</span>
            </div>
            <div class="order-refrun-item-bottom-bottom-right">
              <span class="order-text">实际收益</span><span class="order-money">62</span><span class="order-moneytext">元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="order-refrun-item">
        <div class="order-refrun-item-top">
          <div class="order-refrun-item-top-left">好友购物返现</div>
          <div class="order-refrun-item-top-right">已结算</div>
        </div>
        <div class="order-refrun-item-bottom">
          <div class="order-refrun-item-bottom-top">
            <div class="order-refrun-item-bottom-top-left">
              <span class="order-text">订单金额</span><span class="order-money">1623</span><span class="order-moneytext">元</span>
            </div>
            <div class="order-refrun-item-bottom-top-right">
              <span class="order-text">下单时间</span><span class="order-time">2017-12-25</span>
            </div>
          </div>
          <div class="order-refrun-item-bottom-bottom">
            <div class="order-refrun-item-bottom-bottom-left">
              <span class="order-text">预计收益(5%)</span><span class="order-money">62</span><span class="order-moneytext">元</span>
            </div>
            <div class="order-refrun-item-bottom-bottom-right">
              <span class="order-text">实际收益</span><span class="order-money">62</span><span class="order-moneytext">元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="order-refrun-item order-refrun-item-disable">
        <div class="order-refrun-item-top">
          <div class="order-refrun-item-top-left">好友购物返现</div>
          <div class="order-refrun-item-top-right">已失效</div>
        </div>
        <div class="order-refrun-item-bottom">
          <div class="order-refrun-item-bottom-top">
            <div class="order-refrun-item-bottom-top-left">
              <span class="order-text">订单金额</span><span class="order-money">1623</span><span class="order-moneytext">元</span>
            </div>
            <div class="order-refrun-item-bottom-top-right">
              <span class="order-text">下单时间</span><span class="order-time">2017-12-25</span>
            </div>
          </div>
          <div class="order-refrun-item-bottom-bottom">
            <div class="order-refrun-item-bottom-bottom-left">
              <span class="order-text">预计收益(5%)</span><span class="order-money">62</span><span class="order-moneytext">元</span>
            </div>
            <div class="order-refrun-item-bottom-bottom-right">
              <span class="order-text">实际收益</span><span class="order-money">62</span><span class="order-moneytext">元</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="click-refurn-list" v-show="select==1" v-if="!isEmpty[1]">
      <div class="click-refurn-item" v-for="clickRefurn in clickRefurnList">
        <div class="click-refurn-item-left">点击返现</div>
        <div class="click-refurn-item-center">
          <span class="click-refurn-item-left">返现金额</span><span class="click-refurn-item-money">62</span><span class="click-refurn-item-right">元</span>
        </div>
        <div class="click-refurn-item-right">2017-12-25</div>
      </div>

    </div>

    <div class="click-refurn-list" v-show="select==2" v-if="!isEmpty[2]">
      <div class="click-refurn-item">
        <div class="click-refurn-item-left">促销奖励</div>
        <div class="click-refurn-item-center">
          <span class="click-refurn-item-left">奖励金额</span><span class="click-refurn-item-money">62</span><span class="click-refurn-item-right">元</span>
        </div>
        <div class="click-refurn-item-right">2017-12-25</div>
      </div>
      <div class="click-refurn-item">
        <div class="click-refurn-item-left">注册奖励</div>
        <div class="click-refurn-item-center">
          <span class="click-refurn-item-left">奖励金额</span><span class="click-refurn-item-money">62000</span><span class="click-refurn-item-right">元</span>
        </div>
        <div class="click-refurn-item-right">2017-12-25</div>
      </div>

    </div>
    <div class="empty-page" v-show="isShow">
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
  import $ from 'jquery'

  export default {
    data() {
      return {
        select: 0,
        clickRefurnList: [1,2,3,4,5,6,7,8,9,10,11,12,13],
        isEmpty:[false,true,false],
        isShow:false,
      }
    },
    created(){
      
    },
    methods:{
      setSelect(i){
        this.select = i,
        this.isShow = this.isEmpty[i]
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./profit-record.styl"></style>