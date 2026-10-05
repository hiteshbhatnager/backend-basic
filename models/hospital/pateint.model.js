import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
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