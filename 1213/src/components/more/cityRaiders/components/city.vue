<template>
	<div class="main-page" >
	

		<div class="left-con" >
		
			<div class="left-wrapper">
				<ul>	
					<li v-for="(item,index) in cityRaiders.list"><a :href="'#'+index">{{item.moduleName}}</a></li>
				</ul>
			</div>
		</div>
		
		<div class="right-con" v-for="(item,index) in cityRaiders.list" >
			<a :name="index">
			<div class="common-fixed" v-for="items in item.nodeList " >
				<div class="center">{{items.nodeName}}</div>
				
				<div class="city" v-for="data in items.cityList" > 
					<a @click="handleTo(data.cityId)">	
							<ul >
								<li><img v-lazy="data.imgUrl" alt=""></li>
							</ul>
							<ul>
								<li><p class="ft">{{data.cityName}}</p></li>
							<li>{{data.wentCount}}</li>
						</ul>
						
					</a>
				</div>
				
			</div></a>
		</div>

			
		
	
		
	</div>

</template>

<script>
	import Vuex from "vuex";
	
	export default {
		computed:{
			...Vuex.mapState({
				cityRaiders: state => state.home.cityRaiders,
				
			})
		},
		created() {
			setTimeout(()=>{
				this.handleHomeData();
			},3000)
			
		},
		methods: {
			...Vuex.mapActions({
				handleHomeData: "home/handleHomeData",
			}),
			handleTo(data){
				var i =4;
				this.$router.push({name:"loading",query:{data}})
			}
			
		},
		updated(){
			this.bus.$emit('loading', true);
			 
			// 关闭loading
			this.bus.$emit('loading', false);	
		}
	}
</script>

<style>
	.main-page {
		position: relative;
		max-width: 640px;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 8;
	}

	.left-con {
		position: fixed;
		top: 1px;
		left: 0;
		bottom: 0;
		width: 25%;
		background: #fff;
		overflow: hidden;
		
		
	}

	.left-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		
	}

	.left-con .selected {
		color: #23beae;
		font-size: 15px;
	}

	.left-con li {
		position: relative;
		height: 70px;
		line-height: 50px;
		color: #333;
		font-size: 23px;
		text-align: center;
		margin-top: 30px;
		
	}
	.city  .ft{
		word-wrap:break-word; 
		width: 126px;
	}
	.right-con {
    margin-left: 30%;
    background: #fff;
    min-height: 100%;
	background: #fff;
	width: 85%;
	z-index: 8;
}
.common-fixed, .last-read, .new-recommond {
    position: relative;
    height:50%;
    background: #fff;
}
.recommond-list {
    background: #fff;
    padding: 15px 0 1px 15px;
}
.city{
	display: flex;
	justify-content: space-around;
	
	margin-top: 20px;
	
	align-items: center;
}
.city ul{
	margin-right: 20px;
}
.common-fixed .city a{
	display: flex;
	justify-content: space-around;
	
	margin-top: 20px;
	
	align-items: center;
}
.center{
	height: 100px;
	line-height: 100px;
	padding-left: 30px;
	background: #edf0f5;
}
</style>
<!-- <div class="left-con">
			<div class="left-wrapper">
				<ul>
					<li  v-for="(item,index) in cityRaiders.list" >{{item.moduleName}}</li>
				</ul>
			</div>
		</div>
		<div class="right-con" >
				<div v-for="(item,index) in cityRaiders.list">
					<div class="common-fixed" v-for="items in item.nodeList ">
						<div class="center">{{items.nodeName}}</div>
					</div>
					<ul class="city" v-for="data in items.nodeList" > 
						<li v-for="ids in data.cityList">
							<ul>
								<li><img v-lazy="ids.imgUrl" alt=""></li>
							</ul>
							<ul>
								<li><p class="ft">{{ids.cityName}}</p></li>
								<li>{{ids.wentCount}}</li>
							</ul>
						</li>
					</ul>
				</div>		
		</div>	 -->