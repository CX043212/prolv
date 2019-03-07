<template>
		<div>
			<div class="header" >
				<mt-header :title="moreDetails.body.cityName">
			  <mt-button v-link="'/home.vue'" icon="back" slot="left" @click="handleClick()"></mt-button>
			  <mt-button icon="share" slot="right">分享</mt-button>
			</mt-header>
			</div>

			<div class="center">
					<div class="details" v-for="(item,index) in moreDetails">
						<a v-for="data in item.pocketTopicModuleList">
							<a v-for="idas in data.pocketTopicModuleDetailList">
								<h2 v-html="idas.detailName"></h2>
								<p v-html="idas.detailIntro"></p>
								<div class="pic" v-for="pic in idas.pocketTopicImgList">
									<img :src="pic.imgurl" alt="">
								<!-- 	//<img :src="pic.imgurlOrigin" alt=""> -->

								</div>
							</a>
						</a>		
					</div >			
			</div>
			<div class="sx"><span @click="handleTo()">刷新</span></div>
		</div>
</template>

<script>
	import Vuex from "vuex";
	import Header from "./header";

	export default {
		components:{
			"Header-com":Header,
		},
		
		computed: {
			...Vuex.mapState({
				moreDetails:state=>state.hotplay.moreDetails.response
			})
		},
		methods: {
			...Vuex.mapActions({
				handle:"hotplay/handleCity1",
			}),
			 handleClick(){
			    this.$router.push("/more/cityRaiders")
			},
			handleTo(){
				this.$router.push({"name":"loading",query:{}});
			}
		},
	}
	
</script>

<style lang="scss" scoped>
	
	.header {
			padding: 0;
			height: .8rem;

		}
		.header .mint-header{
			height: .8rem;
			width: 100%;
			
		}
		.center{
			padding: .1rem .6rem;
		}
		.center {
			
			width: 100%;
		}
		.header .mint-header-title{
			font-size: .28rem;
			font-weight: 400;
			
		}
		.center .module-b {
	    margin-bottom: 0;
	    padding: 0 15px;
	}
	.details{
		
		padding: .2rem .4rem;
		h2{
			color: #23beae;
		}
		p{
			text-indent: 40px;
		}
	}
	.pic{
		width: 550px;
		//height: 320px;
		img{
			width: 100%;
			height: 100%;
			margin: 20px;
		}
	}
	.sx{
		position: absolute;
		border-radius:.9rem; 
		width: 1.1rem;
		height: 1.1rem;
		background: #a28b8b5c;
		bottom: 30px;
		right: 50px;
		text-align: center;
		line-height: 1.1rem;
	}
</style>