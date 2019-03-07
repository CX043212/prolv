import http from "../utils/http";

// export const HomeDataq = (params)=>http("post","/apis/AjaxHelper/GetDestinationList.ashx?startcity=53&categoryid=6&startcityname=%E5%8C%97%E4%BA%AC",params)//导入http返回后给HomeDate

 export const SearchData = (params)=>http("get","/apis/ajax/getyyiconn?selectCity=53",params)
 
 export const BannerData = (params)=>http("get","/apis/AjaxHelper/DestinationSearchHandler.ashx?dataType=Product&destName=%E6%9B%BC%E8%B0%B7&PageSize=10&PageIndex=1",params)

 
 
 export const HomeData = (params)=>http("post","/apis/go/RainbowHandler.ashx",params)
 
 export const ZbxData = (params)=>http("post","/apis/zby/labrador/resourceservice/getareamarketingsearchinfo/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551697916288&z=f74e69113de3453c46bbeff3296a18bb",params)
 export const ZbxHotData = (params)=>http("post","/apis/zby/labrador/resourceservice/getkeyword/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551697916289&z=7586a665811c602c40c0000b52be6dcd",params)

 export const ZbxsaleData = (params)=>http("post","/apis/zby/labrador/resourceservice/getshoppingspreeinfo/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551705716433&z=cab8099c217854e6968358602acd9fb9",params)
 
 export const ZbxsaleData2 = (params)=>http("post","/apis/zby/labrador/resourceservice/getareamarketingsearchinfo/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551745758135&z=de513f89f46a9d681b18a3b2ff76da85",params)
 
 
 export const ZbxsaleData3 = (params)=>http("post","/apis/zby/labrador/resourceservice/getareamarketingsearchinfo/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551754349712&z=5a8a36bd15b8d0adbafb43c7180974b7",params)
 
 
 export const ZbxLikeData = (params)=>http("post","/apis/zby/labrador/resourceservice/gethotselftripinfo/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551755899307&z=833ec4b2a43d121fa9eb5b860f9f1d7b",params)
 
  export const ZbxLocalData = (params)=>http("post","/apis/zby/labrador/resourceservice/linesearch/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551774220802&z=09170b4c93c365ec0d33a4bb6e2c375e",params)
  
  export const ZbxLocallistData = (params)=>http("post","/apis/zby/labrador/lineservice/getlinepackageresourceinfo/?x=ec6fb3cb-4f5c-40da-a1e7-a4c924371617&y=1551791581358&z=cc29be61b84a062a31ea6a68f33cf24e",params)
 
 