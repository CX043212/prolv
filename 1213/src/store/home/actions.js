import {
	HomeData,
	SearchData,BannerData,
} from "../../apis/home";
export default {
	async handleBannerData({commit}){
	    let data = await BannerData();
		console.log(data)
		let val = data.response.resultList.record;
	    console.log(val);
		commit("handleMutationBannerData",val)
	 },
	async handleSearchData({commit}){
	    let data = await SearchData();
		let val =	data.response.result.doc;
	    console.log(val);
		commit("handleMutationsSearch",val)
	 },
	handleData({
		commit
	}, data) {
		// console.log(data)
		commit("handleMutations", data.data)
		// console.log(data.data)
	},
	handleTicket({
		commit
	}, data) {
		// console.log(data)
		commit("handleMutationsTicket", data.data)
	},
	handleticketSecond({
		commit
	}, val) {
		// console.log(val)
		commit("handleMutationsticketSecond", val.data)
	},
	handleTime({
		commit
	}, params) {
		// console.log(params);
		commit("handleMutationsTime", params.data)
	},
	handleDown({
		commit
	}, down) {
		// console.log(down);
		commit("handleMutationsDown", down.data)
	},
	handleHot({
		commit
	}, hot) {
		// console.log(hot);
		commit("handleMutationsHot", hot.data)
	},
	handleHotBottom({
		commit
	}, hotBottom) {
		// console.log(hotBottom);
		commit("handleMutationsHotBottom", hotBottom.data)
	},
	handleFooterTop({
		commit
	}, footerTop) {
		// console.log(footerTop);
		commit("handleMutationsFooterTop", footerTop.data)
	},
	handleFooterCenter({commit}, footerCenter) {
		// console.log(footerCenter);
		commit("handleMutationsFooterCenter", footerCenter.data)
	},
	
	// async handleHomeData({
	// 	commit
	// }) {
	// 	let data = await HomeData({
	// 		"servicename": "gettravelinfoindexv838",
	// 		"interfaceid": "poialdapi.gettravelinfoindexv838",
	// 		"requrl": "http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx",
	// 		"reqbody": {
	// 			"cityId": 0,
	// 			"countryId": 0,
	// 			"oldCityId": 0,
	// 			"oldCountryId": 0,
	// 			"czCityId": 0,
	// 			"requestPlatfrom": "h5"
	// 		},
	// 		"iscache": "0"
	// 	});
	// 	// console.log(data);
	// 	// console.log(data.response.body);
	// 	commit("handleHomeData", data.response.body);
	// 	// let dat = await HomeDat({startcity: 53,categoryid: 6,startcityname: "北京"});
	// 	// console.log(dat)

	async handleHomeData({commit}){
		 let datacityRaiders = await HomeData({
			"servicename": "getpocketstrategycitylist",
			"interfaceid": "poialdapi.getpocketstrategycitylist",
			"requrl": "http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx",
			"reqbody": {
				"requestPlatfrom": "h5"
			},
			"iscache": "0"
		})
		commit("handledatacityRaiders", datacityRaiders.response.body)
		console.log(datacityRaiders.response.body)
		
		
		let datadetails = await HomeData({
		
			"servicename": "getpocketguidedetailinfo",
			"interfaceid": "poialdapi.getpocketguidedetailinfo",
			"requrl": "http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx",
			"reqbody": {
				"selectCityId": "133",
				"topicId": "0",
				"requestPlatfrom": "h5"
			},
			"iscache": "0"
		})
		commit("handlemoredetails", datadetails.response.body)
console.log(datadetails)

	}
	
}
