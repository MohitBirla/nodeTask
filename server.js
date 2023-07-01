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
 .connect("mongodb+srv://ochhaneCKN:ckNashedi2023@ckncluster.f9aqza7.mongodb.net/test")
 .then(() => console.log("DB connection successful!"))
 .catch((error) => console.log(error));


Router.use(express.json())

const PORT =process.env.PORT || 8000;
app.use(Router)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})