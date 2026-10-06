import mongoose, { model, models, Schema } from "mongoose";

const medicalRecordSchema = new Schema({
    patientName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patient",
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    desease: {
        type: String,
        require: true,
    },
}, { timestamps: true });

export const medicalRecord = model("medicalRecord", medicalRecordSchema)