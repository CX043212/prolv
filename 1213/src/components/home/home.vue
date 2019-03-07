<template>
    <div>
		<Header-com/>
		
		<div class="main">
			<Banner-com/>
			<Ticket-com/>
			<Time-com/>
			<Down-com/>
			<Hot-com/>
			<FooterTop-com/>
			<FooterCenter-com/>
			<FooterBottom-com/>
		</div>
		<router-view></router-view>
    </div>
</template>
<script>

import Header from "./components/header";
import Banner from "./components/banner";
import Ticket from "./components/ticket";
import Time from "./components/time";
import Down from "./components/down";
import Hot from "./components/hot";
import FooterTop from "./components/footerTop";
import FooterCenter from "./components/footerCenter";
import FooterBottom from "./components/footer"

import axios from 'axios';
import Vuex from 'vuex';
export default{
	components:{
		"Header-com":Header,
		"Banner-com":Banner,
		"Ticket-com":Ticket,
		"Time-com":Time,
		"Down-com":Down,
		"Hot-com":Hot,
		"FooterTop-com":FooterTop,
		"FooterCenter-com":FooterCenter,
		"FooterBottom-com":FooterBottom
		
	},
	created(){
		axios({
			method:"get",
			url:"http://localhost:8080/api/banner"
			// url:"http://localhost:3000/banner"

		}).then((data)=>{
			// console.log(this);
			this.handleData(data);
		})
		
	},
	computed:{
		...Vuex.mapState({
			banner:state=>state.banner,
			ticket:state=>state.ticket,
		})
		
	},
	methods:{
		...Vuex.mapActions({
			handleData:"home/handleData",
			handleTicket:"home/handleTicket"
		})
		
	}
	
}
</script>
<style lang="scss">
	.main{
		width:100%;
		// height:50rem;
		background:#f0f4f5;
		padding-top:1.02rem;
		position:relative;
	}
</style>



