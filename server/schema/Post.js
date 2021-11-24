const mongoose = require("mongoose");
 const postSchema=new mongoose.Schema({
     username:{
     type:String,
     required:true
     },
    createdon:{
    type:Date,
    required:true,
    default:Date.now
    },
    title:{
    type:Date,
    required:true,
    } 
 })

 module.exports =mongoose.model('post',postSchema)