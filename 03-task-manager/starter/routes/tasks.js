const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    getSingleTask,
    updateTask,
    insertTask,
    deleteTask} = require('../controllers/tasks.js')

router.route('/').get(getAllTasks).post(insertTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router