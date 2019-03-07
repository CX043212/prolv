<template>
	<div class="time">
		<div class="timeTop">
			<h2></h2>
			<div class="time-Top">
				<div class="timePic" v-for="(item,index) in params">
					<img :src="item.pic">
				</div>
				<div class="timeRight" v-for="(item,index) in params">
					<h3>{{item.name}}</h3>
					<div class="timeRightBottom">
						<span>{{item.price}}</span>
						<span>{{item.num}}</span>
						<span>{{item.priceNum}}</span>
						<span>{{item.timeNum}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="timeBottom" >
			<ul>
				<li  v-for="(item,index) in params">
					<a href="##">
						<div class="timeSpan">
							<h3>{{item.timeJing[0]}}</h3>
							<p>{{item.timePlus[0]}}</p>
						</div>
						<div class="timeBottomPic">
							<img :src="item.plus[0]">
						</div>
					</a>
				</li>
				<li  v-for="(item,index) in params">
					<a href="##">
						<div class="timeSpan">
							<h3>{{item.timeJing[1]}}</h3>
							<p>{{item.timePlus[1]}}</p>
						</div>
						<div class="timeBottomPic">
							<img :src="item.plus[1]">
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import axios from 'axios';
	export default{
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/time",
				// url:"http://localhost:3000/time",
			}).then((params)=>{
				// console.log(this);
				this.handleTime(params);
			})
		},
		computed:{
			...Vuex.mapState({
				params:state=>state.home.time
			})
		},
		methods:{
			...Vuex.mapActions({
				handleTime:"home/handleTime"
			})
		}
	}
</script>

<style lang="scss">
	.time{
		width:100%;
		height:4.81rem;
		margin-top:.2rem;
		background:#fff;
		.timeTop{
			width:100%;
			height:3.31rem;
			padding:.3rem;
			h2{
				width:6.9rem;
				height:.45rem;
				background:url(//pic5.40017.cn/01/000/5f/b5/rBLkBlqo1SmAXKh2AAATQxd5x9Q718.png) no-repeat -.2rem -.2rem;
			}
			.time-Top{
				width:6.9rem;
				height:2rem;
				margin-top:.4rem;
				display:flex;
				justify-content: space-between;
				.timePic{
					width:2.4839rem;
					height:2rem;
					img{
						width:100%;
						height:100%;
					}
				}
				.timeRight{
					width:4.14rem;
					height:2rem;
					position:relative;
					h3{
						font-size:.3rem;
						height:.74rem;
						width:4.14rem;
						overflow:hidden;
						line-height:.4rem;
						text-overflow:ellipsis;
					}
					.timeRightBottom{
						width:4.14rem;
						height:.48rem;
						position:absolute;
						left:0;
						bottom:0;
						span:nth-of-type(1){
							font-size:.32rem;
							color:red;
						}
						span:nth-of-type(2){
							font-size:.37rem;
							color:red;
						}
						span:nth-of-type(3){
							font-size:.3rem;
						}
						span:nth-of-type(4){
							position:absolute;
							right:.1rem;
							bottom:.1rem;
							font-size:.2rem;
						}
					}
				}
			}
		}
		.timeBottom{
			width:100%;
			height:1.5rem;
			ul{
				width:100%;
				height:1.5rem;
				display:flex;
				li{
					width:3.75rem;
					height:1.5rem;
					a{
						width:3.75rem;
						height:1.50rem;
						display:block;
						padding:.2rem .3rem;
						position:relative;
						.timeSpan{
							width:3.15rem;
							height:.77rem;
							h3{
								width:3.15rem;
								height:.39rem;
								line-height:.5rem;
							}
							p{
								width:1.25rem;
								height:.29rem;
								text-align: center;
								border:1px solid orange;
								border-radius:.2rem;
								margin-top:.1rem;
							}
						}
						.timeBottomPic{
							position:absolute;
							width:1.1rem;
							height:1.1rem;
							top:.2rem;
							right:0;
							img{
								width:100%;
								height:100%;
							}
						}
					}
				}
			}
		}
	}
</style>
