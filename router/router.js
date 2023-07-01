const express =  require('express');
const { postSignupcontroller } = require('../controller/signupController');
const { postLogincontrollers } = require('../controller/loginController');
const route = express.Router()

route.post('/signup',postSignupcontroller)
route.post('/login',postLogincontrollers)

module.exports=route
