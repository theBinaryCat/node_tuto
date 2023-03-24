const Task = require('../models/task.js')
const asyncWrapper = require('../middleware/async.js')
const {createCustomerError} = require ('../errors/custom-error')
//get all task
const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})
//get single task
const getSingleTask = asyncWrapper( async (req, res, next) => {

    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return next(createCustomerError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({task})

}) 
//insert new task
const insertTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})
//update task
const updateTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params
    const task = await Task.findByIdAndUpdate({_id:taskID}, req.body,{
        new: true,
        runValidators: true,
    })
    if(!task){
        return next(createCustomerError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({task})
    res.send('Update task')
})
//delete task
const deleteTask = asyncWrapper( async (req, res) => {
    const{id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({task})
})

module.exports = {getAllTasks, getSingleTask, updateTask, insertTask, deleteTask}

