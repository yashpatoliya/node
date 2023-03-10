const express = require('express');

const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

const indexcontroller = require('./controllers/indexController')

app.get('/', indexcontroller.index);

app.listen(9000,(err)=>{
    if(err){
        console.log('server not started.');
        return false;
    }else{
        console.log('server started.');
    }
})



