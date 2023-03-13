const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
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

//used methods
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
