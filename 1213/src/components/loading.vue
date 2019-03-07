<template>
    <section>
        <div class='mock'>
            <div class='main'>
				
               <img src="../../static/loading.gif">
            </div>
        </div>
    </section>
</template> 
   <script>
	   import Vuex from "vuex";
	   export default {
		   created(){
				this.handle5();
				this.handle();
				this.handleHomeData();
				this.handleBannerData();
				console.log(this)
		   },
		   methods: {
		   	...Vuex.mapActions({
		   		handle5: "zbx/handleZbx",
				handle:"zbx/handleLocal",
				handleHomeData:"home/handleHomeData",
				handleBannerData:"home/handleBannerData"
		   	}),
			
		   },
		   mounted(){
			
				var str =window.location.hash;
				var i = str.charAt(str.length-1);
			   setTimeout(()=>{
				   if(i==2){
					   this.$router.push("/zbx/local");
				   }else if(i==1){
					   this.$router.push("/zbx");
				   }else if(i==3){
					   this.$router.push("/more/distination");
				   }
			   },3000)
		   }
	   }
   </script>
<style lang="scss" scoped>
	body{
		background: #252627;
	}
   .mock{
        width:100%;
        height:100%;
		
    }
	.main{
		width: 200px;
		height: 200px;
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(255,255,255,0);
	}
   
</style>
