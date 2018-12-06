var socket = io();

socket.on("connect",function(){
    console.log("Connected to server");
    socket.emit("createMessage",{
        from:"Ehsan",
        text:"Hi.Im OK"
    })
});



socket.on("disconnect",function(){
    console.log("User Has Disconnected")
});

socket.on("newMessage",function(message){
    console.log("New Message",message)
})