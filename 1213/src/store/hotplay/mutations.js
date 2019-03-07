export default{
	handleHotMutations1(state,data){
		state.HotplayList1 = data;
		console.log(state.HotplayList1)
	},
	handleHotMutations2(state,data){
		state.HotplayList2 = data;
		console.log(state.HotplayList2)
	},
	handleHotMutations3(state,data){
		state.HotplayList3 = data;
		console.log(state.HotplayList3)
	},
	handleHotMutations4(state,data){
		state.HotplayList4 = data;
		console.log(state.HotplayList4)
	}
	
// 	handleHotMutations(state,data){
// 		state.HotplayList = data;
// 	}
	
// 	handleHotMutations(state,data){
// 	    state.HotplayListD0 = data.list[];
// 	    state.HotplayListD1 = data.list[];
// 	    state.HotplayListD2 = data.list[9];
// 	    state.demestic = [data.list[1],data.list[2],data.list[7]]
// 	    var arr1=[];
// 	    var arr2=[];
// 	    var arr3=[];
// 	    for(var i = 3;i < 7;i++){
// 	        if(data.list[i].resourceId != 0 && data.list[i].content != ""){
// 	            arr1.push(data.list[i]);
// 	            state.listDeo0 = JSON.parse(JSON.stringify(arr1));
// 	        } 
// 	    }
// 	    for(let i = 10;i <18;i++){
// 	        if(data.list[i].resourceId != 0 && data.list[i].content != ""){
// 	            arr2.push(data.list[i]);
// 	            state.listDeo1 = JSON.parse(JSON.stringify(arr2));
// 	        } 
// 	    }
// 	    for(var i = 20;i < 25;i++){
// 	        if(data.list[i].resourceId != 0 && data.list[i].content != ""){
// 	            arr3.push(data.list[i]);
// 	            state.listDeo2 = JSON.parse(JSON.stringify(arr3));
// 	        } 
// 	    }
// 	   
// 	},
}