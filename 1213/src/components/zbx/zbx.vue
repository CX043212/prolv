<template>
	<div class="zbx">
		<div class="loading"></div>
		<Header-com></Header-com>
		<Banner-com ref="hand"></Banner-com>
		<Hot-com ref="hand"></Hot-com>
		<Sale-com ref="hand"></Sale-com>
		<Tabbar-com ref="hand"></Tabbar-com>
		<List-com ref="hand"></List-com>
		
	</div>
</template>

<script>
	import Vuex from "vuex";
	import Header from "./components/header.vue";
	import Banner from "./components/banner.vue";
	import Hot from "./components/hot.vue";
	import Sale from "./components/sale.vue";
	import Tabbar from "./components/tabbar.vue";
	import List from "./components/list.vue";
	import {ZbxData} from "../../apis/home";
	export default {
		components:{
			"Header-com":Header,
			"Banner-com":Banner,
			"Hot-com":Hot,
			"Sale-com":Sale,
			"Tabbar-com":Tabbar,
			"List-com":List
		},
		created(){
			this.$refs.hand.handle;
			
		},
		methods:{
			...Vuex.mapActions({
				handle1:"zbx/handleZbx"
			})
		},

    
}

	
</script>

<style>
	.zbx{
		height: 100%;
		background: #fff;
	}
	.loading{
		background: url("../../../static/loading.gif");
	}	
</style>
