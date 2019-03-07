<template>
    <div class="cart">
        <p>小编推荐</p>
        <div>
              <img :src="img" @click="handleCart()">
        </div>
    </div>
</template>
<script>
import Header from "./header";
export default {
   data(){
       return {
          img:["https://pic5.40017.cn/01/000/9d/44/rBLkBVuwlLaAFMlgAAGtWX79A7I499_640x320_00.jpg"] 
       }
   },
   methods:{
       handleCart(){
           this.$router.push("/detail/line")
       }
   }
}
</script>
<style scoped lang="scss">
.cart{
    
    font-size:.34rem;
    font-weight: 800;
    text-align: center;
    div{
        display:flex;
        justify-content: center;
        img{
            display: block;
        }
    }
    

}
</style>


