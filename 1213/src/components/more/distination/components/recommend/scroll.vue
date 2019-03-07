<template>
<div class="nav">
    <div class="tabBar wrapper" ref="tabBar">
        <ul class="content">
            <li v-for="(item,index) in relCityList">
                <img :src="item.imgUrlMiddle">
                <p class="one">{{item.title}}</p>
                <p class="two">{{item.subtitle}}</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    props:{
        relCityList:[],
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
    height:2.75rem;
    .tabBar{
        .content{
            display: flex;
            justify-content: space-around;
            flex-wrap: nowrap;
            width: max-content;
            li{
                padding-left:.2rem;
                position:relative;
                img{
                    border-radius: .2rem;
                    width:2.2rem;
                    height:1.47rem;
                }
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