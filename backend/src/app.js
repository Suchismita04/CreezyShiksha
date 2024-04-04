import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./router/user.router.js"
import axios from 'axios'

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
app.use("/api/v1/users",userRouter)
//  app.get('/books', async (req, res) => {
//     try {
//       const { data } = await axios.get('');
//       res.json(data);
//     } catch (error) {
//       console.error('Error fetching data from Google Books API:', error.message);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });



export {app}