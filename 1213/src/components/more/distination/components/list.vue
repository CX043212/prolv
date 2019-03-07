<template>
    <div class="list">
        <div class="content">
            <ul>
                <li v-for='(item,index) in tagTabList' :class='index == activeindex?"active":"" ' @click="handleData(index)">{{item.title}}</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    data(){
        return{
            activeindex:0,
        }
    },
    computed:{
        ...Vuex.mapState({
            tagTabList:state=>state.home0.tagTabList
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleHomeData:"home0/handleHomeData",
        }),
		handleData(index){
            this.activeindex = index;
			this.$emit("handleToggle",index)
		}

    },
    created(){
        this.handleHomeData();
    },
  
}
</script>
<style scoped lang="scss">
.list{
    .content{
        ul{
            display:flex;
            justify-content: space-around;
            align-items:center;
            .active{
                color:green;
                border-bottom:.1rem solid green;
            }
            li{
                padding:.2rem; 
            }
        }
       
    }
}
</style>



