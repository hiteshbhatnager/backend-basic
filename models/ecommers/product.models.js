import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    discription: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    catagory: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "catagory"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true });

export const product = mongoose.model("product", productSchema)