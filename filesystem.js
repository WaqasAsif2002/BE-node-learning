const { error } = require('console');
const fs = require ('fs');

// Non blocking 
// fs.writeFile('Hello.txt','hello demowork','utf-8',(err)=>{
//     if (err) {
        
//     }throw err;
//     console.log("File Create Succesfully");
    
// })
// blocking
// const block = fs.writeFileSync('blocking.txt','hello Blocking code','utf-8')
// console.log(block);

// const appending = fs.appendFileSync('Hello.txt', '\nhello here appending omething','utf-8')
// console.log(appending);



// const read = fs.readFileSync('Hello.txt','utf-8')
// console.log(read);



fs.readFile('Hello.txt','utf-8',(error,result)=>{
    if (error) {
        throw error;
       
        
    }
    console.log(result);
     
})


