const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../../repositories/UserRepositoryInMemory")
const AppError = require("../../utils/AppError")

describe("UserCreateService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null


    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
    })

    it("should give role error", async () => {
        const user = {
            name: "User Test",
            password: "123",
        }

        await expect(userCreateService.execute(user)).rejects.toEqual(new AppError("Dados faltando!"))
    })

    it("should give role error", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "outher"
        }

        await expect(userCreateService.execute(user)).rejects.toEqual(new AppError("Cargo não autorizado.", 401))
    })

    it("It should give an email error in use", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        const user2 = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        await userCreateService.execute(user)
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso.", 401))
    })

    it("should give password error", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123456",
            role: "Administrador"
        }

        await expect(userCreateService.execute(user)).rejects.toEqual(new AppError("As senhas não coincidem. Por favor, verifique e tente novamente.", 401))
    })
    

    it("user should be create", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        const userCreated = await userCreateService.execute(user)
        expect(userCreated).toHaveProperty("id")
    })

})