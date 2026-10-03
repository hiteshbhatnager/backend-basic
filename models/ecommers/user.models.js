import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        require: true,
        lowerCase: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowerCase: true,
    },
    password: {
        type: String,
        require: true,
    }
}, { timestamps: true })

export const user = mongoose.model("user", userSchema);