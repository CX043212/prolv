<template>
	<div class="main">
		<div class="mainBox">
			<div class="mainBoxs" v-for="(item,index) in bannerList" @click="handleClickDetails(item)">
				<div class="mainPic">
					<img :src="item.picture">
					<p>{{item.city}}出发</p>
				</div>
				<div class="mainRight">
					<div class="mainRightTop">
						<p>{{item.productName}}{{item.subName}}</p>
						<div class="mainRightPrice">
							<i>￥</i>
							<em>{{item.price/100}}</em> 起/人
						</div>
						<div class="mainRightM">
							<b>{{item.commentCount}}条点评</b>
							<b>{{item.commentRate}}%满意</b>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		mounted(){
			console.log(this)
			this.handleBannerData()
		},
		computed:{
			...Vuex.mapState({
				bannerList:state=>state.home.bannerList,
			})
		},
		methods:{
			...Vuex.mapActions({
				handleBannerData:"home/handleBannerData"
			}),
			handleClickDetails(item){
				let productName = item.productName;
				let subName = item.subName;
				let price = item.price/100;
				this.$router.push({
					name:"mainDetails",
					query:{productName,subName,price}
				})
			}
		}
	}
</script>

<style lang="scss">
	.main{
		width:100%;
		height:12rem;
		background:#f7f7f7;
		// padding-top:2.08rem;
		.mainBox{
			width:100%;
			height:2.66rem;
			.mainBoxs{
				width:100%;
				height:2.66rem;
				background:#fff;
				padding:.22rem;
				display:flex;
				justify-content:space-between;
				.mainPic{
					width:2.1rem;
					height:2.1rem;
					position:relative;
					img{
						width:100%;
						height:100%;
					}
					p{
						width:2.1rem;
						height:.44rem;
						line-height:.44rem;
						background:#5c6a8d;
						position:absolute;
						bottom:0;
						color:#fff;
						text-align:center;
					}
				}
				.mainRight{
					width:4.8rem;
					height:2.32rem;
					.mainRightTop{
						width:4.8rem;
						height:1.36rem;
						p{
							font-size:.33rem;
							width:4.8rem;
							height:.78rem;
							overflow:hidden;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient:vertical;
							white-space:normal;
							text-overflow:ellipsis;

				
						}
						.mainRightPrice{
							width:4.8rem;
							height:.86rem;
							i{
								color:red;
							}
							em{
								font-size:.48rem;
								color:red;
								font-weight:600;
							}
						}
						.mainRightM{
							margin-top:.08rem;
							width:4.8rem;
							height:.4rem;
							color:#777;
						}
					}
				}
			}
		}
	}
</style>
