require("express-async-errors")

const cors = require("cors")
const database = require("./database/create_db.js")
const AppError = require("./utils/AppError")

const express = require("express")
const routes = require("./routes")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true
}))

app.use(routes)

database()

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => console.log(`Server is running on port ${PORT}`))