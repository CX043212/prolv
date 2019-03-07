 <template>
     <div>
         <Select-com @handleToggle="toggle"/>
         <Component :is="com"></Component>     
    </div>
 </template>
<script>
import Verification from "./components/verification"
import Account from "./components/account"
import Select from "./components/select"
import Vuex from "vuex";
export default {
    components:{
        "Verification-com":Verification,
        "Account-com":Account,
        "Select-com":Select
    },
    data(){
        return {
            com :"Verification-com"
        }
    },
    methods:{
		toggle(i){
			switch(i){
				case 0:
				this.com="Verification-com";
				break;
				case 1:
				this.com="Account-com";
                break;
			}	
		}
    }
}
</script>
<style scoped lang="scss">

</style>
