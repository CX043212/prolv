<template>
	<div class="footerCenter">
		<ul>
			<li v-for="(item,index) in footerCenter">
				<a href="##">
					<img :src="item.pic">
					<p>{{item.name}}</p>
				</a>
			</li>
		</ul>
		<div class="footerBot">
			<a href="##">电脑版</a>
			<a href="##">简体中文</a>
			<a href="##">意见反馈</a>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Vuex from "vuex";
	export default{
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/footerCenter"
				// url:"http://localhost:3000/footerCenter"

			}).then((footerCenter)=>{
				 // console.log(this);
				this.handleFooterCenter(footerCenter)
			})
		},
		computed:{
			...Vuex.mapState({
				footerCenter:state=>state.home.footerCenter
			})
		},
		methods:{
			...Vuex.mapActions({
				handleFooterCenter:"home/handleFooterCenter"
			})
		}
	}
</script>

<style lang="scss">
	.footerCenter{
		width:100%;
		height:2.11rem;
		padding:.4rem 0 0 0;
		ul{
			width:100%;
			height:1.1rem;
			display:flex;
			justify-content: space-around;
			li{
				width:2.49rem;
				height:1.1rem;
				
				// float:left;
				a{
					display:block;
					width:2.49rem;
					height:1.1rem;
					display:flex;
					flex-direction:column;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.footerBot{
			width:100%;
			height:.66rem;
			padding:.3rem 0 0 0;
			text-align:center;
			a{
				color:#999;
				padding:0 .2rem 0 .3rem;
			}
		}
	}
</style>
