import {ZbxData,ZbxHotData,ZbxsaleData,ZbxsaleData2,ZbxsaleData3,ZbxLikeData,ZbxLocalData,ZbxLocallistData} from "../../apis/home";
export default {
	async handleZbx({commit}){
		 let data = await ZbxData({"CityID":"226","CountryID":1,"IsAll":0,"IsAreaId":0,"IsGetMore":0,"MainPictureHeight":0,"MainPictureWidth":0,"ModulesID":6104910,"OrdeTypeID":1,"PageIndex":1,"PageSize":20,"ProvinceID":"16"} )
		
		commit("handleZbx",data)
		//console.log(data);
		
		 let hotdata = await ZbxHotData({"ContinentId":3106,"ProvinceId":16,"CityId":226,"ProjectType":24713,"AdditionalModel":[{"RequestType":25021,"RequestNum":10}]} )
		commit("handleZbxhot",hotdata)
		//console.log(hotdata);
		
		let saledata = await ZbxsaleData({"Pic":{"Height":0,"Width":0,"CutStyle":""},"CityId":"226","IsAndroid":0,"OperCode":"","OperName":""} )
		commit("handleZbxsale",saledata)
		//console.log(saledata);
		
		let saledata2 = await ZbxsaleData2({"CityID":"226","CountryID":1,"IsAll":0,"IsAreaId":0,"IsGetMore":0,"MainPictureHeight":0,"MainPictureWidth":0,"ModulesID":6104913,"OrdeTypeID":1,"PageIndex":1,"PageSize":20,"ProvinceID":"16"} )
		commit("handleZbxsale2",saledata2)
	//	console.log(saledata2);
		
		let saledata3 = await ZbxsaleData3({"CityID":"226","CountryID":1,"IsAll":0,"IsAreaId":0,"IsGetMore":0,"MainPictureHeight":0,"MainPictureWidth":0,"ModulesID":6104909,"OrdeTypeID":1,"PageIndex":1,"PageSize":20,"ProvinceID":"16"})
		commit("handleZbxsale3",saledata3)
		//console.log(saledata3);
		
		let likeData = await ZbxLikeData({"Totalcount":50,"Height":0,"Width":0,"Pagesize":50,"Page":1,"SortOrderType":0,"IsNeedShurtTour":0,"FromType":8,"FromDistance":0,"ToDistance":0,"NeedData":[0],"KeyWord":"","CityId":"226","Cityname":"","CountyId":0,"Permanentcityid":"226","Lon":120.678923,"Lat":31.324308,"Clientip":"","Environment":3,"OS":0,"MermberId":0,"ProjectId":8,"EnvVersions":0,"OperCode":"","OperName":""})
		commit("handleZbxlike",likeData)
		//console.log(likeData);
	},
	async handleLocal({commit}){
		 let data = await ZbxLocalData({"BkDate":"","Dos":-1,"ProvIds":"","CommonLbId":"","PageIndex":1,"PageSize":10,"SelectCityId":"226","LocationCityId":"226","DestinationCityId":"226","InventoryDay":"","MinDistanceLeft":0,"MinDistanceRight":0,"ResId":"","ResGd":"","AmtDT":"","OrderType":0,"OrderTypeDescending":1,"Lon":"120.678923","Lat":"31.324308","Range":"","IsEM":-1,"DistanceTp":1,"IfNear":0,"LineLbId":"","DoST":1,"DoAC":0,"RcmLbLinkLogic":0,"CommonLbLogic":1,"DeliChs":"","CityOrder":"","DoAS":0,"ActTmplId":0,"ActId":0,"PfTp":2,"InvDayLogic":0,"ScoreMode":-1,"ResTp":"","ResIdLogic":0,"ResTcRid":"","ResCityId":"","Ids":"","AbsIds":"","LbId":"","DisIconId":0,"PfId":1,"ChId":1,"IpAddress":"","StpMode":"","HotCitys":"","StAmtDT":"","Dctrack":"","Random":0,"KeyMode":0,"Ktype":-1,"ResProvId":0})
		commit("handlelocal",data)
		console.log(data);
		
		
		let listdata= await ZbxLocallistData({"LineId":"47764","OperCode":"","OperName":""})
		commit("handlelocallist",listdata)
		console.log(listdata);
		
	}
	
}