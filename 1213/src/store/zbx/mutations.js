export default{
	handleZbx(state,data){
		state.ZbxList = data;
		//console.log(state.ZbxList)
	},
	handleZbxhot(state,data){
		state.hotList = data;
	//	console.log(state.hotList)
	},
	handleZbxsale(state,data){
		state.saleList = data;
		//console.log(state.saleList)
	},
	handleZbxsale2(state,data){
		state.saleList2 = data;
		//console.log(state.saleList2)
	},
	handleZbxsale3(state,data){
		state.saleList3 = data;
		//console.log(state.saleList3)
	},
	handleZbxlike(state,data){
		state.LikeList = data;
		console.log(state.LikeList)
	},
	handlelocal(state,data){
		state.Locallist = data;
		console.log(state.Locallist)
	},
	handlelocallist(state,data){
		state.Locallists = data;
		console.log(state.Locallists)
	}
	
}