<template>
	<div class="hotBottom">
		<ul>
			<li v-for="(item,index) in hotBottom">
				<a  @click="handleCLick(index+1)" >
					<img :src="item.pic">
					<p>{{item.name}}</p>
				</a>
			</li>
		</ul>
		<a @click="handleTo()">
			查看更多玩法
		</a>
		</div>
</template>

<script>
	import Vuex from 'vuex';
	import axios from 'axios';
	export default{
		// data(){
		// 	return{
		// 		path:"/more/distination"
		// 	}
		// },
		created(){
			axios({
				method:"get",
				url:"http://localhost:8080/api/hotBottom"
				// url:"http://localhost:3000/hotBottom"
			}).then((hotBottom)=>{
				// console.log(this);
				this.handleHotBottom(hotBottom)
			})
		},
		computed:{
			...Vuex.mapState({
				hotBottom:state=>state.home.hotBottom
			})
		},
		methods:{
			...Vuex.mapActions({
				handleHotBottom:"home/handleHotBottom"
			}),
			handleCLick(index){
				this.$router.push("/hot"+index)
			
			},
			handleTo(){
				let i =3 ;
				this.$router.push({name:"loading",query:{i}})

			}
		}
	}
</script>

<style lang="scss">
	.hotBottom{
		width:100%;
		height:6rem;
		padding:.4rem .1rem .4rem .3rem;
		background:#fff;
		border-top:1px solid #cdcdcd;
		ul{
			width:7.1rem;
			height:4.6rem;
			li{
				width:3.55rem;
				height:2.10rem;
				margin-bottom:.2rem;
				position:relative;
				// display:flex;
				float:left;
				a{
					width:3.35rem;
					height:2.1rem;
					
					img{
						width:3.35rem;
						height:2.1rem;
					}
					p{
						width:2.95rem;
						height:.61rem;
						position: absolute;
						bottom:-.1rem;
						color:#fff;
						text-align:center;
						font-size:.3rem;
					}
				}
			}
		}
		a{
			display:block;
			width:7.1rem;
			height:.41rem;
			margin-top:.4rem;
			line-height:.41rem;
			text-align:center;
			color:#00a0ff;
			font-size:.3rem;
		}
	}
</style>
