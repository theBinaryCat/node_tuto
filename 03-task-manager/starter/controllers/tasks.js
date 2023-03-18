//get all task
const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}
//get single task
const getSingleTask = (req, res) => {
    res.send('Get single task')
}  
//insert new task
const insertTask = (req, res) => {
    res.send('Insert new task')
}
//update task
const updateTask = (req, res) => {
    res.send('Update task')
}
//delete task
const deleteTask = (req, res) => {
    res.send('Delete task')
}

module.exports = {getAllTasks, getSingleTask, updateTask, insertTask, deleteTask}

