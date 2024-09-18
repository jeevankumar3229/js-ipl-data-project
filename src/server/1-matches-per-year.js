export default function matchesPerYear(matchesData){
    let object={}
    matchesData.forEach((item)=>{
        if(item.hasOwnProperty("season")){
            object[item["season"]]= object.hasOwnProperty(item["season"]) ? object[item["season"]]+1 : 1;
        }
    })
    return object;
}

