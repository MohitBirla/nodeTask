const { postUser } = require("../modal/signupModal");

const postSignupcontroller = async(req,res)=>{
    // const img = req.file.path
    const {firstName,lastName,password,email}=req.body;
    const temp = {firstName,password,email,lastName}
    console.log(req.body,"temp") 
    const data =await postUser(temp);

    res.send(data)
}

module.exports = {postSignupcontroller}