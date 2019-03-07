<template>
	<div class="detailsFooter">
		<ul>
		    <li v-for="(item,index) in tabBar" @click="handleClickCart()">
				<div class="foo">
					<i class="iconfont" v-html="item.icon"></i>
					<span>{{item.title}}</span>
				</div>
		    </li>
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tabBar:[
					{
						title:"收藏",
						icon:"&#xe60f;"
					},
					{
						title:"电话",
						icon:"&#xe7b5;"
					},
				   {
						title:"客服",
						icon:"&#xe60d;"
					},
					{
						 title:"立即预定",
					 }
				]
			}
		},
		methods:{
			handleClickCart(){
				this.$router.push("/cart")
			}
		}
	}
</script>

<style lang="scss">
	.detailsFooter{
		width:100%;
		height:1.11rem;
		position:fixed;
		bottom:0;
		left:0;
		ul{
			display: flex;
			justify-content: space-between;
            align-items: center;
			li{
                .foo{
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
                    padding:0 .2rem;
					i{
						font-size:.36rem;
					}
					span{
						font-size:.28rem;
					}
				}
            }
            li:last-of-type{
                 padding:0 .7rem;
                 background: #ff5346;
                 line-height: 1.11rem;
                 color: #fff;
                 border-radius: .02rem;
            }
			
		}
	}
	// li:nth-of-type(4) .foo{
	// 	display:block;
	// 	width:4.42rem;
	// 	height:1.1rem;
	// 	// background-image: linear-gradient(90deg, rgb(255, 122, 69) 0px, rgb(255, 83, 70) 100%);
	// 	background:orange;
	// 	span{
	// 		display:block;
	// 		width:4.42rem;
	// 		height:1.1rem;
	// 		line-height:1.1rem;
	// 		text-align:center;
	// 		color:#fff;
	// 		font-size:.48rem;
	// 	}
	// }
</style>
