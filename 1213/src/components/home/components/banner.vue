<template>
	<div class="banner">
		<div class="swiper-container" ref="bannerContainer">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in data">
					<img :src="item.src" >
					<p style="color:item.color">{{item.name}}</p>
					<p>{{item.title}}</p>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination" ></div>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.min.css';
	import Vuex from 'vuex';
	import axios from 'axios';
	import Swiper from 'swiper';
	export default {
		computed: {
			...Vuex.mapState({
				data:state=>state.home.banner,
			}),
		},
		updated(){
			let swiper = new Swiper(this.$refs.bannerContainer,{
				direction: 'horizontal', // 垂直切换选项
				loop: true, // 循环模式选项
				autoplay:{
					disableOnInteraction: false
				},
				// 如果需要分页器
				pagination: {
				  el: '.swiper-pagination',
				},
			})
		},
		
	}
</script>

<style lang="scss">
	.banner{
		width:100%;
		height:1.9rem;
		background:pink;
		
			
		.swiper-container{
			display:flex;
			width:100%;
			height:1.9rem;
			.swiper-wrapper{
				width:100%;
				height:1.9rem;
				display:flex;
				.swiper-slide{
					width:100%;
					height:1.9rem;
					position:relative;
					p:nth-of-type(1){
						position:absolute;
						font-size:.5rem;
						top:.5rem;
						left:2.5rem;
						// color:#fff;
					}
					p:nth-of-type(2){
						position:absolute;
						font-size:.2rem;
						top:1rem;
						left:2rem;
						// color:#fff;
						margin-top:.1rem;
					}
				}
			}
			
		}
	}
</style>
