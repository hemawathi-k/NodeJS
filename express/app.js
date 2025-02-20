const express=require('express')
const app=express();

//listen to port

app.listen(5000);

// app.get('/',(req,res)=>{
//     res.send('<p>Home Page!</p>')
// })

// app.get('/about',(req,res)=>{
//     res.send('<p>About Page...</p>')
// })

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
})

app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname});
})

//redirect

app.get('/about-us',(req,res)=>{
res.redirect('/about');
})

//404page

app.use((req,res)=>{
    res.status(404).sendFile('./404.html',{root:__dirname})
})