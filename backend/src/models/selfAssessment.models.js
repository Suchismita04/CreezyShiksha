import mongoose, { Schema } from "mongoose";

const selfAssessmentSchema = new Schema({


    assessmentDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    selfAssessedMarks: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
    },
    comments: {
        type: String,
        trim: true,
    },
}, { timestamps: true })

export const SelfAssessment = mongoose.Schema("SelfAssessment", selfAssessmentSchema)