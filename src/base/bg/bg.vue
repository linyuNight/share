<template>
  <div class="bg">
  	<slot></slot>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import qs from "qs";
import { url, urlapi } from "api/config";
import $ from 'jquery';

export default {
	mounted(){
		$('body,html').animate({ scrollTop: 0 },0);
	}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./bg.styl"></style>