import fs from "fs"
export default function calculateTeamWonTossAndMatch(){
    let object={};
    let data=JSON.parse(fs.readFileSync('./src/data/matches.json','utf-8',(err,data)=>{if(err) console.log("Error")}));
    for(let index=0;index<data.length;index++){
        if(data[index].hasOwnProperty("toss_winner") && data[index].hasOwnProperty("winner")){
            if(data[index]['toss_winner']=== data[index]['winner']){
                if(object.hasOwnProperty([data[index]["winner"]]))
                    {
                        object[data[index]["winner"]]++;
                    }
                    else{
                        object[data[index]["winner"]]=1;
                    }
            }
        }
    }
    return object;
    

}
