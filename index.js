const  http  = require("http")
const url = require("url")
const fs = require('fs')

const app = require("./app")
const hostname = "127.0.0.1"
const port = 3001

const server = http.createServer(app)

server.listen(port, hostname, () => console.log("server listening on port " +port))