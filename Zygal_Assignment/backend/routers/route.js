const express=require('express')
const router=express.Router()
const {register,login}=require("../controllers/userController.js")


router.post("/register",register)
router.post("/login",login)






router.all('/**',function(req,res){
    res.status(404).send({
        status:false,message:"API Request is Wrong"
    })
})
module.exports=router