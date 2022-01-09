const express=require("express")
const app=express()
const Jobdetails=require("../model/jobschema")
const router=express.Router();
router.post('/',async function(req,res){
    try{
        const{name,job,experience,location}=req.body;
        await Jobdetails.create({name,job,experience,location});
    }catch(e){
        console.log(e)
    }
})
router.get("/",async function(req,res){
    try{
        const job=await Jobdetails.find()
        return res.json({
            status:"success",
            message:"nhjvAJKBCVJHWSVC",
            job
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message,
            
        })
    }
})


module.exports=router