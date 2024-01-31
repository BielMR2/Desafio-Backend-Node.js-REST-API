class TaskIndexService {
    constructor(userRepository, taskRepository){
        this.userRepository = userRepository
        this.taskRepository = taskRepository
    }

    async execute({ id }){
        const user = await this.userRepository.find(id, "id")
        let tasks

        if(user.role === "Administrador"){
            tasks = await this.taskRepository.indexAdmin()
        } else {
            tasks = await this.taskRepository.index(id)
        }
        
        if(!tasks){
            return "Nenhuma task cadastrada"
        }

        return tasks
    }
}


module.exports = TaskIndexService