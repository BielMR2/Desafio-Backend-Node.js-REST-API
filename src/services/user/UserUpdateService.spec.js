const UserCreateService = require("./UserCreateService")
const UserUpdateService = require("./UserUpdateService")
const UserRepositoryInMemory = require("../../repositories/UserRepositoryInMemory")
const AppError = require("../../utils/AppError")

describe("UserShowService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null
    let userUpdateService = null


    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
        userUpdateService = new UserUpdateService(userRepositoryInMemory)
    })


    it("should show all registered users filtered by parameters", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }
        
        let userCreated = await userCreateService.execute(user)
        
        const userCreatedUpdate = {
            ...userCreated,
            name: "New name",
            email: "newname@test.com",
            oldPassword: user.password,
            newPassword: "1234",
            confirmPassword: "1234",
            role: "Usuário"
        }

        delete userCreatedUpdate.password
        
        await expect(await userUpdateService.execute(userCreatedUpdate)).toHaveProperty("email", "id", "name", "password", "role")
    })

})