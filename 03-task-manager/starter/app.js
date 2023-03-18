const express = require('express')
const app = express()

const port = 3000
const tasks = require('./routes/tasks.js')

app.use(express.json())
app.use('/api/v1/tasks',tasks)

app.listen((port),()=>{
    console.log(`Server is listening on port ${port} ...`)
})

