// const { singupTable } = require("./signupModal");


// const LoginUserData = async(userData)=>{
//     console.log(userData,'dddd')
// try{
//     const dt = await singupTable.findOne({email:userData.email});
//     console.log(dt.password,userData.password,'111')
//     if(dt.password !== userData.password){
//             return{ status:400,message:"invalid"}
//     }
//     const {_id,name,password}=dt
//        const data = {_id,name,password}
//     return { data: data, status: 200, message: "success" };
// }

// catch(error){
//     return{ status:400,message:error.message}
// }

// }
// module.exports = {LoginUserData};   