<template>
	<div class="cart">
		<Header-com/>
		<Month-com/>
		<Cartlist-com/>
		<!-- <CartListFooter-com/> -->
	</div>
</template>

<script>
	import Header from './components/header';
	import Month from './components/month';
	import CartList from './components/cartList';
	// import CartListFooter from './components/cartListFooter';

	export default{
		components:{
			"Header-com":Header,
			"Month-com":Month,
			"Cartlist-com":CartList,
			// "CartListFooter-com":CartListFooter
		}
	}
</script>

<style lang="scss">
	.cart{
		background:#cdcdcd;
	}
</style>
