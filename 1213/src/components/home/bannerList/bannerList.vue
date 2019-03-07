<template>
	<div class="bannerList">
		<Header-com @handleClickFooter="toggle"/>
		<!-- <Main-com/> -->
		<Component :is="com"></Component>
	</div>
</template>

<script>
	import Header from "./components/header";
	import Main from "./components/main";
	import Group from "./components/group";
	import Free from "./components/free";
	import Ship from "./components/ship";

	import Vuex from 'vuex';
	import axios from 'axios';
	export default{
		components:{
			"Header-com":Header,
			"Main-com":Main,
			"Group-com":Group,
			"Free-com":Free,
			"Ship-com":Ship,

		},
		data(){
			return{
				com:"Main-com"
			}
		},
		methods:{
			toggle(params){
				switch(params){
					case 0: 
						this.com = "Main-com";
						break;
					case 1: 
						this.com = "Group-com";
						break;
					case 2: 
						this.com = "Free-com";
						break;
					case 3: 
						this.com = "Ship-com";
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
	.bannerList{
		width:100%;
		height:12rem;
		background:#cdcdcd;
	}
</style>
