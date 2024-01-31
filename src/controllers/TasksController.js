const TaskRepository = require("../repositories/TaskRepository")
const UserRepository = require("../repositories/UserRepository")

const TaskCreateService = require("../services/tasks/TaskCreateService")
const TaskDeleteService = require("../services/tasks/TaskDeleteService")

class TasksController{
    async create(req, res){
        const id = req.user.id
        const { outherUser, title, priority, completed } = req.body

        const taskRepository = new TaskRepository()
        const userRepository = new UserRepository()
        const taskCreateService = new TaskCreateService(userRepository, taskRepository)

        try {
            const taskId = await taskCreateService.execute({ id, outherUser, title, priority, completed })
            res.status(200).json({ message: "Nota criada com sucesso!", taskId })
        } catch (error) {
            return res.status(400).json({ error })
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
            console.log(error)
            return res.status(400).json({ message: "Erro ao excluir um pedido", error })
        }

    }
}




module.exports = TasksController 