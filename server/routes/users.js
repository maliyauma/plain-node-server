const express = require('express')
const { parseConstValue } = require('graphql')
const User=require('../schema/User')
const router=express.Router()

//getting all 
router.get('/',async(req,res)=>{
  try{
  const users=await User.find()
  req.session.userId="pendeho"
  res.json(users)
  }
  catch(e){
    console.log("error getting all users ",e)
    res.status(500).json({message:e.message})
  }  
    

})

//getting one
router.get('/:id',getUser,(req,res)=>{
    const id=req.params.id
    console.log(id)
    res.send(res.user)
})

//creating one
router.post('/',async(req,res)=>{
    const user=new User({
    username:req.body.username,
 })
 try{
 const newUser=await user.save()
 res.session.user=newUser
 res.status(201).json(newUser)

 }
 catch(e){
    res.status(400).json({message:e.message})
    console.log("error adding new user  ",e)
 }
    
})

//updating one
router.patch('/:id',getUser,async(req,res)=>{
  
  if(req.body.username!==null){
   res.user.username=req.body.username
  }
  try{
   const updatedUser= await res.user.save()
    res.status(201).json(updatedUser)
    }
    catch(e){
       res.status(400).json({message:e.message})
       console.log("error  updating user  ",e)
    }
})

//deletieng one
router.delete('/:id',getUser,async(req,res)=>{
let theuser
if(req.user.username!==null){
  theuser=res.user.username
}
    try{
      await res.user.remove()
      res.json({message:"user  "+theuser+"  was deleted"})
    }
    catch(e){
      res.status(500).json({message:e.message})
      console.log("error deleting new user  ",e)
    }
})

//middleware to get a user bu id
async function getUser(req,res,next){
let user
  try{
    user=await User.findById(req.params.id)
    if(user==null){
     return res.status(404).json({message:"cannot find user"})
    }
  }
  catch(e){
  console.log("error getting user  ",e)
  return res.status(500).json({message:e.message})
  }
  res.user=user
  next()
}



module.exports=router