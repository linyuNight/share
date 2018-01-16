<template>
  <div class="my-share">
    <bg>
      <div class="empty-bg-bottom" v-if="isEmpty"></div>
    </bg>
    <div class="my-share-top" v-if="!isEmpty">
      <div class="my-share-top-left">
        <span class="my-share-top-text">总点击返现</span><span class="my-share-top-money">85</span><span class="my-share-top-moneytext">元</span>
      </div>
      <div class="my-share-top-right">
        <span class="my-share-top-text">总订单返现</span><span class="my-share-top-money">116</span><span class="my-share-top-moneytext">元</span>
      </div>
    </div>
    <div class="my-share-top-note" v-if="!isEmpty">
      <span>注：点击返现总额不能超过好友订单返现总额</span>
    </div>
    <div class="my-share-list" v-if="!isEmpty">
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-share-item">
        <div class="my-share-item-content">          
          <div class="my-share-item-left"></div>
          <div class="my-share-item-right">
            <div class="my-share-item-right-top">SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫SK-II 青春露（神仙水）窦靖童同款 限量版III 230毫</div>
            <div class="my-share-item-right-bottom">
              <div class="my-share-item-right-bottom-left">
                <span class="my-share-item-right-bottom-left-text">点击数</span><span class="my-share-item-right-bottom-left-num">300</span>
              </div>
              <div class="my-share-item-right-bottom-right">
                <span class="my-share-item-right-bottom-right-text">累计点击返现</span><span class="my-share-item-right-bottom-right-money">30元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="empty-page" v-if="isEmpty">
      <div class="empty-round"></div>
      <div class="empty-icon"></div>
      <div class="text-contain">        
        <p class="empty-text1">太低调了，还没有开始分享哦~</p>
        <p class="empty-text2">立马去分享，获得更多奖励</p>
      </div>
      <div class="link-btn">去分享</div>
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./my-share.styl"></style>