<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in tabBar">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            tabBar:[
                {
                    name:"distination",
                    title:"目的地攻略",
                    icon:"&#xe89d;"
                },
                {
                    name:"cityRaiders",
                    title:"城市攻略",
                    icon:"&#xec70;"
                },
               {
                    name:"my",
                    title:"我的",
                    icon:"&#xe64f;"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: .01rem solid #c1c1c1;
    }

    #footer>ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    #footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;
    }
     #footer>ul>li>.router-link-active{
         color: green;
     }
     #footer>ul>li>a>i{
         font-size: .36rem;
     }
      #footer>ul>li>a>span{
          font-size: .28rem;
      }

</style>
