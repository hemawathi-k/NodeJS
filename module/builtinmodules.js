//os
const os=require('os');
const user=os.userInfo();
console.log(user)
console.log(`The system uptime ${os.uptime()} seconds`)


const currentOS={
    name:os.type(),
    release:os.release(),
    totmemory:os.totalmem(),
    freememory:os.freemem()
}

console.log(currentOS);



//path
const path=require('path')

console.log(path.sep);

const filepath=path.join('/folder','subfolder','text.txt')
console.log(filepath);

const base=path.basename(filepath)
console.log(base)

const absolute=path.resolve(__dirname,'folder','subfolder','text.txt')
const file=path.basename(__filename)
console.log(file)
console.log(absolute)