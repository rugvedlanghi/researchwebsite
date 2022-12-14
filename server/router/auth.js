const jwt = require('jsonwebtoken');
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
    let token;
    const {name,password}=req.body;
    if(!name || !password){
        return res.status(422).json({error:"Pls fill field properly"});
    }

    try{
       const userExist= await User.findOne({name:name});
       if(userExist){
        token = await userExist.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        });
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
// router.get('/about',  (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

module.exports=router;