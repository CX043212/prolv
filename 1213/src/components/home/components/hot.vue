<template>
	<div class="hot">
		<h2>热门推荐</h2>
		<div class="hot-search">
			<ul>
				<li v-for="(item,index) in hot" @click="handleClickHotSe()">
					<a >
						{{item.name}}
					</a>
				</li>
			</ul>
		</div>
		<HotBottom-com/>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import axios from 'axios';
	import HotBottom from "./hotBottom.vue"
	export default{
		components:{
			"HotBottom-com":HotBottom
		},
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/hot"
				// url:"http://localhost:3000/hot"
			}).then((hot)=>{
				// console.log(this);
				this.handleHot(hot)
			})
		},
		computed:{
			...Vuex.mapState({
				hot:state=>state.home.hot
			})
		},
		methods:{
			...Vuex.mapActions({
				handleHot:"home/handleHot"
			}),
			handleClickHotSe(){
				this.$router.push("/bannerList")
			}
		}
	}
</script>

<style lang="scss">
	.hot{
		width:100%;
		height:8.94rem;
		margin-top:.2rem;
		padding-top:.37rem;
		
		background:#fff;
		h2{
			width:100%;
			height:.48rem;
			background:url(//pic5.40017.cn/01/000/5f/b5/rBLkBlqo1SmAXKh2AAATQxd5x9Q718.png) no-repeat 2.3rem -.8rem;
			text-align:center;
			color:#fb5300;
			font-size: .32667rem;
		}
		.hot-search{
			width:100%;
			height:2.2rem;
			padding:.4rem .1rem .2rem .3rem;
			ul{
				width:7.10rem;
				height:1.6rem;
				li{
					width:1.77rem;
					height:.8rem;
					float:left;
					a{
						font-size:.24rem;
						text-align:center;
						display:inline-block;
						width:1.57rem;
						height:.6rem;
						line-height:.6rem;
						background:#f4f4f4;
						border-radius:.6rem;
						font-weight:600;
					}
				}
			}
		}
	}
</style>
