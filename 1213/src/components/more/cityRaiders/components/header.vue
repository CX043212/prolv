<template>
	<div class="header" >
		
		
		
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		created(){
			this.handle();
			console.log(this);
		},
		computed: {
			...Vuex.mapState({
				HotplayList:state=>state.hotplay.HotplayList
			})
		},
		methods: {
			...Vuex.mapActions({
				handle:"hotplay/handleHotplay1",
			})
		},
	}
</script>
		
<style>
	.header .mint-header{
		height: 1rem;
	}
	.header .mint-header-title{
		font-size: .28rem;
		font-weight: 400;
	}
	
	
</style>
