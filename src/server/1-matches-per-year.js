import fs from "fs"
export default function matchesPerYear(){
    let object={};
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
    for(let index=0;index<data.length;index++){
        if(data[index].hasOwnProperty("season")){
            if(object.hasOwnProperty([data[index]["season"]]))
            {
                object[data[index]["season"]]++;
            }
            else{
                object[data[index]["season"]]=1;
            }
        }
    }
    return object;
    /*let jsondata=JSON.stringify(object,null,2)
    fs.writeFile('./src/public/output/matchesPerYear.json',jsondata,(err)=>{if(err)console.log(err.message)});*/
    

}

