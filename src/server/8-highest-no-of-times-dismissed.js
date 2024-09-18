export default function calculateNoOfTimesDismissed(deliveriesData){
    let filteredArray=[]
    let object={}
    
    filteredArray=deliveriesData.filter((item)=>{
        if(item.hasOwnProperty('dismissal_kind')){
            if(item["dismissal_kind"]==='caught' || item["dismissal_kind"]==='run out' || item["dismissal_kind"]==='lbw'){
                return item;
            }
        }
    })

    filteredArray.forEach((item)=>{
        if(item.hasOwnProperty("bowler") && item.hasOwnProperty('batsman')){
            if(object.hasOwnProperty(item['bowler'])){
                if(object[item['bowler']].hasOwnProperty(item['batsman'])){
                    object[item['bowler']][item['batsman']]=object[item['bowler']][item['batsman']]+1
                }
                else{
                    object[item['bowler']][item['batsman']]=1
                }
            }
            else{
                object[item['bowler']]={}
                object[item['bowler']][item['batsman']]=1
    
            }
        }
    })
    let filteredArray2=Object.entries(object).map(([ballerName,batsmanDetails])=>{
        let innerOutput=Object.entries(batsmanDetails).reduce((acc,[batsmanName,count])=>{
            if(acc["dismissedCount"] < count){
                acc["dismissedCount"]=count
                acc["Name"]=batsmanName
            }
            return acc;
        },{"Name":"","dismissedCount":0})
        return [ballerName,innerOutput]
    })



    let filteredArray3= filteredArray2.reduce((acc,[ballername,batsmanDetails])=>{
        let keys=Object.keys(batsmanDetails)
        if(acc[0][1]["dismissedCount"] < batsmanDetails[keys[1]]){
            acc[0][0]=ballername
            acc[0][1]["name"]=batsmanDetails[keys[0]]
            acc[0][1]["dismissedCount"]=batsmanDetails[keys[1]]
        }
        return acc;
    },[["",{"name":"", "dismissedCount":0}]])

    return Object.fromEntries(filteredArray3)
    
}