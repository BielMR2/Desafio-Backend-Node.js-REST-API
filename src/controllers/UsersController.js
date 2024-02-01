const UserRepository = require("../repositories/UserRepository")
const TaskRepository = require("../repositories/TaskRepository")

const UserCreateService = require("../services/user/UserCreateService")
const UserIndexService = require("../services/user/UserIndexService")
const UserShowService = require("../services/user/UserShowService")
const UserUpdateService = require("../services/user/UserUpdateService")
const UserDeleteService = require("../services/user/UserDeleteService")

class UsersController {
    async create(req, res){
        const { name, email, password, confirmPassword, role } = req.body

        const userRepository = new UserRepository()
        const userCreateService = new UserCreateService(userRepository)

        try {
            await userCreateService.execute({ name, email, password, confirmPassword, role })
            return res.status(201).json({ message: 'Usuário criado com sucesso' })
        } catch (error) {
            return res.status(400).json({ error })
        }
    }

    async index(req, res){
        const userRepository = new UserRepository()
        const userIndexService = new UserIndexService(userRepository)

        try {
            const users = await userIndexService.execute()
            return res.status(200).json({ users })
        } catch (error) {
            return res.status(400).json({ error })
        }
    }

    async show(req, res){
        const { id, name, email, role } = req.query

        const userRepository = new UserRepository()
        const userShowService = new UserShowService(userRepository)

        try {
            const users = await userShowService.execute({ id, name, email, role })
            return res.status(200).json({ users })
        } catch (error) {
            return res.status(400).json({ error })
        }
    }

    async update(req, res){
        const id = req.user.id
        const { name, email, oldPassword, newPassword, confirmPassword, role } = req.body

        const userRepository = new UserRepository()
        const userUpdateService = new UserUpdateService(userRepository)

        try {
            const userUpdate = await userUpdateService.execute({ id, name, email, oldPassword, newPassword, confirmPassword, role })
            return res.status(200).json(userUpdate)
        } catch (error) {
            return res.status(400).json({ error })
        }
    }

    async delete(req, res){
        const { id } = req.params
        const user_id = req.user.id

        const userRepository = new UserRepository()
        const userDeleteService = new UserDeleteService(userRepository)

        try {
            const user = await userDeleteService.execute({ user_id, id })
            return res.status(200).json({ user })
        } catch (error) {
            return res.status(400).json({ error })
        }
    }
}

module.exports = UsersController