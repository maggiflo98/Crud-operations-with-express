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
  console.log(req.body.name)

  var sql="INSERT INTO `shoes`(`id`, `name`, `brand`, `price`, `contact`) VALUES (NULL,'"+name+"','"+brand+"','"+price+"','"+contact+"')";

    db.query(sql,function(err,res){
        if(err){
            throw err;
        }
    
    })
});



// // getting shoes



router.get('/',function (req,res,next) {
    res.send('successful')
    var  sql="SELECT * FROM `shoes`";
     db.query(sql,(err,res)=>{
        if(err) throw err;
        else{
            
        }
        
     })
       
        
     
     
    
});








// delete route
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
    
    // update
    router.put("/:id",(req,res)=>{
        var shoes_id=req.params.id;
        var name=req.body.name;
        var brand=req.body.brand;
        var price=req.body.price;
        var contact=req.body.contact;

        var sql="UPDATE `shoes` SET `id`='"+shoes_id+"',`name`='"+name+"',`brand`='"+brand+"',`price`='"+price+"',`contact`='"+contact+"' WHERE id='"+shoes_id+"'";
        

            db.query(sql,function (err,deleted) {
                if (err)
                    throw err;
                else{
                    res.send('updated successfuly')
                }
        
            })
        
    })
    



module.exports=router;
