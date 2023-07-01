const LoginUser = require("../modal/loginModal")
const postLogincontrollers = async(req,res)=>{
    const dts = req.body;
    const data =await LoginUser(dts);

    res.send(data)
}

module.exports = {postLogincontrollers}