<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <!-- <transition :name="direction" mode="out-in"> -->
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
      <tab></tab>
    <!-- </transition> -->
    <main-mask></main-mask>
  </div>
</template>

<script type="text/javascript">
  import MainMask from 'components/main-mask/main-mask'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MainMask,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app{
    width:100%;
    height:100%;
  }
</style>