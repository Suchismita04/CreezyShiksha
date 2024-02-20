import mongoose from "mongoose";


const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },

    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true

    }

},
    { timestamps: true })


videoSchema.plugin(mongooseAggregatePaginate)



export const Video = mongoose.Schema("Video", videoSchema)