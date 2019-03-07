<template>
	<div class="footerTop">
		<ul>
			<li v-for="(item,index) in footerTop">
				<i></i>
				<p>{{item.name}}</p>
				<span>{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import axios from 'axios';
	export default{
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/footerTop"
				// url:"http://localhost:3000/footerTop"

			}).then((footerTop)=>{
				// console.log(this);
				this.handleFooterTop(footerTop)
			})
		},
		computed:{
			...Vuex.mapState({
				footerTop:state=>state.home.footerTop
			})
		},
		methods:{
			...Vuex.mapActions({
				handleFooterTop:"home/handleFooterTop"
			})
		}
	}
</script>

<style lang="scss">
	.footerTop{
		width:100%;
		height:5.72rem;
		margin-top:.2rem;
		background:#fff;
		ul{
			width:100%;
			height:5.72rem;
			padding:.5rem 0 .5rem .6rem;
			li{
				color:#9f8a70;
				width:6.9rem;
				height:.77rem;
				background:#fff;
				margin-top:.55rem;
				i:nth-of-type(1){
					display:block;
					width:.63rem;
					height:.63rem;
					background:url(https://pic5.40017.cn/01/000/5f/b5/rBLkBlqo1SmAXKh2AAATQxd5x9Q718.png) no-repeat -.1rem -1.4rem;
					float:left;
				}
// 				i:nth-of-type(2){
// 					background:url(https://pic5.40017.cn/01/000/5f/b5/rBLkBlqo1SmAXKh2AAATQxd5x9Q718.png) no-repeat -.7rem -1.4rem;
// 				}
				p{
					margin-left:1rem;
					width:5.9rem;
					height:.41rem;
					font-size:.3rem;
				}
				span{
					display:block;
					width:6rem;
					height:.22rem;
					margin-left:1rem;
					font-size:.2rem;
					margin-top:.05rem;
				}
			}
			li:nth-of-type(1){
				margin-top:0;
			}
		}
	}
</style>
