const express = require("express");
const mongoose = require("mongoose");
const Router = require("./nodeTask/controller/router/router")
var cors = require('cors')
var app = express()
app.use(cors({origin:'*'}))
//  mongoose.connect(process.env.DB_URL);



var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

 mongoose
 .connect("mongodb://localhost:27017/task")
 .then(() => console.log("DB connection successful!"))
 .catch((error) => console.log(error));


Router.use(express.json())

const PORT =process.env.PORT || 8000;
app.use(Router)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})