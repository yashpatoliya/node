const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

const passport = require('passport');

const session = require('express-session');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(session({
    name : 'rnw',
    secret : 'milansir',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*100
    }
}))

app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Server is not start");
        return false;
    }
    console.log("Server is start on port :- "+port); 
})