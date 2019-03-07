<template>
	<div class="content">
		<div class="head">
			<h3>猜你喜欢</h3>
		</div>
		<div class="list">
				<ul >
					<li v-for="(item,index) in Likelist">
						<a href="" class="will-like-list">
							<div class="will_like_img">
								<img v-lazy="item.PictureUrl" alt="">
								<p><em>{{item.CommentCount}}点评</em>{{item.Satisfaction}}满意度</p>
							</div>
							<div class="will_like_info">
								<h2>{{item.Name}}</h2>
								<div class="details">
									<p>酒店距景点：{{item.DistanceToScenery}}km</p>
									<div class="price">
										<em>￥</em>
										<span>{{item.Pirce}}</span>起
									</div>	
								</div>
							</div>
						</a>
					</li>
				</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
	computed: {
		...Vuex.mapState({
			Likelist: state => state.zbx.LikeList.Body.LineList
		})
	},
	mounted(){
		this.handle5()
	},
	methods: {
		...Vuex.mapActions({
			handle5: "zbx/handleZbx"
		})
		
	},
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 15px 15px 0;
		background: #fff;
		box-sizing: border-box;
		li{
			margin: .3rem 0;
		.will-like-list{
			margin-bottom: 15px;
			.will_like_img {
				width: 100%;
				height: 3.96rem;
				position: relative;
				p {
				width: 100%;
				height: .6rem;
				line-height: .6rem;
				font-size: .24rem;
				color: #fff;
				background: rgba(0,0,0,.2);
				position: absolute;
				bottom: 0;
				left: 0;
				padding-left: .2rem;
				box-sizing: border-box;
					em{
						margin-right:.2rem;

					}
				}
				img{
					width: 100%;
					height: 100%

				}
			}
		}
		.will_like_info{
			h2{
				margin-top: .1rem;
				font-size: .3rem;
				color: #333;
				font-weight: 400;
				font-weight: 700;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				
			}
			.details{
					margin: .3rem 0;
					display: flex;
					justify-content: space-between;
					.price{
						span{
								font-weight: 700;
								font-size: .4rem;
								color: #ff5346;
						}
					}
					p{
						color: #999;
						font-size: .24rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
			}
		}
		
	}
	.head{
			padding: 0 10px;
			box-sizing: border-box;
			border-bottom: 1px solid #e4e4e4;
			line-height: .8rem;
			width: 100%;
			background: #fff;
			text-align: center
	
		}
}
</style>
