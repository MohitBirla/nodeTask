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
module.exports = {postUser,singupTable}