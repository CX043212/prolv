<template>
	<div>
		<section class="loadingbg" style="display: none;"><div class="loading"><img src="https://img1.40017.cn/touch//hb/c/2/img/icon_tg_loading1.gif" class="loadingimg"><p class="loading_text">努力加载中</p></div></section>
		<div  v-for="(item,index) in HotplayLists1.hotplay">
				<div class="themeBannerBox" ><img :src="item.trImgUrl" alt=""></div>
				<p class="themeContent" >{{item.trImgSubTitle}}</p>
				</div >
				<div  v-for="(item,index) in HotplayLists1.hotplay">
					<div class="themeContent module-b" v-for="data in item.topicProductInfo">
						<img :src="data.trmProductImgUrl" alt="">
						<p>
							<span>
								<strong>{{data.trmProductName}}</strong>
							</span>
							{{data.trmProductIntro}}
						</p>
						
					</div>
					<div class="bestProBox" v-for="ids in item.topicReferenceModuleInfoList">
						<p v-html="ids.tRMTextEdit"></p>
					</div>
				</div>
		</div>
		
	</div>
	
</template>

<script>
	import Vuex from "vuex";
	export default {
		created(){
			this.handle();
			console.log(this);
		},
		computed: {
			...Vuex.mapState({
				HotplayLists1:state=>state
			})
		},
		methods: {
			...Vuex.mapActions({
				handle:"hotplay/handleHotplay1",
				
			})
		},
	}
	
</script>

<style>
</style>
