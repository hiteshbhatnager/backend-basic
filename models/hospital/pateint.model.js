import mongoose, { mongo } from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
    },
    diagnosed: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    bloodgroup: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        enum: ["female", "male", "others"],
        require: true,
    },
    admitedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital",
        require: true,
    },
    contactNumber: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        lowercase: true,
    }
}, { timestamps: true })

export const patient = mongoose.model("patient", patientSchema)