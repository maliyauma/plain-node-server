const mongoose = require("mongoose");
 const userSchema=new mongoose.Schema({
     username:{
     type:String,
     required:true
     },
     
    createdon:{
    type:Date,
    required:true,
    default:Date.now
    } 
 })

 module.exports =mongoose.model('user',userSchema)