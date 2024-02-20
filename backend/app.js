import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routers/user.router.js"
import { error } from "console"
const app = express()                                     

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.static("public"))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use(cookieParser())

//routes
app.use("/api/v1/users",userRouter) // hello

export {app}