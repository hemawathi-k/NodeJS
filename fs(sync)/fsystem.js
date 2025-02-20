const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./fs(sync)/content/first.txt','utf8')
const second=readFileSync('./fs(sync)/content/second.txt','utf8')
console.log(first)
console.log(second)
// if file not exists it creat
 // writeFileSync('./fs(sync)/content/result.txt',`Here is the result: ${first},${second}`)

 //it appends the content to existing file
writeFileSync('./fs(sync)/content/result.txt',`Here is the result: ${first},${second}`,{flag:'a'})