<template>
    <div id="heade">
        <i class="iconfont" @click="handleClick()">&#xe615;</i>
        <div class="searchBox">
            <mt-search cancel-text="搜索" placeholder="搜索目的地/景点/关键字">
            </mt-search>
        </div>
		<i class="iconfont" @click="handleClick()">&#xe615;</i>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            this.$router.push("/home")
        }
    }
}
  
</script>

<style lang="scss">
#heade{
    position:fixed;
    z-index:5;
    left: 0;
    top:0;
    width:100%; 
    height:1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i{
        color:green;
        font-size:.24rem;
        padding:.3rem;
    }
    .searchBox{
        width:80%;
        height:100%;
        .mint-search{
            margin-top:.2rem;
            background:#ddd;
            border-radius: .3rem;
            height:60%;
            display: flex;
            align-items:center;
           .mint-searchbar,.mint-searchbar>.mint-searchbar-inner{
                height:80% ;
                width:100% ;
                background:#ddd;
         };
         input{
              background:#ddd;
              font-size:.24rem;
         }
        }
    }
}
</style>


