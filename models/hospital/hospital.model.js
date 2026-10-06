import mongoose, { mongo } from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    pincode: {
        type: String,
        require: true,
    },
}, { timestamps: true });

export const hospital = mongoose.model("hospital", hospitalSchema)