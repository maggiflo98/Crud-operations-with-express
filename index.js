const express=require('express');
const bodyParser=require('body-parser')
const Path = require("path");
const colors=require('colors');
const flash = require('express-flash');
const exphbs = require("express-handlebars");



const app=express();
// routes
const shoesRouter=require("./routes/shoes");




require("dotenv").config({ path:"./config-environment/config.env" }); 



app.use(express.static(__dirname + 'public/'));
app.use(express.static('public'));
app.use('/shoes',shoesRouter);

// hbs setup
app.set('view engine','handlebars');
app.engine("handlebars", exphbs());




// middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/shoes',shoesRouter);

app.get("/",(req,res)=>{
    res.render("index")
});

 const PORT=process.env.PORT||4001;



const server=app.listen(PORT,
    console.log(`server runnning ${process.env.NODE_ENV} on ${PORT}`.rainbow.bold));
