const TaskRepository = require("../repositories/TaskRepository")
const UserRepository = require("../repositories/UserRepository")

const TaskCreateService = require("../services/tasks/TaskCreateService")
const TaskDeleteService = require("../services/tasks/TaskDeleteService")
const TaskIndexService = require("../services/tasks/TaskIndexService")
const TaskShowService= require("../services/tasks/TaskShowService")
const TaskUpdateService = require("../services/tasks/TaskUpdateService")

class TasksController{
    async create(req, res){
        const id = req.user.id
        const { outherUser, title, priority, completed } = req.body

        const taskRepository = new TaskRepository()
        const userRepository = new UserRepository()
        const taskCreateService = new TaskCreateService(userRepository, taskRepository)

        try {
            const taskId = await taskCreateService.execute({ id, outherUser, title, priority, completed })
            return res.status(200).json({ message: "Nota criada com sucesso!", taskId })
        } catch (error) {
            return res.status(400).json({ error })
        }
    }
    
    async index(req, res){
        const id = req.user.id

        const taskRepository = new TaskRepository()
        const userRepository = new UserRepository()
        const taskIndexService = new TaskIndexService(userRepository, taskRepository)

        try {
            const tasks = await taskIndexService.execute({ id })
            return res.status(200).json(tasks)
        } catch (error) {
            return res.status(400).json({ error })
        }
    }

    async show(req, res){
        const user_id = req.user.id
        const { task_id, title, priority, completed } = req.query

        const taskRepository = new TaskRepository()
        const userRepository = new UserRepository()
        const taskShowService = new TaskShowService(userRepository, taskRepository)

        try {
            const tasks = await taskShowService.execute({ user_id, task_id, title, priority, completed })
            return res.status(200).json(tasks)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error })
        }
    }

    async update(req, res){
        const user_id = req.user.id
        const { task_id } = req.params
        const { title, priority, completed } = req.body

        const taskRepository = new TaskRepository()
        const userRepository = new UserRepository()
        const taskUpdateService = new TaskUpdateService(userRepository, taskRepository)

        try {
            const taskUpdated = await taskUpdateService.execute({ user_id, task_id, title, priority, completed })
            return res.status(200).json({ message: "Pedido atualizado", taskUpdated })
        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar um pedido", error })
        }
    }

    async delete(req, res){
        const user_id = req.user.id
        const { id } = req.params

        const taskRepository = new TaskRepository()
        const userRepository = new UserRepository()
        const taskDeleteService = new TaskDeleteService(userRepository, taskRepository)

        try {
            const taskDelete = await taskDeleteService.execute({ user_id, id })
            return res.status(200).json({ message: "Pedido excluido", taskDelete })
        } catch (error) {
            return res.status(400).json({ message: "Erro ao excluir um pedido", error })
        }

    }
}




module.exports = TasksController 