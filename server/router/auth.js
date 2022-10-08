const express = require('express');
//const { append } = require('vary');
const router = express.Router();
//require('../db/conn')
const User=require("../model/userSchema")


router.get('/', (req, res) => {
    res.send(`Hello world from the router server `);
});
// router.post('/register', (req,res)=>{
//     const {name,password}=req.body;
//     if(!name || !password){
//         return res.status(422).json({error:"Pls fill field properly"});
//     }
//     User.findOne({name:name}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Name already exists"});
//         }
//         const user =new User({name,password});

//         user.save().then(()=>{
//             res.status(201).json({message:"registration done successfully"})
//         }).catch((err)=>res.status(500).json({error:"Failed to register"}))
//     }).catch(err =>{console.log(err);});
    
//     //     console.log(req.body);
//     //    res.json({message:req.body});
//     //    res.send(req.body);

// });

router.post('/Login', async (req,res)=>{
    const {name,password}=req.body;
    if(!name || !password){
        return res.status(422).json({error:"Pls fill field properly"});
    }

    try{
       const userExist= await User.findOne({name:name});
       if(userExist){
        return res.status(422).json({error:"Name already exists"});
    }

    const user =new User({name,password});


    await user.save();
   res.status(201).json({message:"registration done successfully"})

  

    }catch(err){
        console.log(err);
    }
    
    //     console.log(req.body);
    //    res.json({message:req.body});
    //    res.send(req.body);

});


module.exports=router;