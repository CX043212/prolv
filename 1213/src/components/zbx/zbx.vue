<template>
	<div class="zbx">
		<div class="loading"></div>
		<Header-com></Header-com>
		<Banner-com></Banner-com>
		<Hot-com></Hot-com>
		<Sale-com></Sale-com>
		<Tabbar-com></Tabbar-com>
		<List-com></List-com>
		
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
			this.$nextTick(function(){
				this.handle1();
				console.log(this)
			})
			
		},
		methods:{
			...Vuex.mapActions({
				handle1:"zbx/handleZbx"
			})
		}	
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
