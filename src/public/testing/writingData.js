export default function writingData(path,jsonData){
    try {
        fs.writeFileSync(path, jsonData);
    }
    catch (Error) {
        console.log(Error)
    }
}