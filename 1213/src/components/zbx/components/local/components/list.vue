<template>
	<div class="content">
		
		<div class="head">
			<h3><p>出游日期</p><p>酒景距离近</p><p>今日可订</p></h3>
		</div>
		<div class="list">
			 <div class="wrapper tabWrapper" ref="bscroll">
				 <div class="contentWrapper">
				<ul @click="handelClick()">
					
					<li v-for="(item,index) in Likelist" >
						<a href="" >
							<div class="left">
								<img :src="item.Pic3PathUrl" alt="">
							</div>
							<div class="right">
								<h2>{{item.MainTitle}}</h2>
								<div class="details">
									<span>🤔{{item.PkgMinPrice/100}}起</span>
									<p><i>{{item.CmtCount}}点评</i>{{parseInt(item.FavRate/100)}}满意度</p>
								</div>
							</div>
						</a>
					</li>
				</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	import Vuex from "vuex";
	export default{
	computed: {
		...Vuex.mapState({
			Likelist: state => state.zbx.Locallist.Body.LineInfoList
		})
	},
	created() {
		this.handle()
	},
	methods: {
		...Vuex.mapActions({
			handle: "zbx/handleZbx"
		}),
		handelClick(){
		   // let LineId = item.LineId;
		    this.$router.push("/details")
		}
		
	},
}
</script>

<style lang="scss" scoped>
	.head{
		display: flex;
		justify-content: space-around;
		background: #c4c4c4;
		height: .8rem;
		padding: 0.15rem .02rem;
		p{
			display: inline-block;
			background: #fff;
			border-radius: 10px;
			padding: .1rem .1rem;
			margin-left: 30px;
		}
	}
	.list{
		padding: 5px 0 50px 10px;
		box-sizing: border-box;
		background: #fff;
		li{
			border-bottom: 1px solid #e4e4e4;
			margin: 10px 0 0;
			padding-bottom: 7px;
			display: flex;
			height: 2.4rem;
			justify-content: space-between;
			align-items: center;
			.left{
				height: 100%;
				width: 30%;
				float: left;
				img{
					width: 125%;
					height:100%
				}
			}
			.right{
				float: right;
				width: 60%;
				h2{
					font-size:.3rem;
					color: #202325;
					font-weight: 400;
					overflow: hidden;
					font-weight: 700;
				}
				.details{
					margin-top: .3rem;
					display: flex;
					justify-content: space-between
				}
			}
		}
	}
		
</style>