<template>
	<div class="local">
		<Header-com></Header-com>
		<List-com></List-com>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import Header from "./components/header.vue";
	import List from "./components/list.vue";

	export default {
		components:{
			"Header-com":Header,
			"List-com":List
		},
		created(){
			this.handle();
			console.log(this)
		},
		methods:{
			...Vuex.mapActions({
				handle:"zbx/handleLocal"
			})
		}
		
		
	}
</script>

<style>
	.local{
		height: 100%;
		background: #fff;
	}
</style>
