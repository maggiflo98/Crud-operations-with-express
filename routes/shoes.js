const express=require('express');
const router= express.Router();
const db=require("../config-environment/db");
const path=require('path');



// posting shoes
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

// deleting shoes

// getting shoes
router.get("/",(req,res,next)=>{

// res.status(200).json({"successful":"successful"})

// select shoes

var sql="SELECT * FROM `shoes` ";


    db.query(sql,function (err,products_available) {
        if(err)
            throw err;
            else{
                res.json(Shoesdb);
            }
        
    });

});

router.delete('/:id',function (req,res) {

    var sql="DELETE FROM `shoes` WHERE id='"+req.params.id+"'";
        var shoes_id=req.params.id;
    
        db.query(sql,function (err,deleted) {
            if (err)
                throw err;
            else{
                res.send('deleted successfuly')
            }
    
        })
    });
    



module.exports=router;
