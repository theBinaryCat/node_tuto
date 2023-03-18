const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://aissanianouar3:Anouar1998@cluster0.eepajzn.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose
    .connect(connectionString)
    .then(()=>console.log('CONNCTED TO THE DB ...'))
    .catch((err)=>console.log(err))