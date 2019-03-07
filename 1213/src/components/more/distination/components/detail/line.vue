<template>
    <div class="line">
        <Footer-vue/>
    </div>
</template>
<script>
import Header from "./header";
import Footer from "./common/footer";
export default {
    components:{
        "Footer-vue":Footer
    },
   methods:{
       
   }
}
</script>
<style scoped lang="scss">
.line{
    background:green;
}
</style>


