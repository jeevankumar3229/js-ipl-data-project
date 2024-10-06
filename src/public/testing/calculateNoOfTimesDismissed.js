import calculateNoOfTimesDismissed from "../../server/8-highest-no-of-times-dismissed.js";
import readingDeliveriesData from "./readingDeliveriesData.js";
let deliveriesData= readingDeliveriesData()//calling function to read deliveries data
calculateNoOfTimesDismissed(deliveriesData)//this function returns the data of the player dismissed multiple times by the same player

