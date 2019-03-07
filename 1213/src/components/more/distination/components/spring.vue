<template>
<div>
    <Conn-com :list = "list0"/>
    <Hello-com :hello = "spring[0]"/>
    <Conn-com :list = "list1"/>
</div>
     
</template>
<script>
import Vuex from "vuex";
import Conn from "./recommend/conn";
import Hello from "./recommend/hello";

export default {
    components:{
    "Conn-com":Conn,
    "Hello-com":Hello,
  },
  computed:{
         ...Vuex.mapState({
           list0:state=>state.home0.listSpr0,
           spring:state=>state.home0.spring,
           list1:state=>state.home0.listSpr1,
           
        })
     },
}
</script>
<style scoped lang="scss">

</style>


