<template>
    <div class="island">
         <Scroll-com :relCity="relCityListIsl"/>
         <Hello-com :hello = "island[0]"/>
         <Conn-com :list = "listISl0"/>
         <Hello-com :hello = "island[1]"/>
         <Conn-com :list = "listISl1"/>
         <Scroll-com :relCity="relCityListIsl1" />
         <Hello-com :hello = "island[2]"/>
         <Conn-com :list = "listISl2"/>
         <Hello-com :hello = "island[3]"/>
         <Conn-com :list = "listISl3"/>
         
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
            relCityListIsl:state=>state.home0.relCityListIsl,
            island:state=>state.home0.island,
            listISl0:state=>state.home0.listISl0,
            listISl1:state=>state.home0.listISl1,
            listISl2:state=>state.home0.listISl2,
            listISl3:state=>state.home0.listISl3,
            relCityListIsl1:state=>state.home0.relCityListIsl1,
        })
     },

     
}
</script>
<style scoped lang="scss">

</style>