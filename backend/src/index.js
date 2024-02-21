import dotenv from "dotenv";
import connectionDB from "./db/connection.js";
import { app } from "./app.js";

dotenv.config({
    path: '/.env'
})


connectionDB().then(() => {
    app.listen(process.env.PORT || 3000)
    console.log(`Server is running on port ${process.env.PORT}`)
}).catch((err) => {
    console.log("Mongo Connection is failed", err)
})