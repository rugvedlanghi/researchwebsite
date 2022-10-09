const { integer } = require('check-types');
const mongoose = require('mongoose');
const editprofileschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    srname:{
        type:String,
        required:true
    },
   mno:{
        type:String,
        required:true
    },
    edu:{
        type:String,
        required:true
    },
    qua:{
        type:String,
        required:true
    },
    aor:{
        type:String,
        required:true
    },
    spe:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
   moc:{
        type:String,
        required:true
    },
    certf:{
        type:String,
        required:true
    },
    ack:{
        type:String,
        required:true
    },
    shortprg:{
        type:String,
        required:true
    },
    paper:{
        type:String,
        required:true
    },
    project:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    }
    





})

const User1=mongoose.model('USER',editprofileschema);
module.exports=User1;