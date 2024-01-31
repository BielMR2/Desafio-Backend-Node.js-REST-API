const AppError = require("../../utils/AppError")

class UserCreateService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute(){
        const users = await this.userRepository.index()
        return users
    }
}

module.exports = UserCreateService