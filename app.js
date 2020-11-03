const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
const urlecondedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.use((req, res, next) => {
    next()
})

let users = [
    {
        username : "acong",
        email : "acong@user.com",
        password : "acong123"
    }, {
        username : "ucang",
        email : "ucang@user.com",
        password : "ucang"
    }, {
        username : "acing",
        email : "acing@user.com",
        password : "acing123"
    }, {
        username : "ucong",
        email : "ucong@user.com",
        password : "ucong123"
    }
]

app.get("/users", (req, res)=>{
    res.send(users)
})

app.get("/test", (req, res)=>{
    res.send({
        message: "Hello"
    })
})

app.get("/users", (req, res)=>{
    res.send({
        message: "Hello"
    })
})

app.post("/users/:userId", (req, res)=>{
    res.send({
        
        message: `Hello ${rew. params.userId}!!`
    })
})

app.post("/login", (req, res)=>{
    console.log("req: ", req.body);
    res.send({
        message: "Hello"
    })
})

app.post("/register", (req, res)=>{
    console.log("req: ", req.body);
    res.send({
        message: "Hello"
    })
})

module.exports = app