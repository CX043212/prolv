<template>
    <div class="select">
        <ul >
            <li v-for="(item,index) in select" :class='index == activeindex?"active":""'  @click="handleData(index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            select:["验证码登陆","账号密码登陆"],
            activeindex:0,
        }
    },
    methods:{
        handleData(index){
            this.activeindex = index;
            this.$emit("handleToggle",index)
		}
    }
    
}
</script>
<style scoped lang="scss">
.select{
    ul{
        display:flex;
        justify-content: space-around;
        align-items: center;
        .active{
            color: #23beae;
            border-bottom: .1rem solid #23beae;
            padding:.2rem;
        }
    }
    
}
</style>


