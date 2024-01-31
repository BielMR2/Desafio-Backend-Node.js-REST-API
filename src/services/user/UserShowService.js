const AppError = require("../../utils/AppError")

class UserShowService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({ id, name, email, role }){
        const users = await this.userRepository.show({ id, name, email, role });
        if(users.length === 0){
            return "Nenhum usuário encontrado!"
        }
        return users
    }
}

module.exports = UserShowService