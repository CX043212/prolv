<template>
  <div>
     <div class="conn" v-for="(item,index) in list" @click.stop="clickJump(item)">
      <div>
        <img :src="item.imgUrlCover">
      </div>
      <div class="two">
        <p>{{item.title}}</p>
        <p class="cont">{{item.content}}</p>
        <div class="read">
          <div class="like">
              <div>
                  <span>{{item.dataType}}</span>
              </div>
            <div>
                 <i class="iconfont">&#xe681;</i>
                <span>{{item.readCount}}</span>
                <i class="iconfont">&#xe610;</i>
                <span>{{item.likeCount}}</span>
            </div>
           
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  props: {
    list:{
      type:Array,
       default:function(){
            return []
       }

    },
  },
   methods:{
        clickJump(item){
            let content = item.content
            let dSCId = item.dSCId
            // this.$router.push({name:'detail',params:{content,dSCId}})
            this.$router.push({path:'/detail',query:{content:content,dSCId:dSCId}})
        }
    },
  created(){
    console.log(this)
  },
   watch: {
      '$route': 'clickJump'
    }

};
</script>
<style scoped lang="scss">
.conn {
  display: flex;
  justify-content: flex-start;
  div {
    img {
      width: 2.2rem;
      height: 2.4rem;
      padding: 0.1rem;
    }
  }
  .two {
    p:first-child {
      color: #333;
      font-size: 0.39rem;
      font-weight: 700;
    }
    .cont{
        margin-top:.2rem;
        height:1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width:5rem;
        line-height:.35rem;
    }
    .read{
        margin-top: .1rem;
        .author{
            p{
                margin-top: .2rem;
            }
            display: flex;
            justify-content: flex-start;
        }
        .like{
            span:first-child{
            border: 1px solid #ffa025;
            color: #ffa025;
            padding: 0 .1rem;
            height: .32rem;
            line-height: .36rem;
            border-radius: .2rem;
            font-size: .2rem;
            }
            div:nth-of-type(2){
                color: #ccc;
                font-size: .2rem;
            }
            display: flex;
            justify-content: space-between;
        }
    }
  }
}
</style>
