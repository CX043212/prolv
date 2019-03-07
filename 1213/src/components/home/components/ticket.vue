<template>
	<div class="ticket">
		<div class="main-ticket">
			<ul>
				<li v-for="(item,index) in data">
					<a href="##">
						<img :src="item.pic">
						<p>{{item.nameticket}}</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="sub-ticket">
			<ul>
				<li v-for="(item,index) in val">
					<!-- <router-link :to="path"> -->
						<a href="##" @click="handleTo(index=1)">
							<div class="pic">
								<img :src="item.pic">
							</div>
							
							<p>{{item.nameticket}}</p>
						</a>
					<!-- </router-link> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import axios from 'axios';
	export default{
		// data(){
		// 	return {
		// 		"path":"/zbx"
		// 	}
		// },
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/ticket"
				// url:"http://localhost:3000/ticket"
			}).then((data)=>{
				// console.log(this);
				this.handleTicket(data);
			}),
			axios({
				method:"get",
				url:"http://localhost:8080/api/ticketSecond"
				// url:"http://localhost:3000/ticketSecond"
			}).then((val)=>{
				//console.log(data);
				// console.log(this);
				this.handleticketSecond(val);
			})
		},
		computed: {
			...Vuex.mapState({
				data:state=>state.home.ticket,
				val:state=>state.home.ticketSecond,
			}),
		},
		methods:{
			...Vuex.mapActions({
				handleTicket:"home/handleTicket",
				handleticketSecond:"home/handleticketSecond"
			}),
			handleTo(){
				var i = 1;
				this.$router.push({name:"loading",query:{i}});
			}
		}
	}
</script>

<style lang="scss">
	.ticket{
		width:100%;
		height:5.68rem;
		padding:.4rem .3rem 0 .3rem;
		background:#fff;
		.main-ticket{
			width:100%;
			height:1.95rem;
			ul{
				width:100%;
				height:1.95rem;
				display:flex;
				justify-content: space-around;
				li{
					width:1.72rem;
					height:1.61rem;
					display:flex;
					justify-content:space-around;
					p{
						display:flex;
						justify-content:center;
						margin-top:.1rem;
					}
				}
			}
		}
		.sub-ticket{
			width:100%;
			height:3.33rem;
			border-top:1px solid #c1c1c1;
			ul{
				width:6.9rem;
				height:3.31rem;
				padding:.3rem 0 .1rem 0;
				text-align:center;
				display:flex;
				flex-wrap: wrap;
				li{
					width:1.38rem;
					height:1.11rem;
					margin-bottom:.35rem;
					a{
						display:block;
						width:100%;
						height:1.11rem;
						.pic{
							width:.6rem;
							height:.6rem;
							margin:0 auto;
							img{
								width:100%;
								height:100%;
							}
						}
						p{
							margin-top:.1rem;
							font-size:.2rem;
						}
					}
				}
			}
		}
	}
</style>
