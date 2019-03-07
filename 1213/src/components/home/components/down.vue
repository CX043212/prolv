<template>
	<div class="down">
		<a href="##" v-for="(item,index) in down">
			<img :src="item.price">
		</a>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import axios from 'axios';
	export default{
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/down"
				// url:"http://localhost:3000/down"

			}).then((down)=>{
				// console.log(this);
				this.handleDown(down);
			})
		},
		computed:{
			...Vuex.mapState({
				down:state=>state.home.down
			})
		},
		methods:{
			...Vuex.mapActions({
				handleDown:"home/handleDown"
			})
		}
	}
</script>

<style lang="scss">
	.down{
		width:100%;
		height:1.8rem;
		background:green;
		margin-top:.20rem;
		a{
			width:100%;
			height:1.8rem;
			display:block;
			img{
				width:100%;
				height:100%;
			}
		}
	}
</style>
