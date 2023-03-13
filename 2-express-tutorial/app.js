const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.get('/about', (req, res)=> {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})