import mongoose from "mongoose"
import { DB_Name } from "../constant.js"



const connectionDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`Mongo DB is successfully connected!!! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongo DB connection is failed",error)
        console.log(`${process.env.MONGODB_URL}/${DB_Name}`)
        process.exit(1)
    }
}


export default connectionDB