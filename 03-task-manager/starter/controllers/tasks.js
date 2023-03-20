const Task = require('../models/task.js')
const asyncWrapper = require('./middleware/async.js')

//get all task
const getAllTasks = asyncWrapper( async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
})
//get single task
const getSingleTask = async (req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}  
//insert new task
const insertTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg:error})
    }
}
//update task
const updateTask = async (req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body,{
            new: true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
    res.send('Update task')
}
//delete task
const deleteTask = async (req, res) => {
    try{
        const{id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({error})
    }
}

module.exports = {getAllTasks, getSingleTask, updateTask, insertTask, deleteTask}

