const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(3003, function() {
    console.log(`BACKEND Runing on port 3003`)
})

module.exports = server