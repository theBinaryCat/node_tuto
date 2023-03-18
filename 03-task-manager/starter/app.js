const express = require('express')
const app = express()
const connectDB = require('./db/connect')

const port = 3000
const tasks = require('./routes/tasks.js')

app.use(express.json())
app.use('/api/v1/tasks',tasks)

const start = async() => {
    try{
        await connectDB()
        app.listen(port,()=>{console.log(`Server is listening on port ${port} ...`)})
    } catch(error){
        console.log(error)
    }
}

start()


