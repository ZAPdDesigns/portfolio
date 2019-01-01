const express = require('express')
const path = require('path')
const server = express()

server
    .disable('x-powered-by')
    .get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'dist', 'index.html')))
    .use('/js', express.static(path.join(__dirname, 'dist', 'js')))
    .use('/css', express.static(path.join(__dirname, 'dist', 'css')))
    .use('/fonts', express.static(path.join(__dirname, 'dist', 'fonts')))
    .use('/img', express.static(path.join(__dirname, 'dist', 'img')))
    .listen(8082)