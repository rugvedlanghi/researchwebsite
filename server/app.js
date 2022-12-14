const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const User= require('./model/userSchema');

const Profile= require('./model/editprofileschema');
const app = express();
//app.use(require('./router/auth'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

app.use(require('./router/auth'));
app.use(require('./router/auth2'));
//require('./db/conn');
//app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
//const User1= require('./model/editprofileschema');
//app.use(require('./router/auth2'));
dotenv.config({path:'./config.env'});
require('./db/conn');
const PORT = process.env.PORT;

// const DB = 'mongodb+srv://shreyash:shreyash@cluster0.urfkzxs.mongodb.net/mernwebsite?retryWrites=true&w=majority'



// Middelware 
const middleware = (req,res, next) => {
    console.log(`Hello my Middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello world from the server app.js`);
});

// app.get('/about', middleware, (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})