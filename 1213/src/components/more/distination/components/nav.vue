<template>
<div class="nav">
    <div class="sel"><h5>{{city.title}}</h5></div>
    <div class="tabBar wrapper" ref="tabBar" >
        <ul class="content">
            <li v-for="(item,index) in city.list">
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
        city:{},
    },
     updated() {
       if(!this.scroll){
           this.scroll = new BScroll(this.$refs.tabBar,{
               scrollX:true,
               click:true
           })
       }
    },
}
  
</script>

<style scoped lang="scss">
.nav{
    margin-top:1.2rem;
    height:2.3rem;
    .sel{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:.1rem;
        h5{
            color: #666;
            font-size: .39rem;
            font-weight: 700;
        }
    }
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
                p{
                    color:#fff;
                }
                .one{
                    position: absolute;
                    left:.2rem;
                    bottom:.5rem;
                }
                .two{
                    position: absolute;
                    left:.2rem;
                    bottom:.2rem;
                }
            }
        }
      
    }

}
</style>


