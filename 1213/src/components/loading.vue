<template>
    
        <div class='mock'>
            <div class='main'>
				
               <img src="../../static/loading.gif">
			   
			   努力加载中...
            </div>
        </div>
   
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
				handleBannerData:"home/handleBannerData",
				handle2:"hotplay/handleCity1",
		   	}),
			
		   },
		   mounted(){
				var str =window.location.hash;
				console.log(str);
				if(str.length <14 ){
					var c = str.charAt(str.length-1);
					console.log(c);
					var i = c;
					var i = -i;
					
				}else{
					
					var c = str.charAt(str.length-1);
					
					if(str.charAt(str.length-2)=="="){
						var w =" ";
						return w;	
					}else{
						if(str.charAt(str.length-3)=="="){
							var b = "";
							return b;
						}else{
							if(str.charAt(str.length-4)=="="){
								var a = ""
							}else{
								var  a = str.charAt(str.length-4)
							}
							var b = str.charAt(str.length-3)
						}
						var w = str.charAt(str.length-2)
					}
					var s= a+b+w+c;
					
					var i = c;
					 this.handle2(s);
				}
					console.log(s)
					   setTimeout(()=>{
							console.log(s)
						   console.log(i)
						   if(i==-2){
							   this.$router.push("/zbx/local");
						   }else if(i==-1){
							   this.$router.push("/zbx");
						   }else if(i==-3){
							   this.$router.push("/more/distination");
						   }else{
								if(this.$store.state.hotplay.moreDetails.response.header.rspDesc=="查询成功"){
									this.$router.push("/more/cityRaiders/details?data="+s);
								}
							   
						   }
					   },3000)
		   }
	   }
   </script>
<style lang="scss" scoped>
	body,html{
		width: 100%;
		height: 100%
		
	}
   .mock{
        width:100%;
        height:100%;
		background: #d0caca57;
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
		text-align: center;
	}
   
</style>
