const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;


const singup = mongoose.Schema({
    firstName:{type:String},
    email:{type:String},
    password:{type:String},
    lastName:{type:String}
},{timestamps: true, strict: false})

const singupTable = mongoose.model('users',singup)

const postUser = async(req,res)=>{
    console.log(req,res,'111')
try{
    const dt = await singupTable.create(req);
    return{ dt:dt,status:200,message:'success'}

}catch(error){
    return{ status:400,message:error.message}

}
}


const LoginUserData = async(userData)=>{
    console.log(userData,'dddd')
try{
    const dt = await singupTable.findOne({email:userData.email});
    console.log(dt.password,userData.password,'111')
    if(dt.password !== userData.password){
            return{ status:400,message:"invalid"}
    }
    const {_id,name,password}=dt
       const data = {_id,name,password}
    return { data: data, status: 200, message: "success" };
}

catch(error){
    return{ status:400,message:error.message}
}

}
module.exports = {postUser,LoginUserData}