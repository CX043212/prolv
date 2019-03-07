export default {
    handleHomeData(state,data){
        // console.log(data.cityGuidList)
        state.cityGuidList = data.cityGuidList;
        state.tagTabList = data.tagTabList;
        state.YouJiList = data.YouJiList;
    },
    handleHomeData1(state,data){
        // console.log(data);
        state.YouJiList = data.YouJiList;
    },
    handleHomeDataRec(state,data){
        console.log(data)
        state.relCityListRec = data.list[1].relCityListRec;
        var arr1=[];
        var arr2=[];
        var arr3=[];
        console.log(state.relCityListRec)
        for(let i = 2;i <4;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr1.push(data.list[i]);
                state.listRec0 = JSON.parse(JSON.stringify(arr1));
                console.log(state.listRec0)
            } 
        }
        for(var i = 5;i <10;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr2.push(data.list[i]);
                state.listRec1 = JSON.parse(JSON.stringify(arr2));
            } 
        }
        for(var i = 11;i <data.list.length;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr3.push(data.list[i]);
                state.listRec2 = JSON.parse(JSON.stringify(arr3));
                // console.log(data.list)
            } 
        }
        state.trip = [data.list[1],data.list[4],data.list[10]]
    },
    handleHomeDataSpr(state,data){
        console.log(data)
        for(var i = 0;i < 3;i++){
            if(data.list[i].resourceId != 0){
                
                state.listSpr0.push(data.list[i]);
            } 
        }
        for(var i = 8;i < 12;i++){
            if(data.list[i].resourceId != 0){
                
                state.listSpr1.push(data.list[i]);
            } 
        }
        state.spring = [data.list[4],data.list[7]]
    },
    handleHomeDataIsl(state,data){
        state.relCityListIsl = data.list[1];
        state.island = [data.list[2],data.list[5],data.list[8],data.list[12]]
        state.relCityListIsl1 = data.list[7];
        var arr1=[];
        var arr2=[];
        var arr3=[];
        var arr4=[];
        arr3.push(data.list[3]);
        arr4.push(data.list[6]);
        state.listISl0 = JSON.parse(JSON.stringify(arr3));
        state.listISl1 =JSON.parse(JSON.stringify(arr4));
        for(let i = 9;i <11;i++){
                arr1.push(data.list[i]);
                state.listISl2 = JSON.parse(JSON.stringify(arr1));
        }
        for(var i = 13;i <16;i++){
                arr2.push(data.list[i]);
                state.listISl3 = JSON.parse(JSON.stringify(arr2));
        }
       
    },
    handleHomeDataDeo(state,data){
        state.relCityListDeo0 = data.list[0];
        state.relCityListDeo1 = data.list[9];
        state.relCityListDeo2 = data.list[19];
        state.demestic = [data.list[1],data.list[2],data.list[7]]
        var arr1=[];
        var arr2=[];
        var arr3=[];
        for(var i = 3;i < 7;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr1.push(data.list[i]);
                state.listDeo0 = JSON.parse(JSON.stringify(arr1));
            } 
        }
        for(let i = 10;i <18;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr2.push(data.list[i]);
                state.listDeo1 = JSON.parse(JSON.stringify(arr2));
            } 
        }
        for(var i = 20;i < 25;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr3.push(data.list[i]);
                state.listDeo2 = JSON.parse(JSON.stringify(arr3));
            } 
        }
       
    },
    handleHomeDataInt(state,data){
        state.relCityListInt0 = data.list[1];
        state.relCityListInt1 = data.list[10];
        state.relCityListInt2 = data.list[17];
        state.internation = [data.list[2],data.list[5],data.list[27],data.list[28]]
        var arr1=[];
        var arr2=[];
        var arr3=[];
        var arr4=[];
        arr1.push(data.list[2]);
        state.listInt0 = JSON.parse(JSON.stringify(arr1));
     
        for(var i = 7;i < 9;i++){
            arr2.push(data.list[i]);
            state.listInt1 = JSON.parse(JSON.stringify(arr2));
        }
        for(let i = 11;i <16;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr3.push(data.list[i]);
                state.listInt2 = JSON.parse(JSON.stringify(arr3));
            } 
        }
        for(var i = 18;i < 25;i++){
            if(data.list[i].resourceId != 0 && data.list[i].content != ""){
                arr4.push(data.list[i]);
                state.listInt3 = JSON.parse(JSON.stringify(arr4));
            } 
        }
    },
        handleChange(state,params){
            switch (params.type) {
                case 1:
                state.username = params.e.target.value;
                break;
                case 2:
                state.password = params.e.target.value;   
                break;
            }
        },
        handleAdd(state){
            let obj = {}
            obj.username = state.username;
            obj.password = state.password;
            state.list.user = obj;
            state.username = "";
            state.password = "";
        }
}