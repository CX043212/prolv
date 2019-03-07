<template>
	<div class="month">
		<div class="monthN">
			<p>3月</p>
			<p>￥3299起</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.month{
		width:100%;
		height:1rem;
		background:pink;
		.monthN{
			width:2.32rem;
			height:1rem;
			padding-left:.32rem;
			
			p:nth-of-type(1){
				display:inline-block;
				margin-top:.2rem;
				color:green;
				font-size:.35rem;
			}
			p:nth-of-type(2){
				display:block;
				color:green;
				font-size:.3rem;
			}
		}
	}
</style>
