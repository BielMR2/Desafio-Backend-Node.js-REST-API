const { Router } = require("express")

const sessionsRouter = require("./sessions.routes")
const usersRouter = require("./users.routes")
const tasksRouter = require("./tasks.routes")


const routes = Router()

routes.use("/sessions", sessionsRouter)

routes.use("/users", usersRouter)
routes.use("/tasks", tasksRouter)

module.exports = routes