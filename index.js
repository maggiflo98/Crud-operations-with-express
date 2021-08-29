const express=require('express');
const bodyParser=require('body-parser')
const Path = require("path");
const colors=require('colors');
const exphbs = require("express-handlebars");

const app=express();

// hbs setup
app.set('view engine','handlebars');
app.engine("handlebars", exphbs());


const PORT=process.env.PORT||3004;

const server=app.listen(PORT,
    console.log(`server runnning ${process.env.NODE_ENV} on ${PORT}`.rainbow.bold));

    app.get("/",(req,res)=>{
        res.render("index")
    });