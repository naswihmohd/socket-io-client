

const io= require('socket.io') (3001,{cors:{origin:'http://localhost:3000'}})

io.on('connection',(socket)=>{
    console.log('connected')
    socket.on('send message',(msg)=>{
        socket.broadcast.emit('recieve message',msg)
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})