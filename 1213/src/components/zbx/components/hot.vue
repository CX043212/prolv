<template>
	<div>
		<div class="hot">
			<ul>
				<li v-for="(item,index) in hotList" @click="handleclick()">
					<a >
						<img :src="item.AbsoluteImageUrl">
						<p>{{item.Title}}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				hotList: state => state.zbx.hotList.Body.KeyWordsModel
			})
		},
		created() {
			this.handlew()
		},
		methods: {
			...Vuex.mapActions({
				handlew: "zbx/handleZbx"
			}),
			handleclick(){
				this.$router.push("/zbx/local");
			}
		},

	}
</script>

<style scoped lang="scss">
	.hot {
		width: 100%;
		height: 1.95rem;
		border-bottom: .02rem solid #c4c4c4;
		
		ul {
			width: 100%;
			height: 1.95rem;
			display: flex;
			justify-content: space-around;

			li {
				width: 1.72rem;
				height: 1.61rem;
				display: flex;
				justify-content: space-around;

				a {
					img{
						border-radius: 50px
					}

					p {
						display: flex;
						justify-content: center;
						margin-top: .1rem;
					}
				}

			}

		}
	}

	li:nth-of-type(1) img{
		background: green;
	
	}

	li:nth-of-type(2) img{
		background: orange
	}

	li:nth-of-type(3) img{
		background: lightblue
	}

   li:nth-of-type(4) img{
		background: red
	}
</style>
