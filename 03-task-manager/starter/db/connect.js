const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://aissanianouar3:Anouar1998@cluster0.eepajzn.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url)=>{
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB
