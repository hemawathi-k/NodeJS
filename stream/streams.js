const fs=require('fs');
const readStream=fs.createReadStream('./content.txt');
readStream.on(`data`,(chunk)=>{
    console.log('-------------NEW CHUNK -----------------');
    console.log(chunk)
});