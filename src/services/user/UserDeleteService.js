const AppError = require("../../utils/AppError")

class UserDeleteService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({ id }){
        const user = await this.userRepository.find(id, "id")
        if(!user){
            throw new AppError("Usuário não encontrado!", 401)
        }

        await this.userRepository.delete(id)
        return user
    }
}

module.exports = UserDeleteService