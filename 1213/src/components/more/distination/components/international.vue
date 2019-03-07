<template>
    <div class="demostic">
         <Scroll-com :relCity="relCityListInt0"/>
         <Hello-com :hello = "internation[0]"/>
         <Conn-com :list = "listInt0"/>
         <Hello-com :hello = "internation[1]"/>
         <Conn-com :list = "listInt1"/>
         <Scroll-com :relCity="relCityListInt1"/>
         <Conn-com :list = "listInt2"/>
         <Scroll-com :relCity="relCityListInt2" />
         <Conn-com :list = "listInt3"/>
         <Hello-com :hello = "internation[2]"/>
         <Hello-com :hello = "internation[3]"/>
         
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
            relCityListInt0:state=>state.home0.relCityListInt0,
            relCityListInt1:state=>state.home0.relCityListInt1,
            relCityListInt2:state=>state.home0.relCityListInt2,
            internation:state=>state.home0.internation,
            listInt0:state=>state.home0.listInt0,
            listInt1:state=>state.home0.listInt1,
            listInt2:state=>state.home0.listInt2,
            listInt3:state=>state.home0.listInt3,
        })
     },

     
}
</script>
<style scoped lang="scss">

</style>