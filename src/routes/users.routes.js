const { Router } = require("express")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const UsersController = require("../controllers/UsersController")


const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.get("/index", usersController.index)
usersRoutes.get("/", usersController.show)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.delete("/:id", ensureAuthenticated, usersController.delete)

module.exports = usersRoutes