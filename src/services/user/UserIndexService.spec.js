const UserCreateService = require("./UserCreateService")
const UserIndexService = require("./UserIndexService")
const UserRepositoryInMemory = require("../../repositories/UserRepositoryInMemory")
const AppError = require("../../utils/AppError")

describe("UserIndexService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null
    let userIndexService = null


    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
        userIndexService = new UserIndexService(userRepositoryInMemory)
    })


    it("should show all registered users", async () => {
        let user = {
            name: "User Test",
            email: "user@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        let user2 = {
            name: "User Test",
            email: "user2@test.com",
            password: "123",
            confirmPassword: "123",
            role: "Administrador"
        }

        

        user = await userCreateService.execute(user)
        user2 = await userCreateService.execute(user2)

        const expectation = [
            user, 
            user2
        ]

        await expect(await userIndexService.execute()).toStrictEqual(expectation)
    })

})