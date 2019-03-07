<template>
	<div class="goods">
		<div class="goodsBox">
			<div class="goodsItem" v-for="(item,index) in goodsList">
				<div class="goodsInfo">
					<p>{{item.name}}</p>
				</div>
				<div class="price"><i>￥{{item.price}}</i>/人</div>
				<div class="count">
					<button @click="handleReduce(index)">-</button>
					<input type="text" :value="item.count">
					<button @click="handleAdd(index)">+</button>
				</div>
					<div class="cartListFooter">
				<div class="bottom">
					<div class="zong">总价{{goodsCount.goodsPrice}}</div>
					<div class="btn">结算</div>
				</div>
			</div>
			</div>
		<p>*此为儿童不占床不含早价格，如儿童需要单独床位请联系客服，儿童必须在成人陪同下出游</p>
			
		</div>
	</div>
</template>


<script>
	import Vuex from "vuex";
	export default {
		created() {
			console.log(this)
		},
		computed: {
			...Vuex.mapState({
				goodsList:state => state.home.goodsList
			}),
			...Vuex.mapGetters({
				goodsCount:"home/goodsCount"
			})
		},
		filters: {
			price(val, num) {
				return "￥" + (val * num)
			}
		},
		methods: {
			...Vuex.mapMutations({
				handleToggle: "home/handleToggle",
				handleAdd: "home/handleAdd1",
				handleReduce: "home/handleReduce"
			})

		},
		//  computed: {
		// 	
    	// }

	};
</script>


<style lang="scss">
	.goods {
		width: 100%;
		height: 3.48rem;
		background:#fff;
		.goodsBox {
			width: 100%;
			height: 2.16rem;
			padding: .2rem .3rem .3rem .3rem;

			.goodsItem {
				width: 6.9rem;
				height: .68rem;
				background:#fff;
				margin-bottom:.2rem;
				display: flex;
				border-bottom:1px solid #cdcdcd;
				justify-content: space-between;
				align-items: center;
				.price{
					i{color:red;}
					
				}
				.count {
					button {
						width: .3rem;
						height: .3rem;
						font-size: .2rem;
					}

					input {
						width: .3rem;
						height: .3rem;
					}
				}
			}
		}
	}
	.cartListFooter{
		width:100%;
		height:1.08rem;
		background:#fff;
		position:fixed;
		bottom:0;
		left:0;
		border-top:1px solid #cdcdcd;
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
