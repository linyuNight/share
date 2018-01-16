<template>
  <transition name="fade">
    <div class="main-mask" v-show="count">
      <div class="main-mask-contain">
        <div class="main-mask-content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">

  export default {
    computed: {
      count () {
        return this.$store.state.isShowMask
      },
      content() {
        return this.$store.state.maskContent
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./main-mask.styl"></style>