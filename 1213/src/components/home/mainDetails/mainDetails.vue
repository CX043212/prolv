<template>
	<div class="mainDetails">
		<Header-com/>
		<Banner-com/>
		<Pass-com/>
		<Start-com/>
		<Integral-com/>
		<Footer-com/>
	</div>
</template>

<script>
	import Header from './components/header';
	import Banner from './components/banner';
	import Pass from './components/pass';
	import Start from './components/start';
	import Integral from './components/integral';
	import Footer from './components/footer';


	export default{
		components:{
			"Header-com":Header,
			"Banner-com":Banner,
			"Pass-com":Pass,
			"Start-com":Start,
			"Integral-com":Integral,
			"Footer-com":Footer
		},
	}
</script>

<style lang="scss">
	.mainDetails{
		background:#cdcdcd;
	}
</style>
