const UserCreateService = require("./UserCreateService")
const UserShowService = require("./UserShowService")
const UserRepositoryInMemory = require("../../repositories/UserRepositoryInMemory")
const AppError = require("../../utils/AppError")

describe("UserShowService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null
    let userShowService = null


    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
        userShowService = new UserShowService(userRepositoryInMemory)
    })


    it("should show all registered users filtered by parameters", async () => {
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
            user        
        ]
        
        await expect(await userShowService.execute({ email: user.email })).toEqual(expectation)
    })

})