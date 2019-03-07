<template>
	<div class="cartHesder">
		<div class="headerTop">
			<a href="##" @click="handleClickHotS()"></a>
			<h2>选择日期和人数</h2>
			<a href="##">
				<i class="iconfont" v-html="icon"></i>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				icon:"&#xe637;"
			}
		},
		methods:{
// 				let productName = item.productName;
// 				let subName = item.subName;
// 				let price = item.price/100;
// 				this.$router.push({
// 					name:"mainDetails",
// 					query:{productName,subName,price}
// 				})
				handleClickHotS(){
					this.$router.push("/bannerList")
				}
		}
	}
</script>

<style lang="scss">
	.cartHesder{
		width:100%;
		height:.96rem;
		background:red;
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
	}
</style>
