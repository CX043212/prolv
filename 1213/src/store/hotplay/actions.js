import {HomeData,SearchData} from "../../apis/home";
export default {
	async handleHotplay1({commit}){
		 let data1 = await HomeData({"servicename":"gettopicinfos","interfaceid":"poialdapi.gettopicinfos","requrl":"http://tcmobileapi.17usoft.com/aladdin/queryHandler.ashx","reqbody":{"trId":"2150","cityId":0,"dwCityId":0,"isNetwork":true,"requestPlatfrom":"h5"},"iscache":"0"} )
		commit("handleHotMutations1",data1.response.body)
	},
	async handleHotplay2({commit}){
		let data2 = await HomeData({"servicename":"gettopicinfos","interfaceid":"poialdapi.gettopicinfos","requrl":"http://tcmobileapi.17usoft.com/aladdin/queryHandler.ashx","reqbody":{"trId":"2155","cityId":0,"dwCityId":0,"isNetwork":true,"requestPlatfrom":"h5"},"iscache":"0"} )
		commit("handleHotMutations2",data2.response.body)
	},
	async handleHotplay3({commit}){
		 let data3 = await HomeData({"servicename":"gettopicinfos","interfaceid":"poialdapi.gettopicinfos","requrl":"http://tcmobileapi.17usoft.com/aladdin/queryHandler.ashx","reqbody":{"trId":"2154","cityId":0,"dwCityId":0,"isNetwork":true,"requestPlatfrom":"h5"},"iscache":"0"} )
		 commit("handleHotMutations3",data3.response.body)
	},
	async handleHotplay4({commit}){
		 let data4 = await HomeData({"servicename":"gettopicinfos","interfaceid":"poialdapi.gettopicinfos","requrl":"http://tcmobileapi.17usoft.com/aladdin/queryHandler.ashx","reqbody":{"trId":"1757","cityId":0,"dwCityId":0,"isNetwork":true,"requestPlatfrom":"h5"},"iscache":"0"} )
		commit("handleHotMutations4",data4.response.body)
	}
	async handleCity1({commit},i){
		
				let datadetails = await HomeData({"servicename":"getpocketguidedetailinfo","interfaceid":"poialdapi.getpocketguidedetailinfo","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"selectCityId":i,"topicId":"0","requestPlatfrom":"h5"},"iscache":"0"} )
				commit("handlemore1details", datadetails)
			console.log(datadetails)
	}
}