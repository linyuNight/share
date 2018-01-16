<template>
  <div class="share">
    <bg></bg>
    <div class="share-top"></div>
    <div class="share-top-tab">
      <div class="share-top-tab-item" :class="{'share-top-tab-item-active':select==0}" @click="show(0)">
        <div class="share-top-tab-item-text">最新内容</div>
      </div>
      <div class="share-top-tab-item" :class="{'share-top-tab-item-active':select==1}" @click="show(1)">
        <div class="share-top-tab-item-text">奖励最多</div>
      </div>
      <div class="share-top-tab-item" :class="{'share-top-tab-item-active':select==2}" @click="show(2)">
        <div class="share-top-tab-item-text">最热分享</div>
      </div>
    </div>
    <div class="share-goods-list" v-show="select==0">
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic">
            <div class="share-goods-item-pic-new"></div>
          </div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">1sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数ds据我的世界sdfs fs s撒旦法撒旦法多少多少撒旦法撒大声地哦1</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right">立即分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic">
            <div class="share-goods-item-pic-new"></div>
          </div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right">立即分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic">
            <div class="share-goods-item-pic-new"></div>
          </div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right">立即分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic">
            <div class="share-goods-item-pic-new"></div>
          </div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right">立即分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic">
            <div class="share-goods-item-pic-new"></div>
          </div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right">立即分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic">
            <div class="share-goods-item-pic-new"></div>
          </div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right">立即分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="share-goods-list" v-show="select==1">
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦2</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">最高奖励 30元</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">最高奖励 30元</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">最高奖励 30元</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">最高奖励 30元</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="share-goods-list" v-show="select==2">
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">3sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦3</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-goods-item">
        <div class="share-goods-item-content">
          <div class="share-goods-item-pic"></div>
          <div class="share-goods-item-right">
            <div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>
            <div class="share-goods-item-right-bottom">
              <div class="share-goods-item-right-bottom-left">已有23人分享</div>
              <div class="share-goods-item-right-bottom-right-has">已分享</div>
            </div>
          </div>
        </div>
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
        isLoad: false
      }
    },
    created(){

    },
    mounted(){
      this.$nextTick(() => {
        var isLoad = false
        var that = this

        var scrollBottom =function(){
          window.onscroll = function(){
            var $this =$('html'),
            viewH =$this.height(),//可见高度
            contentH =$this.get(0).scrollHeight,//内容高度
            scrollTop =$this.scrollTop();//滚动高度
            if(contentH - viewH - scrollTop <= 10) { //到达底部100px时,加载新内容
            // 这里加载数据..
              if(!that.isLoad){
                // alert(1)
                // that.isLoad = true
                // for(var i=0;i<10;i++){
                //   var str = '<div class="share-goods-item">'
                //       str +=   '<div class="share-goods-item-content">'
                //       str +=     '<div class="share-goods-item-pic"></div>'
                //       str +=     '<div class="share-goods-item-right">'
                //       str +=       '<div class="share-goods-item-right-top">sdfk撒旦法接口生动风景都是觉得搜觉得搜发酸豆角发的搜集哦大数据我的世界哦</div>'
                //       str +=       '<div class="share-goods-item-right-bottom">'
                //       str +=         '<div class="share-goods-item-right-bottom-left">已有23人分享</div>'
                //       str +=         '<div class="share-goods-item-right-bottom-right-has">已分享</div>'
                //       str +=       '</div>'
                //       str +=     '</div>'
                //       str +=   '</div>'
                //       str += '</div>'
                //   $('.share-goods-list').eq(that.select).append(str)
                // }
                that.isLoad = false
              }
            }
          };
        }

        scrollBottom()
      })
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./share.styl"></style>