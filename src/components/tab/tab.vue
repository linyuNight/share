<template>
  <div class="tab" ref="tab">
    <router-link tag="div" class="tab-item" to="/share">
      <div class="tab-item-pic tab-item-pic1"></div>
      <div class="tab-item-text">分享内容</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/profitList">
      <div class="tab-item-pic tab-item-pic2"></div>
      <div class="tab-item-text">收益榜</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/userCenter">
      <div class="tab-item-pic tab-item-pic3"></div>
      <div class="tab-item-text">个人中心</div>
    </router-link>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import {isIOS} from 'huaji-platform'

  export default {
    data() {
      return {
        
      }
    },
    mounted(){
      if(isIOS()){
        this.$refs.tab.style.webkitBackdropFilter = "blur(14px)"
        this.$refs.tab.style.backdropFilter = "blur(14px)"
        this.$refs.tab.style.background = "rgba(255, 255, 255, 0.8)"
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./tab.styl"></style>