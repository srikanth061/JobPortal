const express=require('express');
const cors = require('cors');
const app=express()
const indexroutes=require("./routes/index");
const jobroutes=require('./routes/jobcards')
const jwt=require("jsonwebtoken");
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost/jobportal");


app.use(cors())


app.use(bodyParser())
app.use("/job",jobroutes);
app.use("/",indexroutes)
app.listen('5000',()=>console.log('server listening at port 5000'))