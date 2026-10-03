import mongoose from "mongoose";
import { product } from "./product.models";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "id",
        require: true,
    },
    quantity: {
        type: Number,
        require: true
    }
})

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: customer
    },
    orderPrices: {
        type: number,
        require: true,
    },
    orderItems: {
        type: [orderItemSchema]
    }
}, { timestamps: true })

export const order = mongoose.model("order", orderSchema)