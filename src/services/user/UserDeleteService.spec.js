const UserCreateService = require("./UserCreateService")
const UserDeleteService = require("./UserDeleteService")
const UserRepositoryInMemory = require("../../repositories/UserRepositoryInMemory")
const AppError = require("../../utils/AppError")

describe("UserDeleteService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null
    let userDeleService = null


    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
        userDeleService = new UserDeleteService(userRepositoryInMemory)
    })

    it("It should give user not found error", async () => {
        const user = {
            id: "1",
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        await expect(userDeleService.execute(user)).rejects.toEqual(new AppError("Usuário não encontrado!", 401))
    })

    it("the user must be deleted", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        const userCreated = await userCreateService.execute(user)

        await expect(await userDeleService.execute(userCreated)).toBe(userCreated)
    })

})