<template>
    <div class="hello" @click.stop="clickJump(hello)">
        <img :src="hello.imgUrlCover"> 
        <p>{{hello.title}}</p>
        <div class="product">
            <span class="productName">{{hello.productName}}</span>
            <div>
                <i class="iconfont">&#xe681;</i>
                <span>{{hello.readCount}}</span>
                <i class="iconfont">&#xe610;</i>
                <span>{{hello.likeCount}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     props:{
        hello:{  
           type:Object,
           default:function(){
                 return {}
           }
       }
    },
     methods:{
        clickJump(item){
            let content = item.content
            let dSCId = item.dSCId
            // this.$router.push({name:'detail',params:{content,dSCId}})
            this.$router.push({path:'/detail',query:{content:content,dSCId:dSCId}})

        }
    }
}
</script>
<style scoped lang="scss">
.hello{
    padding:.3rem;
    img{
        width:6.9rem;
        height:3.88rem;
    }
    p{
         color: #333;
         font-size: .39rem;
         font-weight: 700;
         margin-top: .2rem;
    }
    .product{
        display: flex;
        justify-content: space-between;
        .productName{
            display:block;
            border: 1px solid #23beae;
            color: #23beae;
            padding: 0 .1rem;
            height: .32rem;
            line-height: .39rem;
            border-radius: .4rem;
            font-size: 。2rem;
        }
        div{
            span{
                color: #ccc;
                font-size: .2rem;
            }
        }
    }
   
}
</style>


