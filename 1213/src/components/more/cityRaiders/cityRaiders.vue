<template>
    <div class="cityRaiders">
	<!-- //	<img v-lazy="loading"/> -->
		<loading></loading>
		<City-com/>
		<Footer-com />
    </div>
</template>
<script>

import Footer from "../../common/footer";
import City from "./components/city.vue";
	export default {
	  components:{
	    "Footer-com":Footer,
		"City-com":City,
	  },
	 }
</script>
<style scoped lang="scss">
	.cityRaiders{
		height: 100%;
	
	}
</style>
