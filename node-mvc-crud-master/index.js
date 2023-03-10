const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const db = require('./config/mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use(express.urlencoded());



app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Server is not start");
        return false;
    }
    console.log("Server is start on port :- "+port);
})