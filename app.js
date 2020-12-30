const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

 
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



const config = require('./config/database');
const user = require('./routes/users');
app.use(express.static(path.join(__dirname, "public")));

const connection = mongoose.connect(config.database);
if(connection) {
    console.log("database must connected");
}
else {
    console.log("database not connected");
}

app.use('/user',user);



app.get("/", function(req,res){
        res.send("hello world");
});

app.listen(port, function () {
        console.log("listening to port" + port);
});