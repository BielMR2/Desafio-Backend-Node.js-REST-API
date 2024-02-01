const AppError = require("../../utils/AppError")

class TaskCompleteService{
    constructor(userRepository, taskRepository){
        this.userRepository = userRepository
        this.taskRepository = taskRepository
    }

    async execute({ user_id, id }){
        const user = await this.userRepository.find(user_id, "id")
        const task = await this.taskRepository.find(id, "id")

        if(user.role === "Usuário" && task.user_id !== user_id){
            throw new AppError(`Somente usuário "Administrador" pode completar tasks de outra pessoa`)
        }

        if(task.completed === 1){
            throw new AppError(`Task já está marcada como completada`)
        }

        task.completed = true
        await this.taskRepository.update({ task })
        return task
    }
}


module.exports = TaskCompleteService