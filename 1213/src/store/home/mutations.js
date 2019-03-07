export default {
	handleAdd1(state,index){
		 console.log(state)
		 console.log(state.goodsList[index].count)
	    state.goodsList[index].count++;
		console.log(111)
	},
	handleReduce(state,index){
	    if(state.goodsList[index].count == 1){
	        state.goodsList[index].count == 1
	    }else{
	        state.goodsList[index].count--
	    }
	},
	handleMutationBannerData(state,data){
		state.bannerList = data;
		console.log(data)
	},
	handlemoredetails(state,data){
		state.details = data
	},
	handleMutationsSearch(state,data){
		state.searchList = data;
	},
    handleMutations(state,data){
		state.banner = data;
		// console.log(data);
	},
	handleMutationsTicket(state,data){
		state.ticket = data;
		// console.log(data)
	},
	handleMutationsticketSecond(state,val){
		state.ticketSecond = val;
		// console.log(val)
	},
	handleMutationsTime(state,params){
		state.time = params;
		// console.log(params);
	},
	handleMutationsDown(state,down){
		state.down = down;
		// console.log(down)
	},
	handleMutationsHot(state,hot){
		state.hot = hot;
		// console.log(hot)
	},
	handleMutationsHotBottom(state,hotBottom){
		state.hotBottom = hotBottom;
		// console.log(hotBottom)
	},
	handleMutationsFooterTop(state,footerTop){
		state.footerTop = footerTop;
		// console.log(footerTop)
	},
	handleMutationsFooterCenter(state,footerCenter){
		state.footerCenter = footerCenter;
		// console.log(footerCenter)
	},
	handledatacityRaiders(state,params){
		state.cityRaiders  =  params;
		
	},
	
	
}