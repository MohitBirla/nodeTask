const express =  require('express');
const { postSignupcontroller } = require('../signupController');
const { postLogincontrollers } = require('../loginController');
const route = express.Router()

route.post('/signup',postSignupcontroller)
route.post('/login',postLogincontrollers)

module.exports=route
