<template>
	<div class="header">
		<div class="search">
			<span>{{name}}</span>
			<i class="iconfont" v-html="icon"></i>
		</div>
		<div class="serchname" @click="handleClickHeader()">
			
				<mt-search placeholder="目的地/酒店/景点/关键字" >
				</mt-search>
			
		</div>
		<div class="searchLeft">
			<i class="iconfont" v-html="iconfontsecond" @click="handleClickMainLogin()"></i>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "北京",
				icon: "&#xe638;",
				iconfirst: "&#xe627;",
				there: "目的地/酒店/景点/关键字",
				iconfontsecond: "&#xe64f;",
			}
		},
		methods:{
			handleClickHeader(){
				this.$router.push("/home/search")
			},
			handleClickMainLogin(){
				this.$router.push("/home/mainLogin")
			}
		},
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		height: 1.02rem;
		position:fixed;
		top: 0;
		left: 0;
		padding: .18rem 0 .18rem .2rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background:#fff;
		z-index:2;
		.search {
			width: 1.07rem;
			height: .65rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			span,i {
				font-size: .3rem;
				color: #23beae;
				font-weight: 600;
			}
		}
		.icon{
			.iconfont {
				position:absolute;
				font-size: .3rem;
				color: #93989f;
				display:block;
				width:.3rem;
				height:.3rem;
				z-index:5;
				margin-left:.6rem;
				margin-top:-.128rem;
			}
		}
		.serchname{
			width:5.21rem;
			height:.65rem;
			.mint-search{
				height:.65rem;
				background:#c1c1c1;
				border-radius: .6rem;
			}
			.mint-searchbar{
				height:.65rem;
				
				background:#c1c1c1;
				.mint-searchbar-inner{
					height:.65rem;
					margin-left:.6rem;
					background:#c1c1c1;
					i{
						font-size:.3rem;
					}
					input{
						font-size:.3rem;
						background:#c1c1c1;
					}
				}
				.mint-searchbar-cancel{
					display:none;
				}
			}
		}
		.searchLeft {
			width:.56rem;
			height:.41rem;
			display:flex;
			justify-content: center;
			align-items:center;
			i {
				font-size: .4rem;
				color: #23beae;
				font-weight: 600;
			}
		}
	}
</style>
