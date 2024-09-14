import fs from "fs"
export default function calculateNoOfTimesDismissed(){
    let bowlerArray=[]
    let fileteredArray=[]
    let object1={}
    let object={}
    let data=JSON.parse(fs.readFileSync('./src/data/deliveries.json','utf-8',(err)=>{if(err) console.log("Error")}));
    for(let index=0;index<data.length;index++){
        if(data[index]["dismissal_kind"]==='caught' || data[index]["dismissal_kind"]==='run out' || data[index]["dismissal_kind"]==='lbw'){
            fileteredArray.push(data[index])
        }
    }
    for(let index1=0;index1<fileteredArray.length;index1++){
        if(bowlerArray.includes(fileteredArray[index1]['bowler'])){
            continue;
        }
        else{
            bowlerArray.push(fileteredArray[index1]['bowler'])
        }
    }
    for(let index2=0;index2<bowlerArray.length;index2++){
        object[bowlerArray[index2]]={}
        for(let index3=0;index3<fileteredArray.length;index3++){
            if(fileteredArray[index3].hasOwnProperty("bowler")){
                if(fileteredArray[index3]['bowler'] === bowlerArray[index2]){
                    if(object[bowlerArray[index2]].hasOwnProperty(fileteredArray[index3]['batsman'])){
                        object[bowlerArray[index2]][fileteredArray[index3]['batsman']]++;
                    }
                    else{
                        object[bowlerArray[index2]][fileteredArray[index3]['batsman']]=1;
                    }
                }
            }
        }
    }
    let playerName;
    let maxvalue=0;
    //to convert set of batsman in each baller to one batsman with most no of times dismissed
    for(let key1 in object){
        for(let key2 in object[key1]){
            if(maxvalue<object[key1][key2]){
                maxvalue=object[key1][key2]
                playerName=key2
            }
            
        }
        object[key1]={"name":playerName,"noofTimesDismissed": maxvalue}
        maxvalue=0;
    }
    let ballerName=""
    playerName=""
    //to get the player with max no of times dismissed
    for(let key1 in object){
        for(let key2 in object[key1]){
            if(maxvalue<object[key1][key2]){
                maxvalue=object[key1][key2]
                playerName=object[key1]["name"]
                ballerName=key1;
            }
        } 
    }

    object1[ballerName]={"name":playerName,"noofTimesDismissed": maxvalue}
    
    return object1;

    
}