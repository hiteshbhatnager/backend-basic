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

    }
}, { timestamps: true })