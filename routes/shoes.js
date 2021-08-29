const express=require('express');
const router= express.Router();
const db=require("../config-environment/db");
const path=require('path');

// getall shoes
router.get("/",(req,res)=>{
    

    var sql=SELECT * FROM `shoes`;
    
    db.query(sql,(err,products_available)=>{
        if(err)
            throw err;
        var context={
            products: shoes_available

        };
        res.render('products',{ products:products_available});
    });
});


router.post("/post/",(req,res)=>{
  var name=req.body.name;
  var brand=req.body.brand;
  var price=req.body.price;
  var contact=req.body.contact;

  res.json("successful")

  var sql="INSERT INTO `shoes`(`id`, `name`, `brand`, `price`, `contact`) VALUES (NULL,'"+name+"','"+brand+"','"+price+"','"+contact+"')";

    db.query(sql,function(err,res){
        if(err){
            throw err;
        }
    
    })
});
   






module.exports=router;
