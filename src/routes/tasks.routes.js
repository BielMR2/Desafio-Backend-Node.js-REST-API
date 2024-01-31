const { Router } = require("express")

const TasksController = require("../controllers/TasksController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tasksRoutes = Router()
const tasksController = new TasksController()


tasksRoutes.use(ensureAuthenticated)

tasksRoutes.post("/", tasksController.create)
tasksRoutes.delete("/:id", tasksController.delete)



module.exports = tasksRoutes