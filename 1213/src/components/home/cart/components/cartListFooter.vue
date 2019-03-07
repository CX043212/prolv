<template>
	<div class="cartListFooter">
		<div class="bottom">
			<div class="zong">总价</div>
			<div class="btn">结算</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.cartListFooter{
		width:100%;
		height:1.08rem;
		background:pink;
		position:fixed;
		bottom:0;
		.bottom{
			width:100%;
			height:1.08rem;
			display:flex;
			justify-content:space-between;
			align-items: center;
			bottom:0;
			.zong{
				width:3.18rem;
				height:.46rem;
				background:yellow;
				line-height:.46rem;
				text-align:center;
				color:red;
			}
			.btn{
				width:2.7rem;
				height:.8rem;
				background:orange;
				line-height:.8rem;
				text-align:center;
				color:#fff;
				font-size:.4rem;
			}
		}
	}
</style>
