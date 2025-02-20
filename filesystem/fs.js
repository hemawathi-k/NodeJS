const fs=require('fs');


// Read File
fs.readFile('./text.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

// write file
fs.writeFile('./writefile.txt','This is write file content',()=>{
    console.log('Written successfully!');
});


//create folder
fs.mkdir('./dir',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Folder created successfully')
})

//delete files

fs.unlink('./writefile1.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Deleted!')
});