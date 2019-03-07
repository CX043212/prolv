import {HomeData, HomeDat} from "../../apis/home";
export default {
   async handleHomeData({commit}){
        let data = await HomeData({"servicename":"gettravelinfoindexv838","interfaceid":"poialdapi.gettravelinfoindexv838","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"cityId":0,"countryId":0,"oldCityId":0,"oldCountryId":0,"czCityId":0,"requestPlatfrom":"h5"},"iscache":"0"});
        // console.log(data);
        // console.log(data.response.body);
        commit("handleHomeData",data.response.body);
        // let dat = await HomeDat({startcity: 53,categoryid: 6,startcityname: "北京"});
        // console.log(dat)
        let data1 = await HomeData({"servicename":"getdaybestlist","interfaceid":"youji.getdaybestlist","requrl":"http://tcmobileapi.17usoft.com/youji/youjiresource.ashx","reqbody":{"destID":0,"pageIndex":1,"pageSize":6,"searchType":1,"requestPlatfrom":"h5"},"iscache":"0"})
        commit("handleHomeData1",data1.response.body)
        let dataIsl = await HomeData( {"servicename":"getrecommendarticlelistv838","interfaceid":"poialdapi.getrecommendarticlelistv838","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"tabId":"387","requestPlatfrom":"h5"},"iscache":"0"})
        commit("handleHomeDataIsl",dataIsl.response.body)
        // console.log(dataIsl.response.body)
        let datarec = await HomeData({"servicename":"getrecommendarticlelistv838","interfaceid":"poialdapi.getrecommendarticlelistv838","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"tabId":"375","requestPlatfrom":"h5"},"iscache":"0"})
        commit("handleHomeDataRec",datarec.response.body)
        // console.log(this)
        let dataspr = await HomeData({"servicename":"getrecommendarticlelistv838","interfaceid":"poialdapi.getrecommendarticlelistv838","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"tabId":"385","requestPlatfrom":"h5"},"iscache":"0"})
        commit("handleHomeDataSpr",dataspr.response.body)
        

        let datadeo = await HomeData({"servicename":"getrecommendarticlelistv838","interfaceid":"poialdapi.getrecommendarticlelistv838","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"tabId":"376","requestPlatfrom":"h5"},"iscache":"0"})
        commit("handleHomeDataDeo",datadeo.response.body)

        let dataint = await HomeData({"servicename":"getrecommendarticlelistv838","interfaceid":"poialdapi.getrecommendarticlelistv838","requrl":"http://tcmobileapi.17usoft.com/aladdin/QueryHandler.ashx","reqbody":{"tabId":"377","requestPlatfrom":"h5"},"iscache":"0"})
        commit("handleHomeDataInt",dataint.response.body)


        // let dataJump = await HomeData(
        //     {"servicename":"gettopicinfos","interfaceid":"poialdapi.gettopicinfos","requrl":"http://tcmobileapi.17usoft.com/aladdin/queryHandler.ashx","reqbody":{"trId":"1852","cityId":0,"dwCityId":0,"isNetwork":true,"requestPlatfrom":"h5"},"iscache":"0"}
        // ) 
        // commit("handleHomeDateJump",dataJump.response.body)
      
        
    },
    handleChange({commit},params){
        commit("handleChange",params)
    },
}