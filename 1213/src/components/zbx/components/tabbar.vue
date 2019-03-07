<template>
<div class="nav">
	<div class="head">
		<h2>周末出游</h2>
		<h3>致力推荐超完美套餐</h3>
	</div>
    <div class="tabBar wrapper" ref="tabBar">
        <ul class="content">
            <li v-for="(item,index) in saleList3">
                <img :src="item.AbsolutePicAddress">
                <p class="one">{{item.TypeName}}</p>
                <p class="two">{{item.Description}}</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
		computed: {
			...Vuex.mapState({
				saleList3: state => state.zbx.saleList3.Body.AreaMarkList,
			})
		},
		methods: {
			...Vuex.mapActions({
				handle2: "zbx/handleZbx"
			})
		},
		 updated() {
		   if(!this.scroll){
			   this.scroll = new BScroll(this.$refs.tabBar,{
				   scrollX:true
			   })
			//    console.log(this.scroll)
		   }
		},
}
  
</script>

<style scoped lang="scss">
.nav{
    height:4.35rem;
	padding-bottom: 16px;
    border-bottom: 10px solid #edf0f5;
	.head{
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		margin: 20px 0px;
	}
    .tabBar{
        .content{
            display: flex;
            justify-content: space-around;
            flex-wrap: nowrap;
            width: max-content;
            li{
				border: 1px solid #e4e4e4;
				width: 2.8rem;
				height: 3rem;
                margin-left:.2rem;
                position:relative;
                .one{
                     margin: .16rem 0 0;
                     font-size: .28rem;
                     text-align: center;
                }
                .two{
                    color: #999;
                    font-size: .2rem;
                    text-align: center;
                }
            }
        }
      
    }

}
</style>