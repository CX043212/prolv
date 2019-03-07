<template>
	<div>
		<div class="header">
			<mt-header  title="trTitle" >
		  <mt-button v-link="'/home.vue'" icon="back" slot="left" @click="handleClick()"></mt-button>
		  <mt-button icon="share" slot="right">分享</mt-button>
		</mt-header>
		</div>
		
		<div class="center">
			<section class="loadingbg" style="display: none;">
				<div class="loading">
					<img src="https://img1.40017.cn/touch//hb/c/2/img/icon_tg_loading1.gif" class="loadingimg"><p class="loading_text">努力加载中</p>
				</div>
			</section>
				<div class="themeBannerBox"  v-for="(item,index) in HotplayLists1">
					<img :src="item.trImgUrl" alt="">
					<p class="themeContent" >{{item.trImgSubTitle}}</p>
				</div>
				<div  v-for="(item,index) in HotplayLists1">
					<!-- <div class="themeContent module-b" v-for="data in item.topicProductInfo">
						<img :src="data.trmProductImgUrl" alt="">
						<p>
							<span>
								<strong>{{data.trmProductName}}</strong>
							</span>
							{{data.trmProductIntro}}
						</p>
					</div> -->
					<div class="bestProBox" v-for="ids in item.topicReferenceModuleInfoList">
						<p v-html="ids.tRMTextEdit"></p>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
	
</template>

<script>
	import Vuex from "vuex";
	import Header from "../header";
	export default {
		components:{
			"Header-com":Header,
		
		},
		created(){
			this.handle();
			console.log(this);
		},
		computed: {
			...Vuex.mapState({
				HotplayLists1:state=>state.hotplay
			})
		},
		methods: {
			...Vuex.mapActions({
				handle:"hotplay/handleHotplay1",
			}),
			 handleClick(){
			    this.$router.push("/home")
			}
		},
	}
	
</script>

<style>
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
</style>

