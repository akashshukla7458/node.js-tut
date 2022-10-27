const eventEmitter= require('events')
const customEmitter= new eventEmitter()
customEmitter.on('response',(name,id)=>{
    console.log(`data received user ${name} with id:${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
customEmitter.emit('response','john',34)

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
