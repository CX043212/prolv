<template>
    <div class="demostic">
         <Scroll-com :relCity="relCityListDeo0"/>
         <Hello-com :hello = "demestic[0]"/>
         <Hello-com :hello = "demestic[1]"/>
         <Conn-com :list = "listDeo0"/>
         <Hello-com :hello = "demestic[2]"/>
         <Scroll-com :relCity="relCityListDeo1" />
         <Conn-com :list = "listDeo1"/>
         <Scroll-com :relCity="relCityListDeo2" />
         <Conn-com :list = "listDeo2"/>
         
    </div>
</template>
<script>
import Scroll from "./scroll"
import Vuex from "vuex"
import Hello from "./recommend/hello";
import Conn from "./recommend/conn";
export default {
    components:{
        "Scroll-com":Scroll,
        "Hello-com":Hello,
        "Conn-com":Conn,
    },
    computed:{
         ...Vuex.mapState({
            relCityListDeo0:state=>state.home0.relCityListDeo0,
            relCityListDeo1:state=>state.home0.relCityListDeo1,
            relCityListDeo2:state=>state.home0.relCityListDeo2,
            demestic:state=>state.home0.demestic,
            listDeo0:state=>state.home0.listDeo0,
            listDeo1:state=>state.home0.listDeo1,
            listDeo2:state=>state.home0.listDeo2,
        })
     },

     
}
</script>
<style scoped lang="scss">

</style>