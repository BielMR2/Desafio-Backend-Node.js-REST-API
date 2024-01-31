class TaskShowService {
    constructor(userRepository, taskRepository){
        this.userRepository = userRepository
        this.taskRepository = taskRepository
    }

    async execute({ user_id, task_id, title, priority, completed }){
        const user = await this.userRepository.find(user_id, "id")
        let tasks

        if(user.role === "Administrador"){
            tasks = await this.taskRepository.show({ task_id, title, priority, completed })
        } else {
            tasks = await this.taskRepository.show({ user_id, task_id, title, priority, completed })
        }
        
        if(!tasks){
            return "Nenhuma task encontrada!"
        }

        return tasks
    }
}

module.exports = TaskShowService