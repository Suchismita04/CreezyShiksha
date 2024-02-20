import mongoose, { Schema } from "mongoose";


const bookInfoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    publicationYear: {
        type: Number,
        min: 1000,
        max: new Date().getFullYear(),
    },
    ISBN: {
        type: String,
        unique: true,
        trim: true,
    },
},
    { timestamps: true })



export const BookInfo = mongoose.Schema("BookInfo", bookInfoSchema)