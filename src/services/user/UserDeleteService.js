const AppError = require("../../utils/AppError")

class UserDeleteService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({ user_id, id }){
        const userSendReq = await this.userRepository.find(user_id, "id")
        const user = await this.userRepository.find(id, "id")
        
        if(userSendReq.role === "Usuário" && user.id !== user_id){
            throw new AppError(`Somente usuário "Administrador" pode deletar outras contas!`)
        }
        
        if(!user){
            throw new AppError("Usuário não encontrado!", 401)
        }

        await this.userRepository.delete(id)
        return user
    }
}

module.exports = UserDeleteService