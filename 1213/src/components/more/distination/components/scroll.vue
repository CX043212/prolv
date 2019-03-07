<template>
  <div class="nav">
    <div class="sel">
      <h5>{{relCity.title}}</h5>
    </div>
    <div class="tabBar wrapper" ref="tabBar">
      <ul class="content">
        <li v-for="(item,index) in relCity.relCityList">
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
        relCity:{
            type:Object,
            default:function(){
                 return {}
            }
        },
    },
    created() {//dom还没有加载，所以不能滚动
     this.$nextTick(() => {
       if(!this.scroll){
           this.scroll = new BScroll(this.$refs.tabBar,{
               scrollX:true,
               click:true,
           })
       }else{
           this.scroll.refresh()
       }
      })
    },
    

}
  
</script>

<style scoped lang="scss">
.nav {
  height: 2.75rem;
  margin-bottom:.1rem;
  .sel {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    h5 {
      color: #666;
      font-size: 0.39rem;
      font-weight: 700;
    }
  }
  .tabBar {
    position:relative;
    .content {
      display: flex;
      justify-content: space-around;
      flex-wrap: nowrap;
      width: max-content;
      li {
        padding-left: 0.2rem;
        position: relative;
        img {
          border-radius: 0.2rem;
          width: 2.2rem;
          height: 1.47rem;
        }
        .one {
          margin: 0.16rem 0 0;
          font-size: 0.28rem;
          text-align: center;
        }
        .two {
          color: #999;
          font-size: 0.2rem;
          text-align: center;
        }
      }
    }
  }
}
</style>