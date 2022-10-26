const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./contents/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    const first= result
    readFile('./contents/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second= result
        writeFile('./contents/result-async.txt',`here is the result : ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
                }
                console.log('done with the task')
        })
    })
})
console.log('starting next task');