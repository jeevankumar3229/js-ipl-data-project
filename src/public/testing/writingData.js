import fs from 'fs'
export default function writingData(path,jsonData){
    //writing data to json file
    try {
        fs.writeFileSync(path, jsonData);
    }
    catch (Error) {
        console.log(Error)
    }
}