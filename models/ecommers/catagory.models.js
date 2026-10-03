import mongoose from 'mongoose';

const catagorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
}, { timestamps: true });

export const catagory = mongoose.model("catagory", catagorySchema)