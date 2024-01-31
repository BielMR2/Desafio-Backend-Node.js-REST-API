const AppError = require("../../utils/AppError")

class TaskCreateService{
    constructor(userRepository, taskRepository){
        this.userRepository = userRepository
        this.taskRepository = taskRepository
    }

    async execute({ id, outherUser, title, priority, completed }){
        const user = await this.userRepository.find(id, "id")
        let targetUser

        if(user.role === "Usuário" && outherUser){
            throw new AppError('Somente usuário "Administrador" pode criar notas para outro usuário!')
        }
        if(outherUser){
            targetUser = await this.userRepository.find(outherUser, "id")

            if(!targetUser){
                throw new AppError('Usuário não encontrado!')
            }
        }

        if(typeof title !== "string" || typeof priority !== "boolean" || typeof completed !== "boolean"){
            throw new AppError('Typeof dos dados errados!')
        }

        if(user.role === "Administrador" && outherUser){
            const taskId = await this.taskRepository.create({ outherUser, title, priority, completed })
            return taskId
        } else {
            const taskId = await this.taskRepository.create({ id, title, priority, completed })
            return taskId
        }
    }
}


module.exports = TaskCreateService