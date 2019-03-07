<template>
	<div id="homePage">
		<div class="operation">
			<div class="operation-left">
				<a href=""><!-- {{ saleList.ShoppingSpree['0'].NowTime}} -->
					<div class="top">
						<span>限时抢购
							<!-- <img src="saleList.ShoppingSpree['0']" alt=""> -->
						</span>
					</div>
					<div class="middle">
						<img :src="saleList.ShoppingSpree['0'].PictureUrl" alt="">
						<p>{{saleList.ShoppingSpree['0'].Name}}</p>
					</div>
					<div class="bottom">
						<p class="left">限量{{saleList.ShoppingSpree['0'].Part}}份</p>
						<div class="right">
							<em>￥</em>
							<span>{{saleList.ShoppingSpree['0'].Pirce}}起</span>
						</div>
					</div>
				</a>
			</div>
			<div class="operation-right" >
				<div class="rightitem" v-for="(item,index) in saleList2">
						<!-- <a href="" > -->
							<div class="left">
								<h2>{{item.TypeName}}</h2>
								<p>{{item.Description}}</p>
							</div>
							<div class="right">
								<img :src="item.AbsolutePicAddress" alt="">
							</div>	
					<!-- 	</a> -->
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				saleList: state => state.zbx.saleList.Body,
				saleList2: state => state.zbx.saleList2.Body.AreaMarkList,

			})
		},
		methods: {
			...Vuex.mapActions({
				handle: "zbx/handleZbx"
			})
		},
	
	}
</script>

<style lang="scss" >
	.operation {
		display: flex;
		background: #fff;
		border-bottom: 10px solid #edf0f5;
		height: 3rem;
		width: 100%;
		.operation-left {
			width: 50%;
			height: 2.9rem;
			color: red;
			border: .03rem solid #e4e4e4;
			a{
				margin: 0;
				border: 0;
				list-style: none;
				font-style: normal;
				text-decoration: none;
				font-weight: 400;
				box-sizing: border-box;	
				font-size: .24rem;
			 padding: .32rem .16rem .4rem;
			.middle{
				display: flex;
				font-size: 30px;
				height: 1.2rem;
				overflow: hidden;
				img{
					display: block;
					width: 1rem;
					height: 1rem;
					margin-right: 8px;
					flex: none;
				}
				p{
					overflow: hidden;
					font-size:.34rem; 
					color: black
				}
			}	
			
			.bottom{
				display: flex;
				justify-content: space-between;
				margin-bottom: 0rem;
				height: .6rem;
				line-height: .6rem;
				.left{
					margin: 0;
				}
			}
			.top{
				height: .6rem;
				line-height: .6rem;
			}
		
		}
			
	}
	.operation-right {
			width: 50%;
			height: 2.9rem;
			float: left;
			.rightitem{
				display: flex;
				justify-content: space-around;
				border-bottom: 1px solid #e4e4e4;
				.left{
					float: left;
					align-items: center;
					height: 110px;
					display: flex;
					margin-top: 43px;
					flex-direction: column;
					margin-left: .2rem;
				}
				 .right{
					   float: right;
					 
					   img{
					   	width: 70%;
					   	height: 80%;
					   }
				}
					
			}	  
		}
	} 
    
  
	
</style>
