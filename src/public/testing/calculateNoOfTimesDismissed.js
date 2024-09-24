import calculateNoOfTimesDismissed from "../../server/8-highest-no-of-times-dismissed.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
import writingData from "./writingData.js";
let deliveriesData= readingDeliveriesData()//calling function to read deliveries data
let output= calculateNoOfTimesDismissed(deliveriesData)//this function returns the data of the player dismissed multiple times by the same player
let jsondata=JSON.stringify(output,null,2)
writingData('./src/public/output/highestNoOfTimesDismissed.json',jsondata)//calling function to write data to the json file

