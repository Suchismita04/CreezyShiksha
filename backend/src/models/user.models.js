import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            unique: true
        },
        dP: {
            type: String,
        },
        password: {
            type: String,
            required: true,
            unique: true

        },
        email: {
            type: String,
            required: true
        },
        refreshToken: {
            type: String
        },
        watchHistory: [
            {

                type: mongoose.Schema.Types.ObjectId,
                ref: "Video"
            }

        ]
    },
    {
        timestamps: true
    }

)


//encripting password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.isPasswordCorrect= async function(password){
   try{
    return await bcrypt.compare(this.password,password)
   } 
    catch (error) {
        throw error; // Handle the error in the calling code
    }
}


//generate access and refresh tokens by jwt
userSchema.methods.generateAccessToken=function (){
    return Jwt.sign({
        _id:this._id,
        fullName:this.fullName,
        email:this.email,
    }),
    process.env.ACCESS_TOKEN_SCECRET,{
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
}


userSchema.methods.generateRefreshToken=function (){
    return Jwt.sign({
        _id:this._id,
    }),
    process.env.REFRESH_TOKEN_SCECRET,{
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
}






export const User = mongoose.model("User", userSchema)