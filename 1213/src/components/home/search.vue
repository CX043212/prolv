<template>
	<div class="searchSecond">
		<div class="searchInput">
			<a href="##" @click="handleClickSearch()"></a>
			<mt-search></mt-search>
		</div>
		<article class="searchMain">
			<section class="searchSec">
				<h1>热门搜索</h1>
				<div class="searchSect" >
					<a href="##" v-for="(item,index) in searchList">
						{{item.name}}
					</a>
				</div>
			</section>
		</article>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		mounted(){
			console.log(this)
			this.handleSearchData()
		},
		computed:{
			...Vuex.mapState({
				searchList:state=>state.home.searchList.response.result.doc,
			})
		},
		methods:{
			...Vuex.mapActions({
				handleSearchData:"home/handleSearchData"
			}),
			handleClickSearch(){
				this.$router.push("/home")
			}
		}
	}
</script>

<style lang="scss">
	.searchSecond{
		width:100%;
		height:100%;
		background:#fff;
		position:absolute;
		top:0;
		z-index:3;
		.searchInput{
			width:100%;
			height:1rem;
			background:#fff;
			display:flex;
			a{
				display:block;
				width:.52rem;
				height:1rem;
				background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNpiVN63joEMIA7EbkC8mIHKgIVMx+wHYg0g5gPiqQPpIJhjNKH8yVCaao5iosAxIMAIxB5Qmq4OksDiGBDYAsTBQPyfng4COWYfHsf8omYaYhpMjiHkILo7Bp+DBsQxuByEyzGbae0YbOWQBFKhh+6YEFo7Bj2EBtwxyA4aFI6BRZkQDsf8BeK3SNUD3RxUisUxIMAMxAkMdAagKONlGEQA5KB2IL48WBwEirKnQGwIxHOwRNEfIG4E4lf0dBAsAadA2Qlo8hFA7EQvRzGh5SqQoxagqdGGltxi9HYQsqPmY3HUfno4CltdBnJUKhZHadHDUbhq+wFzFL720IA4ilCLkZCjxOntIHwJXQua+8Tp7SAQ+EcvR5HSL8PlKE4gZh8IByE7ah6Ufx+IHYD40UD27f9BE/oLIJ5JTceAAECAAQCGeVJoi160sQAAAABJRU5ErkJggg==) no-repeat center center;
				margin-left:.38rem;
			}
			.mint-search{
				width:5.9rem;
				height:.65rem;
				margin-top:.16rem;
				padding:0 .18rem 0 .54rem;
				.mint-searchbar{
					width:100%;
					height:100%;
					border-radius:.3rem;
					background:#f5f5f5;
					.mint-searchbar-inner{
						width:100%;
						height:100%;
						background:#f5f5f5;
						.mintui-search{
							display:block;
							width:.24rem;
							height:.24rem;
							font-size:.24rem;
							color:black;
							margin-left:.6rem;
						}
						input{
							background:#f5f5f5;
						}
						.mint-searchbar-core{
							display:none;
						}
					}
				}
			}
		}
		.searchMain{
			width:100%;
			height:100%;
			.searchSec{
				width:100%;
				height:5.79rem;
				padding:0 .35rem;
				h1{
					width:6.79rem;
					height:.63rem;
					line-height:.63rem;
					background:#fff;
					color:#999;
					border-bottom:1px solid #cdcdcd;
				}
				.searchSect{
					width:6.79rem;
					height:5.16rem;
					a{
						display:inline-block;
						// width:1.33rem;
						height:.7rem;
						line-height:.4rem;
						background:#f5f5f5;
						margin-right:.23rem;
						padding:.14rem .38rem;
						margin-top:.23rem;
					}
				}
			}
		}
	}
</style>
