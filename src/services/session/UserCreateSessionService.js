const { compare } = require("bcryptjs")
const AppError = require("../../utils/AppError")
const authConfig = require("../../Config/auth")
const { sign } = require("jsonwebtoken")

class UserCreateSessionService {
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute({ email, password, res }){
        const user = await this.userRepository.find(email, "email")
        if(!user){
            throw new AppError("Email e/ou senha incorreta", 401)
        }
        const checkPassword = await compare(password, user.password)
        if(!checkPassword){
            throw new AppError("Email e/ou senha incorreta", 401)
        }

        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true
        })

        delete user.password

        return user
    }
}

module.exports = UserCreateSessionService