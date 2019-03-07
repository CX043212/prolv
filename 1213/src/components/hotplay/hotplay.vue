<template>
	<div>
		<Header-com></Header-com>
		<Content-com></Content-com>
		<!-- <Content-com2></Content-com2>
		<Content-com3></Content-com3>
		<Content-com4></Content-com4> -->
	</div>
</template>

<script>
	import Header from "./components/header";
	import Content from "./components/content";
	export default {
		components:{
			"Header-com":Header,
			"Content-com":Content,
		
		}
	}
	
</script>

<style>
	
</style>
