const AppError = require("../../utils/AppError")

class TaskUpdateService {
    constructor(userRepository, taskRepository){
        this.userRepository = userRepository
        this.taskRepository = taskRepository
    }

    async execute({ user_id, task_id, title, priority, completed }){
        const user = await this.userRepository.find(user_id, "id")
        const task = await this.taskRepository.find(task_id, "id")

        if(!task){
            throw new AppError("Task não encontrada")
        }

        if(user.role === "Usuário" && user_id !== task.user_id){
            throw new AppError(`Apenas "Administrador" pode editar tasks de outras pessoas`)
        }

        if(typeof priority !== "boolean" || typeof completed !== "boolean"){
            throw new AppError(`typeof de "priority" ou "completed" errado`)
        }

        task.title = title ?? task.title
        task.priority = priority ?? task.priority
        task.completed = completed ?? task.completed

        const taskUpdate = await this.taskRepository.update({ task })
        return taskUpdate
    }
}

module.exports = TaskUpdateService