const express= require('express');
const bodyParser= require('body-parser');


const books= require('./route/book');


const app= express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","OPTIONS, GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization");
    next();
})

app.use('/book/api', books);





const port = process.env.PORT || 3000;


app.listen(port, console.log('this is listining at port 3000'))