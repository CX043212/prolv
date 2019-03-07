<template>
	<div class="detailsbanner">
		<div class="swiper-container" >
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in pic">
					<!-- {{item}} -->
					<img :src="item.src">
					<p>跟团游</p>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.min.css';
	import Vuex from 'vuex';
	import axios from 'axios';
	import Swiper from 'swiper';
	export default {
		data(){
			return {
				pic: [{
						src: "https://pic5.40017.cn/02/001/35/a0/rBLkCFmwsA-Aca8EAAEDVQwpAg4321_600x300_00.jpg"
					},
					{
						src: "https://pic5.40017.cn/01/001/07/b9/rBANC1ugon6AClTGAAQ3jdXisSg248_600x300_00.jpg"
					},
					{
						src: "https://pic5.40017.cn/01/000/89/9c/rBLkBVtqT_qATJdfAAE5AzMdpgk459_600x300_00.jpg"
					},
					{
						src: "https://pic5.40017.cn/01/000/65/6b/rBANC1usNH-AGik2ABLf4NufUFk326_600x300_00.jpg"
					},
					{
						src: "https://pic5.40017.cn/01/001/88/99/rBLkBVtpSSGATKFwAAKghiPg5yg166_600x300_00.jpg"
					},
					{
						src: "https://pic5.40017.cn/02/000/7e/af/rBLkCVti9z6ANHjFAAHwUmlrKHU187_600x300_00.jpg"
					},
					{
						src: "https://pic5.40017.cn/02/000/7e/24/rBANDFti9z-ACphJAAJdUNcvOm4849_600x300_00.jpg"
					},
					{
						src: "https://pic3.40017.cn/line/admin/2015/06/26/18/7PXusV_600x300_00.jpg"
					},
					{
						src: "https://pic3.40017.cn/line/admin/2015/12/07/19/Ioon2G_600x300_00.jpg"
					},
				]

			}
		},
		created(){
			this.$nextTick(()=>{
				let swiper = new Swiper(".swiper-container",{
					direction: 'horizontal', // 垂直切换选项
					loop: true, // 循环模式选项
					autoplay: {
						disableOnInteraction: false
					},
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					},
				})
			})
			
		},
	}
</script>

<style lang="scss" scoped>
		.detailsbanner{
			width:100%;
			height:3.74rem;
			background:pink;
			.swiper-container{
				display:flex;
				width:100%;
				height:3.74rem;
				.swiper-wrapper{
					width:100%;
					height:3.74rem;
					display:flex;
					.swiper-slide{
						width:100%;
						height:3.74rem;
						position:relative;
						img{
							width:100%;
							height:100%;
							background:red;
						}
						p{
							position:absolute;
							font-size:.2rem;
							bottom:.4rem;
							color:#fff;
							left:.2rem;
						}
					}
				}
			}
		}
</style>
