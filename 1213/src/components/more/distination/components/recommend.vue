<template>
<div>
  <Banner-com/>
  <!-- <Scroll-com :relCityList = "relCityList"/> -->
  <Hello-com :hello = "trip[0]"/>
  <Conn-com :list = "list0"/>
  <Hello-com :hello = "trip[1]"/>
  <Conn-com :list = "list1"/>
  <Hello-com :hello = "trip[2]"/>
  <Conn-com :list = "list2"/>
</div>
  
</template>
<script>
import Vuex from "vuex";
import Banner from "./recommend/banner";
// import Scroll from "./recommend/scroll"
import Hello from "./recommend/hello";
import Conn from "./recommend/conn";
export default {
  components:{
    "Banner-com":Banner,
    // "Scroll-com":Scroll,
    "Hello-com":Hello,
    "Conn-com":Conn,
  },
  computed:{
         ...Vuex.mapState({
           relCityList:state=>state.home0.relCityListRec,
           list0:state=>state.home0.listRec0,
           list1:state=>state.home0.listRec1,
           list2:state=>state.home0.listRec2,
           hello:state=>state.home0.hello,
           trip:state=>state.home0.trip,
        })
     },
}
</script>
<style scoped lang="scss">

</style>


