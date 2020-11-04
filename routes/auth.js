const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const users = require('../models/users')
const { route } = require('./user')

const router = express.Router()
const key = process.env.JWT_KEY

router.post("/login", (req, res) => {
    const {username, password} = req.body

    const userLogin = users.find(user => user.username === username && user.password === password)

    // login success
    if (userLogin) {
        const dataUser = {
            username,
            type: userLogin.type
        }

        // create jwt token
        const token = jwt.sign(dataUser, key, {expiresIn: '1h'})

        return res.status(200).send({
            code: 200,
            message: "welcome",
            data: [{ username, password, token }]
        })
    }
    
    // login failed
    return res.status(401).send({
        error: "user Doesnt Exist"
    })
})

router.post('/register', (req, res) => {
    const { username, password } = req.body

    const userRegister = users.push(req.body)

    // register success
    if (userRegister) {
        // const dataUser = {
        //     username,
        //     password,
        //     role
        // }

        return res.status(200).send({
            message: "Register is Complete",
            data: [{ username, password }]
        })
    }
    // register failed
    return res.status(401).send({
        error: "Check again your form"
    })
})

module.exports = router