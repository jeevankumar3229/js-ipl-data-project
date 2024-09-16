import fs from "fs"
export default function matchesPerYear(){
    let object={}
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
    data.forEach((item)=>{
        if(item.hasOwnProperty("season")){
            object[item["season"]]= object.hasOwnProperty(item["season"]) ? object[item["season"]]+1 : 1;
        }
    })
    return object;
}

