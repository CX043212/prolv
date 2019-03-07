<template>
    <div class="di">
        <Header-com/>
        <Content-com/>
        <Footer-com /> 
    </div>
</template>
<script>
import Header from "./components/header";
import Content from "./components/content"
import Footer from "../../common/footer";
import BScroll from "better-scroll";
export default{
   components:{
        "Header-com":Header,
        "Content-com":Content,
        "Footer-com":Footer
   },
  
  
}
</script>
<style scoped lang="scss">
.diWrapper{
    height:100%;
}
</style>
