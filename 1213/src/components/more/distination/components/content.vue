<template>
    <div class="content">
        <Nav-com :city="city"/>
        <List-com @handleToggle="toggle"/> 
        <Component :is="com"></Component>   
    </div>
</template>
<script>
import Vuex from "vuex";
import Nav from "./nav"
import List from "./list"
import Recommend from "./recommend"
import Spring from "./spring"
import Island from "./island"
import Domestic from "./domestic"
import International from "./international"
export default {
    components:{
        "Nav-com":Nav,
        "List-com":List,
        "Recommend-com":Recommend,
        "Spring-com":Spring,
        "Island-com":Island,
        "Domestic-com":Domestic,
        "International-com":International
   },
    data(){
		return{
			com:"Recommend-com"
		}
    },
    computed:{
         ...Vuex.mapState({
            city:state=>state.home0.cityGuidList,
        })
     },
    created(){
        this.handleHomeData();
    },
    methods:{
        ...Vuex.mapActions({
            handleHomeData:"home0/handleHomeData",
        }),
		toggle(i){
			switch(i){
				case 0:
				this.com="Recommend-com";
				break;
				case 1:
				this.com="Spring-com";
                break;
                case 2:
                this.com="Island-com";
                break;
                case 3:
                this.com="Domestic-com";
                break;
                case 4:
                this.com="International-com";
				break;
			}
			
		}
    },
    
}
</script>
 <style lang="scss" scoped>

      .content{
        background:#fff;
        height:max-content;
    }


</style>



