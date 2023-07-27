const express = require('express')
const server = express()
const mainRouter = require('./main/main-router')

server.use(express.json())
server.use('/api/main', mainRouter)

server.get('/', (req, res) => {
    res.json({api: 'up'})
})




server.use(( err, req, res, next ) => { //eslint-disable-next-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server