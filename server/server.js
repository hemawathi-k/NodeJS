// server creation 
const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
console.log(req.url,req.method)

//setheader method content type
res.setHeader('Content-Type','text/html')
//res.write('hello guys')
//res.end();

//routing 
let path='./views/'
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode=200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode=200;
        break;  

    //redirecting
    
    case '/about-me':        
        res.statusCode=301;
        res.setHeader('Location','/about')
        res.end();
        break;

    default:
        path += '404.html'
        res.statusCode=404;
        break;
    }





//sending html page
//fs.readFile('./views/index.html',(err,data)=>{
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();

    }
})
});

//listening to 3000 port
server.listen(3000,'localhost',()=>{
    console.log('server is listening for request from port number 3000')
})