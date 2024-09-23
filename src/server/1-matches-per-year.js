export default function matchesPerYear(matchesData){
    let matchesPerYearData={};
    for(let index=0;index<matchesData.length;index++){
        if(matchesData[index].hasOwnProperty("season")){
            if(matchesPerYearData.hasOwnProperty([matchesData[index]["season"]]))
            {
                matchesPerYearData[matchesData[index]["season"]]++;
            }
            else{
                matchesPerYearData[matchesData[index]["season"]]=1;
            }
        }
    }
    return matchesPerYearData;
}

