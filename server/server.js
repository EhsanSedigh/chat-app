const path = require('path');
const express = require('express');

var app = express();

const port = process.env.port || 3000 ;

var publicPath = path.join(__dirname,"../public");

app.use(express.static(publicPath));


app.listen(3000,()=>{
    console.log(`Server Run On Port: ${port}`)
})






