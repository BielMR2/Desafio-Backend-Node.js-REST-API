const { hash, compare } = require("bcryptjs")
const AppError = require("../../utils/AppError")

class UserUpdateService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({ id, name, email, oldpassword, newPassword, confirmPassword, role }){
        const user = await this.userRepository.find(id, "id") 
        if(!user){
            throw new AppError("Usuário não cadastrado!", 401)
        }

        const checkEmailInUse = await this.userRepository.find(email, "email")
        if(checkEmailInUse && checkEmailInUse.id != id){
            throw new AppError("Esse email já está em uso!")
        }


        if(role !== "Administrador" && role !== "Usuário"){
            throw new AppError(`Cargo ou sintaxe errado do cargo! ("Administrador", "Usuário")`)
        }

        if(!oldpassword || !newPassword || !confirmPassword){
            throw new AppError("Você precisa informar a senha antiga/nova para definir a nova senha!")
        }

        if(oldpassword && newPassword){
            const checkOldPassword = await compare(oldpassword, user.password)

            if(!checkOldPassword){
                throw new AppError("A senha antiga não confere!")
            }

            user.password = await hash(newPassword, 8)
        }

        user.name = name ?? user.name
        user.email = email ?? user.email
        user.role = role ?? user.role

        const userUpdate = await this.userRepository.update({ id, user })
        return userUpdate
    }
}

module.exports = UserUpdateService