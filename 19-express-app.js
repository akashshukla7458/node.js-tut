const express= require('express')
const path= require ('path')

const app= express()
//setup static and middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))

})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})


// index.html file is also static we can send everything to public folder and every functionality will be same with no change other method is server side rendering