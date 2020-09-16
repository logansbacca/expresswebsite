const express = require("express");
const app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
app.use(cors());
const router = express.Router();
let userArray = [];

app.use(bodyParser());
app.post('/user',function(request,response) {
    userArray.push(request.body);
    response.send({
        message : "user sucesfully obtained",
        data: userArray
    })
} )

app.get('/user',function(request,response) {
    response.send({
        message : "user sucesfully obtained",
        data: userArray
    })
} ) 

app.use('/',function (request, response) {
    response.send({
        message : "welcome to our api",
        data: {
            name: "first api"
        }
    })
})

app.listen(3000, function(){
    console.log("server running on port 3000");
})

