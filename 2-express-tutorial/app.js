const express = require('express')
const app = express()
const logger = require('./logger')

//req => middleware => res

app.use('/api',logger) //it works with every url starts with api

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen((5000),() => {
    console.log('Server is listening on port 5000...')
})