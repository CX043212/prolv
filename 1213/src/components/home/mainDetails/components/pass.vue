<template>
	<div class="path">
		<p>{{productName}}</p>
		<p>{{subName}}</p>
		<div class="price">
			<i>￥</i>
			<em>{{price}}</em> 起/人
		</div>
	</div>
</template>

<script>
	
	export default{
		created(){
			console.log(this.$route)
			let {productName,subName,price} = this.$route.query;
			this.productName = productName;
			this.subName = subName;
			this.price = price;

		}
	}
</script>

<style lang="scss">
	.path{
		width:100%;
		height:2.38rem;
		padding:.2rem .3rem 0 .3rem;
		background:#fff;
		p:nth-of-type(1){
			width:100%;
			height:.44rem;
			font-size:.35rem;
		}
		p:nth-of-type(2){
			width:100%;
			height:.8rem;
			color:#666;
			font-size:.3rem;
		}
		.price{
			width:100%;
			height:.7rem;
			margin-top:.24rem;
			i{
				color:red;
			}
			em{
				font-size:.48rem;
				color:red;
				font-weight:600;
			}
		}
	}
</style>
