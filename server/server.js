const path = require('path');
const express = require('express');
const socketIO = require("socket.io");
const http = require("http");


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.port || 3000 ;

var publicPath = path.join(__dirname,"../public");


io.on("connection",(socket)=>{
    console.log("User Connected");
    


    socket.on("createMessage",(message)=>{
        console.log("createMessage",message);
        // io.emit("newMessage",{
        //     from:message.from,
        //     text:message.text,
        //     createDate:new Date().getDate(),
        // })
        socket.broadcast.emit("newMessage",{
            from:message.from,
            text:message.text,
            createDate:new Date().getDate(),
        })
    })


    
    socket.on("disconnect",()=>{
        console.log("User Disconnected")
    })
})



app.use(express.static(publicPath));


server.listen(3000,()=>{
    console.log(`Server Run On Port: ${port}`)
})






