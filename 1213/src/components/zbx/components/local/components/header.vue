<template>
    <div class="headers">
		<div class="top">
			<i class="iconfont" @click="handleClick()">&#xe615;</i>
			<p>景点+酒店</p>
			<i class="iconfont" @click="handleClick()">&#xe615;</i>
		 </div>
		<div class="searchBox">
		    <mt-search cancel-text="搜索" placeholder="搜一下,带你玩转周边">
		    </mt-search>
		</div>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            this.$router.push("/zbx")
        }
    }
}
  
</script>

<style lang="scss">
.headers{
	width: 100%;
	height: 2rem;
	background:#fff;
	.top{
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding: .4rem .4rem;
	}
	.searchBox{
		height: 80px;
		margin: .1rem auto;
		.mint-searchbar{
			width: 70%;
			margin: 10px auto;
			border-radius:30px;
		
			 .mint-searchbar-inner{
					height: 50px;
					input{
						font-size: 30px;
						text-align: center
					}
			 }
		}
	}
}
</style>


