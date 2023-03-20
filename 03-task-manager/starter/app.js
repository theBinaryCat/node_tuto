const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000
const tasks = require('./routes/tasks.js')
const notFound = require('./middleware/notFound.js')

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{console.log(`Server is listening on port ${port} ...`)})
    } catch(error){
        console.log(error)
    }
}

start()


