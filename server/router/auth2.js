const express = require('express');
const { async } = require('q');
//const { append } = require('vary');
const router = express.Router();
//require('../db/conn')
const Profile = require("../model/editprofileschema")


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

router.post('/edit_profiles', async (req,res)=>{
    const {name,srname,mno,edu,qua,aor,spe,tech,moc,certf,ack,shortprg,paper,project,add,exp,detail}=req.body;
    if(!name || !srname || !mno || !edu || !qua || !aor || !spe || !tech || !moc || !certf || !ack || !shortprg || !paper || !project || !add || !exp || !detail){
        return res.status(422).json({error:"Pls fill field properly"});
    }

    try{
       

    const profile = new Profile({name,srname,mno,edu,qua,aor,spe,tech,moc,certf,ack,shortprg,paper,project,add ,exp,detail});

    await profile.save();
    res.status(201).json({message:"Profile made done successfully"})

    }catch(err){
        console.log(err);
    }
});
const data = []
const demo = Profile.find((err, res) => {
    // res.json(res)
    data.push = res
    // console.log(data)
})
const getProfile = async () => {
    await demo.clone()
}

router.get('/dprofile_detail', async (req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    await getProfile()
    console.log("hello")
    res.json(data)
    console.log(data)
    // res.send(profile);
});


module.exports=router;