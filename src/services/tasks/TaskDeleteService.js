const AppError = require("../../utils/AppError")

class TaskDeleteService{
    constructor(userRepository, taskRepository){
        this.userRepository = userRepository
        this.taskRepository = taskRepository
    }

    async execute({ user_id, id }){
        const user = await this.userRepository.find(user_id, "id")
        const task = await this.taskRepository.find(id, "id")

        if(!task){
            throw new AppError("Task não encontrado")
        }

        if(user.role === "Usuário" && user.id !== task.user_id){
            throw new AppError(`Somente usuário "Administrador" pode excluir tasks de outra pessoa`)
        }

        await this.taskRepository.delete(id)
        return task
    }
}



module.exports = TaskDeleteService