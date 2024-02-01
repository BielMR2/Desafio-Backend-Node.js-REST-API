const { hash } = require("bcryptjs")
const AppError = require("../../utils/AppError")

class UserCreateService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({ name, email, password, confirmPassword, role }){
        
        if(!name || !email || !password || !confirmPassword || !role){
            throw new AppError("Dados faltando!")
        }

        if(role !== "Usuário" && role !== "Administrador"){
            throw new AppError("Cargo não autorizado.", 401);
        }

        const user = await this.userRepository.find(email, "email")
        if (user) {
            throw new AppError("Este e-mail já está em uso.", 401);
        }

        if(password !== confirmPassword){
            throw new AppError("As senhas não coincidem. Por favor, verifique e tente novamente.", 401)
        }

        const hashedPassword = await hash(password, 10)

        const userCreated = await this.userRepository.create({ name, email, password: hashedPassword, role })
        return userCreated
    }
}

module.exports = UserCreateService