<template>
    <div class="details">
        <Header-com/>
        <p>{{content}}</p>
        <Cart-com/>
    </div>
</template>
<script>
import Header from "./header";
import Cart from "./cart";
export default {
    components:{
        "Header-com":Header,
        "Cart-com":Cart
    },
    data(){
        return{
            content:"",
            dSCId:""
        }
    },
    created(){
        this.$nextTick(() => {
            // let {dSCId,content}=this.$route.params;
            let {dSCId,content}=this.$route.query;
            this.content = content;
            this.dSCId = dSCId;
        })
    },
}
</script>
<style scoped lang="scss">
.details{
    p{
        margin-top:1.5rem;
        font-size: .24rem;
        line-height:.5rem;
    }
}
</style>


