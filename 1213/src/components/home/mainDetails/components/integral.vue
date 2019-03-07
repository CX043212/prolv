<template>
	<div class="integral">
		<div class="integralN">
			<div class="integralT">
				<em>积分抵扣</em>
				<span>50积分抵扣50</span>
			</div>
			<div class="integralB">
				同城红包
			</div>
			<i class="iconfont" v-html="icon"></i>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				icon:"&#xe601;"
			}
		}
	}
</script>

<style lang="scss">
	.integral{
		width:100%;
		height:1.52rem;
		background:pink;
		margin-top:.2rem;
		.integralN{
			width:100%;
			height:1.52rem;
			padding:0 0 .2rem .3rem;
			position:relative;
			.integralT{
				width:7.2rem;
				height:.56rem;
				em{
					margin-top:.16rem;
					display:inline-block;
					width:1.2rem;
					height:.39rem;
					background:orange;
					color:#fff;
				}
				span{
					margin-top:.16rem;
					display:inline-block;
					width:1.56rem;
					height:.28rem;
				}
			}
			.integralB{
				width:1.16rem;
				height:.36rem;
				margin-top:.2rem;
				padding:.04rem .08rem;
				border:1px solid #ff6d4f;
				color:#ff6d4f;
			}
			i{
				position:absolute;
				font-size:.3rem;
				top:.5rem;
				right:.3rem;
			}
		}
	}
</style>
