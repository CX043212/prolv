<template>
	<div class="headerB">
		<div class="headerTop">
			<a href="##" @click="handleClickHotS()"></a>
			<h2>曼谷</h2>
			<a href="##">
				<i class="iconfont" v-html="icon"></i>
			</a>
		</div>
		<div class="headerBottom">
			<div class="headerBotList">
				<a href="##" v-for="(item,index) in list" @click="handleClickFooter(index)">
					<span>{{item.nameF}}</span>
					<i class="iconfont" v-html="item.iconf"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				icon:"&#xe637;",
				name:"目的地、船队或关键词",
				list:[
					{
						nameF:"热门推荐",
						iconf:"&#xe638;"
					},
					{
						nameF:"跟团游",
						iconf:"&#xe638;"
					},
					{
						nameF:"自由行",
						iconf:"&#xe638;"
					},
					{
						nameF:"游轮",
						iconf:"&#xe638;"
					}
				]
				
			}
		},
		methods:{
			handleClickHotS(){
				this.$router.push("/home")
			},
			handleClickFooter(index){
				this.$emit("handleClickFooter",index)
			}
		}
	}
</script>

<style lang="scss">
	.headerB{
		width:100%;
		height:1.94rem;
// 		position:fixed;
// 		top:0;
// 		left:0;
		.headerTop{
			width:100%;
			height:.96rem;
			background:#f7f7f7;
			display:flex;
			justify-content:space-around;
			align-items: center;
			a:nth-of-type(1){
				display:block;
				width:.36rem;
				height:.3rem;
				margin:0 .4rem;
				background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARFJREFUeNrM1z0KwkAQhuFNjKWn8AqCjZATCBaKoiew9CZ2YmHnD1rYCBYW3sBG8CSCFiL6LWwghMkmxjCzA2+R7gFNdsern/eqwPTRGLXRXZU4fkHMCoXoiGqSoAhTMc8tdECeBCiJ0fNGM/QpCxT8iRmiHfdPxobJA2LFZIEG3BgbSGOW3Jg0kBiGAolikiBxTBzkBCYChQRGmeet+QqzpUEjAiM2GnRVDo1vDscJeroC0n/eKeoQqBfqmesFS/HX/kSgqmiNutyvvTMo6uhIQ204UGmHK4UKOFC264cIKuuCxo7Kc4VlReXdOthQv6xBNlRDalGkUAt0kVylI9QDzc2Oz74oUqgmupWJ0fMVYAD4j3BF0ySikQAAAABJRU5ErkJggg==) no-repeat;
			}
			h2{
				width:100%;
				height:.88rem;
				text-align:center;
				line-height:.88rem;
			}
			a:nth-of-type(2){
				display:block;
				width:.88rem;
				height:.88rem;
				i{
					font-size:.8rem;
					color:#23beae;
				}
			}
		}
		.headerBottom{
			width:100%;
			height:.98rem;
			background:#fff;
			.headerBotList{
				width:100%;
				height:.94rem;
				padding:.26rem 0;
				a{
					display:inline-block;
					width:1.87rem;
					height:.42rem;
					line-height:.42rem;
					font-size:.28rem;
					color:#666;
					text-align:center;
					border-right:1px solid #cdcdcd;
				}
			}
		}
	}
</style>
