const mongoose=require("mongoose");

const jobschema=mongoose.Schema({
    name:{type:"string"},
    job:{type:"string"},
    experience:{type:"string"},
    location:{type:"string"},
    user:{type:mongoose.Types.ObjectId,ref:"User"}
});

const Jobdetails=mongoose.model("Job",jobschema);

module.exports=Jobdetails;
