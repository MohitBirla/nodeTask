// const LoginUser = require("../modal/loginModal")

const { LoginUserData } = require("../modal/signupModal");

// const LoginUser = require("../modal/loginModal")
const postLogincontrollers = async(req,res)=>{
    const dts = req.body;
    const data =await LoginUserData(dts);

    res.send(data)
}

module.exports = {postLogincontrollers}