<template>
    <div class="cityRaiders">
	<!-- //	<img v-lazy="loading"/> -->
		<loading></loading>
		<City-com/>
		<Footer-com />
    </div>
</template>
<script>
import loading from "../../common/loading.vue";
import Footer from "../../common/footer";
import City from "./components/city.vue";
	export default {
	  components:{
	    "Footer-com":Footer,
		"City-com":City,
		"loading":loading
	  },
	 }
</script>
<style scoped lang="scss">
	.cityRaiders{
		height: 100%;
	
	}
</style>
